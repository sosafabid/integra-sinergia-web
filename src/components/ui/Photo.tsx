import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { PhotoKey, PhotoText } from "@/content/types";
import { photoFiles } from "@/content/photos";
import { Structure } from "./Structure";

/** ¿Existe el archivo en /public? Se evalúa al compilar (páginas estáticas). */
export function publicFileExists(src: string) {
  return existsSync(join(process.cwd(), "public", src));
}

type Props = {
  photo: PhotoKey;
  text: PhotoText;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Mostrar pie de foto si existe */
  showCaption?: boolean;
  /** Ajuste del encuadre (object-position), p. ej. "50% 30%" */
  focus?: string;
};

/**
 * Fotografía real. Ocupa todo su contenedor (que define la proporción).
 * Si el archivo aún no está en /public, muestra un espacio neutro con la geometría de la marca.
 */
export function Photo({ photo, text, sizes, className = "", priority = false, showCaption = false, focus }: Props) {
  const src = photoFiles[photo];
  const exists = publicFileExists(src);

  return (
    <figure className={`relative overflow-hidden bg-surface-2 ${className}`}>
      {exists ? (
        <Image src={src} alt={text.alt} fill sizes={sizes} priority={priority} className="object-cover" style={focus ? { objectPosition: focus } : undefined} />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" role="img" aria-label={text.alt}>
          <Structure animated={false} className="h-1/2 w-auto opacity-50" />
          {process.env.NODE_ENV === "development" && (
            <span className="absolute left-3 top-3 rounded bg-white/90 px-2 py-1 font-mono text-[0.7rem] text-ink-2">
              public{src}
            </span>
          )}
        </div>
      )}
      {exists && showCaption && text.caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/45 to-transparent px-4 pb-3 pt-10 text-[0.8125rem] font-medium text-white">
          {text.caption}
        </figcaption>
      )}
    </figure>
  );
}
