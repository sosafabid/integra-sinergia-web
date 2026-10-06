import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Locale } from "@/i18n/config";
import { contactRoute, route } from "@/lib/routes";

function Pin({ n, className }: { n: number; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 flex size-6 items-center justify-center rounded-full bg-sand-400 font-mono text-[0.7rem] font-medium text-petrol-950 ring-4 ring-sand-400/25 ${className}`}
    >
      {n}
    </span>
  );
}

/** Wireframe de un sitio: ilustra estructura, no un proyecto real. */
function BrowserMockup({ url, annotations }: { url: string; annotations: string[] }) {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-petrol-950 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.7)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 flex-1 truncate rounded-full bg-white/5 px-3 py-1 font-mono text-[0.7rem] text-sand-100/50">
            {url}
          </span>
        </div>
        <div className="relative space-y-5 p-5 sm:p-7" aria-hidden="true">
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-20 rounded-full bg-white/25" />
            <span className="hidden gap-3 sm:flex">
              <span className="h-2 w-10 rounded-full bg-white/10" />
              <span className="h-2 w-10 rounded-full bg-white/10" />
              <span className="h-2 w-10 rounded-full bg-white/10" />
            </span>
            <span className="h-5 w-16 rounded-full bg-sand-400/70" />
          </div>
          <div className="grid gap-5 pt-3 sm:grid-cols-5">
            <div className="relative space-y-3 sm:col-span-3">
              <Pin n={1} className="-left-2 -top-3" />
              <span className="block h-4 w-11/12 rounded bg-white/70" />
              <span className="block h-4 w-3/4 rounded bg-white/70" />
              <span className="block h-2 w-full rounded bg-white/15" />
              <span className="block h-2 w-5/6 rounded bg-white/15" />
              <div className="relative flex gap-2 pt-2">
                <Pin n={3} className="-right-1 -top-1 sm:right-auto sm:left-24" />
                <span className="h-7 w-24 rounded-full bg-sand-400" />
                <span className="h-7 w-20 rounded-full border border-white/20" />
              </div>
            </div>
            <div className="relative hidden aspect-square rounded-xl border border-white/10 bg-[radial-gradient(circle_at_center,rgb(196_180_143/0.25)_1.5px,transparent_1.5px)] [background-size:14px_14px] sm:col-span-2 sm:block">
              <Pin n={2} className="-right-2 -top-3" />
            </div>
          </div>
          <div className="relative grid grid-cols-3 gap-3 pt-2">
            <span className="h-14 rounded-lg bg-white/5" />
            <span className="h-14 rounded-lg bg-white/5" />
            <span className="h-14 rounded-lg bg-white/5" />
          </div>
          <div className="relative rounded-xl border border-white/10 p-4">
            <Pin n={4} className="-left-2 -top-3" />
            <div className="grid grid-cols-2 gap-2">
              <span className="h-6 rounded bg-white/10" />
              <span className="h-6 rounded bg-white/10" />
              <span className="col-span-2 h-10 rounded bg-white/10" />
            </div>
            <span className="mt-3 block h-6 w-24 rounded-full bg-green-500/80" />
          </div>
        </div>
      </div>
      <figcaption className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
        {annotations.map((a, i) => (
          <span key={a} className="flex items-center gap-2.5 text-[0.9rem] text-sand-100/80">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sand-400 font-mono text-[0.65rem] text-petrol-950">
              {i + 1}
            </span>
            {a}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}

export function WebDesign({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { web } = dict;

  return (
    <section
      id="diseno-web"
      aria-labelledby="diseno-web-title"
      className="on-dark relative overflow-hidden bg-petrol-900 py-24 text-sand-50 lg:py-36"
    >
      <div aria-hidden="true" className="grid-bg-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
      <div className="container-site relative">
        <SectionHeader
          id="diseno-web-title"
          kicker={web.kicker}
          tone="dark"
          align="split"
          title={
            <>
              {web.titleBefore} <span className="accent text-sand-400">{web.titleAccent}</span>
            </>
          }
          lead={web.lead}
        />

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="eyebrow text-sand-400">{web.processTitle}</h3>
            </Reveal>
            <ol className="relative mt-8">
              <span aria-hidden="true" className="absolute bottom-3 left-[0.6875rem] top-3 w-px bg-gradient-to-b from-sand-400/60 via-white/15 to-green-500/60" />
              {web.steps.map((s, i) => (
                <Reveal as="li" key={s.name} delay={i * 60} className="relative grid grid-cols-[1.375rem_1fr] gap-x-5 pb-6 last:pb-0">
                  <span className="relative z-10 mt-1 flex size-[1.375rem] items-center justify-center rounded-full border border-sand-400/60 bg-petrol-900">
                    <span className="size-1.5 rounded-full bg-sand-400" />
                  </span>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[0.7rem] text-sand-100/40">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-semibold tracking-tight sm:w-36 sm:shrink-0">{s.name}</span>
                    </span>
                    <span className="text-[0.95rem] text-sand-100/65">{s.text}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <BrowserMockup url={web.mockup.url} annotations={web.mockup.annotations} />
          </Reveal>
        </div>

        <div className="mt-20 lg:mt-28">
          <Reveal>
            <h3 className="eyebrow text-sand-400">{web.deliverablesTitle}</h3>
          </Reveal>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {web.deliverables.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 80} className="bg-petrol-900 p-6 sm:p-7">
                <p className="text-lg font-semibold tracking-tight">{d.title}</p>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-sand-100/65">{d.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-16 grid gap-8 border-t border-white/10 pt-12 lg:mt-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="display-3">
              <span className="accent text-sand-400">{web.proof.title}</span>
            </p>
            <p className="mt-3 text-sand-100/70">{web.proof.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {web.proof.specs.map((s) => (
                <li key={s} className="rounded-full border border-white/15 px-3.5 py-1.5 font-mono text-[0.72rem] text-sand-100/80">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <ButtonLink href={contactRoute(lang, "web")} variant="light">
              {web.cta}
            </ButtonLink>
            <ButtonLink href={route(lang, "solutions")} variant="outline-light" arrow={false}>
              {web.secondary}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
