import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, whatsappLink } from "@/config/site";
import { ContactForm } from "./ContactForm";

/** Canales directos + formulario. El encabezado lo pone la página. */
export function Contact({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { contact, solutions, whatsapp } = dict;
  const row = "border-b border-line py-5";

  return (
    <section id="contacto" aria-label={contact.kicker} className="pb-28 pt-4 lg:pb-40">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <h2 className="t-caption text-ink-3">{contact.direct.title}</h2>
          <ul className="mt-4 border-t border-line">
            <li className={row}>
              <p className="t-caption text-ink-3">{contact.direct.whatsapp}</p>
              <a href={whatsappLink(whatsapp.defaultMessage)} target="_blank" rel="noopener noreferrer" className="link-line mt-1 inline-block text-lg text-ink">
                {whatsapp.label}
              </a>
            </li>
            <li className={row}>
              <p className="t-caption text-ink-3">{contact.direct.email}</p>
              <a href={`mailto:${siteConfig.email}`} className="link-line mt-1 inline-block break-all text-lg text-ink">
                {siteConfig.email}
              </a>
            </li>
            <li className={row}>
              <p className="t-caption text-ink-3">{contact.direct.phone}</p>
              <p className="mt-1 flex flex-wrap gap-x-5">
                {siteConfig.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="link-line text-lg text-ink">
                    {p.display}
                  </a>
                ))}
              </p>
            </li>
            <li className={row}>
              <p className="t-caption text-ink-3">{contact.direct.location}</p>
              <p className="mt-1 text-lg text-ink">{contact.direct.locationValue}</p>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
          <ContactForm lang={lang} form={contact.form} areas={solutions.areas} whatsappMessage={whatsapp.defaultMessage} />
        </Reveal>
      </div>
    </section>
  );
}
