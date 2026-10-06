import type { Dictionary } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SystemDiagram } from "./SystemDiagram";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero, solutions } = dict;
  const nodes = solutions.areas.map((a) => ({ id: a.id, label: a.label }));

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-[4.5rem] lg:pt-20">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_70%)]" />

      <div className="container-site relative grid items-center gap-10 pb-16 pt-12 sm:pt-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-10">
        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-3 text-sand-700">
            <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-green-700" />
            {hero.eyebrow}
          </p>

          <h1 id="hero-title" className="display-1 mt-6 text-petrol-900">
            {hero.titleBefore} <span className="accent text-green-700">{hero.titleAccent}</span> {hero.titleAfter}
          </h1>

          <p className="lead mt-7 max-w-[38rem] text-ink-soft">{hero.lead}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#contacto">{hero.ctaPrimary}</ButtonLink>
            <ButtonLink href="#soluciones" variant="secondary" arrow={false}>
              {hero.ctaSecondary}
            </ButtonLink>
          </div>

          <div className="mt-14 hidden items-center gap-4 sm:flex">
            <span aria-hidden="true" className="h-px w-12 bg-sand-500" />
            <p className="accent text-xl text-sand-700">{hero.tagline}</p>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <SystemDiagram
            nodes={nodes}
            center={hero.diagramCenter}
            title={hero.diagramTitle}
            className="mx-auto w-full max-w-[26rem] lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
