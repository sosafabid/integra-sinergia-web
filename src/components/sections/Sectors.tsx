import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Sectors({ dict }: { dict: Dictionary }) {
  const { sectors } = dict;
  return (
    <section aria-labelledby="sectores-title" className="bg-white py-24 lg:py-32">
      <div className="container-site">
        <SectionHeader id="sectores-title" index="07" kicker={sectors.kicker} title={sectors.title} lead={sectors.lead} align="split" />
        <ul className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {sectors.items.map((s, i) => (
            <Reveal
              as="li"
              key={s.name}
              delay={(i % 3) * 80}
              className="border-t border-line-strong pb-10 pt-6"
            >
              <span className="eyebrow text-sand-700">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-xl font-semibold tracking-tight text-petrol-900">{s.name}</p>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
