import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

/** El método en cuatro pasos, en una sola fila. */
export function MethodSteps({ method }: { method: Dictionary["method"] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {method.steps.map((s, i) => (
        <Reveal as="li" key={s.name} delay={i * 80} className="bg-white p-6 lg:p-7">
          <span className="t-label text-sand-deep">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="t-h3 mt-3 text-ink">{s.name}</p>
          <p className="t-small mt-2 text-ink-2">{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
