import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { paths } from "@/lib/routes";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TeamSection } from "@/components/home/TeamSection";
import { MethodLine } from "@/components/home/MethodLine";
import { FinalCta } from "@/components/home/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/nosotros">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, paths.about, pages.about.title, pages.about.description);
}

export default async function AboutPage({ params }: PageProps<"/[lang]/nosotros">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { about, pages } = dict;

  return (
    <>
      <PageHeader kicker={pages.about.title} title={about.title} lead={about.lead} />
      <section aria-label={pages.about.title} className="pb-28 lg:pb-36">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          {about.body.map((p, i) => (
            <Reveal key={p} delay={i * 120} className={i === 0 ? "lg:col-span-6" : "lg:col-span-5 lg:col-start-8 lg:pt-32"}>
              <p className={i === 0 ? "t-h2 text-ink" : "t-lead text-ink-2"}>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <TeamSection dict={dict} />
      <MethodLine dict={dict} lang={lang} />
      <FinalCta dict={dict} lang={lang} />
    </>
  );
}
