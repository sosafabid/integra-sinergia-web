import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { route } from "@/lib/routes";
import { Hero } from "@/components/sections/Hero";
import { FinalCta } from "@/components/sections/FinalCta";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { ExploreCards } from "@/components/home/ExploreCards";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";

/**
 * Inicio: visión general + accesos. El detalle vive en páginas propias
 * (soluciones, metodología, nosotros, contacto).
 */
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} lang={lang} />

      <section aria-labelledby="home-soluciones" className="border-t border-line bg-sand-100 py-20 lg:py-28">
        <div className="container-site">
          <SectionHeader
            id="home-soluciones"
            kicker={dict.home.solutionsKicker}
            title={dict.home.solutionsTitle}
            lead={dict.home.solutionsLead}
            align="split"
          />
          <div className="mt-12 lg:mt-16">
            <SolutionsGrid lang={lang} solutions={dict.solutions} viewLabel={dict.ui.viewSolution} />
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href={route(lang, "solutions")} variant="secondary">
              {dict.ui.allSolutions}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section aria-label={dict.home.explore.map((c) => c.title).join(" · ")} className="py-20 lg:py-24">
        <div className="container-site">
          <ExploreCards lang={lang} dict={dict} />
        </div>
      </section>

      <FinalCta dict={dict} lang={lang} />
    </>
  );
}
