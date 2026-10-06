import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Crumb = { href: string; label: string };

type Props = {
  crumbs: Crumb[];
  kicker: string;
  title: ReactNode;
  lead?: string;
  aside?: ReactNode;
  children?: ReactNode;
};

/** Encabezado de página interna: migas de pan, título editorial y acciones. */
export function PageHeader({ crumbs, kicker, title, lead, aside, children }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-line pt-[4.5rem] lg:pt-20">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_80%_20%,black_10%,transparent_65%)]" />
      <div className="container-site relative grid gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-end lg:pb-20 lg:pt-16">
        <div className="lg:col-span-8">
          <nav aria-label="Breadcrumb">
            <ol className="eyebrow flex flex-wrap items-center gap-2 text-ink-muted">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.href} className="transition-colors hover:text-petrol-900">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-sand-700">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <Reveal>
            <p className="eyebrow mt-10 flex items-center gap-3 text-sand-700">
              <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-green-700" />
              {kicker}
            </p>
            <h1 className="display-1 mt-5 text-petrol-900">{title}</h1>
          </Reveal>
          {lead && (
            <Reveal delay={100}>
              <p className="lead mt-6 max-w-2xl text-ink-soft">{lead}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={160} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              {children}
            </Reveal>
          )}
        </div>
        {aside && <div className="lg:col-span-4">{aside}</div>}
      </div>
    </header>
  );
}
