import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { fontSans } from "@/fonts";
import { localize } from "@/lib/routes";
import { hasLocale, localeMeta, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { siteConfig, whatsappLink } from "@/config/site";
import { buildJsonLd } from "@/lib/structured-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const { meta } = dict;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: meta.title, template: meta.titleTemplate },
    description: meta.description,
    keywords: meta.keywords,
    applicationName: siteConfig.name,
    authors: siteConfig.founders.map((name) => ({ name })),
    creator: siteConfig.name,
    alternates: {
      canonical: localize(lang, ""),
      languages: { "es-CR": "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: meta.title,
      description: meta.description,
      url: localize(lang, ""),
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeMeta[l].ogLocale),
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={localeMeta[lang].htmlLang}
      className={fontSans.variable}
      suppressHydrationWarning
    >
      <head>
        {/* Activa animaciones de aparición solo si hay JS (el contenido nunca queda oculto sin JS) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-white text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-petrol focus:px-5 focus:py-3 focus:text-white"
        >
          {dict.common.skip}
        </a>
        <Navbar lang={lang} nav={dict.nav} common={dict.common} solutions={dict.solutions.map((s) => ({ id: s.id, name: s.name }))} />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer dict={dict} lang={lang} />
        <WhatsAppFloat href={whatsappLink(dict.whatsapp.defaultMessage)} label={dict.nav.cta} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(dict)).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
