import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowIcon } from "@/components/ui/icons";
import { Photo, publicFileExists } from "@/components/ui/Photo";
import { photoFiles } from "@/content/photos";
import { ProjectVisual } from "@/components/shared/ProjectVisual";
import { route, solutionRoute } from "@/lib/routes";

/** Idea central: una frase, dos líneas. */
export function Idea({ dict }: { dict: Dictionary }) {
  const { idea } = dict.home;
  return (
    <section aria-labelledby="idea-title" className="bg-surface">
      <Reveal className="wrap grid gap-6 py-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-20">
        <h2 id="idea-title" className="t-h2 text-ink lg:col-span-5">
          {idea.title}
        </h2>
        <p className="t-lead text-ink-2 lg:col-span-6 lg:col-start-7">{idea.text}</p>
      </Reveal>
    </section>
  );
}

/** Soluciones: cinco filas, una frase cada una, enlace a su página. */
export function SolutionsIntro({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section aria-labelledby="soluciones-title" className="py-20 lg:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="t-label text-green">{dict.home.solutions.kicker}</p>
          <h2 id="soluciones-title" className="t-h2 mt-3 text-ink">
            {dict.home.solutions.title}
          </h2>
        </Reveal>
        <ul className="border-t border-line-2 lg:col-span-8">
          {dict.solutions.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 60} className="border-b border-line-2">
              <Link href={solutionRoute(lang, s.id)} className="group grid gap-2 py-6 sm:grid-cols-[11rem_1fr_auto] sm:items-center sm:gap-8">
                <span className="t-h3 text-ink transition-colors group-hover:text-petrol">{s.name}</span>
                <span className="text-ink-2">{s.summary}</span>
                <span className="t-small mt-1 inline-flex items-center gap-2 whitespace-nowrap font-semibold text-petrol sm:mt-0">
                  <span className="link-line">{dict.ui.learnMore}</span>
                  <ArrowIcon className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Un solo proyecto, grande. */
export function FeaturedProject({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const project = dict.projects.items.find((p) => p.slug === dict.home.featured.projectSlug) ?? dict.projects.items[0];
  if (!project) return null;
  return (
    <section aria-labelledby="destacado-title" className="border-t border-line py-20 lg:py-28">
      <div className="wrap">
        <article className="group grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal variant="mask" className="overflow-hidden rounded-xl ring-1 ring-line lg:col-span-8">
            <ProjectVisual project={project} dict={dict} sizes="(min-width: 1024px) 60vw, 100vw" />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:pb-2">
            <p className="t-label text-green">{dict.home.featured.kicker}</p>
            <h2 id="destacado-title" className="t-h2 mt-3 text-ink">
              {project.title}
            </h2>
            <p className="t-small mt-2 text-ink-3">{project.category}</p>
            <p className="mt-5 max-w-[38ch] text-ink-2">{project.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href={`${route(lang, "projects")}#${project.slug}`} variant="text">
                {dict.ui.viewProject}
              </ButtonLink>
              {project.href && (
                <ButtonLink href={project.href} target="_blank" rel="noopener noreferrer" variant="text" arrow={false} className="text-ink-2">
                  {dict.ui.visitSite} ↗
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </article>
      </div>
    </section>
  );
}

/** Quiénes están detrás: fotografía real grande + texto breve. */
export function People({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { people } = dict.home;
  const usePair = !publicFileExists(photoFiles.team) && publicFileExists(photoFiles.fabiola);
  return (
    <section aria-labelledby="personas-title" className="pb-20 lg:pb-28">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-10">
        <Reveal variant="mask" className="lg:col-span-7">
          {usePair ? (
            // Sin foto conjunta: los dos retratos lado a lado
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {dict.team.members.map((m) => (
                <Photo key={m.name} photo={m.photo} text={dict.photos[m.photo]} sizes="(min-width: 1024px) 28vw, 46vw" className="aspect-[4/5] rounded-xl" focus="50% 25%" />
              ))}
            </div>
          ) : (
            <Photo photo="team" text={dict.photos.team} sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[3/2] rounded-xl" />
          )}
        </Reveal>
        <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
          <p className="t-label text-green">{people.kicker}</p>
          <h2 id="personas-title" className="t-h2 mt-3 text-ink">
            {people.title}
          </h2>
          <p className="t-lead mt-5 text-ink-2">{people.text}</p>
          <ButtonLink href={route(lang, "about")} variant="text" className="mt-8">
            {people.cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
