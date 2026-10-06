import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { pathOf } from "@/lib/routes";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectVisual } from "@/components/shared/ProjectVisual";
import { CtaBand } from "@/components/shared/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/proyectos">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, pathOf("projects"), pages.projects.title, pages.projects.description);
}

/** Portfolio: composición alternada, mucha imagen y poco texto. */
export default async function ProjectsPage({ params }: PageProps<"/[lang]/proyectos">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { projects, photos, ui } = dict;
  const [first, ...rest] = projects.items;

  return (
    <>
      <PageHero title={projects.title} lead={projects.lead} />

      <section aria-label={projects.title} className="py-16 lg:py-24">
        <div className="wrap space-y-24 lg:space-y-32">
          {/* Primer proyecto: a todo el ancho */}
          {first && (
            <article id={first.slug} className="group scroll-mt-28">
              <Reveal variant="mask" className="overflow-hidden rounded-xl ring-1 ring-line">
                <ProjectVisual project={first} dict={dict} sizes="(min-width: 1280px) 1180px, 100vw" priority />
              </Reveal>
              <Reveal delay={100} className="mt-6 grid gap-4 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-5">
                  <p className="t-small text-ink-3">{first.category}</p>
                  <h2 className="t-h2 mt-1 text-ink">{first.title}</h2>
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="t-lead text-ink-2">{first.summary}</p>
                  {first.href && (
                    <ButtonLink href={first.href} target="_blank" rel="noopener noreferrer" variant="text" className="mt-5">
                      {ui.visitSite}
                    </ButtonLink>
                  )}
                </div>
              </Reveal>
            </article>
          )}

          {/* El resto: imagen y texto alternando lados */}
          {rest.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={p.slug} id={p.slug} className="group grid scroll-mt-28 gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
                <Reveal variant="mask" className={`overflow-hidden rounded-xl ring-1 ring-line lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}>
                  <ProjectVisual project={p} dict={dict} sizes="(min-width: 1024px) 58vw, 100vw" />
                </Reveal>
                <Reveal delay={100} className={`lg:col-span-4 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
                  <p className="t-small text-ink-3">{p.category}</p>
                  <h2 className="t-h3 mt-1 text-ink">{p.title}</h2>
                  <p className="mt-3 text-ink-2">{p.summary}</p>
                  {p.href && (
                    <ButtonLink href={p.href} target="_blank" rel="noopener noreferrer" variant="text" className="mt-5">
                      {ui.visitSite}
                    </ButtonLink>
                  )}
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* Trayectoria: fotografía real como evidencia, sin biografía */}
      <section aria-labelledby="trayectoria-title" className="bg-surface py-20 lg:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="t-label text-green">{projects.experience.kicker}</p>
            <h2 id="trayectoria-title" className="t-h2 mt-3 text-ink">
              {projects.experience.title}
            </h2>
            <p className="t-lead mt-5 text-ink-2">{projects.experience.text}</p>
          </Reveal>
          <div className="grid grid-cols-5 gap-4 lg:col-span-8">
            <Reveal variant="mask" className="col-span-3">
              <Photo photo="brasil" text={photos.brasil} sizes="(min-width: 1024px) 38vw, 60vw" className="aspect-[4/5] rounded-xl" showCaption />
            </Reveal>
            <Reveal variant="mask" delay={150} className="col-span-2 self-end">
              <Photo photo="panel" text={photos.panel} sizes="(min-width: 1024px) 25vw, 40vw" className="aspect-[3/4] rounded-xl" showCaption />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand dict={dict} lang={lang} />
    </>
  );
}
