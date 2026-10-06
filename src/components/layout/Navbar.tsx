"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/Logo";
import { ArrowIcon } from "@/components/ui/icons";
import { contactRoute, route } from "@/lib/routes";

type Props = { lang: Locale; nav: Dictionary["nav"]; common: Dictionary["common"] };

export function Navbar({ lang, nav, common }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const otherLang: Locale = lang === "es" ? "en" : "es";
  const pathname = usePathname() ?? `/${lang}`;
  // Cambiar de idioma conserva la página actual: /es/nosotros ↔ /en/nosotros
  const otherHref = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${otherLang}`);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled || open ? "border-b border-line bg-paper/92 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Principal" className="wrap flex h-[4.5rem] items-center justify-between gap-8 lg:h-20">
        <Link href={route(lang, "home")} aria-label={common.homeLabel} className="relative z-10 -ml-1 shrink-0 p-1">
          <Logo priority className="h-9 w-auto lg:h-10" />
        </Link>

        <div className="hidden items-center gap-12 lg:flex">
          <ul className="flex items-center gap-9">
            {nav.links.map((l) => {
              const href = route(lang, l.key);
              const active = isActive(href);
              return (
                <li key={l.key}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`t-caption transition-colors hover:text-ink ${active ? "text-ink" : "text-ink-2"}`}
                  >
                    <span className={active ? "border-b border-ink pb-1" : ""}>{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <span aria-hidden="true" className="h-4 w-px bg-line-2" />
          <a
            href={otherHref}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={common.switchTo}
            title={common.switchTo}
            className="t-caption text-ink-3 transition-colors hover:text-ink"
          >
            {common.switchToShort}
          </a>
          <Link
            href={contactRoute(lang)}
            className="group t-caption inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-paper transition-colors hover:bg-petrol"
          >
            {nav.cta}
            <ArrowIcon className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="t-caption relative z-10 -mr-2 flex min-h-11 items-center gap-3 px-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? common.menuClose : common.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-2.5 w-6" aria-hidden="true">
            <span className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-500 ${open ? "top-1 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-500 ${open ? "top-1 -rotate-45" : "top-2.5"}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] bg-paper transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="wrap flex h-full flex-col justify-between overflow-y-auto pb-10 pt-10">
          <ul className="space-y-1">
            {[{ key: "home" as const, label: common.homeShort }, ...nav.links].map((l) => (
              <li key={l.key}>
                <Link href={route(lang, l.key)} onClick={close} className="block py-2 font-serif text-[2.75rem] leading-tight text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-line pt-6">
            <Link
              href={contactRoute(lang)}
              onClick={close}
              className="group t-caption inline-flex min-h-12 items-center gap-2.5 rounded-full bg-ink px-6 text-paper"
            >
              {nav.cta}
              <ArrowIcon className="size-3.5" aria-hidden="true" />
            </Link>
            <a href={otherHref} hrefLang={otherLang} lang={otherLang} className="t-caption px-2 py-3 text-ink-3">
              {common.switchTo}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
