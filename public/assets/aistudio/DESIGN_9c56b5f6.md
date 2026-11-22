---
name: Obsidian Kinetic
colors:
  surface: '#10131b'
  surface-dim: '#10131b'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#181b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e0e2ed'
  on-surface-variant: '#c9c4d8'
  inverse-surface: '#e0e2ed'
  inverse-on-surface: '#2d3038'
  outline: '#938ea1'
  outline-variant: '#484555'
  surface-tint: '#cabeff'
  primary: '#cabeff'
  on-primary: '#32009a'
  primary-container: '#947dff'
  on-primary-container: '#2b0088'
  inverse-primary: '#613de0'
  secondary: '#a2e7ff'
  on-secondary: '#003642'
  secondary-container: '#00d2fd'
  on-secondary-container: '#005669'
  tertiary: '#c1c6d7'
  on-tertiary: '#2a303d'
  tertiary-container: '#8b91a0'
  on-tertiary-container: '#242a36'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#cabeff'
  on-primary-fixed: '#1c0062'
  on-primary-fixed-variant: '#4918c8'
  secondary-fixed: '#b4ebff'
  secondary-fixed-dim: '#3cd7ff'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#004e5f'
  tertiary-fixed: '#dde2f4'
  tertiary-fixed-dim: '#c1c6d7'
  on-tertiary-fixed: '#161c28'
  on-tertiary-fixed-variant: '#414755'
  background: '#10131b'
  on-background: '#e0e2ed'
  surface-variant: '#32353d'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses high-performance engineering, computational elegance, and surgical visual precision. Drawing direct lineage from the disciplined restraint of Apple hardware design, the fluid keyboard-driven utility of Linear, and the stark, high-contrast luminescence of Vercel, it serves elite software engineers, systems architects, and technical founders. 

The aesthetic is characterized by:
- **Atmospheric Depth:** Deep-space dark canvas punctuated by localized luminescence and subtle chromatic gradients.
- **Glassmorphic Precision:** Translucent surfaces layered over microscopic noise textures and edge-lit borders rather than heavy flat fills.
- **Hyper-Tuned Typography:** Technical, monospaced-adjacent structural alignment paired with geometric clarity.
- **Controlled Radiance:** Glows are reserved for active states, vital telemetry, and key calls-to-action to preserve an aura of quiet capability rather than visual noise.

## Colors

The palette leverages an ultra-deep obsidian foundation engineered to maximize the dynamic range of glowing accents and high-legibility typographic tiers.

### Roles & Application
- **Canvas Base (`#080B12`):** Ground-level viewport canvas; provides infinite depth.
- **Surface Elevation (`#101622`):** Elevated cards, floating navigation panels, terminal consoles, and modal dialogs.
- **Primary Kinetic Accent (`#7C5CFC`):** Primary interactions, focus halos, selection states, and ambient core brand luminescence.
- **Secondary Laser Accent (`#00D4FF`):** Live telemetry indicators, active terminal branches, compile statuses, and gradient edge highlights.
- **Text & Contrast Hierarchy:**
  - **High-Contrast Text (`#F5F7FA`):** Headings, critical data points, active labels, and code tokens.
  - **Muted Text (`#9CA3AF`):** Secondary metadata, documentation body text, inactive icons, and descriptive copy.
  - **Ghosted Hairline:** White at 8% opacity (`rgba(255, 255, 255, 0.08)`) for baseline boundaries and separators.

## Typography

Typography prioritizes density, optical balance, and extreme legibility. `Geist` provides neutral, hyper-modern proportions for narrative reading and high-impact headlines, while `JetBrains Mono` handles metric displays, code snippets, breadcrumbs, and system telemetry.

- **Tracking:** Headlines use tight negative tracking (`-0.02em` to `-0.03em`) to deliver the compact, confident display cadence seen in modern developer tooling.
- **Labels & Badges:** Labels strictly use `JetBrains Mono` with uppercase transformations and positive letter spacing (`0.04em` to `0.06em`) to evoke CLI readouts and hardware interfaces.
- **Paragraphs:** Body text maintains generous vertical leading (`lineHeight: 1.6`) against `#9CA3AF` to reduce visual fatigue on OLED and high-resolution monitors.

## Layout & Spacing

The layout is constructed on a 12-column responsive fluid grid anchored within a strict maximum container width of `1280px`.

- **Desktop (1024px+):** 12 columns, `1.5rem` (`24px`) gutters, and `3rem` (`48px`) outer margins. Multi-column showcase cards span 4, 6, or 8 columns.
- **Tablet (768px – 1023px):** 8 columns, `1.5rem` gutters, and `2rem` outer margins. Sidebars collapse into top control ribbons or command-palette drawers.
- **Mobile (<768px):** 4 columns, `1rem` gutters, and `1.25rem` outer margins. All horizontal multi-card arrangements reflow into unified vertical stacks.
- **Rhythm & Cadence:** Internal component spacing follows an 8pt base grid with a 4pt micro-step (`0.25rem`). Vertical section stacks employ expansive gaps (`space-xl` scaled to 4rem–6rem via utility tiers) to let featured engineering projects command focus.

## Elevation & Depth

Depth is established through translucent physical materials, backdrop filtration, and directional edge illumination rather than murky dropshadows.

- **Level 0 (Canvas):** Pure `#080B12`. Zero elevation.
- **Level 1 (Sub-surface / Wells):** Translucent fill `rgba(16, 22, 34, 0.4)` bordered by a 1px inner stroke of `rgba(255, 255, 255, 0.04)`.
- **Level 2 (Cards & Modules):** Glassmorphic surface composed of `rgba(16, 22, 34, 0.65)` layered over `backdrop-filter: blur(16px)`. Bordered by a continuous 1px hairline stroke of `rgba(255, 255, 255, 0.08)`.
- **Level 3 (Interactive Hover & Focus):** The surface shifts to `rgba(16, 22, 34, 0.85)` with a multi-layered kinetic glow:
  - Ambient base: `0 12px 32px -8px rgba(124, 92, 252, 0.18)`
  - Edge illumination: Gradient borders transitioning from `#7C5CFC` through `#00D4FF` to transparent.
- **Level 4 (Floating Overlays & Command Palette):** `rgba(10, 14, 22, 0.92)` with `backdrop-filter: blur(24px)`, enclosed in a 1px border of `rgba(124, 92, 252, 0.3)` and anchored by an expansive outer shadow: `0 24px 64px -12px rgba(0, 0, 0, 0.75), 0 0 24px 0 rgba(124, 92, 252, 0.12)`.

## Shapes

The geometric structure relies on balanced rounding (`0.5rem` / `8px` default) to echo modern precision hardware and refined engineering consoles.

- **Standard Elements (`0.5rem` / `rounded`):** Input fields, inline code modules, buttons, and individual list items.
- **Composite Containers (`1rem` / `rounded-lg`):** Project presentation cards, architecture diagrams, interactive code previewers, and repository summary panels.
- **System Overlays (`1.5rem` / `rounded-xl`):** Primary command palette, modal viewports, and floating dock navigation bars.
- **Capsule Formats (Full Radius):** Status indicator pills, deployment chips, and live activity dots.

## Components

### Buttons
- **Primary (Glow Kinetic):** Background is a horizontal gradient from `#7C5CFC` to `#5A3AE0`. High-contrast text `#F5F7FA` in `Geist` medium (`14px`). Box shadow includes a 1px ambient interior highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.2)`) and an exterior purple aura: `0 0 20px -4px rgba(124, 92, 252, 0.5)`. On hover, scale to `1.01` with increased secondary cyan bloom.
- **Secondary (Glass Outline):** Background is `rgba(16, 22, 34, 0.6)` with backdrop blur. Border is 1px solid `rgba(255, 255, 255, 0.12)`. Text is `#F5F7FA`. On hover, border transitions to `rgba(0, 212, 255, 0.4)` with an electric cyan edge cast.
- **Ghost / Minimal:** Transparent background, `#9CA3AF` text. Hover yields `rgba(255, 255, 255, 0.05)` fill and crisp `#F5F7FA` foreground text.

### Chips & Telemetry Badges
- Compact height (`24px` to `28px`), full capsule rounding.
- Background uses tinted glass fills: `rgba(124, 92, 252, 0.1)` for technical tags or `rgba(0, 212, 255, 0.1)` for live states.
- Border is 1px solid matching the accent at 20% opacity.
- Typography strictly leverages `JetBrains Mono` (`label-sm`).
- Active status badges feature a `6px` pulsating circular node (`#00D4FF` with an animated drop-shadow bloom).

### Project & Showcase Cards
- Background: `rgba(16, 22, 34, 0.7)` with `16px` backdrop blur.
- Outer border uses a dynamic gradient mask: 1px hairline stroke transitioning diagonally from `rgba(124, 92, 252, 0.4)` down to `rgba(255, 255, 255, 0.04)`.
- Internal layout integrates an upper media / preview canvas, followed by title, technical stack tags, and metadata metrics separated by a 1px divider (`rgba(255, 255, 255, 0.06)`).

### Input Fields & Terminal Bars
- Dark recessed container (`rgba(8, 11, 18, 0.8)`) with a 1px border of `rgba(255, 255, 255, 0.1)`.
- Focus shifts border to `#7C5CFC` accompanied by a distinct focus ring: `0 0 0 3px rgba(124, 92, 252, 0.25)`.
- Monospaced inputs for search queries and terminal filtering, featuring a blinking vertical beam caret in `#00D4FF`.

### Checkboxes & Toggle Switches
- Checkboxes: `16px` squared with `4px` corner radius. Unchecked state is `rgba(255, 255, 255, 0.06)` with 1px border. Checked state fills with `#7C5CFC` and emits a subtle indigo glow.
- Switches: Track width `36px`, height `20px`. Track background is `#101622` with a 1px border. The thumb is a pure `#F5F7FA` disk that slides with spring physics, lighting the track with `#00D4FF` when engaged.

### Specialized Developer Portfolio Modules
- **Interactive Code Blocks:** Darkened well with line numbering in `#9CA3AF` at 40% opacity, syntax highlighted with `#7C5CFC`, `#00D4FF`, and `#F5F7FA`, topped by a mac-style dot control bar and instant "Copy Raw" action chip.
- **Git Commit / Timeline List:** Vertical connecting rail drawn with a 1px gradient line (`#7C5CFC` fading to `transparent`). Milestones are indicated by glowing diamond nodes with hover cards displaying deployment previews.