"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { siteConfig, whatsappLink } from "@/config/site";
import { isInterestId, UNSURE, type InterestId } from "@/lib/contact-events";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/icons";

type Props = {
  lang: Locale;
  form: Dictionary["contact"]["form"];
  areas: Dictionary["solutions"]["areas"];
  whatsappMessage: string;
};

type Status = "idle" | "sending" | "success" | "error" | "not-configured";
type Field = "name" | "email" | "message";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Formulario de contacto conectado a Formspree.
 * Requiere NEXT_PUBLIC_FORMSPREE_ID (ver .env.example). Sin ese valor, el formulario
 * no finge un envío: muestra un aviso y ofrece WhatsApp/correo como alternativa.
 */
export function ContactForm({ lang, form, areas, whatsappMessage }: Props) {
  const uid = useId();
  const [interests, setInterests] = useState<InterestId[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const options: { id: InterestId; label: string }[] = [
    ...areas.map((a) => ({ id: a.id as InterestId, label: a.name })),
    { id: UNSURE, label: form.unsure },
  ];

  // Preselección desde los CTA del sitio: /contacto?area=web
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("area");
    if (!isInterestId(param)) return;
    const timer = window.setTimeout(() => setInterests([param]), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const toggle = (id: InterestId) =>
    setInterests((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Partial<Record<Field, string>> = {};
    if (!name) next.name = form.missing;
    if (!email) next.email = form.missing;
    else if (!EMAIL_RE.test(email)) next.email = form.invalidEmail;
    if (!message) next.message = form.missing;
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (!siteConfig.formspreeId) {
      setStatus("not-configured");
      statusRef.current?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: String(data.get("company") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          interests: options.filter((o) => interests.includes(o.id)).map((o) => o.label).join(", ") || "—",
          message,
          language: lang,
          _subject: `Nuevo contacto web — ${name}`,
          _replyto: email,
          _gotcha: String(data.get("_gotcha") ?? ""),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      formRef.current?.reset();
      setInterests([]);
    } catch {
      setStatus("error");
    }
    statusRef.current?.focus();
  }

  const inputBase =
    "mt-1 block w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-[1.0625rem] text-ink placeholder:text-ink-3/70 transition-[border-color] duration-300 focus:border-ink focus:outline-none";
  const fieldClass = (f?: Field) => `${inputBase} ${f && errors[f] ? "border-red-700/70" : "border-line-2"}`;
  const labelClass = "t-caption text-ink-2";
  const hint = (t: string) => <span className="ml-1.5 font-normal text-ink-3">({t})</span>;

  if (status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="border-t border-ink pt-10">
        <span className="flex size-12 items-center justify-center rounded-full bg-green text-paper">
          <CheckIcon className="size-6" aria-hidden="true" />
        </span>
        <p className="t-h2 mt-6 text-ink">{form.successTitle}</p>
        <p className="mt-3 leading-relaxed text-ink-2">{form.successText}</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      className="lg:pt-2"
    >
      <fieldset>
        <legend className={labelClass}>{form.interest}</legend>
        <p className="mt-2 text-[0.85rem] text-ink-3">{form.interestHint}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {options.map((o) => {
            const checked = interests.includes(o.id);
            const isUnsure = o.id === UNSURE;
            return (
              <label
                key={o.id}
                className={`relative inline-flex cursor-pointer select-none items-center gap-2 rounded-full border px-4 py-2.5 text-[0.88rem] font-medium transition-colors duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-green has-[:focus-visible]:ring-offset-2 ${
                  checked
                    ? "border-ink bg-ink text-paper"
                    : isUnsure
                      ? "border-dashed border-sand text-ink hover:border-ink"
                      : "border-line-2 text-ink hover:border-ink"
                }`}
              >
                <input
                  type="checkbox"
                  name="interests"
                  value={o.id}
                  checked={checked}
                  onChange={() => toggle(o.id)}
                  className="sr-only"
                />
                {checked && <CheckIcon className="size-3.5" aria-hidden="true" />}
                {o.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={labelClass}>
            {form.name}
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
            className={fieldClass("name")}
          />
          {errors.name && (
            <p id={`${uid}-name-err`} className="mt-1.5 text-[0.82rem] text-red-800">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={labelClass}>
            {form.email}
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
            className={fieldClass("email")}
          />
          {errors.email && (
            <p id={`${uid}-email-err`} className="mt-1.5 text-[0.82rem] text-red-800">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${uid}-company`} className={labelClass}>
            {form.company}
            {hint(form.optional)}
          </label>
          <input id={`${uid}-company`} name="company" type="text" autoComplete="organization" className={fieldClass()} />
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={labelClass}>
            {form.phone}
            {hint(form.optional)}
          </label>
          <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass()} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-message`} className={labelClass}>
            {form.message}
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={5}
            required
            placeholder={form.messagePlaceholder}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `${uid}-message-err` : undefined}
            className={`${fieldClass("message")} resize-y`}
          />
          {errors.message && (
            <p id={`${uid}-message-err`} className="mt-1.5 text-[0.82rem] text-red-800">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot anti-spam (Formspree) */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No completar
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === "error" && (
          <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-[0.9rem] text-red-900">{form.error}</p>
        )}
        {status === "not-configured" && (
          <div className="mt-6 rounded-xl bg-paper-2 px-4 py-4 text-[0.9rem] text-ink">
            <p>{form.notConfigured}</p>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-medium text-green underline underline-offset-4"
            >
              <WhatsAppIcon className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.8rem] leading-relaxed text-ink-3">{form.privacy}</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-ink px-7 text-[0.95rem] font-medium text-paper transition-colors duration-300 hover:bg-petrol disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? form.sending : form.submit}
          <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
