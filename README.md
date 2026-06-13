# Divish Raj O — Portfolio Website

SEO-friendly developer portfolio built with **Astro** (static output) + **Tailwind CSS v4** +
**Three.js**, designed to rank for *Divish Raj*, *developer portfolio*, *full stack developer
portfolio* and related terms. Deploys to **Cloudflare Pages**.

**Design**: aurora-green-on-black deep-space system (see `DESIGN.md` / `PRODUCT.md`). The hero
is a WebGL particle spiral galaxy: scroll pulls the camera through it, pointer/touch tilts it.
Three.js is code-split and idle-loaded (first paint is pure static HTML/CSS); it pauses
off-screen, caps pixel ratio, halves particles on mobile, and renders a static frame under
`prefers-reduced-motion`. Fonts: Unbounded (display), Hanken Grotesk (body), Martian Mono (HUD).

## ✅ Before you go live — edit these

1. **`src/config.ts`** — the single source of truth. Real GitHub/LinkedIn/skills/
   experience/education are already filled from the résumé. Tweak as needed.
2. **`public/divish.jpg`** — your photo (already added ✔). Square works best.
3. **`public/og-image.jpg`** — branded 1200×630 share image (already generated ✔).
   To regenerate, re-run the Pillow script or design one at <https://www.opengraph.xyz/>.
4. **Favicon** — generate at <https://logofa.st/> and replace `public/favicon.svg`,
   `public/favicon.ico`, and add `public/apple-touch-icon.png`.
5. **AI chat widget** — set an LLM key in Cloudflare (see below) or it shows a graceful
   "email me" fallback.

## 🤖 AI chat assistant

The floating chat widget posts to `/api/chat`, served by the Cloudflare Pages Function
in [`functions/api/chat.js`](functions/api/chat.js). It answers questions about Divish
using a built-in persona prompt.

- **Default provider: Groq** (free, fast, Llama 3.3). Get a key at
  <https://console.groq.com> → in Cloudflare Pages → Settings → **Environment variables**
  add `GROQ_API_KEY`.
- To use OpenAI instead, add `OPENAI_API_KEY` (takes priority, uses `gpt-4o-mini`).
- The widget only works on Cloudflare Pages (or `npx wrangler pages dev dist`), **not** in
  plain `astro dev` — there it falls back to the email message. That's expected.

## 📷 Project screenshots

Live screenshots of each project are in `public/shots/*.jpg` (captured via microlink,
resized to 1280px). To refresh after a project changes, re-capture and drop in new JPGs.

## 🧞 Commands

| Command            | Action                                  |
| :----------------- | :-------------------------------------- |
| `npm run dev`      | Dev server at `localhost:4321`          |
| `npm run build`    | Build static site to `./dist/`          |
| `npm run preview`  | Preview the production build locally    |

## 🚀 Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dash → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Preview URL: `https://<project>.pages.dev` (kept out of Google by
   `public/_headers`).
5. **Custom domain:** Pages → your project → *Custom domains* → add `divishrajo.com`
   and `www.divishrajo.com`. Cloudflare auto-issues SSL.

## 🔍 SEO checklist (already wired in)

- ✔ Canonical URL, meta description, keywords, `robots` directives
- ✔ Open Graph + Twitter Card tags
- ✔ JSON-LD structured data (`Person` + `WebSite`)
- ✔ `sitemap-index.xml` (auto) + `robots.txt`
- ✔ ~600 words of keyword-rich content on the home page
- ✔ Fast static HTML, semantic markup, accessible skip-link

### After deploy
1. Verify the domain in **Google Search Console** (DNS TXT or HTML tag).
2. Submit `https://divishrajo.com/sitemap-index.xml`.
3. Request indexing for the homepage.
4. Add the same in **Bing Webmaster Tools**.
