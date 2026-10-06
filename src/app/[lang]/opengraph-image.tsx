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
  const [logo, serif] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/logo-horizontal.png")),
    readFile(join(process.cwd(), "src/fonts/og-instrument-serif.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f3ee",
          padding: "64px 80px",
        }}
      >
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={330} height={90} alt="" />
        <div style={{ display: "flex", fontFamily: "Instrument Serif", fontSize: 104, lineHeight: 0.98, color: "#141b1b", maxWidth: 900, letterSpacing: -2 }}>
          {dict.hero.title}
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Instrument Serif", data: serif, style: "normal", weight: 400 }] },
  );
}
