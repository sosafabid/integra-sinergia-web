import Image from "next/image";
import type { TeamMember } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

function Portrait({ m, pending }: { m: TeamMember; pending: string }) {
  if (m.photo) {
    return <Image src={m.photo} alt={m.photoAlt} fill sizes="(min-width: 1024px) 24vw, 46vw" className="object-cover" />;
  }
  // Retrato provisional hasta tener fotografías profesionales.
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-surface-2">
      <span className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold tracking-tight text-petrol/60">{m.initials}</span>
      <span className="absolute bottom-3 left-3 text-[0.7rem] font-medium text-ink-3">{pending}</span>
    </div>
  );
}

export function TeamGrid({ members, pending, compact = false }: { members: TeamMember[]; pending: string; compact?: boolean }) {
  return (
    <ul className={`grid grid-cols-2 gap-5 sm:gap-8 ${compact ? "" : "lg:gap-10"}`}>
      {members.map((m, i) => (
        <li key={m.name}>
          <Reveal variant="mask" delay={i * 120} className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Portrait m={m} pending={pending} />
          </Reveal>
          <Reveal delay={i * 120 + 80} className="mt-4">
            <h3 className={`${compact ? "font-semibold" : "t-h3"} text-ink`}>{m.name}</h3>
            <p className="t-small mt-1 text-ink-3">{m.role}</p>
            {!compact && <p className="mt-3 max-w-[36ch] text-ink-2">{m.bio}</p>}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
