"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { selectArea, UNSURE } from "@/lib/contact-events";

/** CTA que lleva al formulario con "No estoy seguro de qué necesito" preseleccionado. */
export function UnsureLink({ label, variant = "light" }: { label: string; variant?: "light" | "primary" }) {
  return (
    <ButtonLink href="#contacto" variant={variant} className="shrink-0" onClick={() => selectArea(UNSURE)}>
      {label}
    </ButtonLink>
  );
}
