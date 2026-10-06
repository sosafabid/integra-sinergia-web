import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { UnsureLink } from "./UnsureLink";

export function Method({ dict }: { dict: Dictionary }) {
  const { method } = dict;

  return (
    <section id="metodologia" aria-labelledby="metodologia-title" className="bg-white py-24 lg:py-36">
      <div className="container-site">
        <SectionHeader
          id="metodologia-title"
          index="04"
          kicker={method.kicker}
          title={method.title}
          lead={method.lead}
          align="split"
        />

        <ol className="relative mt-16 grid gap-0 lg:mt-24 lg:grid-cols-5 lg:gap-6">
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
          <UnsureLink label={method.cta} variant="primary" />
        </Reveal>
      </div>
    </section>
  );
}
