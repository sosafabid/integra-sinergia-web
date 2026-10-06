import Image from "next/image";
import type { Dictionary, Project } from "@/content/types";
import { Photo, publicFileExists } from "@/components/ui/Photo";
import { Structure } from "@/components/ui/Structure";

/**
 * Visual de un proyecto: captura real → fotografía real → composición tipográfica
 * (esta última mientras llegan las capturas; nunca un dashboard inventado).
 */
export function ProjectVisual({ project, dict, sizes, priority = false }: { project: Project; dict: Dictionary; sizes: string; priority?: boolean }) {
  if (project.image && publicFileExists(project.image)) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={project.imageAlt ?? project.title}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.02]"
        />
      </div>
    );
  }
  if (project.photo) {
    return <Photo photo={project.photo} text={dict.photos[project.photo]} sizes={sizes} className="aspect-[16/10]" />;
  }
  return (
    <div className="on-dark relative flex aspect-[16/10] flex-col justify-between overflow-hidden bg-petrol p-6 text-white sm:p-10">
      <Structure animated={false} tone="light" className="absolute -right-[8%] top-1/2 h-[120%] w-auto -translate-y-1/2 opacity-60" />
      <p className="relative t-label text-sand-light">{project.category}</p>
      <div className="relative">
        <p className="t-h2 max-w-[16ch]">{project.title}</p>
        <p className="mt-3 text-[0.8125rem] text-white/55">{dict.ui.screenshotSoon}</p>
      </div>
    </div>
  );
}
