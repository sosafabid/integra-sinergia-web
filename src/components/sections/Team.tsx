import Image from "next/image";
import type { Dictionary, TeamMember } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

/** Retrato provisional elegante mientras llegan las fotografías oficiales. */
function PortraitPlaceholder({ initials, label }: { initials: string; label: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-sand-200">
      <svg aria-hidden="true" viewBox="0 0 200 250" className="absolute inset-0 h-full w-full text-petrol-900/10" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="currentColor" strokeWidth="0.75">
          <path d="M100 30 L170 70 L170 150 L100 190 L30 150 L30 70 Z" />
          <path d="M100 30 L100 110 L170 150 M100 110 L30 150 M30 70 L100 110 L170 70" />
        </g>
        <g fill="currentColor">
          {[
            [100, 30],
            [170, 70],
            [170, 150],
            [100, 190],
            [30, 150],
            [30, 70],
            [100, 110],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
          ))}
        </g>
      </svg>
      <span className="relative font-serif text-6xl italic text-petrol-900/70">{initials}</span>
      <span className="eyebrow absolute bottom-4 left-4 text-[0.65rem] text-sand-700">{label}</span>
    </div>
  );
}

function MemberCard({ m, focusLabel, pending }: { m: TeamMember; focusLabel: string; pending: string }) {
  return (
    <article className="grid gap-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-8 lg:grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        {m.photo ? (
          <Image src={m.photo} alt={m.photoAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 100vw" className="object-cover" />
        ) : (
          <PortraitPlaceholder initials={m.initials} label={pending} />
        )}
      </div>
      <div className="flex flex-col">
        <p className="eyebrow text-sand-700">
          {m.role} · {m.credential}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-petrol-900">{m.name}</h3>
        <p className="mt-4 leading-relaxed text-ink-soft">{m.bio}</p>
        <div className="mt-6">
          <p className="sr-only">{focusLabel}</p>
          <ul className="flex flex-wrap gap-2">
            {m.focus.map((f) => (
              <li key={f} className="rounded-full border border-line-strong px-3 py-1 text-[0.82rem] font-medium text-petrol-900">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Team({ dict }: { dict: Dictionary }) {
  const { team } = dict;
  return (
    <section id="equipo" aria-labelledby="equipo-title" className="py-24 lg:py-36">
      <div className="container-site">
        <SectionHeader id="equipo-title" index="08" kicker={team.kicker} title={team.title} lead={team.lead} align="split" />
        <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          {team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <MemberCard m={m} focusLabel={team.focusLabel} pending={team.portraitPending} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
