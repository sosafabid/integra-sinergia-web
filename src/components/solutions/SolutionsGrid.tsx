import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { AreaIcon, ArrowIcon } from "@/components/ui/icons";
import { solutionRoute } from "@/lib/routes";

type Props = {
  lang: Locale;
  solutions: Dictionary["solutions"];
  viewLabel: string;
  /** "compact" para el inicio; "detailed" agrega el problema que resuelve cada área */
  variant?: "compact" | "detailed";
};

/** Accesos a las 6 soluciones. Cada tarjeta abre la página de la solución. */
export function SolutionsGrid({ lang, solutions, viewLabel, variant = "compact" }: Props) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {solutions.areas.map((area, i) => (
        <Reveal as="li" key={area.id} delay={(i % 3) * 70} className="bg-sand-50">
          <Link
            href={solutionRoute(lang, area.id)}
            className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-white sm:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="flex size-12 items-center justify-center rounded-2xl border border-line-strong text-green-700 transition-colors duration-300 group-hover:border-petrol-900 group-hover:bg-petrol-900 group-hover:text-sand-50">
                <AreaIcon area={area.id} className="size-5" aria-hidden="true" />
              </span>
              <span className="eyebrow text-sand-700">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-8 text-xl font-semibold tracking-tight text-petrol-900">{area.name}</h3>
            <p className="mt-2.5 leading-relaxed text-ink-soft">{area.short}</p>
            {variant === "detailed" && (
              <p className="mt-4 border-t border-line pt-4 text-[0.92rem] leading-relaxed text-ink-muted">{area.problem}</p>
            )}
            <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[0.9rem] font-semibold text-petrol-900">
              {viewLabel}
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
