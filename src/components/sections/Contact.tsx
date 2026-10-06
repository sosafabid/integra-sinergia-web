import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig, whatsappLink } from "@/config/site";
import { ContactForm } from "./ContactForm";

/** Página de contacto: mensaje y canales directos a la izquierda, formulario a la derecha. */
export function Contact({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { contact, whatsapp } = dict;
  const channel = "group flex items-center gap-4 rounded-xl border border-line p-5 transition-colors hover:border-petrol";

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-surface pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="t-label text-green">{dict.pages.contact.title}</p>
          <h1 id="contacto-title" className="t-h1 mt-4 max-w-[16ch] text-ink">
            {contact.title}
          </h1>
          <p className="t-lead mt-6 max-w-[38ch] text-ink-2">{contact.lead}</p>

          <ul className="mt-10 grid gap-3">
            <li>
              <a href={whatsappLink(whatsapp.defaultMessage)} target="_blank" rel="noopener noreferrer" className={`${channel} bg-white`}>
                <WhatsAppIcon className="size-5 shrink-0 text-green" aria-hidden="true" />
                <span>
                  <span className="t-small block text-ink-3">{contact.direct.whatsapp}</span>
                  <span className="font-semibold text-ink">{siteConfig.phones[0].display}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className={`${channel} bg-white`}>
                <MailIcon className="size-5 shrink-0 text-green" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="t-small block text-ink-3">{contact.direct.email}</span>
                  <span className="block break-all font-semibold text-ink">{siteConfig.email}</span>
                </span>
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <ContactForm lang={lang} form={contact.form} solutions={dict.solutions} whatsappMessage={whatsapp.defaultMessage} />
        </Reveal>
      </div>
    </section>
  );
}
