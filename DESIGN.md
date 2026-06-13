# Design

Aurora-on-black deep-space system. The surface is true near-black; the brand lives in a luminous aurora green carried by the WebGL spiral, glows, and interactive accents. One world from hero to footer.

## Color

OKLCH only. Strategy: **Committed** (aurora green carries the identity across the dark surface; solar amber is a scarce second voice).

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(0.09 0 0)` | Body background. Pure near-black, zero tint. |
| `--surface` | `oklch(0.13 0.008 160)` | Panels, timeline cards. |
| `--surface-2` | `oklch(0.17 0.012 160)` | Raised elements, chips. |
| `--line` | `oklch(0.32 0.02 160)` | Hairline borders (often at 40 to 60% alpha). |
| `--ink` | `oklch(0.95 0.005 160)` | Headings, emphasis text. |
| `--body` | `oklch(0.84 0.01 160)` | Body copy (≥10:1 on bg). |
| `--muted` | `oklch(0.66 0.02 160)` | Secondary text (≥4.5:1 on bg). |
| `--aurora` | `oklch(0.80 0.165 162)` | Primary brand: CTAs, glows, links, spiral core. |
| `--aurora-deep` | `oklch(0.55 0.12 162)` | The seed. Pressed states, deep glow layers. |
| `--solar` | `oklch(0.60 0.13 70)` | Accent: availability dot, certs, rare highlights. |

Text on aurora-filled buttons: near-black (`oklch(0.13 0.02 162)`); the fill is pale enough (L 0.80) for dark text. Text on solar fills: white.

## Typography

- **Display: Unbounded** (700/800). Wide, orbital, futuristic without sci-fi costume. Headings and the name.
- **Body: Hanken Grotesk** (400/500/600). Quiet humanist grotesque, excellent at small sizes on dark.
- **Mono: Martian Mono** (400/500). HUD readouts, data labels, nav. Used sparingly; this is a real developer register.

Scale: display `clamp()` ceiling 5.5rem, ratio ≥1.3 between steps, letter-spacing never tighter than -0.03em (Unbounded is already wide). Body line-height 1.7 on dark.

## Components

- **Buttons**: pill, aurora fill with near-black text (primary); hairline `--line` border with ink text (ghost). Hover: lift + glow shadow `0 0 24px` aurora at 35%.
- **Panels**: `--surface` with 1px `--line` border, 1.25rem radius. Hover: border shifts toward aurora, soft glow. No side-stripes, no glassmorphism.
- **HUD labels**: Martian Mono, 0.72rem, `--muted`. Used as data readouts (coordinates, dates, counts), not as section eyebrows.
- **Timeline**: vertical hairline with aurora nodes (work) and ink nodes (education); the sequence is real, so year markers carry information.

## Motion

- **Hero**: Three.js particle spiral galaxy (logarithmic arms, aurora-to-white falloff). Slow idle rotation; scroll pulls the camera through it; pointer/touch tilts it. Deferred import after first paint; DPR capped at 1.75; particle count halved under 768px; paused off-screen and on hidden tabs.
- **Reveals**: varied per section: blur-to-sharp for prose, clip-path sweep for screenshots, stagger for chips. Easing `cubic-bezier(0.22, 1, 0.36, 1)`. Content is visible by default; reveals enhance.
- **Counters** on stats; thin aurora scroll-progress line.
- `prefers-reduced-motion`: static spiral frame (no rotation, no parallax), instant reveals, no counters animation.

## Layout

Max content width 72rem; prose 65ch. Fluid section padding `clamp(4rem, 10vh, 8rem)`. Asymmetry in the hero (name left-low, scene full-bleed behind); centered single-column for prose; alternating two-column for project showcases.
