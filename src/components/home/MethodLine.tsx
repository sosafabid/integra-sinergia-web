import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { route } from "@/lib/routes";

/** El método en una línea. El detalle vive en /metodologia. */
export function MethodLine({ dict, lang, showLink = true }: { dict: Dictionary; lang: Locale; showLink?: boolean }) {
  const { method } = dict;
  return (
    <section aria-labelledby="metodo-title" className="border-y border-line bg-paper-2/60 py-20 lg:py-24">
      <Reveal className="wrap grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4">
          <h2 id="metodo-title" className="t-h2 text-ink">
            {method.title}
          </h2>
          {showLink && (
            <ButtonLink href={route(lang, "method")} variant="text" className="mt-6">
              {method.cta}
            </ButtonLink>
          )}
        </div>
        <ol className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:col-span-7 lg:col-start-6 lg:justify-end">
          {method.steps.map((s, i) => (
            <li key={s.name} className="flex items-center gap-4">
              <span className="font-serif text-[1.6rem] leading-none text-ink sm:text-[2rem]">{s.name}</span>
              {i < method.steps.length - 1 && (
                <span aria-hidden="true" className="h-px w-6 bg-sand sm:w-10" />
              )}
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
