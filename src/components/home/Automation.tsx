import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { route } from "@/lib/routes";

/** De muchas tareas sueltas a un solo flujo. Ilustración tipográfica, sin íconos de IA. */
function Flow() {
  const rows = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 1200 160" aria-hidden="true" className="h-auto w-full" fill="none">
      {rows.map((r) =>
        Array.from({ length: 22 - r * 3 }, (_, i) => {
          const x = 10 + i * (26 + r * 3) + ((r * 7) % 13);
          if (x > 560) return null;
          return (
            <line
              key={`${r}-${i}`}
              x1={x}
              y1={20 + r * 30}
              x2={x + 12}
              y2={20 + r * 30}
              stroke="rgb(20 27 27 / 0.28)"
              strokeWidth={1.5}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          );
        }),
      )}
      {rows.map((r) => (
        <path
          key={`c${r}`}
          d={`M600 ${20 + r * 30} C 700 ${20 + r * 30}, 700 80, 800 80`}
          stroke="rgb(20 27 27 / 0.22)"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <line x1={800} y1={80} x2={1180} y2={80} stroke="var(--color-green)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      <circle cx={1184} cy={80} r={5} fill="var(--color-green)" />
    </svg>
  );
}

export function Automation({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { automation } = dict;
  return (
    <section aria-labelledby="automatizacion-title" className="py-28 lg:py-44">
      <div className="wrap">
        <Reveal>
          <h2 id="automatizacion-title" className="t-h1 max-w-[18ch]">
            <span className="block text-ink">{automation.lines[0]}</span>
            <span className="block text-ink-3">{automation.lines[1]}</span>
          </h2>
        </Reveal>
        <Reveal delay={150} className="mt-16 lg:mt-24">
          <Flow />
        </Reveal>
        <Reveal delay={200} className="mt-12 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-lead max-w-[36ch] text-ink-2">{automation.lead}</p>
          <ButtonLink href={route(lang, "automation")} variant="text">
            {automation.cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
