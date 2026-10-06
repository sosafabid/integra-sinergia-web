"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { selectArea, type InterestId } from "@/lib/contact-events";

/** CTA genérico que preselecciona un área en el formulario. */
export function AreaCtaLink({
  label,
  area,
  variant = "light",
}: {
  label: string;
  area: InterestId;
  variant?: "light" | "primary";
}) {
  return (
    <ButtonLink href="#contacto" variant={variant} onClick={() => selectArea(area)}>
      {label}
    </ButtonLink>
  );
}

export function WebQuoteLink({ label }: { label: string }) {
  return <AreaCtaLink label={label} area="web" />;
}
