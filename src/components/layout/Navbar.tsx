"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Props = {
  lang: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
};

export function Navbar({ lang, nav, common }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const otherLang: Locale = lang === "es" ? "en" : "es";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open
          ? "bg-sand-50/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="container-site flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <a href={`/${lang}`} aria-label={common.homeLabel} className="relative z-10 -ml-1 shrink-0 p-1">
          <Logo priority className="h-10 w-auto lg:h-12" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[0.9rem] font-medium text-ink-soft transition-colors hover:text-petrol-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`/${otherLang}`}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={common.switchTo}
            title={common.switchTo}
            className="eyebrow rounded-full px-3 py-2 text-ink-muted transition-colors hover:text-petrol-900"
          >
            {common.switchToShort}
          </a>
          <ButtonLink href="#contacto" className="min-h-11 px-5 text-[0.88rem]">
            {nav.cta}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="relative z-10 -mr-2 flex size-11 items-center justify-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? nav.close : nav.open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-[1.5px] w-6 bg-petrol-900 transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-6 bg-petrol-900 transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menú móvil: pantalla completa, enlaces grandes y CTA visible */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] bg-sand-50 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-site flex h-full flex-col justify-between overflow-y-auto pb-8 pt-6">
          <ul className="border-t border-line">
            {nav.links.map((l, i) => (
              <li key={l.href} className="border-b border-line">
                <a
                  href={l.href}
                  onClick={close}
                  className="flex items-baseline gap-4 py-4 text-2xl font-semibold tracking-tight text-petrol-900"
                >
                  <span className="eyebrow text-sand-700">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4">
            <ButtonLink href="#contacto" onClick={close} className="w-full">
              {nav.cta}
            </ButtonLink>
            <a
              href={`/${otherLang}`}
              hrefLang={otherLang}
              lang={otherLang}
              className="eyebrow self-center py-2 text-ink-muted"
            >
              {common.switchTo}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
