/**
 * Configuración central del sitio.
 * Datos de contacto tomados de la tarjeta oficial de Integra Sinergia.
 * TODO (Fabi): confirmar número de WhatsApp comercial y email definitivo.
 */
export const siteConfig = {
  name: "Integra Sinergia",
  tagline: "Crece con sistemas sólidos.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.integrasinergia.com").replace(/\/$/, ""),
  email: "solucionesambientalescr@gmail.com",
  phones: [
    { display: "+506 8737 8034", tel: "+50687378034" },
    { display: "+506 8591 6892", tel: "+50685916892" },
  ],
  /** Número en formato internacional sin "+" ni espacios (wa.me) */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "50687378034",
  country: "Costa Rica",
  founders: ["Fabiola Sosa Duarte", "María Celeste Amaya"],
  /** ID del formulario de Formspree (la parte final de https://formspree.io/f/XXXX) */
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
