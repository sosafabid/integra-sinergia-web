import Link from "next/link";
import type { Dictionary, Solution } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import { MethodSteps } from "@/components/shared/MethodSteps";
import { solutionRoute } from "@/lib/routes";

type Props = { lang: Locale; dict: Dictionary; solution: Solution };

/** Problema y solución lado a lado. */
export function ProblemSolution({ dict, solution }: Props) {
  return (
    <section aria-label={dict.ui.problem} className="py-20 lg:py-28">
      <div className="wrap grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="t-label text-ink-3">{dict.ui.problem}</p>
          <p className="t-h3 mt-4 font-medium text-ink-2">{solution.problem}</p>
        </Reveal>
        <Reveal delay={120} className="border-l-2 border-green pl-6 md:pl-8">
          <p className="t-label text-green">{dict.ui.solution}</p>
          <p className="t-h3 mt-4 text-ink">{solution.solution}</p>
        </Reveal>
      </div>
    </section>
  );
}

/** Qué podemos hacer: 4 puntos en 2×2, sin íconos. */
export function Services({ dict, solution }: Props) {
  return (
    <section aria-labelledby="servicios-title" className="border-t border-line py-20 lg:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h2 id="servicios-title" className="t-h2 text-ink">
            {dict.ui.services}
          </h2>
        </Reveal>
        <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:col-span-8">
          {solution.services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 70} className="bg-white p-7 lg:p-8">
              <p className="t-h3 text-ink">{s.title}</p>
              <p className="mt-2 text-ink-2">{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Cómo trabajamos: el método en una fila. */
export function HowWeWork({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="metodo-title" className="bg-surface py-20 lg:py-24">
      <div className="wrap">
        <Reveal>
          <h2 id="metodo-title" className="t-h2 text-ink">
            {dict.ui.howWeWork}
          </h2>
        </Reveal>
        <div className="mt-10">
          <MethodSteps method={dict.method} />
        </div>
      </div>
    </section>
  );
}

/** Soluciones relacionadas. */
export function Related({ lang, dict, solution }: Props) {
  const byId = (id: string) => dict.solutions.find((s) => s.id === id)!;
  return (
    <section aria-labelledby="relacionadas-title" className="py-16 lg:py-20">
      <div className="wrap">
        <h2 id="relacionadas-title" className="t-label text-ink-3">
          {dict.ui.related}
        </h2>
        <ul className="mt-5 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {solution.related.map((id) => {
            const r = byId(id);
            return (
              <li key={id} className="bg-white">
                <Link href={solutionRoute(lang, id)} className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-surface">
                  <span>
                    <span className="t-h3 block text-ink">{r.name}</span>
                    <span className="t-small mt-1 block text-ink-2">{r.line}</span>
                  </span>
                  <ArrowIcon className="size-4 shrink-0 text-ink-3 transition-transform duration-500 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
