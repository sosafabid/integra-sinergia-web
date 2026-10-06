import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowIcon } from "./icons";

type Variant = "primary" | "secondary" | "light" | "text" | "text-light";

const styles: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  light: "btn btn-light",
  text: "inline-flex items-center gap-2.5 font-semibold text-petrol",
  "text-light": "inline-flex items-center gap-2.5 font-semibold text-white",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  arrow?: boolean;
  icon?: ReactNode;
  children: ReactNode;
};

/**
 * Enlaces de acción. Rutas internas → next/link (navegación instantánea);
 * externas (WhatsApp, mailto) → <a>.
 */
export function ButtonLink({ variant = "primary", arrow = true, icon, className = "", children, href = "#", ...rest }: Props) {
  const isText = variant === "text" || variant === "text-light";
  const cls = `group ${styles[variant]} ${className}`;
  const content = (
    <>
      {icon}
      <span className={isText ? "link-line" : ""}>{children}</span>
      {arrow && (
        <ArrowIcon className="size-4 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {content}
    </a>
  );
}
