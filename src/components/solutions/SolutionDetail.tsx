import Link from "next/link";
import type { AreaId, Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/icons";
import { contactRoute, solutionRoute } from "@/lib/routes";
import { whatsappLink } from "@/config/site";

type Props = { lang: Locale; dict: Dictionary; id: AreaId };

export function SolutionDetail({ lang, dict, id }: Props) {
  const { solutions, whatsapp, ui } = dict;
  const area = solutions.areas.find((a) => a.id === id)!;
  const byId = (x: AreaId) => solutions.areas.find((a) => a.id === x)!;

  return (
    <section aria-label={area.name} className="pb-28 lg:pb-40">
      <div className="wrap grid gap-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="t-caption text-ink-3">{solutions.labels.problem}</h2>
            <p className="t-h2 mt-6 text-ink">{area.problem}</p>
          </Reveal>

          <Reveal className="mt-20">
            <h2 className="t-caption text-ink-3">{solutions.labels.outcome}</h2>
            <ul className="mt-6 border-t border-line">
              {area.outcomes.map((o) => (
                <li key={o} className="t-h3 border-b border-line py-5 font-normal text-ink">
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-20">
            <h2 className="t-caption text-ink-3">{solutions.labels.why}</h2>
            <p className="t-lead mt-6 max-w-[40ch] text-ink">{area.why}</p>
          </Reveal>

          <Reveal className="mt-20">
            <h2 className="t-caption text-ink-3">{ui.related}</h2>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {area.related.map((r) => (
                <li key={r}>
                  <Link href={solutionRoute(lang, r)} className="link-line text-lg text-ink">
                    {byId(r).name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <Reveal className="border-t border-ink pt-8 lg:sticky lg:top-32">
            <p className="t-h2 text-ink">{ui.talkTitle}</p>
            <p className="mt-4 text-ink-2">{ui.talkText}</p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <ButtonLink href={contactRoute(lang, area.id)}>{area.cta}</ButtonLink>
              <ButtonLink
                href={whatsappLink(whatsapp.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                arrow={false}
                icon={<WhatsAppIcon className="size-4" aria-hidden="true" />}
              >
                {whatsapp.label}
              </ButtonLink>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}

export function SolutionPager({ lang, dict, id }: Props) {
  const { areas } = dict.solutions;
  const i = areas.findIndex((a) => a.id === id);
  const prev = areas[(i - 1 + areas.length) % areas.length];
  const next = areas[(i + 1) % areas.length];
  return (
    <nav aria-label={dict.ui.related} className="border-t border-line">
      <div className="wrap grid sm:grid-cols-2">
        <Link href={solutionRoute(lang, prev.id)} className="group flex flex-col gap-3 border-b border-line py-10 sm:border-b-0 sm:border-r sm:pr-10">
          <span className="t-caption text-ink-3">← {dict.ui.prev}</span>
          <span className="t-h3 text-ink transition-colors group-hover:text-petrol">{prev.name}</span>
        </Link>
        <Link href={solutionRoute(lang, next.id)} className="group flex flex-col items-end gap-3 py-10 text-right sm:pl-10">
          <span className="t-caption text-ink-3">{dict.ui.next} →</span>
          <span className="t-h3 text-ink transition-colors group-hover:text-petrol">{next.name}</span>
        </Link>
      </div>
    </nav>
  );
}
