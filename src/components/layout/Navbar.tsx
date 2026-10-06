"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/Logo";
import { ArrowIcon } from "@/components/ui/icons";
import { contactRoute, localize, parsePathname, route } from "@/lib/routes";

type Props = { lang: Locale; nav: Dictionary["nav"]; common: Dictionary["common"] };

export function Navbar({ lang, nav, common }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const otherLang: Locale = lang === "es" ? "en" : "es";
  // Funciona igual con la ruta interna (servidor) y la pública (navegador)
  const { internal } = parsePathname(usePathname() ?? "/");
  const otherHref = localize(otherLang, internal);
  const current = localize(lang, internal);
  const isActive = (href: string) => current === href || current.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-line bg-white/95 backdrop-blur-md" : "border-transparent bg-white/0"
      }`}
    >
      <nav aria-label="Principal" className="wrap flex h-[4.5rem] items-center justify-between gap-8 lg:h-20">
        <Link href={route(lang, "home")} aria-label={common.homeLabel} className="relative z-10 -ml-1 shrink-0 p-1">
          <Logo priority className="h-9 w-auto lg:h-10" />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8">
            {nav.links.map((l) => {
              const href = route(lang, l.key);
              const active = isActive(href);
              return (
                <li key={l.key}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[0.9375rem] font-medium transition-colors hover:text-ink ${active ? "text-ink" : "text-ink-2"}`}
                  >
                    {l.label}
                    {active && <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px bg-green" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-5">
            <Link href={contactRoute(lang)} className="btn btn-primary group min-h-11 px-5">
              {nav.cta}
              <ArrowIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href={otherHref}
              hrefLang={otherLang}
              lang={otherLang}
              aria-label={common.switchTo}
              title={common.switchTo}
              className="text-[0.8125rem] font-semibold tracking-wide text-ink-3 transition-colors hover:text-ink"
            >
              {common.switchToShort}
            </a>
          </div>
        </div>

        <button
          type="button"
          className="relative z-10 -mr-2 flex size-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? common.menuClose : common.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span className={`absolute left-0 h-[1.5px] w-6 bg-ink transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-[1.5px] w-6 bg-ink transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] bg-white transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="wrap flex h-full flex-col justify-between overflow-y-auto pb-10 pt-8">
          <ul className="border-t border-line">
            {[{ key: "home" as const, label: common.homeShort }, ...nav.links].map((l) => (
              <li key={l.key} className="border-b border-line">
                <Link href={route(lang, l.key)} onClick={close} className="flex items-center justify-between py-5 text-2xl font-semibold tracking-tight text-ink">
                  {l.label}
                  <ArrowIcon className="size-4 text-ink-3" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <Link href={contactRoute(lang)} onClick={close} className="btn btn-primary w-full">
              {nav.cta}
              <ArrowIcon className="size-4" aria-hidden="true" />
            </Link>
            <a href={otherHref} hrefLang={otherLang} lang={otherLang} className="self-center py-2 text-[0.9375rem] font-medium text-ink-3">
              {common.switchTo}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
