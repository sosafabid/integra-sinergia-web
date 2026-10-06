import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { contactRoute } from "@/lib/routes";
import { UNSURE } from "@/lib/contact-events";

/** Cierre: una pregunta, una frase, un botón. */
export function FinalCta({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { finalCta } = dict;
  return (
    <section aria-labelledby="cta-title" className="border-t border-line py-32 text-center sm:py-40 lg:py-56">
      <Reveal className="wrap flex flex-col items-center">
        <h2 id="cta-title" className="t-display max-w-[12ch] text-ink">
          {finalCta.title}
        </h2>
        <p className="t-lead mt-8 max-w-[32ch] text-ink-2">{finalCta.lead}</p>
        <ButtonLink href={contactRoute(lang, UNSURE)} className="mt-12">
          {finalCta.cta}
        </ButtonLink>
      </Reveal>
    </section>
  );
}
