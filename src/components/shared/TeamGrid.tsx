import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";

/** Retratos del equipo (vertical 4:5). */
export function TeamGrid({ dict, showBio = true }: { dict: Dictionary; showBio?: boolean }) {
  return (
    <ul className="grid grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
      {dict.team.members.map((m, i) => (
        <li key={m.name}>
          <Reveal variant="mask" delay={i * 120}>
            <Photo photo={m.photo} text={dict.photos[m.photo]} sizes="(min-width: 1024px) 28vw, 46vw" className="aspect-[4/5] rounded-xl" focus="50% 25%" />
          </Reveal>
          <Reveal delay={i * 120 + 80} className="mt-4">
            <h3 className="t-h3 text-ink">{m.name}</h3>
            <p className="t-small mt-1 text-ink-3">{m.role}</p>
            {showBio && <p className="mt-3 max-w-[36ch] text-ink-2">{m.bio}</p>}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
