"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Dictionary, Solution } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { siteConfig, whatsappLink } from "@/config/site";
import { isInterestId, UNSURE, type InterestId } from "@/lib/contact-events";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/icons";

type Props = {
  lang: Locale;
  form: Dictionary["contact"]["form"];
  solutions: Solution[];
  whatsappMessage: string;
};

type Status = "idle" | "sending" | "success" | "error" | "not-configured";
type Field = "name" | "email" | "message";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Formulario de contacto conectado a Formspree (NEXT_PUBLIC_FORMSPREE_ID).
 * Sin ese valor no simula el envío: muestra un aviso y ofrece WhatsApp.
 */
export function ContactForm({ lang, form, solutions, whatsappMessage }: Props) {
  const uid = useId();
  const [interests, setInterests] = useState<InterestId[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const options: { id: InterestId; label: string }[] = [
    ...solutions.map((s) => ({ id: s.id as InterestId, label: s.name })),
    { id: UNSURE, label: form.unsure },
  ];

  // Preselección desde los botones del sitio: /contacto?area=web
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
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const message = get("message");

    const next: Partial<Record<Field, string>> = {};
    if (!name) next.name = form.missing;
    if (!email) next.email = form.missing;
    else if (!EMAIL_RE.test(email)) next.email = form.invalidEmail;
    if (!message) next.message = form.missing;
    setErrors(next);
    if (Object.keys(next).length > 0) {
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
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
          company: get("company"),
          email,
          whatsapp: get("phone"),
          needs: options.filter((o) => interests.includes(o.id)).map((o) => o.label).join(", ") || "—",
          message,
          language: lang,
          _subject: `Nuevo contacto web — ${name}`,
          _replyto: email,
          _gotcha: get("_gotcha"),
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

  const input =
    "mt-2 block w-full rounded-lg border bg-white px-4 py-3 text-base text-ink placeholder:text-ink-3/70 transition-colors duration-200 focus:border-petrol focus:outline-none";
  const fieldClass = (f?: Field) => `${input} ${f && errors[f] ? "border-red-700/70" : "border-line-2"}`;
  const label = "text-[0.9375rem] font-medium text-ink";
  const optional = <span className="ml-1 font-normal text-ink-3">({form.optional})</span>;
  const err = (f: Field) =>
    errors[f] ? (
      <p id={`${uid}-${f}-err`} className="mt-1.5 text-[0.85rem] text-red-800">
        {errors[f]}
      </p>
    ) : null;

  if (status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-xl border border-line bg-surface p-8 sm:p-10">
        <span className="flex size-11 items-center justify-center rounded-full bg-green text-white">
          <CheckIcon className="size-5" aria-hidden="true" />
        </span>
        <p className="t-h2 mt-6 text-ink">{form.successTitle}</p>
        <p className="mt-3 text-ink-2">{form.successText}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="rounded-xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={label}>
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
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-company`} className={label}>
            {form.company}
            {optional}
          </label>
          <input id={`${uid}-company`} name="company" type="text" autoComplete="organization" className={fieldClass()} />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={label}>
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
          {err("email")}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={label}>
            {form.phone}
            {optional}
          </label>
          <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass()} />
        </div>
      </div>

      <fieldset className="mt-7">
        <legend className={label}>{form.interest}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {options.map((o) => {
            const checked = interests.includes(o.id);
            const isUnsure = o.id === UNSURE;
            return (
              <label
                key={o.id}
                className={`relative inline-flex min-h-10 cursor-pointer select-none items-center gap-2 rounded-full border px-4 text-[0.9rem] font-medium transition-colors duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-green has-[:focus-visible]:ring-offset-2 ${
                  checked
                    ? "border-petrol bg-petrol text-white"
                    : isUnsure
                      ? "border-dashed border-sand text-ink hover:border-petrol"
                      : "border-line-2 text-ink hover:border-petrol"
                }`}
              >
                <input type="checkbox" name="interests" value={o.id} checked={checked} onChange={() => toggle(o.id)} className="sr-only" />
                {checked && <CheckIcon className="size-3.5" aria-hidden="true" />}
                {o.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7">
        <label htmlFor={`${uid}-message`} className={label}>
          {form.message}
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          required
          placeholder={form.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${uid}-message-err` : undefined}
          className={`${fieldClass("message")} resize-y`}
        />
        {err("message")}
      </div>

      {/* Honeypot anti-spam (Formspree) */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No completar
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === "error" && <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-[0.9rem] text-red-900">{form.error}</p>}
        {status === "not-configured" && (
          <div className="mt-6 rounded-lg bg-surface px-4 py-4 text-[0.9rem] text-ink">
            <p>{form.notConfigured}</p>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-semibold text-green underline underline-offset-4"
            >
              <WhatsAppIcon className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-small text-ink-3">{form.privacy}</p>
        <button type="submit" disabled={status === "sending"} className="btn btn-primary group disabled:cursor-wait disabled:opacity-70">
          {status === "sending" ? form.sending : form.submit}
          <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
