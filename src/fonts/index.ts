import localFont from "next/font/local";

/**
 * Dos familias, autoalojadas (licencia OFL):
 * - Hanken Grotesk: interfaz y texto.
 * - Instrument Serif: titulares editoriales.
 */
export const fontSans = localFont({
  src: "./hanken-grotesk-latin-wght-normal.woff2",
  variable: "--font-hanken",
  weight: "300 700",
  display: "swap",
});

export const fontSerif = localFont({
  src: [
    { path: "./instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
