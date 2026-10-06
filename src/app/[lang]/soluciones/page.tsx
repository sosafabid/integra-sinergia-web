import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { contactRoute, paths, route } from "@/lib/routes";
import { UNSURE } from "@/lib/contact-events";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { Connected } from "@/components/sections/Connected";
import { FinalCta } from "@/components/sections/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/soluciones">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, paths.solutions, pages.solutions.title, pages.solutions.description);
}

export default async function SolutionsPage({ params }: PageProps<"/[lang]/soluciones">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { solutions, ui } = dict;

  return (
    <>
      <PageHeader
        crumbs={[
          { href: route(lang, "home"), label: ui.breadcrumbHome },
          { href: route(lang, "solutions"), label: solutions.kicker },
        ]}
        kicker={solutions.kicker}
        title={solutions.title}
        lead={solutions.lead}
      >
        <ButtonLink href={contactRoute(lang, UNSURE)}>{solutions.unsure.cta}</ButtonLink>
      </PageHeader>

      <section aria-label={solutions.kicker} className="py-16 lg:py-24">
        <div className="container-site">
          <SolutionsGrid lang={lang} solutions={solutions} viewLabel={ui.viewSolution} variant="detailed" />
        </div>
      </section>

      <Connected dict={dict} />
      <FinalCta dict={dict} lang={lang} />
    </>
  );
}
