import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  kicker?: string;
  title: ReactNode;
  id?: string;
  action?: ReactNode;
  tone?: "light" | "dark";
};

/** Encabezado de sección: etiqueta + título + acción opcional a la derecha. */
export function SectionHead({ kicker, title, id, action, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {kicker && <p className={`t-label ${dark ? "text-sand-light" : "text-green"}`}>{kicker}</p>}
        <h2 id={id} className={`t-h2 max-w-[22ch] ${kicker ? "mt-3" : ""} ${dark ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
