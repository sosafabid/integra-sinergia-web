import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Hero } from "@/components/home/Hero";
import { FeaturedProject, Idea, People, SolutionsIntro } from "@/components/home/Sections";
import { CtaBand } from "@/components/shared/CtaBand";

/**
 * Inicio: una introducción de 30–60 segundos. La profundidad vive en las páginas internas.
 * Hero → Idea → Soluciones → Proyecto destacado → Personas → CTA
 */
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} lang={lang} />
      <Idea dict={dict} />
      <SolutionsIntro dict={dict} lang={lang} />
      <FeaturedProject dict={dict} lang={lang} />
      <People dict={dict} lang={lang} />
      <CtaBand dict={dict} lang={lang} />
    </>
  );
}
