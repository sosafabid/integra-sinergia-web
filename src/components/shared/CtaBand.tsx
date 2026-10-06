import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { contactRoute } from "@/lib/routes";
import { UNSURE } from "@/lib/contact-events";

/** Cierre de página: una pregunta y un botón. */
export function CtaBand({ dict, lang, title, lead }: { dict: Dictionary; lang: Locale; title?: string; lead?: string }) {
  return (
    <section aria-labelledby="cta-title" className="on-dark bg-petrol text-white">
      <Reveal className="wrap flex flex-col gap-8 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div>
          <h2 id="cta-title" className="t-h2 max-w-[20ch]">
            {title ?? dict.finalCta.title}
          </h2>
          <p className="t-lead mt-4 max-w-[40ch] text-white/70">{lead ?? dict.finalCta.lead}</p>
        </div>
        <ButtonLink href={contactRoute(lang, UNSURE)} variant="light" className="self-start lg:self-auto">
          {dict.nav.cta}
        </ButtonLink>
      </Reveal>
    </section>
  );
}
