import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { contactRoute, pathOf } from "@/lib/routes";
import { UNSURE } from "@/lib/contact-events";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SolutionsIndex } from "@/components/solutions/SolutionsIndex";
import { CtaBand } from "@/components/shared/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/soluciones">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, pathOf("solutions"), pages.solutions.title, pages.solutions.description);
}

export default async function SolutionsPage({ params }: PageProps<"/[lang]/soluciones">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { solutionsPage, pages } = dict;

  return (
    <>
      <PageHero kicker={pages.solutions.title} title={solutionsPage.title} lead={solutionsPage.lead} />

      <section aria-label={pages.solutions.title} className="py-12 lg:py-16">
        <div className="wrap">
          <SolutionsIndex lang={lang} solutions={dict.solutions} />
        </div>
      </section>

      <section aria-labelledby="no-seguro" className="pb-20 lg:pb-28">
        <Reveal className="wrap">
          <div className="flex flex-col gap-6 rounded-xl bg-surface p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 id="no-seguro" className="t-h3 text-ink">
                {solutionsPage.unsure.title}
              </h2>
              <p className="mt-2 text-ink-2">{solutionsPage.unsure.text}</p>
            </div>
            <ButtonLink href={contactRoute(lang, UNSURE)} className="self-start md:self-auto">
              {dict.ctaPrimary}
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <CtaBand dict={dict} lang={lang} />
    </>
  );
}
