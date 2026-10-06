import Image from "next/image";
import type { Project } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

function ProjectCard({ p, wide = false }: { p: Project; wide?: boolean }) {
  const media = (
    <Reveal variant="mask" className="overflow-hidden rounded-xl bg-surface ring-1 ring-line">
      <Image
        src={p.image}
        alt={p.imageAlt}
        width={1440}
        height={900}
        sizes={wide ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        className="block aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.02]"
      />
    </Reveal>
  );
  const linked = p.href ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer">
      {media}
    </a>
  ) : (
    media
  );
  const meta = (
    <>
      <p className="t-small text-ink-3">{p.category}</p>
      <h3 className="t-h3 mt-1 text-ink">{p.title}</h3>
      <p className="t-small mt-2 max-w-[42ch] text-ink-2">{p.summary}</p>
    </>
  );
  if (wide) {
    // Un solo proyecto: imagen amplia y texto al lado
    return (
      <article className="group grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-8">{linked}</div>
        <Reveal delay={100} className="lg:col-span-4 lg:pb-2">
          {meta}
        </Reveal>
      </article>
    );
  }
  return (
    <article className="group">
      {linked}
      <Reveal delay={100} className="mt-5">
        {meta}
      </Reveal>
    </article>
  );
}

/** Galería de proyectos. Con un solo proyecto, se muestra amplio. */
export function ProjectsGrid({ items, limit }: { items: Project[]; limit?: number }) {
  const list = typeof limit === "number" ? items.slice(0, limit) : items;
  if (list.length === 0) return null;
  if (list.length === 1) {
    return <ProjectCard p={list[0]} wide />;
  }
  return (
    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
      {list.map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}
    </div>
  );
}
