import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Structure } from "@/components/ui/Structure";
import { contactRoute, route } from "@/lib/routes";

/** Una pantalla: mensaje, frase de apoyo y dos acciones. */
export function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { hero } = dict.home;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="wrap grid items-center gap-10 pb-20 pt-36 sm:pt-44 lg:min-h-[86svh] lg:grid-cols-12 lg:pb-20 lg:pt-28">
        <div className="lg:col-span-8">
          <h1 id="hero-title" className="t-hero text-ink">
            <span className="block">{hero.titleA}</span>
            <span className="block text-green">{hero.titleB}</span>
          </h1>
          <p className="t-lead mt-7 max-w-[40ch] text-ink-2">{hero.lead}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={contactRoute(lang)}>{dict.ctaPrimary}</ButtonLink>
            <ButtonLink href={route(lang, "solutions")} variant="secondary" arrow={false}>
              {hero.secondary}
            </ButtonLink>
          </div>
        </div>
        <div className="hidden lg:col-span-4 lg:block">
          <Structure className="mx-auto h-auto w-full max-w-[26rem]" />
        </div>
      </div>
    </section>
  );
}
