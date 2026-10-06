"use client";

import { useState } from "react";

type Step = { name: string; text: string };

/**
 * Proceso de diseño web como línea interactiva.
 * Desktop: los pasos forman una línea; al pasar el cursor o enfocar, cada uno muestra su frase.
 * Móvil: lista vertical con todas las frases visibles.
 */
export function ProcessStepper({ steps, title }: { steps: Step[]; title: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <h2 className="t-h2 text-white">{title}</h2>

      {/* Desktop */}
      <div className="mt-12 hidden lg:block">
        <ol className="relative grid grid-cols-7" role="tablist" aria-label={title}>
          <span aria-hidden="true" className="absolute left-0 right-0 top-[0.4375rem] h-px bg-white/20" />
          <span
            aria-hidden="true"
            className="absolute left-0 top-[0.4375rem] h-px bg-sand-light transition-[width] duration-700 ease-[var(--ease-out-soft)]"
            style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
          />
          {steps.map((s, i) => (
            <li key={s.name} className="relative">
              <button
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls="paso-detalle"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex flex-col items-start gap-5 pr-4 text-left"
              >
                <span
                  className={`relative z-10 size-3.5 rounded-full border transition-colors duration-500 ${
                    i <= active ? "border-sand-light bg-sand-light" : "border-white/40 bg-petrol"
                  }`}
                />
                <span className={`font-semibold transition-colors ${active === i ? "text-white" : "text-white/55 group-hover:text-white/80"}`}>
                  {s.name}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <p id="paso-detalle" role="tabpanel" aria-live="polite" className="t-lead mt-10 min-h-[2lh] max-w-[46ch] text-white/80">
          {steps[active].text}
        </p>
      </div>

      {/* Móvil y tablet */}
      <ol className="mt-10 border-l border-white/20 lg:hidden">
        {steps.map((s) => (
          <li key={s.name} className="relative pb-7 pl-6 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[0.3125rem] top-1.5 size-2.5 rounded-full bg-sand-light" />
            <p className="font-semibold text-white">{s.name}</p>
            <p className="t-small mt-1 text-white/70">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
