import Link from "next/link";
import type { Solution } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import { solutionRoute } from "@/lib/routes";

/** Las 5 soluciones en una fila (desktop) o lista (móvil). Cada una abre su página. */
export function SolutionsRow({ lang, solutions }: { lang: Locale; solutions: Solution[] }) {
  return (
    <ul className="grid border-t border-line-2 sm:grid-cols-2 lg:grid-cols-5">
      {solutions.map((s, i) => (
        <Reveal as="li" key={s.id} delay={i * 60} className="border-b border-line lg:border-b-0 lg:border-r lg:last:border-r-0">
          <Link href={solutionRoute(lang, s.id)} className="group flex h-full flex-col gap-2 py-6 transition-colors sm:pr-6 lg:min-h-44 lg:px-5 lg:py-7 lg:first:pl-0 lg:hover:bg-surface">
            <span className="flex items-center justify-between gap-3">
              <span className="t-h3 text-ink transition-colors group-hover:text-petrol">{s.name}</span>
              <ArrowIcon className="size-4 shrink-0 text-ink-3 transition-[transform,color] duration-500 group-hover:translate-x-0.5 group-hover:text-petrol" aria-hidden="true" />
            </span>
            <span className="t-small text-ink-2">{s.line}</span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
