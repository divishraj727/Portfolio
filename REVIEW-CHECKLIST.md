# Portfolio — Review & Fix Checklist

Audit of `portfolio-divishrajo.vercel.app` (code in `src/`). Ordered by impact.
Check items off as you go.

---

## 1. Spiral projects — make it a real 360° vortex (HIGH)

The cards currently sweep only ~140–180° and bunch into the top-left quadrant.
File: `src/components/Projects.astro`

- [ ] **Increase `STEP`** (line ~196) from `46°` → `~72–90°`. Wider angle = cards
      actually rotate around the core instead of stacking in one direction.
- [ ] **Raise `K`** (line ~197) from `0.7` → `~0.80–0.82`. Slower shrink means more
      cards stay visible at once (currently only 3–4 survive before they vanish).
- [ ] **Add a second clone pass** so there are ~12 nodes instead of 8 — enough
      bodies to populate a full ring.
- [ ] **Widen the visible window** in `layout()` — the `t` recycle range and the
      fade thresholds (`t < -0.3`, `t > N - 3`) need loosening so cards survive
      a full turn.
- [ ] **Center the core glow.** `.spiral-core` is at `top: 48%` (line ~130); move
      to `50%` so it sits dead-center behind the focused card.
- [ ] **Fix the progress dots** (`.spiral-dots`) — currently near-invisible on screen.
      Raise contrast / reposition.
- [ ] Re-test on mobile (`< 768px`) — verify the wider spiral doesn't overflow.

---

## 2. Hero — name is below the fold (HIGH)

On first load the whole screen is just the galaxy + "SCROLL". Name, headline, and
CTA only appear after scrolling.
File: `src/components/Hero.astro`

- [ ] Change content wrapper (line ~17) from `justify-end` + `pb-28` to
      center or lower-third, so the name + CTA are visible immediately.
- [ ] Confirm the legibility scrim still covers the text after repositioning.

---

## 3. "Looks AI-made" — credibility fixes (HIGH)

- [ ] **Replace vanity stats.** `97.9% uptime`, `980+ users reached`, `2+ years`
      read as fabricated filler. Use real numbers or remove the Stats section.
      (File: `src/components/Stats.astro` / `src/config.ts`)
- [ ] **Trim the About section ~60%.** Currently 5 long SEO-stuffed paragraphs
      ("If you searched for a developer portfolio…"). Make it human, not
      keyword-bait. (File: `src/components/About.astro`)
- [ ] **Break the monochrome green.** `--solar` accent is defined but barely used.
      Add a scarce second accent for contrast.

---

## 4. Typography — fix application, keep the fonts (MEDIUM)

The Unbounded / Hanken Grotesk / Martian Mono trio is good — keep it.

- [ ] **Reduce GIANT UPPERCASE everywhere.** Every section heading is the same
      wide display caps, which flattens hierarchy and is the main "template" tell.
      Reserve Unbounded uppercase for the name + 1–2 hero words; make section
      headings smaller or mixed-case.
- [ ] Vary heading weight/size between sections for real hierarchy.

---

## 5. Bugs / cleanup (MEDIUM)

- [ ] **Reveal animations can strand content dim.** Elements start at
      `opacity: 0.001` and only restore on intersection (threshold `0.12`).
      Tall sections can leave blocks half-faded mid-scroll. Lower the threshold
      and/or add a fallback timeout that force-reveals after N ms.
      (File: `src/layouts/Layout.astro`, IntersectionObserver ~line 143)
- [ ] **Fix stale font comment.** `Layout.astro` line ~104 says
      "Sora / Manrope / JetBrains Mono" but you load Unbounded / Hanken / Martian.

---

## 6. Polish (LOW)

- [ ] Spiral `corePulse` glow pulses off-center — fix together with #1.
- [ ] Verify hero galaxy parallax/tilt still frames the (repositioned) hero text.
- [ ] Re-check scroll-progress line, ticker, and counters after changes.

---

### Suggested order
1 (spiral) → 2 (hero) → 3 (credibility) → 4 (type) → 5 (bugs) → 6 (polish)
