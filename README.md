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

4. Abre <http://localhost:3000> (español). La versión en inglés está en <http://localhost:3000/en>.

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
| Colores, tipografía, botones | `src/app/globals.css` (bloque `@theme` y clases `.t-*`, `.btn`) |
| Contenido de la home | `src/app/[lang]/page.tsx` |
| Soluciones (textos de cada página) | `solutions` en `es.ts` / `en.ts` |
| Proyectos | `projects.items` en `es.ts` / `en.ts` + imagen en `public/showcase/` |
| Fotos del equipo | `public/team/` + campo `photo` en `team.members` |
| URLs y traducción de rutas al inglés | `src/lib/routes.ts` |
| Redirecciones de URLs antiguas | `next.config.ts` |

## 7. Mapa del sitio

Español en la raíz, inglés bajo `/en` con URLs traducidas:

```
/                              /en
/soluciones                    /en/solutions
/soluciones/gestion            /en/solutions/management
/soluciones/sostenibilidad     /en/solutions/sustainability
/soluciones/cumplimiento       /en/solutions/compliance
/soluciones/tecnologia         /en/solutions/technology
/soluciones/diseno-web         /en/solutions/web-design
/proyectos                     /en/projects
/nosotros                      /en/about
/contacto                      /en/contact      (acepta ?area=web para preseleccionar)
```

Internamente las páginas viven en `src/app/[lang]/…` (segmentos en español) y `src/proxy.ts`
traduce las URLs públicas. Las URLs de versiones anteriores (`/es/...`, `/metodologia`, slugs largos)
redirigen de forma permanente a las nuevas.

## 8. Sistema visual

- **Tipografía:** una sola familia, Instrument Sans (variable, autoalojada en `src/fonts/`).
- **Escala:** `.t-hero` (64 px máx.), `.t-h1` (56), `.t-h2` (40), `.t-h3` (22), `.t-lead`, `.t-small`, `.t-label`.
- **Color:** blanco y gris claro (`surface`) como base. Azul petróleo `#0A3740` para botones y bloques clave. Verde `#0A5C3E` como acento. Arena para detalles finos.
- **Isotipo:** `src/components/ui/Structure.tsx` es una geometría inspirada en el isotipo (no es el logo). Solo aparece en el hero.
- **Capturas del sitio** (`public/showcase/`): si cambia el hero, conviene volver a tomarlas.

## 9. Pendientes antes del lanzamiento

- [ ] **Logo en SVG** (los PNG actuales se recortaron de la tarjeta oficial; reemplazar en `public/brand/`).
- [ ] **Fotos profesionales** de Fabiola y María Celeste (`public/team/`, formato 4:5, ~1200×1500 px).
- [ ] Validar **biografías** del equipo.
- [ ] Validar los textos de cada etapa del **método** (Comprender, Estandarizar, Mejorar, Escalar) y las promesas de cada solución.
- [ ] Confirmar **WhatsApp comercial** y **correo** definitivo (idealmente un correo con el dominio).
- [ ] Crear el formulario en **Formspree** y configurar `NEXT_PUBLIC_FORMSPREE_ID`.
- [ ] Agregar **proyectos reales** autorizados (nombre, categoría, una frase y captura).
- [ ] Conectar dominio en Vercel y registrar el sitio en **Google Search Console** (enviar `sitemap.xml`).

## Reglas del proyecto

- No se inventan clientes, testimonios, cifras, certificaciones ni resultados.
- No se modifica el logo.
- Nunca subir `.env.local`, claves ni contraseñas.
