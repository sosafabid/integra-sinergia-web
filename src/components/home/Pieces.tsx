import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowIcon } from "@/components/ui/icons";
import { route } from "@/lib/routes";

/** Cuatro grandes conceptos, tipográficos. Sin tarjetas ni íconos. */
export function Pieces({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { pieces } = dict;
  return (
    <section aria-labelledby="piezas-title" className="border-t border-line py-28 lg:py-40">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="t-caption text-sand-deep">{pieces.kicker}</p>
              <h2 id="piezas-title" className="t-h2 mt-6 text-ink">
                {pieces.title}
              </h2>
              <p className="t-lead mt-6 max-w-[26ch] text-ink-2">{pieces.lead}</p>
              <ButtonLink href={route(lang, "solutions")} variant="text" className="mt-10">
                {pieces.cta}
              </ButtonLink>
            </Reveal>
          </div>
        </div>

        <ul className="border-t border-line-2 lg:col-span-7 lg:col-start-6">
          {pieces.pillars.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 90} className="border-b border-line-2">
              <Link
                href={`${route(lang, "solutions")}#${p.id}`}
                className="group grid gap-3 py-8 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8 lg:py-10"
              >
                <span className="t-h1 text-ink transition-[color,transform] duration-700 ease-[var(--ease-out-soft)] group-hover:translate-x-2 group-hover:text-petrol">
                  {p.name}
                </span>
                <span className="flex items-center gap-4 text-ink-2 sm:max-w-[22ch] sm:pb-3 sm:text-right lg:opacity-60 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100">
                  <span className="text-[0.95rem] leading-snug">{p.line}</span>
                  <ArrowIcon className="size-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
