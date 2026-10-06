import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./icons";

type Props = {
  kicker: string;
  title: ReactNode;
  lead?: string;
  back?: { href: string; label: string };
  children?: ReactNode;
};

/** Encabezado de página interna: mucho aire, un título, una frase. */
export function PageHeader({ kicker, title, lead, back, children }: Props) {
  return (
    <header className="pb-20 pt-36 sm:pt-44 lg:pb-28 lg:pt-52">
      <div className="wrap">
        {back && (
          <Link href={back.href} className="group t-caption mb-10 inline-flex items-center gap-3 text-ink-3 hover:text-ink">
            <ArrowIcon className="size-3.5 rotate-180 transition-transform duration-500 group-hover:-translate-x-1" aria-hidden="true" />
            {back.label}
          </Link>
        )}
        <Reveal>
          <p className="t-caption text-sand-deep">{kicker}</p>
          <h1 className="t-h1 mt-6 max-w-[16ch] text-ink">{title}</h1>
        </Reveal>
        {(lead || children) && (
          <Reveal delay={120} className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-12 lg:items-end">
            {lead && <p className="t-lead max-w-[40ch] text-ink-2 lg:col-span-7">{lead}</p>}
            {children && <div className="flex flex-wrap items-center gap-6 lg:col-span-5 lg:justify-end">{children}</div>}
          </Reveal>
        )}
      </div>
    </header>
  );
}
