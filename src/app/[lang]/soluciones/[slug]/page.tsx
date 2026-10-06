import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { areaFromSlug, areaSlugs, contactRoute, route, solutionPath, solutionRoute } from "@/lib/routes";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SolutionDetail, SolutionPager } from "@/components/solutions/SolutionDetail";
import { WebDesign } from "@/components/sections/WebDesign";
import { Automation } from "@/components/sections/Automation";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(areaSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/soluciones/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const id = areaFromSlug(slug);
  if (!hasLocale(lang) || !id) return {};
  const dict = await getDictionary(lang);
  const area = dict.solutions.areas.find((a) => a.id === id)!;
  return pageMetadata(lang, solutionPath(id), area.name, area.description);
}

export default async function SolutionPage({ params }: PageProps<"/[lang]/soluciones/[slug]">) {
  const { lang, slug } = await params;
  const id = areaFromSlug(slug);
  if (!hasLocale(lang) || !id) notFound();
  const dict = await getDictionary(lang);
  const { solutions, ui } = dict;
  const area = solutions.areas.find((a) => a.id === id)!;
  const index = solutions.areas.findIndex((a) => a.id === id) + 1;

  return (
    <>
      <PageHeader
        crumbs={[
          { href: route(lang, "home"), label: ui.breadcrumbHome },
          { href: route(lang, "solutions"), label: solutions.kicker },
          { href: solutionRoute(lang, id), label: area.label },
        ]}
        kicker={`${solutions.kicker} · ${String(index).padStart(2, "0")}`}
        title={area.name}
        lead={area.short}
      >
        <ButtonLink href={contactRoute(lang, id)}>{area.cta}</ButtonLink>
      </PageHeader>

      <SolutionDetail lang={lang} dict={dict} id={id} />

      {/* Contenido ampliado para las líneas con más profundidad */}
      {id === "web" && <WebDesign dict={dict} lang={lang} />}
      {id === "automatizacion" && <Automation dict={dict} lang={lang} />}

      <SolutionPager lang={lang} dict={dict} id={id} />
    </>
  );
}
