# Spun Pages — Project Reference

## Stack

| Layer | Tool |
|---|---|
| Framework | React Router v7 (framework mode, SSG/prerender) |
| Language | TypeScript + React |
| Styling | CSS Modules + global CSS variables |
| Fonts | @fontsource (Playfair Display, DM Sans) |
| Build | Vite (via `@react-router/dev`) |
| i18n | Custom `LangContext` — English (`/`) and Spanish (`/es`) |

## Hosting & Infrastructure

| Layer | Provider |
|---|---|
| Hosting | **SiteGround** — manual deploy via File Manager |
| Domain registry | **Cloudflare** |
| Deploy directory | Upload contents of `build/client/` → `public_html/` |
| Routing | Apache `.htaccess` in `public/` (copied to build) |

## Build & Deploy

```bash
npm run build
```

Then upload the entire contents of `build/client/` into `public_html/` on SiteGround.
Make sure `.htaccess` is included — File Manager has a "show hidden files" toggle.

## Routes

All routes are prerendered at build time (`react-router.config.ts`):

| URL | Component |
|---|---|
| `/` | `src/pages/Home.tsx` |
| `/services/:slug` | `src/pages/ServicePage.tsx` |
| `/es` | `src/pages/HomeEs.tsx` |
| `/es/services/:slug` | `src/pages/ServicePageEs.tsx` |
| `/404` | `src/pages/NotFound.tsx` |

## i18n

- Language is derived from the URL prefix (`/es` = Spanish, everything else = English)
- `LangProvider` takes `initialLang` prop set from pathname in `Root`
- On the home page, the language toggle switches in-place (no navigation) via `toggleLang()`
- On service pages, the toggle navigates to the equivalent URL in the other language

## Key files

| File | Purpose |
|---|---|
| `app/root.tsx` | HTML shell — all global meta tags live here as hardcoded JSX (NOT in `meta()`) |
| `app/routes.ts` | Route definitions |
| `react-router.config.ts` | Prerender config — list of all URLs to generate |
| `src/i18n/translations.ts` | All copy for both languages |
| `src/context/LangContext.tsx` | Language state |
| `public/.htaccess` | Apache routing rules for SiteGround |
| `public/sitemap.xml` | Sitemap with hreflang annotations for all 16 URLs |

## Important: meta() behaviour

React Router v7 child route `meta()` **replaces** the root's — it does NOT merge.
All global meta tags (`viewport`, `robots`, `og:type`, etc.) are hardcoded directly
in the `Layout` JSX in `app/root.tsx` to ensure they appear on every page.
