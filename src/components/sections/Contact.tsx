import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig, whatsappLink } from "@/config/site";
import { ContactForm } from "./ContactForm";

export function Contact({ dict, lang, withHeader = true }: { dict: Dictionary; lang: Locale; withHeader?: boolean }) {
  const { contact, solutions, whatsapp } = dict;
  const row = "flex items-start gap-4 py-4 border-b border-line";
  const icon = "mt-0.5 size-5 shrink-0 text-green-700";

  return (
    <section id="contacto" aria-labelledby={withHeader ? "contacto-title" : undefined} aria-label={withHeader ? undefined : contact.kicker} className="py-20 lg:py-28">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          {withHeader && <SectionHeader id="contacto-title" kicker={contact.kicker} title={contact.title} lead={contact.lead} />}
          <Reveal delay={150} className={withHeader ? "mt-12" : ""}>
            <h3 className="eyebrow text-sand-700">{contact.direct.title}</h3>
            <ul className="mt-4 border-t border-line">
              <li>
                <a href={whatsappLink(whatsapp.defaultMessage)} target="_blank" rel="noopener noreferrer" className={`${row} group`}>
                  <WhatsAppIcon className={icon} aria-hidden="true" />
                  <span>
                    <span className="block text-[0.8rem] text-ink-muted">{contact.direct.whatsapp}</span>
                    <span className="font-semibold text-petrol-900 group-hover:text-green-700">{whatsapp.floating}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className={`${row} group`}>
                  <MailIcon className={icon} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-[0.8rem] text-ink-muted">{contact.direct.email}</span>
                    <span className="break-all font-semibold text-petrol-900 group-hover:text-green-700">{siteConfig.email}</span>
                  </span>
                </a>
              </li>
              <li className={row}>
                <PhoneIcon className={icon} aria-hidden="true" />
                <span>
                  <span className="block text-[0.8rem] text-ink-muted">{contact.direct.phone}</span>
                  {siteConfig.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="mr-4 inline-block font-semibold text-petrol-900 hover:text-green-700">
                      {p.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className={row}>
                <PinIcon className={icon} aria-hidden="true" />
                <span>
                  <span className="block text-[0.8rem] text-ink-muted">{contact.direct.location}</span>
                  <span className="font-semibold text-petrol-900">{contact.direct.locationValue}</span>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
        <Reveal delay={100} className="lg:col-span-7">
          <ContactForm lang={lang} form={contact.form} areas={solutions.areas} whatsappMessage={whatsapp.defaultMessage} />
        </Reveal>
      </div>
    </section>
  );
}
