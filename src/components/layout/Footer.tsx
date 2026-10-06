import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, whatsappLink } from "@/config/site";
import { contactRoute, route } from "@/lib/routes";

export function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { footer, nav, whatsapp, pages, contact } = dict;
  const year = new Date().getFullYear();
  const links = [...nav.links, { key: "method" as const, label: pages.method.title }];

  return (
    <footer className="border-t border-line bg-paper-2/50">
      <div className="wrap grid gap-14 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Link href={route(lang, "home")} aria-label={dict.common.homeLabel}>
            <Logo variant="full" className="h-14 w-auto" />
          </Link>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.key}>
                <Link href={route(lang, l.key)} className="link-line text-ink-2 hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={contactRoute(lang)} className="link-line text-ink-2 hover:text-ink">
                {nav.cta}
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="space-y-3 lg:col-span-4">
          <li>
            <a href={whatsappLink(whatsapp.defaultMessage)} target="_blank" rel="noopener noreferrer" className="link-line text-ink-2 hover:text-ink">
              {contact.direct.whatsapp}
            </a>
          </li>
          <li>
            <a href={`mailto:${siteConfig.email}`} className="link-line break-all text-ink-2 hover:text-ink">
              {siteConfig.email}
            </a>
          </li>
          <li className="text-ink-3">{contact.direct.locationValue}</li>
        </ul>
      </div>
      <div className="wrap">
        <div className="flex flex-col gap-2 border-t border-line py-6 text-[0.8rem] text-ink-3 sm:flex-row sm:justify-between">
        <p>
          © {year} {siteConfig.name}. {footer.rights}
        </p>
        <p className="font-serif text-[0.95rem] italic text-sand-deep">{footer.line}</p>
        </div>
      </div>
    </footer>
  );
}
