import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { paths } from "@/lib/routes";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/home/FinalCta";

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
  const { method } = dict;

  return (
    <>
      <PageHeader kicker={method.kicker} title={method.title} lead={method.lead} />
      <section aria-label={method.kicker} className="pb-28 lg:pb-40">
        <ol className="wrap">
          {method.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.name}
              delay={i * 80}
              className="grid gap-6 border-t border-line-2 py-12 last:border-b lg:grid-cols-12 lg:gap-10 lg:py-16"
            >
              <span className="t-caption text-ink-3 lg:col-span-1 lg:pt-5">
                {i + 1}/{method.steps.length}
              </span>
              <h2 className="t-h1 text-ink lg:col-span-5">{s.name}</h2>
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
                <p className="t-lead text-ink-2">{s.text}</p>
                <p className="mt-6 text-ink">
                  <span className="t-caption mr-3 text-sand-deep">{method.outputLabel}</span>
                  {s.output}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
      <FinalCta dict={dict} lang={lang} />
    </>
  );
}
