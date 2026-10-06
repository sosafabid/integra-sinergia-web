import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { contactRoute, paths, route } from "@/lib/routes";
import { UNSURE } from "@/lib/contact-events";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Method } from "@/components/sections/Method";
import { Connected } from "@/components/sections/Connected";
import { FinalCta } from "@/components/sections/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/metodologia">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, paths.method, pages.method.title, pages.method.description);
}

export default async function MethodPage({ params }: PageProps<"/[lang]/metodologia">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { method, ui } = dict;

  return (
    <>
      <PageHeader
        crumbs={[
          { href: route(lang, "home"), label: ui.breadcrumbHome },
          { href: route(lang, "method"), label: method.kicker },
        ]}
        kicker={method.kicker}
        title={method.title}
        lead={method.lead}
      >
        <ButtonLink href={contactRoute(lang, UNSURE)}>{method.cta}</ButtonLink>
      </PageHeader>
      <Method dict={dict} lang={lang} withHeader={false} />
      <Connected dict={dict} />
      <FinalCta dict={dict} lang={lang} />
    </>
  );
}
