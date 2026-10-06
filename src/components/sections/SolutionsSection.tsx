import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Solutions } from "./Solutions";
import { UnsureLink } from "./UnsureLink";

export function SolutionsSection({ dict }: { dict: Dictionary }) {
  const { solutions } = dict;
  return (
    <section id="soluciones" aria-labelledby="soluciones-title" className="py-24 lg:py-36">
      <div className="container-site">
        <SectionHeader
          id="soluciones-title"
          index="03"
          kicker={solutions.kicker}
          title={solutions.title}
          lead={solutions.lead}
          align="split"
        />
        <div className="mt-14 lg:mt-20">
          <Solutions solutions={solutions} />
        </div>

        <Reveal className="on-dark mt-16 flex flex-col gap-6 rounded-3xl bg-petrol-900 p-8 text-sand-50 sm:p-10 md:flex-row md:items-center md:justify-between lg:mt-24">
          <div className="max-w-xl">
            <p className="display-3">{solutions.unsure.title}</p>
            <p className="mt-3 leading-relaxed text-sand-100/75">{solutions.unsure.text}</p>
          </div>
          <UnsureLink label={solutions.unsure.cta} />
        </Reveal>
      </div>
    </section>
  );
}
