import type { AreaId } from "@/content/types";

/** Opción especial del formulario: "No estoy seguro de qué necesito". */
export const UNSURE = "no-seguro" as const;
export type InterestId = AreaId | typeof UNSURE;

const EVENT = "integra:select-area";

const INTEREST_IDS: readonly string[] = ["gestion", "sostenibilidad", "cumplimiento", "datos", "automatizacion", "web", UNSURE];

export function isInterestId(value: string | null): value is InterestId {
  return value !== null && INTEREST_IDS.includes(value);
}

/** Preselecciona un área en el formulario de contacto desde cualquier CTA. */
export function selectArea(id: InterestId) {
  window.dispatchEvent(new CustomEvent<InterestId>(EVENT, { detail: id }));
}

export function onSelectArea(handler: (id: InterestId) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<InterestId>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
