import { lang as rootLang } from "next/root-params";
import { hasLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default async function NotFound() {
  const value = await rootLang();
  const lang = hasLocale(value) ? value : defaultLocale;
  const dict = await getDictionary(lang);

  return (
    <main className="grid-bg flex min-h-dvh flex-col items-center justify-center px-5 text-center">
      <a href={`/${lang}`} aria-label={dict.common.homeLabel}>
        <Logo className="h-10 w-auto" />
      </a>
      <p className="eyebrow mt-16 text-sand-700">404</p>
      <h1 className="display-2 mt-4 max-w-xl text-petrol-900">{dict.notFound.title}</h1>
      <p className="lead mt-4 text-ink-soft">{dict.notFound.text}</p>
      <ButtonLink href={`/${lang}`} className="mt-10">
        {dict.notFound.cta}
      </ButtonLink>
    </main>
  );
}
