import type { PhotoKey } from "./types";

/**
 * Ubicación de cada fotografía real dentro de /public.
 * Para activar una foto basta con colocar el archivo con este nombre exacto.
 * Formato recomendado: JPG, lado mayor ~2000 px, menos de 500 KB.
 */
export const photoFiles: Record<PhotoKey, string> = {
  team: "/photos/equipo.jpg", // Fabiola y María Celeste juntas (horizontal)
  fabiola: "/team/fabiola.jpg", // retrato vertical 4:5
  mariaCeleste: "/team/maria-celeste.jpg", // retrato vertical 4:5
  brasil: "/photos/experiencia-brasil.jpg", // conferencia regional en Brasil
  panel: "/photos/experiencia-panel.jpg", // participación en panel o foro
  sostenibilidad: "/photos/experiencia-sostenibilidad.jpg", // evento técnico de sostenibilidad
  foro: "/photos/experiencia-foro.jpg", // foro técnico / normalización
  reunion: "/photos/experiencia-reunion.jpg", // reunión de trabajo
};
