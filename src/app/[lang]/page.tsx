import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Pieces } from "@/components/home/Pieces";
import { DigitalShowcase } from "@/components/home/DigitalShowcase";
import { Automation } from "@/components/home/Automation";
import { MethodLine } from "@/components/home/MethodLine";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { TeamSection } from "@/components/home/TeamSection";
import { FinalCta } from "@/components/home/FinalCta";

/**
 * Inicio. Genera deseo de conocer más; la profundidad vive en las páginas internas.
 * Hero → Manifiesto → Piezas → Diseño y tecnología → Método → Proyectos → Equipo → CTA
 */
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} lang={lang} />
      <Manifesto dict={dict} />
      <Pieces dict={dict} lang={lang} />
      <DigitalShowcase dict={dict} lang={lang} />
      <Automation dict={dict} lang={lang} />
      <MethodLine dict={dict} lang={lang} />
      <ProjectsShowcase dict={dict} lang={lang} />
      <TeamSection dict={dict} />
      <FinalCta dict={dict} lang={lang} />
    </>
  );
}
