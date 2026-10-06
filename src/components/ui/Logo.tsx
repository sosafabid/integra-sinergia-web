import Image from "next/image";

/**
 * Logo oficial (sin modificaciones de forma ni color).
 * TODO: reemplazar los PNG por la versión SVG oficial cuando esté disponible.
 */
export function Logo({ variant = "horizontal", className = "", priority = false }: { variant?: "horizontal" | "full"; className?: string; priority?: boolean }) {
  if (variant === "full") {
    return (
      <Image
        src="/brand/logo-integra-sinergia.png"
        alt="Integra Sinergia — Crece con sistemas sólidos."
        width={643}
        height={175}
        className={className}
        priority={priority}
      />
    );
  }
  return (
    <Image
      src="/brand/logo-horizontal.png"
      alt="Integra Sinergia"
      width={643}
      height={175}
      className={className}
      priority={priority}
    />
  );
}
