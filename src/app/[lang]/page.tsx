import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { route, solutionRoute } from "@/lib/routes";
import { Hero } from "@/components/home/Hero";
import { Idea } from "@/components/home/Idea";
import { SolutionsRow } from "@/components/solutions/SolutionsRow";
import { Devices } from "@/components/shared/Devices";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { TeamGrid } from "@/components/shared/TeamGrid";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHead } from "@/components/ui/SectionHead";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Inicio: presenta la marca y lleva a cada página.
 * Hero → Idea → Soluciones → Diseño y tecnología → Proyectos → Equipo → CTA
 */
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { home } = dict;

  return (
    <>
      <Hero dict={dict} lang={lang} />
      <Idea dict={dict} />

      <section aria-labelledby="home-soluciones" className="py-20 lg:py-28">
        <div className="wrap">
          <SectionHead
            id="home-soluciones"
            kicker={home.solutions.kicker}
            title={home.solutions.title}
            action={
              <ButtonLink href={route(lang, "solutions")} variant="text">
                {home.solutions.cta}
              </ButtonLink>
            }
          />
          <div className="mt-10">
            <SolutionsRow lang={lang} solutions={dict.solutions} />
          </div>
        </div>
      </section>

      <section aria-labelledby="home-showcase" className="on-dark bg-petrol py-20 text-white lg:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="t-label text-sand-light">{home.showcase.kicker}</p>
            <h2 id="home-showcase" className="t-h2 mt-3 max-w-[18ch]">
              {home.showcase.title}
            </h2>
            <p className="t-lead mt-5 max-w-[40ch] text-white/70">{home.showcase.lead}</p>
            <ButtonLink href={solutionRoute(lang, "web")} variant="text-light" className="mt-8">
              {home.showcase.cta}
            </ButtonLink>
          </Reveal>
          <div className="lg:col-span-7">
            <Devices alt={home.showcase.mockupAlt} mobileAlt={home.showcase.mobileAlt} />
          </div>
        </div>
      </section>

      <section aria-labelledby="home-proyectos" className="py-20 lg:py-28">
        <div className="wrap">
          <SectionHead
            id="home-proyectos"
            kicker={home.projects.kicker}
            title={home.projects.title}
            action={
              <ButtonLink href={route(lang, "projects")} variant="text">
                {home.projects.cta}
              </ButtonLink>
            }
          />
          <div className="mt-10">
            <ProjectsGrid items={dict.projects.items} limit={2} />
          </div>
        </div>
      </section>

      <section aria-labelledby="home-equipo" className="border-t border-line py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="t-label text-green">{home.team.kicker}</p>
            <h2 id="home-equipo" className="t-h2 mt-3 max-w-[18ch] text-ink">
              {home.team.title}
            </h2>
            <ButtonLink href={route(lang, "about")} variant="text" className="mt-8">
              {home.team.cta}
            </ButtonLink>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <TeamGrid members={dict.team.members} pending={dict.team.pending} compact />
          </div>
        </div>
      </section>

      <CtaBand dict={dict} lang={lang} />
    </>
  );
}
