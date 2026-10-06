import Image from "next/image";
import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Casos / proyectos. No se renderiza hasta que exista al menos un proyecto real
 * y autorizado en el diccionario (content/es.ts → projects.items).
 */
export function Projects({ dict }: { dict: Dictionary }) {
  const { projects, solutions } = dict;
  if (projects.items.length === 0) return null;
  const labelOf = (id: string) => solutions.areas.find((a) => a.id === id)?.label ?? id;

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="bg-white py-24 lg:py-36">
      <div className="container-site">
        <SectionHeader id="proyectos-title" kicker={projects.kicker} title={projects.title} lead={projects.lead} align="split" />
        <ul className="mt-14 grid gap-10 md:grid-cols-2 lg:mt-20">
          {projects.items.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100}>
              <article>
                {p.image && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand-200">
                    <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                )}
                <p className="eyebrow mt-6 text-sand-700">{p.client}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-petrol-900">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.summary}</p>
                {p.result && <p className="mt-3 font-semibold text-green-700">{p.result}</p>}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.areas.map((a) => (
                    <li key={a} className="rounded-full border border-line-strong px-3 py-1 text-[0.8rem] text-petrol-900">
                      {labelOf(a)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
