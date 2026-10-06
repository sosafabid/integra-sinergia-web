import type { Dictionary } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const W = 360;
const H = 260;

function Fragmented({ items, title }: { items: string[]; title: string }) {
  // 3 x 2 cajas aisladas, ligeramente desalineadas: ninguna conexión entre sí.
  const offsets = [
    [0, 6],
    [4, -4],
    [-3, 2],
    [3, -2],
    [-4, 5],
    [2, -6],
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title} className="w-full">
      {items.map((label, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 112 + offsets[i][0];
        const y = 52 + row * 96 + offsets[i][1];
        return (
          <g key={label}>
            <rect x={x} y={y} width={96} height={52} rx={8} fill="white" stroke="rgb(8 48 58 / 0.25)" strokeDasharray="3 4" />
            <text
              x={x + 48}
              y={y + 27}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--color-ink-muted)"
              style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600 }}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Integrated({ items, center, title }: { items: string[]; center: string; title: string }) {
  const cx = W / 2;
  const cy = H / 2;
  const rx = 128;
  const ry = 92;
  const pts = items.map((label, i) => {
    const a = ((-90 + i * 60) * Math.PI) / 180;
    return { label, x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a) };
  });
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title} className="w-full">
      {pts.map((p, i) => {
        const q = pts[(i + 1) % pts.length];
        return <line key={`e${i}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="var(--color-green-700)" strokeOpacity={0.35} />;
      })}
      {pts.map((p, i) => (
        <line key={`s${i}`} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--color-green-700)" strokeOpacity={0.6} />
      ))}
      {pts.map((p) => (
        <g key={p.label}>
          <rect x={p.x - 46} y={p.y - 15} width={92} height={30} rx={15} fill="var(--color-sand-50)" stroke="var(--color-green-700)" />
          <text
            x={p.x}
            y={p.y + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--color-petrol-900)"
            style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600 }}
          >
            {p.label}
          </text>
        </g>
      ))}
      <circle cx={cx} cy={cy} r={22} fill="var(--color-petrol-900)" />
      <circle cx={cx} cy={cy} r={3.5} fill="var(--color-sand-400)" />
      <text
        x={cx}
        y={cy + 40}
        textAnchor="middle"
        fill="var(--color-sand-700)"
        stroke="white"
        strokeWidth={5}
        paintOrder="stroke"
        style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase" }}
      >
        {center}
      </text>
    </svg>
  );
}

export function Connected({ dict }: { dict: Dictionary }) {
  const { connected: c } = dict;

  return (
    <section aria-labelledby="conectado-title" className="relative bg-sand-100 py-24 lg:py-36">
      <div className="container-site">
        <SectionHeader
          id="conectado-title"
          index="02"
          kicker={c.kicker}
          align="split"
          title={
            <>
              {c.titleBefore} <span className="accent text-green-700">{c.titleAccent}</span>
            </>
          }
          lead={c.lead}
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:mt-20 lg:gap-6">
          <Reveal className="rounded-3xl border border-line bg-sand-50/60 p-6 sm:p-8">
            <p className="eyebrow text-ink-muted">{c.fragmented.title}</p>
            <div className="mt-4 opacity-80">
              <Fragmented items={c.fragmented.items} title={c.fragmented.title} />
            </div>
            <p className="mt-4 text-[0.95rem] text-ink-muted">{c.fragmented.caption}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border border-green-700/25 bg-white p-6 shadow-[0_30px_60px_-40px_rgb(8_48_58/0.35)] sm:p-8">
            <p className="eyebrow text-green-700">{c.integrated.title}</p>
            <div className="mt-4">
              <Integrated items={c.fragmented.items} center={c.integrated.center} title={c.integrated.title} />
            </div>
            <p className="mt-4 text-[0.95rem] font-medium text-petrol-900">{c.integrated.caption}</p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-24">
          {c.principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100} className="border-t border-line-strong pt-6">
              <span className="eyebrow text-sand-700">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-petrol-900">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
