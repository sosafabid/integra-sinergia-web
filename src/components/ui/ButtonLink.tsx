import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-[0.95rem] font-semibold tracking-[-0.005em] transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-[var(--ease-out-soft)] min-h-12 px-6 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-petrol-900 text-sand-50 hover:bg-green-800 shadow-[0_1px_0_rgb(255_255_255/0.08)_inset]",
  secondary: "border border-line-strong text-petrol-900 hover:border-petrol-900 hover:bg-white",
  ghost: "px-0 min-h-0 text-petrol-900 underline-offset-4 hover:text-green-700",
  light: "bg-sand-50 text-petrol-900 hover:bg-white",
  "outline-light": "border border-white/25 text-sand-50 hover:border-sand-50 hover:bg-white/5",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
  arrow?: boolean;
  icon?: ReactNode;
};

/** Enlace con apariencia de botón (los CTA del sitio son navegación, no acciones). */
export function ButtonLink({ variant = "primary", arrow = true, icon, className = "", children, ...rest }: Props) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </a>
  );
}
