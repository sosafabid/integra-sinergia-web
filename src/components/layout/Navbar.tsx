"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/Logo";
import { ArrowIcon } from "@/components/ui/icons";
import { contactRoute, localize, parsePathname, route, solutionRoute, type SolutionId } from "@/lib/routes";

type Props = {
  lang: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
  solutions: { id: SolutionId; name: string }[];
};

export function Navbar({ lang, nav, common, solutions }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const otherLang: Locale = lang === "es" ? "en" : "es";
  // Funciona igual con la ruta interna (servidor) y la pública (navegador)
  const { internal } = parsePathname(usePathname() ?? "/");
  const otherHref = localize(otherLang, internal);
  const current = localize(lang, internal);
  const isActive = (href: string) => current === href || (href !== "/" && href !== "/en" && current.startsWith(`${href}/`));

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

  useEffect(() => {
    if (!subOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSubOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [subOpen]);

  const close = () => {
    setOpen(false);
    setSubOpen(false);
  };

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
              const linkCls = `relative py-2 text-[0.9375rem] font-medium transition-colors hover:text-ink ${active ? "text-ink" : "text-ink-2"}`;
              const underline = active && <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px bg-green" />;
              if (l.key !== "solutions") {
                return (
                  <li key={l.key}>
                    <Link href={href} aria-current={active ? "page" : undefined} className={linkCls}>
                      {l.label}
                      {underline}
                    </Link>
                  </li>
                );
              }
              // Soluciones: enlace + submenú pequeño (no mega-menú)
              return (
                <li key={l.key} className="relative" onMouseEnter={() => setSubOpen(true)} onMouseLeave={() => setSubOpen(false)}>
                  <span className="flex items-center gap-1">
                    <Link href={href} aria-current={active ? "page" : undefined} className={linkCls} onClick={close}>
                      {l.label}
                      {underline}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={subOpen}
                      aria-controls="submenu-soluciones"
                      aria-label={l.label}
                      onClick={() => setSubOpen((v) => !v)}
                      className="flex size-7 items-center justify-center rounded-full text-ink-3 hover:text-ink"
                    >
                      <svg viewBox="0 0 12 12" className={`size-3 transition-transform duration-300 ${subOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                        <path d="M2.5 4.5 6 8l3.5-3.5" />
                      </svg>
                    </button>
                  </span>
                  <div
                    id="submenu-soluciones"
                    className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-200 ${
                      subOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="rounded-xl border border-line bg-white p-2 shadow-[0_20px_40px_-20px_rgb(7_42_49/0.25)]">
                      {solutions.map((s) => {
                        const sHref = solutionRoute(lang, s.id);
                        return (
                          <li key={s.id}>
                            <Link
                              href={sHref}
                              onClick={close}
                              className={`block rounded-lg px-4 py-2.5 text-[0.9375rem] font-medium transition-colors hover:bg-surface ${current === sHref ? "text-petrol" : "text-ink"}`}
                            >
                              {s.name}
                            </Link>
                          </li>
                        );
                      })}
                      <li className="mt-1 border-t border-line pt-1">
                        <Link href={href} onClick={close} className="block rounded-lg px-4 py-2.5 text-[0.875rem] font-semibold text-petrol hover:bg-surface">
                          {common.allSolutions} →
                        </Link>
                      </li>
                    </ul>
                  </div>
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
            {nav.links.map((l) => (
              <li key={l.key} className="border-b border-line">
                <Link href={route(lang, l.key)} onClick={close} className="flex items-center justify-between py-4 text-2xl font-semibold tracking-tight text-ink">
                  {l.label}
                  <ArrowIcon className="size-4 text-ink-3" aria-hidden="true" />
                </Link>
                {l.key === "solutions" && (
                  <ul className="-mt-1 grid grid-cols-2 gap-x-4 pb-4">
                    {solutions.map((s) => (
                      <li key={s.id}>
                        <Link href={solutionRoute(lang, s.id)} onClick={close} className="block py-1.5 text-[0.9375rem] text-ink-2">
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
