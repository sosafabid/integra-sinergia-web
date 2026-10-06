import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { paths } from "@/lib/routes";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectItem, UpcomingNote } from "@/components/home/ProjectsShowcase";
import { FinalCta } from "@/components/home/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/proyectos">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, paths.projects, pages.projects.title, pages.projects.description);
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/proyectos">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { projects } = dict;

  return (
    <>
      <PageHeader kicker={projects.kicker} title={projects.title} lead={projects.lead} />
      <section aria-label={projects.kicker} className="pb-28 lg:pb-40">
        <div className="wrap space-y-28 lg:space-y-40">
          {projects.items.map((p) => (
            <ProjectItem key={p.title} project={p} labels={projects.labels} />
          ))}
        </div>
        <div className="wrap">
          <UpcomingNote text={projects.upcoming} />
        </div>
      </section>
      <FinalCta dict={dict} lang={lang} />
    </>
  );
}
