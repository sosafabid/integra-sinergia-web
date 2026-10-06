import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./icons";

type Props = {
  kicker?: string;
  title: ReactNode;
  lead?: string;
  back?: { href: string; label: string };
  children?: ReactNode;
  /** Contenido a la derecha en desktop (imagen, estructura…) */
  aside?: ReactNode;
};

/** Encabezado de página interna: compacto, una idea, acciones claras. */
export function PageHero({ kicker, title, lead, back, children, aside }: Props) {
  return (
    <header className="border-b border-line bg-surface pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-44">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          {back && (
            <Link href={back.href} className="group t-small mb-8 inline-flex items-center gap-2 font-medium text-ink-3 hover:text-ink">
              <ArrowIcon className="size-3.5 rotate-180 transition-transform duration-500 group-hover:-translate-x-0.5" aria-hidden="true" />
              {back.label}
            </Link>
          )}
          <Reveal>
            {kicker && <p className="t-label text-green">{kicker}</p>}
            <h1 className={`t-h1 max-w-[20ch] text-ink ${kicker ? "mt-4" : ""}`}>{title}</h1>
            {lead && <p className="t-lead mt-6 max-w-[44ch] text-ink-2">{lead}</p>}
          </Reveal>
          {children && (
            <Reveal delay={120} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {children}
            </Reveal>
          )}
        </div>
        {aside && <div className="lg:col-span-5">{aside}</div>}
      </div>
    </header>
  );
}
