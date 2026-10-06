import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Locale } from "@/i18n/config";
import { contactRoute } from "@/lib/routes";
import { UNSURE } from "@/lib/contact-events";

export function Method({ dict, lang, withHeader = true }: { dict: Dictionary; lang: Locale; withHeader?: boolean }) {
  const { method } = dict;

  return (
    <section id="metodologia" aria-labelledby={withHeader ? "metodologia-title" : undefined} aria-label={withHeader ? undefined : method.kicker} className="bg-white py-20 lg:py-28">
      <div className="container-site">
        {withHeader && (
          <SectionHeader
            id="metodologia-title"
            kicker={method.kicker}
            title={method.title}
            lead={method.lead}
            align="split"
          />
        )}

        <ol className={`relative grid gap-0 lg:grid-cols-5 lg:gap-6 ${withHeader ? "mt-16 lg:mt-24" : ""}`}>
          {/* Línea conectora: vertical en móvil, horizontal en desktop */}
          <span aria-hidden="true" className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-line-strong lg:hidden" />
          <span aria-hidden="true" className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-line-strong lg:block" />

          {method.steps.map((step, i) => (
            <Reveal as="li" key={step.name} delay={i * 110} className="relative grid grid-cols-[2.8rem_1fr] gap-x-5 pb-12 last:pb-0 lg:block lg:pb-0">
              <span className="relative z-10 flex size-[2.8rem] items-center justify-center rounded-full border border-petrol-900 bg-white font-serif text-2xl italic text-petrol-900">
                {step.letter}
              </span>
              <div className="lg:mt-8">
                <h3 className="text-xl font-semibold tracking-tight text-petrol-900">{step.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{step.text}</p>
                <p className="mt-5 inline-flex flex-col gap-1 border-t border-line pt-3">
                  <span className="eyebrow text-[0.68rem] text-sand-700">{method.outputLabel}</span>
                  <span className="text-[0.95rem] font-semibold text-green-700">{step.output}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 flex lg:mt-20">
          <ButtonLink href={contactRoute(lang, UNSURE)}>{method.cta}</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
