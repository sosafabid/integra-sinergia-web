import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";
import { pathOf } from "@/lib/routes";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { TeamGrid } from "@/components/shared/TeamGrid";
import { MethodSteps } from "@/components/shared/MethodSteps";
import { CtaBand } from "@/components/shared/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/nosotros">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { pages } = await getDictionary(lang);
  return pageMetadata(lang, pathOf("about"), pages.about.title, pages.about.description);
}

/** Nosotros: quiénes somos → cómo trabajamos → experiencia → personas. */
export default async function AboutPage({ params }: PageProps<"/[lang]/nosotros">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { about, pages, photos, method } = dict;

  return (
    <>
      {/* Encabezado con la fotografía del equipo */}
      <header className="pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
        <div className="wrap">
          <Reveal>
            <p className="t-label text-green">{pages.about.title}</p>
            <h1 className="t-h1 mt-4 max-w-[18ch] text-ink">{about.title}</h1>
            <p className="t-lead mt-5 max-w-[44ch] text-ink-2">{about.lead}</p>
          </Reveal>
          <Reveal variant="mask" delay={150} className="mt-12 lg:mt-16">
            <Photo photo="team" text={photos.team} sizes="(min-width: 1280px) 1180px, 100vw" className="aspect-[16/9] rounded-xl sm:aspect-[21/9]" priority />
          </Reveal>
        </div>
      </header>

      <section aria-labelledby="quienes-title" className="py-16 lg:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <h2 id="quienes-title" className="t-h2 text-ink">
              {about.who.title}
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
            <p className="t-h3 font-medium text-ink-2">{about.who.text}</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="forma-title" className="border-t border-line py-16 lg:py-24">
        <div className="wrap">
          <Reveal>
            <h2 id="forma-title" className="t-h2 text-ink">
              {about.howWeWork.title}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {about.howWeWork.principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80} className="border-t border-line-2 pt-5">
                <p className="t-h3 text-ink">{p.title}</p>
                <p className="mt-2 text-ink-2">{p.text}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12">
            <MethodSteps method={method} />
          </div>
        </div>
      </section>

      {/* Experiencia: composición editorial de momentos reales */}
      <section aria-labelledby="experiencia-title" className="bg-surface py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="t-label text-green">{about.experience.kicker}</p>
            <h2 id="experiencia-title" className="t-h2 mt-3 text-ink">
              {about.experience.title}
            </h2>
            <p className="mt-5 text-ink-2">{about.experience.text}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {about.experience.areas.map((a) => (
                <li key={a} className="rounded-full border border-line-2 bg-white px-3.5 py-1.5 text-[0.875rem] font-medium text-ink">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid grid-cols-6 gap-4 lg:col-span-7 lg:col-start-6">
            <Reveal variant="mask" className="col-span-6 sm:col-span-4">
              <Photo photo="brasil" text={photos.brasil} sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[3/2] rounded-xl" showCaption />
            </Reveal>
            <Reveal variant="mask" delay={120} className="col-span-3 sm:col-span-2 sm:self-end">
              <Photo photo="panel" text={photos.panel} sizes="(min-width: 1024px) 19vw, 50vw" className="aspect-[3/4] rounded-xl" showCaption />
            </Reveal>
            <Reveal variant="mask" delay={180} className="col-span-3 sm:col-span-2">
              <Photo photo="foro" text={photos.foro} sizes="(min-width: 1024px) 19vw, 50vw" className="aspect-[3/4] rounded-xl" showCaption />
            </Reveal>
            <Reveal variant="mask" delay={240} className="col-span-6 sm:col-span-4">
              <Photo photo="sostenibilidad" text={photos.sostenibilidad} sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[3/2] rounded-xl" showCaption />
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="equipo-title" className="py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <h2 id="equipo-title" className="t-h2 text-ink">
              {about.people.title}
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <TeamGrid dict={dict} />
          </div>
        </div>
      </section>

      <CtaBand dict={dict} lang={lang} />
    </>
  );
}
