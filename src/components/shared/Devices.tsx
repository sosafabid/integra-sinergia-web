import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/** Capturas reales del sitio en computadora y teléfono. */
export function Devices({ alt, mobileAlt, priority = false }: { alt: string; mobileAlt: string; priority?: boolean }) {
  return (
    <div className="relative pb-[10%] pr-[8%]">
      <Reveal variant="mask" className="overflow-hidden rounded-xl bg-white shadow-[0_40px_80px_-40px_rgb(7_42_49/0.55)] ring-1 ring-black/5">
        <div className="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-2.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-ink/15" />
          <span className="size-2 rounded-full bg-ink/15" />
          <span className="size-2 rounded-full bg-ink/15" />
        </div>
        <Image
          src="/showcase/integra-desktop.jpg"
          alt={alt}
          width={1440}
          height={900}
          sizes="(min-width: 1024px) 50vw, 92vw"
          priority={priority}
          className="block h-auto w-full"
        />
      </Reveal>
      <Reveal
        variant="mask"
        delay={300}
        className="absolute bottom-0 right-0 w-[27%] min-w-[6.5rem] overflow-hidden rounded-[1.3rem] bg-ink p-[0.35rem] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.6)] sm:rounded-[1.75rem] sm:p-1.5"
      >
        <Image
          src="/showcase/integra-mobile.jpg"
          alt={mobileAlt}
          width={390}
          height={844}
          sizes="(min-width: 1024px) 14vw, 26vw"
          className="block h-auto w-full rounded-[1rem] sm:rounded-[1.35rem]"
        />
      </Reveal>
    </div>
  );
}
