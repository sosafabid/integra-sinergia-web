import type { CSSProperties } from "react";
import type { AreaId } from "@/content/types";

type Node = { id: AreaId; label: string };

type Props = {
  nodes: Node[];
  center: string;
  title: string;
  tone?: "light" | "dark";
  animated?: boolean;
  highlight?: AreaId | null;
  connections?: AreaId[];
  className?: string;
  /** Prefijo único si el diagrama aparece más de una vez en la página */
  id?: string;
};

const W = 560;
const H = 480;
const CX = W / 2;
const CY = H / 2;
const R = 160;

function position(i: number) {
  const angle = (-90 + i * 60) * (Math.PI / 180);
  return { x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle), angle };
}

/**
 * Diagrama del sistema integrado. Inspirado en la geometría del isotipo
 * (hexágono, nodos y conexiones) sin reproducir el logo.
 * Es SVG estático renderizado en servidor: cero JS, accesible con <title>.
 */
export function SystemDiagram({
  nodes,
  center,
  title,
  tone = "light",
  animated = true,
  highlight = null,
  connections = [],
  className = "",
  id = "sysdiag",
}: Props) {
  const dark = tone === "dark";
  const pts = nodes.map((n, i) => ({ ...n, ...position(i) }));
  const lineColor = dark ? "rgb(255 255 255 / 0.22)" : "rgb(8 48 58 / 0.22)";
  const accent = dark ? "var(--color-sand-400)" : "var(--color-green-700)";
  const nodeFill = dark ? "var(--color-petrol-900)" : "var(--color-sand-50)";
  const textColor = dark ? "var(--color-sand-100)" : "var(--color-petrol-900)";
  const isActive = (id: AreaId) => highlight === id || connections.includes(id);

  const draw = (len: number, delay: number) =>
    (animated ? { "--len": len, "--delay": `${delay}ms` } : {}) as CSSProperties;
  const lineClass = animated ? "draw-line" : "";

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby={`${id}-title`} className={className}>
      <title id={`${id}-title`}>{title}</title>

      {/* Perímetro hexagonal */}
      {pts.map((p, i) => {
        const q = pts[(i + 1) % pts.length];
        return (
          <line
            key={`edge-${p.id}`}
            x1={p.x}
            y1={p.y}
            x2={q.x}
            y2={q.y}
            stroke={lineColor}
            strokeWidth={1}
            className={lineClass}
            style={draw(R + 4, 200 + i * 90)}
          />
        );
      })}

      {/* Cuerdas internas (estructura) */}
      {[0, 2, 4].map((i, k) => {
        const p = pts[i];
        const q = pts[(i + 2) % pts.length];
        return (
          <line
            key={`chord-${i}`}
            x1={p.x}
            y1={p.y}
            x2={q.x}
            y2={q.y}
            stroke={lineColor}
            strokeWidth={0.75}
            strokeDasharray={animated ? undefined : "2 5"}
            className={lineClass}
            style={draw(250, 900 + k * 120)}
            opacity={0.7}
          />
        );
      })}

      {/* Radios hacia el centro */}
      {pts.map((p, i) => {
        const active = highlight ? isActive(p.id) : true;
        return (
          <line
            key={`spoke-${p.id}`}
            x1={CX}
            y1={CY}
            x2={p.x}
            y2={p.y}
            stroke={active ? accent : lineColor}
            strokeOpacity={active ? (highlight ? 0.9 : 0.55) : 1}
            strokeWidth={highlight && active ? 1.6 : 1}
            className={lineClass}
            style={draw(R + 4, 500 + i * 110)}
          />
        );
      })}

      {/* Conexiones del área destacada */}
      {highlight &&
        connections.map((c) => {
          const a = pts.find((p) => p.id === highlight);
          const b = pts.find((p) => p.id === c);
          if (!a || !b) return null;
          return (
            <line
              key={`link-${c}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={accent}
              strokeWidth={1.6}
              strokeLinecap="round"
            />
          );
        })}

      {/* Nodos */}
      {pts.map((p, i) => {
        const active = highlight ? isActive(p.id) : false;
        const isMain = highlight === p.id;
        const lx = CX + (R + 34) * Math.cos(p.angle);
        const ly = CY + (R + 30) * Math.sin(p.angle);
        const anchor = Math.abs(Math.cos(p.angle)) < 0.1 ? "middle" : Math.cos(p.angle) > 0 ? "start" : "end";
        return (
          <g key={`node-${p.id}`}>
            {animated && (
              <circle
                cx={p.x}
                cy={p.y}
                r={7}
                fill="none"
                stroke={accent}
                className="node-pulse"
                style={{ "--delay": `${i * 520}ms` } as CSSProperties}
              />
            )}
            <circle
              cx={p.x}
              cy={p.y}
              r={isMain ? 9 : 7}
              fill={isMain ? accent : nodeFill}
              stroke={active || !highlight ? accent : lineColor}
              strokeWidth={1.6}
            />
            <text
              x={lx}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill={textColor}
              opacity={highlight && !active ? 0.45 : 1}
              style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: isMain ? 700 : 600, letterSpacing: "-0.01em" }}
            >
              {p.label}
            </text>
          </g>
        );
      })}

      {/* Centro: la organización */}
      <circle cx={CX} cy={CY} r={30} fill={dark ? "var(--color-petrol-800)" : "var(--color-petrol-900)"} />
      <circle cx={CX} cy={CY} r={38} fill="none" stroke={accent} strokeOpacity={0.4} />
      <circle cx={CX} cy={CY} r={4} fill="var(--color-sand-400)" />
      <text
        x={CX}
        y={CY + 60}
        textAnchor="middle"
        fill={dark ? "var(--color-sand-400)" : "var(--color-sand-700)"}
        stroke={dark ? "var(--color-green-900)" : "var(--color-sand-50)"}
        strokeWidth={6}
        paintOrder="stroke"
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}
      >
        {center}
      </text>
    </svg>
  );
}
