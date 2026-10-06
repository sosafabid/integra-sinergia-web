"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";

/**
 * Acceso rápido a WhatsApp en móvil. Aparece después del hero y se oculta
 * cuando la sección de contacto está en pantalla (para no tapar el formulario).
 */
export function WhatsAppFloat({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contacto");
    let contactInView = false;
    const update = () => setVisible(window.scrollY > 160 && !contactInView);
    const observer = contact
      ? new IntersectionObserver(([entry]) => {
          contactInView = entry.isIntersecting;
          update();
        })
      : null;
    if (contact && observer) observer.observe(contact);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      observer?.disconnect();
    };
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-petrol py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(5_26_31/0.6)] transition-[opacity,transform] duration-500 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <WhatsAppIcon className="size-5" aria-hidden="true" />
      {label}
    </a>
  );
}
