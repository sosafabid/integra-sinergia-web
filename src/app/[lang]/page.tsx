import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { whatsappLink } from "@/config/site";
import { buildJsonLd } from "@/lib/structured-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Connected } from "@/components/sections/Connected";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { Method } from "@/components/sections/Method";
import { WebDesign } from "@/components/sections/WebDesign";
import { Automation } from "@/components/sections/Automation";
import { Sectors } from "@/components/sections/Sectors";
import { Team } from "@/components/sections/Team";
import { Projects } from "@/components/sections/Projects";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const jsonLd = buildJsonLd(lang, dict);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-petrol-900 focus:px-5 focus:py-3 focus:text-sand-50"
      >
        {dict.common.skip}
      </a>
      <Navbar lang={lang} nav={dict.nav} common={dict.common} />

      <main id="contenido">
        {/* Narrativa: ¿Qué hacen? → Entiendo el problema → Todo está conectado → Soluciones →
            Cómo trabajan → Web e IA como capacidades diferenciales → Para quién → Quiénes son → Contacto */}
        <Hero dict={dict} />
        <Problem dict={dict} />
        <Connected dict={dict} />
        <SolutionsSection dict={dict} />
        <Method dict={dict} />
        <WebDesign dict={dict} />
        <Automation dict={dict} />
        <Sectors dict={dict} />
        <Team dict={dict} />
        <Projects dict={dict} />
        <FinalCta dict={dict} />
        <Contact dict={dict} lang={lang} />
      </main>

      <Footer dict={dict} />
      <WhatsAppFloat href={whatsappLink(dict.whatsapp.defaultMessage)} label={dict.whatsapp.floating} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
