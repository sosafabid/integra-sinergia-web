import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Structure } from "@/components/ui/Structure";
import { contactRoute, route } from "@/lib/routes";

export function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { hero } = dict;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Structure className="pointer-events-none absolute -right-[18vw] top-[4.75rem] h-[36vh] w-auto opacity-90 sm:-right-[8vw] lg:-right-[2vw] lg:top-[13vh] lg:h-[62vh] xl:right-[3vw]" />

      <div className="wrap relative flex min-h-[100svh] flex-col justify-end pb-14 pt-[44vh] sm:pt-[40vh] lg:pb-20 lg:pt-40">
        <h1 id="hero-title" className="t-display max-w-[11ch] text-ink">
          {hero.title}
        </h1>

        <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:mt-16 lg:grid-cols-12 lg:items-end">
          <p className="t-lead max-w-[34ch] text-ink-2 lg:col-span-6">{hero.lead}</p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center lg:col-span-6 lg:justify-end lg:gap-8">
            <ButtonLink href={contactRoute(lang)}>{hero.ctaPrimary}</ButtonLink>
            <ButtonLink href={route(lang, "about")} variant="text" arrow={false} className="self-start sm:self-auto">
              {hero.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
