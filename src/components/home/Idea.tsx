import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

/** Idea central: una frase y las piezas del sistema, conectadas. */
export function Idea({ dict }: { dict: Dictionary }) {
  const { idea } = dict.home;
  return (
    <section aria-labelledby="idea-title" className="bg-surface py-20 lg:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <p className="t-label text-green">{idea.kicker}</p>
          <h2 id="idea-title" className="t-h2 mt-3 max-w-[22ch] text-ink">
            {idea.title}
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pt-9">
          <p className="t-lead text-ink-2">{idea.text}</p>
        </Reveal>
        <Reveal as="ul" delay={200} className="flex flex-wrap items-center gap-x-3 gap-y-3 lg:col-span-12 lg:mt-6">
          {idea.pieces.map((piece, i) => (
            <li key={piece} className="flex items-center gap-3">
              <span className="rounded-full border border-line-2 bg-white px-4 py-2 text-[0.9375rem] font-medium text-ink">{piece}</span>
              {i < idea.pieces.length - 1 && <span aria-hidden="true" className="hidden h-px w-10 bg-sand sm:block lg:w-14" />}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
