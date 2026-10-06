import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import { solutionRoute } from "@/lib/routes";

/** Los 4 conceptos y, dentro de cada uno, las soluciones concretas. */
export function PillarsList({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { pieces, solutions } = dict;
  const area = (id: string) => solutions.areas.find((a) => a.id === id)!;

  return (
    <div className="wrap pb-28 lg:pb-40">
      {pieces.pillars.map((p) => (
        <section key={p.id} id={p.id} aria-labelledby={`pilar-${p.id}`} className="grid gap-10 border-t border-line-2 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <Reveal className="lg:col-span-5">
            <h2 id={`pilar-${p.id}`} className="t-h1 text-ink">
              {p.name}
            </h2>
            <p className="mt-5 max-w-[28ch] text-ink-2">{p.line}</p>
          </Reveal>
          <ul className="lg:col-span-6 lg:col-start-7">
            {p.areas.map((id, i) => {
              const a = area(id);
              return (
                <Reveal as="li" key={id} delay={i * 100} className="border-b border-line first:border-t">
                  <Link href={solutionRoute(lang, id)} className="group flex items-start justify-between gap-6 py-7">
                    <span>
                      <span className="t-h3 block text-ink transition-colors group-hover:text-petrol">{a.name}</span>
                      <span className="mt-2 block text-ink-2">{a.short}</span>
                    </span>
                    <ArrowIcon className="mt-2 size-4 shrink-0 text-ink transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
