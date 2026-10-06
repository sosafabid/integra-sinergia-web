import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { AreaIcon } from "@/components/ui/icons";

export function Problem({ dict }: { dict: Dictionary }) {
  const { problem, solutions } = dict;
  const labelOf = (id: string) => solutions.areas.find((a) => a.id === id)?.label ?? "";

  return (
    <section aria-labelledby="problema-title" id="problema" className="bg-white py-24 lg:py-36">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeader id="problema-title" index="01" kicker={problem.kicker} title={problem.title} />
            <Reveal delay={120}>
              <p className="lead mt-6 text-ink-soft">{problem.lead}</p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="border-t border-line">
            {problem.symptoms.map((s, i) => (
              <Reveal as="li" key={s.area} delay={i * 60} className="group border-b border-line">
                <div className="grid grid-cols-[2.75rem_1fr] gap-x-4 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-x-6 sm:py-7">
                  <span className="flex size-11 items-center justify-center rounded-full border border-line text-green-700 transition-colors duration-300 group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-sand-50">
                    <AreaIcon area={s.area} className="size-5" aria-hidden="true" />
                  </span>
                  <p className="self-center text-[1.05rem] font-medium leading-snug text-petrol-900 sm:text-lg">{s.text}</p>
                  <span className="eyebrow col-start-2 mt-2 text-sand-700 sm:col-start-3 sm:mt-0">{labelOf(s.area)}</span>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120}>
            <p className="display-3 mt-12 max-w-xl text-petrol-900">
              <span className="accent text-green-700">→ </span>
              {problem.closing}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
