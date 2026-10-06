"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  /** "fade" (por defecto) o "mask" para revelar imágenes */
  variant?: "fade" | "mask" | "none";
};

/**
 * Marca el elemento como visible al entrar en pantalla (una sola vez).
 * La animación la define el CSS (.reveal, .reveal-mask, .connector).
 */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "", variant = "fade" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.visible = "true";
      return;
    }
    // Un elemento con clip-path no "intersecta" mientras está recortado,
    // así que en la variante "mask" se observa al contenedor padre.
    const target = variant === "mask" && el.parentElement ? el.parentElement : el;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [variant]);

  const cls = variant === "fade" ? "reveal" : variant === "mask" ? "reveal-mask" : "";
  return (
    <Tag ref={ref} className={`${cls} ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
