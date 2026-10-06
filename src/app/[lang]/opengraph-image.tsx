import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hasLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Integra Sinergia";

/** Imagen para compartir en redes, generada por idioma con la tipografía de la marca. */
export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(lang);
  const [logo, font] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/logo-horizontal.png")),
    readFile(join(process.cwd(), "src/fonts/og-instrument-sans-600.woff")),
  ]);
  const { titleA, titleB } = dict.home.hero;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px 80px",
          borderBottom: "20px solid #0a3740",
          fontFamily: "Instrument Sans",
        }}
      >
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={330} height={90} alt="" />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05, letterSpacing: -2.5 }}>
          <span style={{ color: "#13201f" }}>{titleA}</span>
          <span style={{ color: "#0a5c3e" }}>{titleB}</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Instrument Sans", data: font, style: "normal", weight: 600 }] },
  );
}
