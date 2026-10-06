import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { pathOf } from "@/lib/routes";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { TeamGrid } from "@/components/shared/TeamGrid";
import { MethodSteps } from "@/components/shared/MethodSteps";
import { CtaBand } from "@/components/shared/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/nosotros">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, pathOf("about"), pages.about.title, pages.about.description);
}

export default async function AboutPage({ params }: PageProps<"/[lang]/nosotros">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { about, pages, team, method } = dict;

  return (
    <>
      <PageHero kicker={pages.about.title} title={about.title} lead={about.lead} />

      {/* Equipo primero: es lo más humano */}
      <section aria-labelledby="equipo-title" className="py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <h2 id="equipo-title" className="t-h2 text-ink">
              {about.team.title}
            </h2>
            <p className="t-lead mt-4 text-ink-2">{about.team.lead}</p>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <TeamGrid members={team.members} pending={team.pending} />
          </div>
        </div>
      </section>

      <section aria-labelledby="por-que-title" className="border-t border-line py-20 lg:py-28">
        <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <h2 id="por-que-title" className="t-h2 text-ink">
              {about.why.title}
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
            <p className="t-h3 font-medium text-ink-2">{about.why.text}</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="pensamos-title" className="bg-surface py-20 lg:py-28">
        <div className="wrap">
          <Reveal>
            <h2 id="pensamos-title" className="t-h2 text-ink">
              {about.thinking.title}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {about.thinking.principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80} className="border-t border-line-2 pt-5">
                <p className="t-h3 text-ink">{p.title}</p>
                <p className="mt-2 text-ink-2">{p.text}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-16">
            <Reveal>
              <h3 className="t-label text-ink-3">{method.title}</h3>
            </Reveal>
            <div className="mt-5">
              <MethodSteps method={method} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand dict={dict} lang={lang} />
    </>
  );
}
