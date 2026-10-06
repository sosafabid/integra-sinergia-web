import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import { route } from "@/lib/routes";

/** Accesos secundarios del inicio (metodología, nosotros). */
export function ExploreCards({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {dict.home.explore.map((card, i) => (
        <Reveal as="li" key={card.key} delay={i * 100}>
          <Link
            href={route(lang, card.key)}
            className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-[0_30px_60px_-40px_rgb(8_48_58/0.45)] sm:p-10"
          >
            <span className="eyebrow text-sand-700">{card.kicker}</span>
            <span className="display-3 mt-4 text-petrol-900">{card.title}</span>
            <span className="mt-3 max-w-md leading-relaxed text-ink-soft">{card.text}</span>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-green-700">
              {card.cta}
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
