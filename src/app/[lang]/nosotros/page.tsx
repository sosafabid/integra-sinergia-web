import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { contactRoute, paths, route } from "@/lib/routes";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Team } from "@/components/sections/Team";
import { Problem } from "@/components/sections/Problem";
import { Sectors } from "@/components/sections/Sectors";
import { Projects } from "@/components/sections/Projects";
import { FinalCta } from "@/components/sections/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/nosotros">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, paths.about, pages.about.title, pages.about.description);
}

export default async function AboutPage({ params }: PageProps<"/[lang]/nosotros">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { about, ui, nav } = dict;

  return (
    <>
      <PageHeader
        crumbs={[
          { href: route(lang, "home"), label: ui.breadcrumbHome },
          { href: route(lang, "about"), label: about.kicker },
        ]}
        kicker={about.kicker}
        title={about.title}
        lead={about.lead}
      >
        <ButtonLink href={contactRoute(lang)}>{nav.cta}</ButtonLink>
      </PageHeader>
      <Team dict={dict} />
      <Problem dict={dict} />
      <Sectors dict={dict} />
      <Projects dict={dict} />
      <FinalCta dict={dict} lang={lang} />
    </>
  );
}
