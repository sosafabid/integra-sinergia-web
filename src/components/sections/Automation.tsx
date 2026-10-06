import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import { AreaCtaLink } from "./WebQuoteLink";

const exampleIcons = [
  // calendario / vencimientos
  <path key="a" d="M5 6h14v14H5zM5 10h14M9 4v4M15 4v4M9 14h2" />,
  // reporte
  <path key="b" d="M6 4h9l3 3v13H6zM9 16v-3M12 16v-6M15 16v-2" />,
  // bandeja / clasificación
  <path key="c" d="M4 13l2.5-7h11l2.5 7v5H4zM4 13h5l1 2h4l1-2h5" />,
  // asistente
  <path key="d" d="M5 6h14v9H9l-4 4zM9 10.5h.01M12 10.5h.01M15 10.5h.01" />,
];

export function Automation({ dict }: { dict: Dictionary }) {
  const { automation: a } = dict;

  return (
    <section id="automatizacion" aria-labelledby="automatizacion-title" className="bg-sand-100 py-24 lg:py-36">
      <div className="container-site">
        <SectionHeader id="automatizacion-title" index="06" kicker={a.kicker} title={a.title} lead={a.lead} align="split" />

        {/* Flujo: del orden a la capacidad */}
        <Reveal className="mt-16 lg:mt-20">
          <ol className="flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0">
            {a.flow.map((step, i) => {
              const last = i === a.flow.length - 1;
              return (
                <li key={step} className="flex flex-col items-start lg:flex-1 lg:flex-row lg:items-center">
                  <span
                    className={`flex w-full items-center gap-3 rounded-2xl border px-5 py-4 text-[0.98rem] font-semibold lg:min-h-20 ${
                      last
                        ? "border-green-700 bg-green-700 text-sand-50"
                        : "border-line-strong bg-sand-50 text-petrol-900"
                    }`}
                  >
                    <span className={`font-mono text-[0.7rem] font-normal ${last ? "text-sand-50/70" : "text-sand-700"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </span>
                  {!last && (
                    <ArrowIcon
                      aria-hidden="true"
                      className="mx-6 my-1 size-4 rotate-90 text-sand-500 lg:mx-2 lg:my-0 lg:shrink-0 lg:rotate-0"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <blockquote className="display-3 text-petrol-900">
              <span className="accent text-green-700">“</span>
              {a.principle}
            </blockquote>
            <div className="mt-8">
              <AreaCtaLink label={a.cta} area="automatizacion" variant="primary" />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <h3 className="eyebrow text-sand-700">{a.examplesTitle}</h3>
            </Reveal>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {a.examples.map((ex, i) => (
                <Reveal as="li" key={ex.title} delay={i * 80} className="rounded-2xl border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-30px_rgb(8_48_58/0.45)]">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-6 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {exampleIcons[i % exampleIcons.length]}
                  </svg>
                  <p className="mt-5 text-lg font-semibold tracking-tight text-petrol-900">{ex.title}</p>
                  <p className="mt-2 leading-relaxed text-ink-soft">{ex.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
