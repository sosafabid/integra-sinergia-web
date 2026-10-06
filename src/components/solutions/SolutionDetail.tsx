import Link from "next/link";
import type { AreaId, Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AreaIcon, ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/icons";
import { contactRoute, solutionRoute } from "@/lib/routes";
import { whatsappLink } from "@/config/site";

type Props = { lang: Locale; dict: Dictionary; id: AreaId };

/** Cuerpo de la página de una solución: problema, entregables, enfoque y conexiones. */
export function SolutionDetail({ lang, dict, id }: Props) {
  const { solutions, whatsapp } = dict;
  const area = solutions.areas.find((a) => a.id === id)!;
  const byId = (x: AreaId) => solutions.areas.find((a) => a.id === x)!;

  return (
    <section aria-label={area.name} className="py-20 lg:py-28">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-14 lg:col-span-7">
          <Reveal>
            <h2 className="eyebrow text-sand-700">{solutions.labels.problem}</h2>
            <p className="display-3 mt-4 font-medium text-petrol-900">{area.problem}</p>
          </Reveal>

          <Reveal>
            <h2 className="eyebrow text-sand-700">{solutions.labels.outcome}</h2>
            <ul className="mt-5 border-t border-line">
              {area.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-4 border-b border-line py-5">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-green-700/10 text-green-700">
                    <CheckIcon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-lg font-medium text-petrol-900">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="border-l-2 border-sand-400 pl-6">
            <h2 className="eyebrow text-sand-700">{solutions.labels.why}</h2>
            <p className="lead mt-3 font-medium text-petrol-900">{area.why}</p>
          </Reveal>

          <Reveal>
            <h2 className="eyebrow text-sand-700">{solutions.labels.connects}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {area.connects.map((c) => (
                <li key={c}>
                  <Link
                    href={solutionRoute(lang, c)}
                    className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-petrol-900"
                  >
                    <AreaIcon area={c} className="size-5 text-green-700" aria-hidden="true" />
                    <span className="flex items-end justify-between gap-2 font-semibold leading-snug text-petrol-900">
                      {byId(c).name}
                      <ArrowIcon className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Tarjeta de conversión, fija al hacer scroll en desktop */}
        <aside className="lg:col-span-4 lg:col-start-9">
          <Reveal className="on-dark rounded-3xl bg-petrol-900 p-8 text-sand-50 lg:sticky lg:top-28">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-sand-400">
              <AreaIcon area={area.id} className="size-6" aria-hidden="true" />
            </span>
            <p className="display-3 mt-6">{dict.ui.talkTitle}</p>
            <p className="mt-3 leading-relaxed text-sand-100/75">{dict.ui.talkText}</p>
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink href={contactRoute(lang, area.id)} variant="light">
                {area.cta}
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(whatsapp.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-light"
                arrow={false}
                icon={<WhatsAppIcon className="size-5" aria-hidden="true" />}
              >
                {whatsapp.floating}
              </ButtonLink>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}

/** Navegación anterior / siguiente entre soluciones. */
export function SolutionPager({ lang, dict, id }: Props) {
  const { areas } = dict.solutions;
  const i = areas.findIndex((a) => a.id === id);
  const prev = areas[(i - 1 + areas.length) % areas.length];
  const next = areas[(i + 1) % areas.length];
  return (
    <nav aria-label={dict.ui.otherSolutions} className="border-t border-line">
      <div className="container-site grid sm:grid-cols-2">
        <Link href={solutionRoute(lang, prev.id)} className="group flex flex-col gap-2 border-b border-line py-8 sm:border-b-0 sm:border-r sm:pr-8">
          <span className="eyebrow text-sand-700">← {dict.ui.prev}</span>
          <span className="text-xl font-semibold tracking-tight text-petrol-900 transition-colors group-hover:text-green-700">{prev.name}</span>
        </Link>
        <Link href={solutionRoute(lang, next.id)} className="group flex flex-col items-end gap-2 py-8 text-right sm:pl-8">
          <span className="eyebrow text-sand-700">{dict.ui.next} →</span>
          <span className="text-xl font-semibold tracking-tight text-petrol-900 transition-colors group-hover:text-green-700">{next.name}</span>
        </Link>
      </div>
    </nav>
  );
}
