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
    <div className="wrap flex min-h-[75dvh] flex-col justify-center pb-20 pt-36">
      <p className="t-label text-green">404</p>
      <h1 className="t-h1 mt-4 max-w-[18ch] text-ink">{dict.notFound.title}</h1>
      <p className="t-lead mt-4 text-ink-2">{dict.notFound.text}</p>
      <ButtonLink href={route(lang, "home")} className="mt-10 self-start">
        {dict.notFound.cta}
      </ButtonLink>
    </div>
  );
}
