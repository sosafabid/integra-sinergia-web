# Integra Sinergia — Sitio web

Sitio institucional de Integra Sinergia. **Crece con sistemas sólidos.**

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Bilingüe ES/EN · Desplegado en Vercel.

---

## 1. Primera vez en tu computadora

Requisitos: **Node.js 20 o superior** (`node -v` para verificar) y Git.

1. Descomprime la carpeta `integra-sinergia-web` donde guardas tus proyectos.
2. Abre VS Code → **File → Open Folder…** → elige `integra-sinergia-web`.
3. Abre la terminal de VS Code (**Terminal → New Terminal**) y ejecuta:

```bash
npm install
cp .env.example .env.local
npm run dev
```

4. Abre <http://localhost:3000> — te redirige a `/es` (o `/en` si tu navegador está en inglés).

> En Windows, si `cp` no funciona, usa: `copy .env.example .env.local`

## 2. Subir a GitHub

1. En GitHub crea un repositorio **vacío** llamado `integra-sinergia-web` (sin README, sin .gitignore).
2. En la terminal de VS Code:

```bash
git init
git add .
git commit -m "feat: sitio web Integra Sinergia v1"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/integra-sinergia-web.git
git push -u origin main
```

## 3. Desplegar en Vercel

1. En <https://vercel.com> → **Add New → Project** → importa el repositorio de GitHub.
2. Framework: Next.js (se detecta solo). No cambies los comandos de build.
3. En **Environment Variables** agrega las mismas variables de `.env.local` (ver abajo).
4. **Deploy**. Cada `git push` a `main` vuelve a publicar automáticamente.
5. Dominio: **Settings → Domains** → agrega `integrasinergia.com` y `www.integrasinergia.com`.

## 4. Variables de entorno

| Variable | Para qué | Dónde obtenerla |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Envío del formulario de contacto | formspree.io → New Form → copia el código final de `https://formspree.io/f/XXXXXXX` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Botones de WhatsApp | Número comercial, formato `506XXXXXXXX` |
| `NEXT_PUBLIC_SITE_URL` | URLs de SEO, sitemap y Open Graph | `https://www.integrasinergia.com` |

Localmente van en `.env.local` (nunca se sube a GitHub). En producción, en Vercel → Settings → Environment Variables. Después de cambiarlas en Vercel, haz **Redeploy**.

Sin `NEXT_PUBLIC_FORMSPREE_ID`, el formulario valida los datos pero **no envía**: muestra un aviso y ofrece WhatsApp/correo. No hay envíos simulados.

## 5. Comandos

```bash
npm run dev     # desarrollo en localhost:3000
npm run lint    # revisión de código
npm run build   # build de producción (ejecútalo antes de cada push importante)
npm run start   # sirve el build localmente
```

## 6. Dónde se edita cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Textos en español / inglés | `src/content/es.ts` / `src/content/en.ts` |
| Email, teléfonos, WhatsApp, dominio | `src/config/site.ts` |
| Colores y tipografía | `src/app/globals.css` (bloque `@theme` y clases `.t-*`) |
| Orden de la home | `src/app/[lang]/page.tsx` |
| Proyectos | `projects.items` en `es.ts` / `en.ts` + imagen en `public/showcase/` |
| Fotos del equipo | `public/team/` + campo `photo` en `es.ts` / `en.ts` |
| Pasos del método | `method.steps` en `es.ts` / `en.ts` |
| Logo | `public/brand/` |

## 7. Mapa del sitio

```
/es                     Inicio: hero, manifiesto, piezas, diseño y tecnología, método, proyectos, equipo, CTA
/es/soluciones          Los 4 conceptos (Gestión, Sostenibilidad, Tecnología, Presencia digital)
/es/soluciones/<área>   6 páginas de detalle (diseño web y automatización con bloques propios)
/es/proyectos           Proyectos (problema → solución)
/es/nosotros            La firma y el equipo
/es/metodologia         Comprender → Estandarizar → Mejorar → Escalar
/es/contacto            Formulario + WhatsApp + correo (acepta ?area=web para preseleccionar)
```
Lo mismo en inglés bajo `/en/...`.

## 8. Sistema visual

- **Tipografías (2):** Instrument Serif para titulares, Hanken Grotesk para interfaz y texto. Autoalojadas en `src/fonts/`.
- **Escala:** `.t-display`, `.t-h1`, `.t-h2`, `.t-h3`, `.t-lead`, `.t-caption`.
- **Color:** papel `#F5F3EE` y carbón `#141B1B` como base. Azul petróleo `#0A3740` solo en la sección de diseño y tecnología. Verde y arena como acentos.
- **Estructura:** `src/components/ui/Structure.tsx` es la geometría inspirada en el isotipo (no es el logo).
- **Capturas del sitio** (`public/showcase/`): si cambia el hero, conviene volver a tomarlas.

## 9. Pendientes antes del lanzamiento

- [ ] **Logo en SVG** (los PNG actuales se recortaron de la tarjeta oficial; reemplazar en `public/brand/`).
- [ ] **Fotos profesionales** de Fabiola y María Celeste (`public/team/`, formato 4:5, ~1200×1500 px).
- [ ] Validar **biografías** del equipo.
- [ ] Validar los textos de cada etapa del **método** (Comprender, Estandarizar, Mejorar, Escalar).
- [ ] Confirmar **WhatsApp comercial** y **correo** definitivo (idealmente un correo con el dominio).
- [ ] Crear el formulario en **Formspree** y configurar `NEXT_PUBLIC_FORMSPREE_ID`.
- [ ] Agregar **proyectos reales** autorizados.
- [ ] Conectar dominio en Vercel y registrar el sitio en **Google Search Console** (enviar `sitemap.xml`).

## Reglas del proyecto

- No se inventan clientes, testimonios, cifras, certificaciones ni resultados.
- No se modifica el logo.
- Nunca subir `.env.local`, claves ni contraseñas.
