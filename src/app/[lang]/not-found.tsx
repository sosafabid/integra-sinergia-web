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
    <div className="grid-bg flex min-h-[80dvh] flex-col items-center justify-center px-5 pt-20 text-center">
      <p className="eyebrow text-sand-700">404</p>
      <h1 className="display-2 mt-4 max-w-xl text-petrol-900">{dict.notFound.title}</h1>
      <p className="lead mt-4 text-ink-soft">{dict.notFound.text}</p>
      <ButtonLink href={route(lang, "home")} className="mt-10">
        {dict.notFound.cta}
      </ButtonLink>
    </div>
  );
}
