import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { areaFromSlug, areaSlugs, contactRoute, route, solutionPath } from "@/lib/routes";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SolutionDetail, SolutionPager } from "@/components/solutions/SolutionDetail";
import { Devices } from "@/components/home/DigitalShowcase";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(areaSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/soluciones/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const id = areaFromSlug(slug);
  if (!hasLocale(lang) || !id) return {};
  const dict = await getDictionary(lang);
  const area = dict.solutions.areas.find((a) => a.id === id)!;
  return pageMetadata(lang, solutionPath(id), area.name, area.description);
}

export default async function SolutionPage({ params }: PageProps<"/[lang]/soluciones/[slug]">) {
  const { lang, slug } = await params;
  const id = areaFromSlug(slug);
  if (!hasLocale(lang) || !id) notFound();
  const dict = await getDictionary(lang);
  const { solutions, pages, web, automation, digital } = dict;
  const area = solutions.areas.find((a) => a.id === id)!;
  const pillar = dict.pieces.pillars.find((p) => p.areas.includes(id));

  return (
    <>
      <PageHeader
        back={{ href: route(lang, "solutions"), label: pages.solutions.title }}
        kicker={pillar?.name ?? pages.solutions.title}
        title={area.name}
        lead={area.short}
      >
        <ButtonLink href={contactRoute(lang, id)}>{area.cta}</ButtonLink>
      </PageHeader>

      {/* Diseño web: la demostración va primero */}
      {id === "web" && (
        <section aria-label={digital.kicker} className="on-dark mb-28 bg-petrol py-20 text-paper lg:mb-40 lg:py-28">
          <div className="wrap">
            <Devices dict={dict} priority />
            <Reveal className="mt-16 border-t border-white/15 pt-8">
              <h2 className="t-caption text-sand-light">{web.processTitle}</h2>
              <ol className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                {web.process.map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="font-serif text-2xl sm:text-3xl">{step}</span>
                    {i < web.process.length - 1 && <span aria-hidden="true" className="h-px w-6 bg-sand" />}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>
      )}

      <SolutionDetail lang={lang} dict={dict} id={id} />

      {id === "automatizacion" && (
        <section aria-labelledby="ejemplos-title" className="border-t border-line py-24 lg:py-32">
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-4">
              <h2 id="ejemplos-title" className="t-h2 text-ink">
                {automation.examplesTitle}
              </h2>
            </Reveal>
            <ul className="lg:col-span-7 lg:col-start-6">
              {automation.examples.map((ex, i) => (
                <Reveal as="li" key={ex.title} delay={i * 80} className="grid gap-2 border-b border-line py-6 first:border-t sm:grid-cols-[12rem_1fr] sm:gap-8">
                  <span className="t-h3 text-ink">{ex.title}</span>
                  <span className="text-ink-2">{ex.text}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <SolutionPager lang={lang} dict={dict} id={id} />
    </>
  );
}
