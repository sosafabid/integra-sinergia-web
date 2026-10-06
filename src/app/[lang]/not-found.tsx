import { lang as rootLang } from "next/root-params";
import { hasLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { route } from "@/lib/routes";

export default async function NotFound() {
  const value = await rootLang();
  const lang = hasLocale(value) ? value : defaultLocale;
  const dict = await getDictionary(lang);

  return (
    <div className="wrap flex min-h-[80dvh] flex-col justify-end pb-24 pt-40">
      <p className="t-caption text-sand-deep">404</p>
      <h1 className="t-h1 mt-6 max-w-[14ch] text-ink">{dict.notFound.title}</h1>
      <p className="t-lead mt-6 text-ink-2">{dict.notFound.text}</p>
      <ButtonLink href={route(lang, "home")} className="mt-10 self-start">
        {dict.notFound.cta}
      </ButtonLink>
    </div>
  );
}
