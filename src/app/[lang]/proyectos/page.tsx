import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { pathOf } from "@/lib/routes";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { CtaBand } from "@/components/shared/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/proyectos">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, pathOf("projects"), pages.projects.title, pages.projects.description);
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/proyectos">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { projects } = dict;

  return (
    <>
      <PageHero title={projects.title} lead={projects.lead} />
      <section aria-label={projects.title} className="py-16 lg:py-24">
        <div className="wrap">
          <ProjectsGrid items={projects.items} />
          <p className="t-small mt-16 border-t border-line pt-6 text-ink-3">{projects.upcoming}</p>
        </div>
      </section>
      <CtaBand dict={dict} lang={lang} />
    </>
  );
}
