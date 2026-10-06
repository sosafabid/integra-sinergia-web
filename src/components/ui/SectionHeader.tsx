import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  kicker: string;
  title: ReactNode;
  lead?: string;
  tone?: "light" | "dark";
  align?: "left" | "split";
  id?: string;
};

/**
 * Encabezado de sección con índice técnico (01 — Kicker).
 * "split" coloca el título a la izquierda y el texto de apoyo a la derecha en desktop.
 */
export function SectionHeader({ index, kicker, title, lead, tone = "light", align = "left", id }: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={
        align === "split"
          ? "grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10"
          : "max-w-3xl"
      }
    >
      <Reveal className={align === "split" ? "lg:col-span-7" : ""}>
        <p className={`eyebrow flex items-center gap-3 ${dark ? "text-sand-400" : "text-sand-700"}`}>
          <span className="tabular-nums">{index}</span>
          <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-sand-400/50" : "bg-sand-500/60"}`} />
          <span>{kicker}</span>
        </p>
        <h2 id={id} className={`display-2 mt-5 ${dark ? "text-sand-50" : "text-petrol-900"}`}>
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={120} className={align === "split" ? "lg:col-span-5 lg:pb-2" : "mt-6"}>
          <p className={`lead ${dark ? "text-sand-100/75" : "text-ink-soft"}`}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
