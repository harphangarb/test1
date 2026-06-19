# Hangar B Self-Guided Tour

A mobile-optimized, 20-page interactive self-guided tour for Hangar B at Floyd Bennett Field (Brooklyn, NY), built for H.A.R.P. (Historic Aircraft Restoration Project). Designed to be used on visitors' phones inside the hangar — no internet required once loaded.

## Run & Operate

- `pnpm --filter @workspace/hangar-tour run dev` — run the tour frontend (port 18341)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (no router — single `currentStep` state, 1–20)
- CSS: hand-written mobile-first CSS (no Tailwind in use for tour pages)
- Fonts: Oswald (display) + Inter (body) via Google Fonts
- API: Express 5 (minimal, health-check only for this project)

## Where things live

- `artifacts/hangar-tour/src/data/tourData.ts` — all 20 tour pages (title, specs, history, HARP facts)
- `artifacts/hangar-tour/src/data/planeImages.ts` — Wikimedia image URLs keyed by page ID
- `artifacts/hangar-tour/src/components/Tour.tsx` — root component, manages `currentStep` state
- `artifacts/hangar-tour/src/components/pages/` — one file per page type (WelcomePage, HistoryPage, PlanePage, ModelsPage, ThankYouPage)
- `artifacts/hangar-tour/src/components/NavBar.tsx` — sticky bottom PREVIOUS / NEXT bar
- `artifacts/hangar-tour/src/components/ProgressBar.tsx` — top progress indicator
- `artifacts/hangar-tour/src/index.css` — full custom CSS with Navy/orange/gold palette

## Architecture decisions

- **No router** — single React component with `currentStep` state (0–19). Clicking NEXT runs `currentStep++`. No page reloads, instant transitions. Perfect for hangar Wi-Fi conditions.
- **Template-based plane pages** — all 16 fleet pages (IDs 3–18) share one `PlanePage` component; content comes from the `tourData.ts` data object.
- **Sticky bottom nav** — PREVIOUS (gray, subdued) and NEXT (large orange CTA) stick to the bottom of the viewport so thumbs never have to reach far.
- **Mobile-first CSS** — uses `dvh` units, `safe-area-inset-bottom`, and `-webkit-overflow-scrolling: touch` for smooth phone UX.
- **Navy tactical palette** — `--navy-900` through `--navy-400`, `--orange` (#f97316), `--gold` (#d4a017) for the HARP fact boxes.

## Product

Visitors pick up their phone, open the tour, tap START TOUR and navigate through:
- Page 1: Welcome & safety disclaimer
- Page 2: History of Floyd Bennett Field
- Pages 3–18: 16 aircraft/exhibit pages (photo, specs grid, service history, HARP volunteer fact)
- Page 19: The Models (scale model display showcase)
- Page 20: Thank You + donate/join CTA + restart button

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Adding a new exhibit: add an entry to `tourData.ts` (increment `id`, set `type: "plane"`) and add its image URL to `planeImages.ts`.
- Image URLs are from Wikimedia Commons — they load fine on most mobile connections. If the hangar has no internet, replace with locally bundled images.
- Do NOT add the hangar-tour to the root `tsconfig.json` references (it's a leaf package).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
