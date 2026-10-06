import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { contactRoute, paths } from "@/lib/routes";
import { UNSURE } from "@/lib/contact-events";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PillarsList } from "@/components/solutions/PillarsList";
import { MethodLine } from "@/components/home/MethodLine";
import { FinalCta } from "@/components/home/FinalCta";

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
  const { solutions, pages, hero } = dict;

  return (
    <>
      <PageHeader kicker={pages.solutions.title} title={solutions.title} lead={solutions.lead}>
        <ButtonLink href={contactRoute(lang, UNSURE)}>{hero.ctaPrimary}</ButtonLink>
      </PageHeader>
      <PillarsList dict={dict} lang={lang} />
      <MethodLine dict={dict} lang={lang} />
      <FinalCta dict={dict} lang={lang} />
    </>
  );
}
