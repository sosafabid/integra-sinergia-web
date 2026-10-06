import type { Dictionary } from "@/content/types";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, whatsappLink } from "@/config/site";

export function Footer({ dict }: { dict: Dictionary }) {
  const { footer, solutions, contact, whatsapp } = dict;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-sand-100">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 lg:py-20">
        <div className="md:col-span-12 lg:col-span-4">
          <Logo variant="full" className="h-16 w-auto" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">{footer.description}</p>
        </div>

        <nav aria-label={footer.solutionsTitle} className="md:col-span-5 lg:col-span-3">
          <h2 className="eyebrow text-sand-700">{footer.solutionsTitle}</h2>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            {solutions.areas.map((a) => (
              <li key={a.id}>
                <a href="#soluciones" className="text-ink-soft transition-colors hover:text-petrol-900">
                  {a.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-10 sm:grid-cols-2 md:col-span-7 lg:col-span-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <nav aria-label={footer.companyTitle}>
            <h2 className="eyebrow text-sand-700">{footer.companyTitle}</h2>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {footer.companyLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink-soft transition-colors hover:text-petrol-900">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="eyebrow text-sand-700">{footer.contactTitle}</h2>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li>
                <a
                  href={whatsappLink(whatsapp.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft transition-colors hover:text-petrol-900"
                >
                  {contact.direct.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="break-words text-ink-soft transition-colors hover:text-petrol-900">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="text-ink-soft transition-colors hover:text-petrol-900">
                    {p.display}
                  </a>
                </li>
              ))}
              <li className="text-ink-muted">{contact.direct.locationValue}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-6 text-[0.8rem] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {footer.rights}
          </p>
          <p>{footer.builtBy}</p>
        </div>
      </div>
    </footer>
  );
}
