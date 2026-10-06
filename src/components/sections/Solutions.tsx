"use client";

import { useState } from "react";
import type { AreaId, Dictionary } from "@/content/types";
import { AreaIcon, CheckIcon, PlusIcon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { selectArea } from "@/lib/contact-events";

type Props = {
  solutions: Dictionary["solutions"];
};

/**
 * Explorador de soluciones.
 * Un único DOM para todos los tamaños: acordeón en móvil; en desktop la lista queda
 * a la izquierda y el panel activo se ubica en la columna derecha (CSS grid + display: contents).
 */
export function Solutions({ solutions }: Props) {
  const [active, setActive] = useState<AreaId>(solutions.areas[0].id);
  /** En móvil (acordeón), mantiene a la vista el encabezado del área abierta. */
  const open = (id: AreaId, buttonId: string) => {
    setActive(id);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() =>
        document.getElementById(buttonId)?.scrollIntoView({ block: "start", behavior: "smooth" }),
      );
    }
  };
  const labelOf = (id: AreaId) => solutions.areas.find((a) => a.id === id)?.label ?? id;

  return (
    <ul className="border-t border-line lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-14 lg:border-t-0">
      {solutions.areas.map((area, i) => {
        const isOpen = active === area.id;
        const panelId = `solucion-${area.id}`;
        const buttonId = `solucion-btn-${area.id}`;
        return (
          <li key={area.id} className="border-b border-line lg:contents">
            <h3 className={`lg:col-start-1 lg:border-b lg:border-line ${i === 0 ? "lg:border-t" : ""}`}>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => open(area.id, buttonId)}
                className={`group flex w-full items-center gap-4 py-5 text-left transition-colors duration-300 sm:gap-5 lg:py-6 ${
                  isOpen ? "text-petrol-900" : "text-ink-soft hover:text-petrol-900"
                }`}
              >
                <span className="eyebrow w-6 shrink-0 tabular-nums text-sand-700">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-semibold tracking-tight sm:text-xl">{area.name}</span>
                  <span className="mt-1 block text-[0.92rem] font-normal text-ink-muted">{area.short}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-petrol-900 bg-petrol-900 text-sand-50 lg:rotate-0"
                      : "border-line-strong text-petrol-900 group-hover:border-petrol-900"
                  }`}
                >
                  <PlusIcon className="size-4 lg:hidden" />
                  <AreaIcon area={area.id} className="hidden size-4 lg:block" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-8 lg:col-start-2 lg:row-span-6 lg:row-start-1 lg:pb-0"
            >
              <article className="lg:sticky lg:top-28 lg:rounded-3xl lg:border lg:border-line lg:bg-white lg:p-10 lg:shadow-[0_30px_60px_-45px_rgb(8_48_58/0.4)]">
                <div className="hidden items-center gap-4 lg:flex">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-petrol-900 text-sand-50">
                    <AreaIcon area={area.id} className="size-6" aria-hidden="true" />
                  </span>
                  <p className="display-3 text-petrol-900">{area.name}</p>
                </div>

                <dl className="grid gap-7 lg:mt-9">
                  <div>
                    <dt className="eyebrow text-sand-700">{solutions.labels.problem}</dt>
                    <dd className="mt-2.5 text-[1.05rem] leading-relaxed text-ink-soft">{area.problem}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-sand-700">{solutions.labels.outcome}</dt>
                    <dd className="mt-3">
                      <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-x-6">
                        {area.outcomes.map((o) => (
                          <li key={o} className="flex gap-2.5 text-[0.98rem] leading-snug text-petrol-900">
                            <CheckIcon className="mt-0.5 size-4 shrink-0 text-green-700" aria-hidden="true" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div className="border-l-2 border-sand-400 pl-5">
                    <dt className="eyebrow text-sand-700">{solutions.labels.why}</dt>
                    <dd className="mt-2.5 text-[1.05rem] font-medium leading-relaxed text-petrol-900">{area.why}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-sand-700">{solutions.labels.connects}</dt>
                    <dd className="mt-3 flex flex-wrap gap-2">
                      {area.connects.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => open(c, `solucion-btn-${c}`)}
                          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 text-[0.85rem] font-medium text-petrol-900 transition-colors hover:border-green-700 hover:text-green-700"
                        >
                          <span aria-hidden="true" className="size-1.5 rounded-full bg-green-700" />
                          {labelOf(c)}
                        </button>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="mt-9">
                  <ButtonLink href="#contacto" onClick={() => selectArea(area.id)}>
                    {area.cta}
                  </ButtonLink>
                </div>
              </article>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
