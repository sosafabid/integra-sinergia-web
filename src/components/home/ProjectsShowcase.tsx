import Image from "next/image";
import type { Dictionary, Project } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { route } from "@/lib/routes";

/** Un proyecto: imagen grande + nombre + problema + solución. Muy poco texto. */
export function ProjectItem({ project, labels }: { project: Project; labels: Dictionary["projects"]["labels"] }) {
  const media = (
    <Reveal variant="mask" className="overflow-hidden rounded-[0.6rem] bg-paper-2">
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={1440}
        height={900}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="block h-auto w-full transition-transform duration-[1.4s] ease-[var(--ease-out-soft)] group-hover:scale-[1.02]"
      />
    </Reveal>
  );
  return (
    <article className="group grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-8">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            {media}
          </a>
        ) : (
          media
        )}
      </div>
      <Reveal delay={150} className="flex flex-col lg:col-span-4">
        <p className="t-caption text-sand-deep">{project.client}</p>
        <h3 className="t-h2 mt-4 text-ink">{project.title}</h3>
        <dl className="mt-8 grid gap-6 border-t border-line pt-6">
          <div>
            <dt className="t-caption text-ink-3">{labels.problem}</dt>
            <dd className="mt-2 text-ink-2">{project.problem}</dd>
          </div>
          <div>
            <dt className="t-caption text-ink-3">{labels.solution}</dt>
            <dd className="mt-2 text-ink">{project.solution}</dd>
          </div>
        </dl>
      </Reveal>
    </article>
  );
}

export function ProjectsShowcase({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { projects } = dict;
  if (projects.items.length === 0) return null;
  const [first] = projects.items;

  return (
    <section aria-labelledby="proyectos-title" className="py-28 lg:py-40">
      <div className="wrap">
        <Reveal className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-20">
          <div>
            <p className="t-caption text-sand-deep">{projects.kicker}</p>
            <h2 id="proyectos-title" className="t-h2 mt-6 text-ink">
              {projects.title}
            </h2>
          </div>
          <ButtonLink href={route(lang, "projects")} variant="text">
            {projects.cta}
          </ButtonLink>
        </Reveal>
        <ProjectItem project={first} labels={projects.labels} />
      </div>
    </section>
  );
}

/** Nota al pie de la lista de proyectos. */
export function UpcomingNote({ text }: { text: string }) {
  return <p className="t-caption mt-20 border-t border-line pt-8 text-ink-3">{text}</p>;
}
