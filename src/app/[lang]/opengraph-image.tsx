import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hasLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Integra Sinergia";

/** Imagen para compartir en redes (Open Graph), generada en build por idioma. */
export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(lang);
  const logo = await readFile(join(process.cwd(), "public/brand/logo-integra-sinergia.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfaf7",
          padding: "72px 80px",
          borderBottom: "28px solid #0a3740",
        }}
      >
        <img src={logoSrc} width={515} height={140} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 58, fontWeight: 700, color: "#08303a", letterSpacing: -2, lineHeight: 1.08, maxWidth: 980 }}>
            {`${dict.hero.titleBefore} ${dict.hero.titleAccent} ${dict.hero.titleAfter}`}
          </div>
          <div style={{ marginTop: 22, fontSize: 26, color: "#776d53" }}>{dict.hero.eyebrow}</div>
        </div>
      </div>
    ),
    size,
  );
}
