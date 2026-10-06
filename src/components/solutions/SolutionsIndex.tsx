import Link from "next/link";
import type { Solution } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import { solutionRoute } from "@/lib/routes";

/** Índice de soluciones: filas amplias y clicables (no tarjetas). */
export function SolutionsIndex({ lang, solutions }: { lang: Locale; solutions: Solution[] }) {
  return (
    <ul className="border-t border-line-2">
      {solutions.map((s, i) => (
        <Reveal as="li" key={s.id} delay={i * 60} className="border-b border-line-2">
          <Link
            href={solutionRoute(lang, s.id)}
            className="group grid gap-3 py-8 transition-colors md:grid-cols-12 md:items-center md:gap-8 lg:py-10"
          >
            <span className="md:col-span-4">
              <span className="t-h2 block text-ink transition-colors group-hover:text-petrol">{s.name}</span>
              <span className="t-small mt-1 block text-ink-3">{s.summary}</span>
            </span>
            <span className="t-lead text-ink-2 md:col-span-6">{s.promise}</span>
            <span className="hidden justify-end md:col-span-2 md:flex">
              <span className="flex size-11 items-center justify-center rounded-full border border-line-2 text-ink transition-colors duration-300 group-hover:border-petrol group-hover:bg-petrol group-hover:text-white">
                <ArrowIcon className="size-4" aria-hidden="true" />
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
