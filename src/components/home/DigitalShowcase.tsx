import Image from "next/image";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { route } from "@/lib/routes";

/** Composición de dispositivos con capturas reales del sitio de Integra. */
export function Devices({ dict, priority = false }: { dict: Dictionary; priority?: boolean }) {
  return (
    <div className="relative pb-[12%] pr-[6%] sm:pr-[10%]">
      <Reveal variant="mask" className="overflow-hidden rounded-[0.9rem] bg-petrol-deep shadow-[0_60px_120px_-60px_rgb(0_0_0/0.7)] ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden="true">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <Image
          src="/showcase/integra-desktop.jpg"
          alt={dict.digital.mockupAlt}
          width={1440}
          height={900}
          sizes="(min-width: 1024px) 70vw, 92vw"
          priority={priority}
          className="block h-auto w-full"
        />
      </Reveal>
      <Reveal
        variant="mask"
        delay={350}
        className="absolute bottom-0 right-0 w-[26%] min-w-[7.5rem] overflow-hidden rounded-[1.4rem] bg-ink p-[0.4rem] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.75)] sm:rounded-[2rem] sm:p-2"
      >
        <Image
          src="/showcase/integra-mobile.jpg"
          alt={dict.digital.mobileAlt}
          width={390}
          height={844}
          sizes="(min-width: 1024px) 18vw, 26vw"
          className="block h-auto w-full rounded-[1.05rem] sm:rounded-[1.55rem]"
        />
      </Reveal>
    </div>
  );
}

export function DigitalShowcase({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { digital } = dict;
  return (
    <section aria-labelledby="digital-title" className="on-dark overflow-hidden bg-petrol py-28 text-paper lg:py-40">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="t-caption text-sand-light">{digital.kicker}</p>
            <h2 id="digital-title" className="t-h1 mt-6 max-w-[15ch]">
              {digital.title}
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
            <p className="t-lead text-paper/70">{digital.lead}</p>
            <ButtonLink href={route(lang, "web")} variant="text-light" className="mt-8">
              {digital.cta}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-20 lg:mt-28">
          <Devices dict={dict} />
        </div>
      </div>
    </section>
  );
}
