import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, whatsappLink } from "@/config/site";
import { contactRoute, route, solutionRoute } from "@/lib/routes";

export function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { footer, nav, whatsapp, contact, pages } = dict;
  const year = new Date().getFullYear();
  const link = "text-ink-2 transition-colors hover:text-ink";

  return (
    <footer className="border-t border-line bg-white">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <Link href={route(lang, "home")} aria-label={dict.common.homeLabel} className="inline-block">
            <Logo variant="full" className="h-14 w-auto" />
          </Link>
        </div>

        <nav aria-label={pages.solutions.title} className="lg:col-span-3">
          <p className="t-label text-ink-3">{pages.solutions.title}</p>
          <ul className="mt-5 space-y-3 t-small">
            {dict.solutions.map((s) => (
              <li key={s.id}>
                <Link href={solutionRoute(lang, s.id)} className={link}>
                  {s.fullName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Integra" className="lg:col-span-2">
          <p className="t-label text-ink-3">Integra</p>
          <ul className="mt-5 space-y-3 t-small">
            {nav.links.map((l) => (
              <li key={l.key}>
                <Link href={route(lang, l.key)} className={link}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={contactRoute(lang)} className={link}>
                {pages.contact.title}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="t-label text-ink-3">{pages.contact.title}</p>
          <ul className="mt-5 space-y-3 t-small">
            <li>
              <a href={whatsappLink(whatsapp.defaultMessage)} target="_blank" rel="noopener noreferrer" className={link}>
                {contact.direct.whatsapp} · {siteConfig.phones[0].display}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className={`${link} break-all`}>
                {siteConfig.email}
              </a>
            </li>
            <li className="text-ink-3">Costa Rica</li>
          </ul>
        </div>
      </div>
      <div className="wrap">
        <div className="flex flex-col gap-2 border-t border-line py-6 text-[0.8125rem] text-ink-3 sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {footer.rights}
          </p>
          <p>{footer.line}</p>
        </div>
      </div>
    </footer>
  );
}
