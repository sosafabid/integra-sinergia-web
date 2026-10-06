import type { CSSProperties } from "react";

type Props = {
  className?: string;
  animated?: boolean;
  tone?: "ink" | "light";
};

/**
 * Estructura geométrica inspirada en el isotipo (cubo isométrico con su retícula interna).
 * No reproduce el logo: es un lenguaje de líneas para la interfaz.
 * SVG puro, sin JS. La animación se desactiva con prefers-reduced-motion.
 */
export function Structure({ className = "", animated = true, tone = "ink" }: Props) {
  const C = { x: 260, y: 300 };
  const R = 240;
  const v = Array.from({ length: 6 }, (_, k) => {
    const a = ((-90 + 60 * k) * Math.PI) / 180;
    return { x: C.x + R * Math.cos(a), y: C.y + R * Math.sin(a) };
  });
  const mid = (a: { x: number; y: number }, b: { x: number; y: number }) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

  const main: [typeof C, typeof C][] = [
    ...v.map((p, i) => [p, v[(i + 1) % 6]] as [typeof C, typeof C]),
    [C, v[1]],
    [C, v[3]],
    [C, v[5]],
  ];
  const grid: [typeof C, typeof C][] = [
    [mid(v[0], v[1]), mid(v[5], C)],
    [mid(v[0], v[5]), mid(v[1], C)],
    [mid(v[5], C), mid(v[4], v[3])],
    [mid(v[5], v[4]), mid(C, v[3])],
    [mid(C, v[1]), mid(v[3], v[2])],
    [mid(C, v[3]), mid(v[1], v[2])],
  ];

  const stroke = tone === "light" ? "rgb(245 243 238 / 0.32)" : "rgb(20 27 27 / 0.32)";
  const strokeSoft = tone === "light" ? "rgb(245 243 238 / 0.14)" : "rgb(20 27 27 / 0.13)";
  const nodeFill = tone === "light" ? "var(--color-petrol)" : "var(--color-paper)";
  const accent = tone === "light" ? "var(--color-sand-light)" : "var(--color-green)";

  // pathLength=1 normaliza el trazo: la animación no depende del tamaño en pantalla
  const anim = (d: number) => (animated ? ({ "--len": 1, "--delay": `${d}ms` } as CSSProperties) : undefined);
  const path = `M${C.x},${C.y} L${v[1].x},${v[1].y} L${v[2].x},${v[2].y} L${v[3].x},${v[3].y} L${C.x},${C.y} L${v[5].x},${v[5].y} L${v[0].x},${v[0].y} L${v[1].x},${v[1].y}`;

  return (
    <svg viewBox="0 0 520 600" aria-hidden="true" className={className} fill="none">
      {grid.map(([a, b], i) => (
        <line
          key={`g${i}`}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke={strokeSoft}
          strokeWidth={1}
          pathLength={1}
          className={animated ? "draw" : ""}
          style={anim(1400 + i * 160)}
        />
      ))}
      {main.map(([a, b], i) => (
        <line
          key={`m${i}`}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke={stroke}
          strokeWidth={1}
          pathLength={1}
          className={animated ? "draw" : ""}
          style={anim(200 + i * 140)}
        />
      ))}
      {[...v, C].map((p, i) => (
        <circle
          key={`n${i}`}
          cx={p.x}
          cy={p.y}
          r={4.5}
          fill={nodeFill}
          stroke={i === 6 ? accent : stroke}
          strokeWidth={1.25}
          vectorEffect="non-scaling-stroke"
          className={animated ? "fade-in" : ""}
          style={animated ? ({ "--delay": `${1600 + i * 120}ms` } as CSSProperties) : undefined}
        />
      ))}
      {/* Una señal que recorre la estructura, lenta: todo está conectado */}
      {animated && (
        <circle r={3} fill={accent} className="motion-only fade-in" style={{ "--delay": "3200ms" } as CSSProperties}>
          <animateMotion dur="18s" repeatCount="indefinite" path={path} begin="3.2s" />
        </circle>
      )}
    </svg>
  );
}
