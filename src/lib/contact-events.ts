/** Opción especial del formulario: "No estoy seguro de qué necesito". */
export const UNSURE = "no-seguro" as const;

import type { AreaId } from "@/content/types";
export type InterestId = AreaId | typeof UNSURE;

const INTEREST_IDS: readonly string[] = ["gestion", "sostenibilidad", "cumplimiento", "datos", "automatizacion", "web", UNSURE];

/** Valida el parámetro ?area= que usan los CTA para preseleccionar el formulario. */
export function isInterestId(value: string | null): value is InterestId {
  return value !== null && INTEREST_IDS.includes(value);
}
