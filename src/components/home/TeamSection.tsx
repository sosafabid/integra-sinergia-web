import Image from "next/image";
import type { Dictionary, TeamMember } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { Structure } from "@/components/ui/Structure";

function Portrait({ m, pending }: { m: TeamMember; pending: string }) {
  if (m.photo) {
    return (
      <Image
        src={m.photo}
        alt={m.photoAlt}
        fill
        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 46vw, 92vw"
        className="object-cover grayscale-[15%]"
      />
    );
  }
  // Retrato provisional hasta tener fotografías profesionales.
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-paper-2">
      <Structure animated={false} className="absolute h-[62%] w-auto opacity-40" />
      <span className="relative font-serif text-[clamp(3.5rem,8vw,6rem)] leading-none text-ink/70">{m.initials}</span>
      <span className="t-caption absolute bottom-5 left-5 text-[0.65rem] text-ink-3">{pending}</span>
    </div>
  );
}

export function TeamSection({ dict }: { dict: Dictionary }) {
  const { team } = dict;
  return (
    <section id="equipo" aria-labelledby="equipo-title" className="border-t border-line py-28 lg:py-40">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="t-caption text-sand-deep">{team.kicker}</p>
            <h2 id="equipo-title" className="t-h2 mt-6 max-w-[16ch] text-ink">
              {team.title}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="t-lead text-ink-2">{team.lead}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-14 sm:grid-cols-2 sm:gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          {team.members.map((m, i) => (
            <li key={m.name} className={i === 1 ? "sm:mt-24 lg:col-span-4 lg:col-start-8" : "lg:col-span-4 lg:col-start-2"}>
              <Reveal variant="mask" delay={i * 150} className="relative aspect-[4/5] overflow-hidden rounded-[0.6rem]">
                <Portrait m={m} pending={team.pending} />
              </Reveal>
              <Reveal delay={i * 150 + 100} className="mt-6">
                <h3 className="t-h3 text-ink">{m.name}</h3>
                <p className="t-caption mt-2 text-sand-deep">{m.role}</p>
                <p className="mt-4 max-w-[38ch] text-ink-2">{m.bio}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
