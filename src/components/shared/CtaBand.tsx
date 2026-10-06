import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { contactRoute } from "@/lib/routes";
import { UNSURE } from "@/lib/contact-events";

/** Cierre de página, igual en todo el sitio: una pregunta y un botón. */
export function CtaBand({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { final } = dict.home;
  return (
    <section aria-labelledby="cta-title" className="on-dark bg-petrol text-white">
      <Reveal className="wrap flex flex-col gap-8 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <h2 id="cta-title" className="t-h2 max-w-[24ch]">
          {final.title} <span className="text-sand-light">{final.titleB}</span>
        </h2>
        <ButtonLink href={contactRoute(lang, UNSURE)} variant="light" className="self-start lg:self-auto">
          {final.cta}
        </ButtonLink>
      </Reveal>
    </section>
  );
}
