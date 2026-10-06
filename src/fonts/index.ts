import localFont from "next/font/local";

/**
 * Una sola familia: Instrument Sans (variable, licencia OFL), autoalojada.
 * Sobria, técnica y muy legible en español.
 */
export const fontSans = localFont({
  src: "./instrument-sans-latin-wght-normal.woff2",
  variable: "--font-instrument-sans",
  weight: "400 700",
  display: "swap",
});
