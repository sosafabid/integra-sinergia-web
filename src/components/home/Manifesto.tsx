import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

/** Momento de silencio: una idea, cinco piezas, una conclusión. */
export function Manifesto({ dict }: { dict: Dictionary }) {
  const { manifesto } = dict;
  return (
    <section aria-labelledby="manifiesto-title" className="py-32 sm:py-40 lg:py-56">
      <div className="wrap">
        <Reveal>
          <h2 id="manifiesto-title" className="t-h1 max-w-[14ch] text-ink">
            {manifesto.title}
          </h2>
        </Reveal>

        <Reveal as="ul" className="mt-20 flex flex-col lg:mt-28 lg:flex-row lg:items-center">
          {manifesto.pieces.map((piece, i) => (
            <li key={piece} className="flex flex-col lg:flex-1 lg:flex-row lg:items-center last:lg:flex-none">
              <span
                className="reveal t-h3 whitespace-nowrap text-ink"
                style={{ "--reveal-delay": `${i * 180}ms` } as React.CSSProperties}
              >
                {piece}
              </span>
              {i < manifesto.pieces.length - 1 && (
                <span aria-hidden="true" className="relative ml-[0.3rem] h-10 w-px lg:mx-6 lg:ml-6 lg:h-px lg:w-auto lg:flex-1">
                  <span
                    className="connector absolute inset-0 bg-line-2"
                    style={{ "--reveal-delay": `${i * 180 + 160}ms` } as React.CSSProperties}
                  />
                </span>
              )}
            </li>
          ))}
        </Reveal>

        <Reveal delay={200} className="mt-20 lg:mt-28 lg:pl-[50%]">
          <p className="t-h2 max-w-[18ch] text-petrol">{manifesto.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
