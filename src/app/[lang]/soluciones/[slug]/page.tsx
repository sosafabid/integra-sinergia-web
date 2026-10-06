import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { contactRoute, route, solutionFromSlug, solutionIds, solutionPath, solutionSlugs } from "@/lib/routes";
import { whatsappLink } from "@/config/site";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Devices } from "@/components/shared/Devices";
import { ProjectVisual } from "@/components/shared/ProjectVisual";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHead } from "@/components/ui/SectionHead";
import { ProcessStepper } from "@/components/solutions/ProcessStepper";
import { HowWeWork, ProblemSolution, Related, Services } from "@/components/solutions/SolutionBody";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutionIds.map((id) => ({ slug: solutionSlugs[id] }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/soluciones/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const id = solutionFromSlug(slug);
  if (!hasLocale(lang) || !id) return {};
  const dict = await getDictionary(lang);
  const s = dict.solutions.find((x) => x.id === id)!;
  return pageMetadata(lang, solutionPath(id), s.fullName, s.description);
}

export default async function SolutionPage({ params }: PageProps<"/[lang]/soluciones/[slug]">) {
  const { lang, slug } = await params;
  const id = solutionFromSlug(slug);
  if (!hasLocale(lang) || !id) notFound();
  const dict = await getDictionary(lang);
  const solution = dict.solutions.find((x) => x.id === id)!;
  const isWeb = id === "web";
  const webProjects = dict.projects.items.filter((p) => p.solutions.includes("web"));

  return (
    <>
      <PageHero
        back={{ href: route(lang, "solutions"), label: dict.ui.backToSolutions }}
        kicker={solution.fullName}
        title={solution.promise}
        lead={solution.lead}
      >
        <ButtonLink href={contactRoute(lang, id)}>{solution.cta}</ButtonLink>
        <ButtonLink
          href={whatsappLink(dict.whatsapp.defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          arrow={false}
          icon={<WhatsAppIcon className="size-4" aria-hidden="true" />}
        >
          WhatsApp
        </ButtonLink>
      </PageHero>

      {/* Diseño web: la demostración va primero */}
      {isWeb && (
        <section aria-label={solution.fullName} className="on-dark bg-petrol py-20 text-white lg:py-28">
          <div className="wrap">
            <div className="mx-auto max-w-5xl">
              <Devices alt={dict.web.mockupAlt} mobileAlt={dict.web.mobileAlt} priority />
            </div>
            <div className="mt-20 border-t border-white/15 pt-14 lg:mt-24">
              <ProcessStepper steps={dict.web.process} title={dict.web.processTitle} />
            </div>
          </div>
        </section>
      )}

      <ProblemSolution lang={lang} dict={dict} solution={solution} />

      {/* Fotografía real cuando la solución tiene una asociada */}
      {solution.photo && (
        <div className="wrap pb-4">
          <Reveal variant="mask">
            <Photo
              photo={solution.photo}
              text={dict.photos[solution.photo]}
              sizes="(min-width: 1280px) 1180px, 100vw"
              className="aspect-[16/9] rounded-xl sm:aspect-[21/9]"
              showCaption
            />
          </Reveal>
        </div>
      )}
      <Services lang={lang} dict={dict} solution={solution} />

      {isWeb && webProjects.length > 0 && (
        <section aria-labelledby="web-proyectos" className="border-t border-line py-20 lg:py-28">
          <div className="wrap">
            <SectionHead id="web-proyectos" title={dict.web.projectsTitle} />
            <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
              {webProjects.map((p) => (
                <article key={p.slug} className="group">
                  <Reveal variant="mask" className="overflow-hidden rounded-xl ring-1 ring-line">
                    <ProjectVisual project={p} dict={dict} sizes="(min-width: 768px) 50vw, 100vw" />
                  </Reveal>
                  <p className="t-small mt-5 text-ink-3">{p.category}</p>
                  <h3 className="t-h3 mt-1 text-ink">{p.title}</h3>
                  <p className="t-small mt-2 max-w-[44ch] text-ink-2">{p.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <HowWeWork dict={dict} />
      <Related lang={lang} dict={dict} solution={solution} />
      <CtaBand dict={dict} lang={lang} />
    </>
  );
}
