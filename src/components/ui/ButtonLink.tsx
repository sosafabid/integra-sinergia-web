import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowIcon } from "./icons";

type Variant = "solid" | "light" | "text" | "text-light";

const styles: Record<Variant, string> = {
  solid:
    "min-h-12 rounded-full bg-ink px-7 text-paper hover:bg-petrol",
  light:
    "min-h-12 rounded-full bg-paper px-7 text-ink hover:bg-white",
  text: "text-ink",
  "text-light": "text-paper",
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
export function ButtonLink({ variant = "solid", arrow = true, icon, className = "", children, href = "#", ...rest }: Props) {
  const isText = variant === "text" || variant === "text-light";
  const cls = `group inline-flex items-center justify-center gap-3 text-[0.95rem] font-medium tracking-[-0.005em] transition-colors duration-300 ${styles[variant]} ${className}`;
  const content = (
    <>
      {icon}
      <span className={isText ? "link-line" : ""}>{children}</span>
      {arrow && (
        <ArrowIcon className="size-4 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1" aria-hidden="true" />
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
