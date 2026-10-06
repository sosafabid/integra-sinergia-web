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
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
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
        <section aria-label={dict.home.showcase.kicker} className="on-dark bg-petrol py-20 text-white lg:py-28">
          <div className="wrap">
            <div className="mx-auto max-w-5xl">
              <Devices alt={dict.home.showcase.mockupAlt} mobileAlt={dict.home.showcase.mobileAlt} priority />
            </div>
            <div className="mt-20 border-t border-white/15 pt-14 lg:mt-24">
              <ProcessStepper steps={dict.web.process} title={dict.web.processTitle} />
            </div>
          </div>
        </section>
      )}

      <ProblemSolution lang={lang} dict={dict} solution={solution} />
      <Services lang={lang} dict={dict} solution={solution} />

      {isWeb && webProjects.length > 0 && (
        <section aria-labelledby="web-proyectos" className="border-t border-line py-20 lg:py-28">
          <div className="wrap">
            <SectionHead id="web-proyectos" title={dict.web.projectsTitle} />
            <div className="mt-10">
              <ProjectsGrid items={webProjects} />
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
