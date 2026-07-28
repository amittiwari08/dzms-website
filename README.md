# DZMS — React + Tailwind CSS

## Latest round of changes

- **Rebranded** from "Forgeline" to **DZMS** everywhere (nav, footer, preloader,
  page title, meta description) with a new logo mark — see `src/components/Logo.jsx`.
- **Contact form now actually sends email** via EmailJS (frontend-only, no
  backend needed) to `akmth3322@gmail.com` and `ceo@dzms.co.in`. **You must
  finish the 5-minute setup in `src/emailConfig.js` for this to go live** —
  until then the wizard still works and shows the success screen, it just
  logs a console warning instead of sending anything.
- **Removed the public phone number** from the Contact section (it showed a
  placeholder `+91 98765 43210` — that's gone; only the email contact point
  remains). If you'd also like the "Phone" *input field* removed from step 7
  of the wizard (which asks the visitor for *their* number), let me know —
  I left that one in since it's useful lead data, not a number shown on the
  site.
- **Budget step** in the wizard now has an "Enter an exact amount instead"
  link that swaps the slider for a plain number input, for clients who want
  to type a specific figure rather than drag to it.
- **Service section icons** replaced — the 12 services used emoji before;
  they're now a custom set of minimal line-style SVG icons
  (`src/components/ServiceIcon.jsx`) in Milano Red, matching the rest of the
  site instead of looking like stock emoji.
- **Portfolio is now real work**, not placeholders: I-SPOT Solutions
  (medical courier services), Dasya Zuber (travel & tour booking), and Agrix
  (agritech platform for Indian farmers) — each card links out to the live
  site. **Still needed from you:** you mentioned 5 companies plus a
  government project — only 3 links were sent, so send over the other 2
  (name/link) and the government project details and I'll add them the same
  way.
- **Hero stats** (`240+ projects`, `18+ industries`, `97% retention`, `4wk
  launch`) are still the original placeholder numbers — I didn't want to
  invent real-looking figures for your business without your actual
  numbers. Send over what you'd like shown (e.g. real project count, years
  active, or drop the stat bar down to just the 3 real clients + gov work)
  and I'll swap them in.

## EmailJS setup (required for the contact form to deliver email)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. **Add an Email Service** (e.g. connect the Gmail you want sending from) →
   note the **Service ID**.
3. **Create an Email Template** → note the **Template ID**. In the
   template's "To Email" field, enter exactly:
   ```
   akmth3322@gmail.com, ceo@dzms.co.in
   ```
   In the template body, use these variables so the submitted details
   actually appear in the email: `{{from_name}}`, `{{from_company}}`,
   `{{from_email}}`, `{{from_phone}}`, `{{from_country}}`, `{{service}}`,
   `{{business_type}}`, `{{budget}}`, `{{timeline}}`, `{{description}}`,
   `{{file_names}}`.
4. Go to **Account → General** → copy your **Public Key**.
5. Open `src/emailConfig.js` and replace the three `YOUR_...` placeholders
   with those values. Save, restart `npm run dev`, and submit a test
   project — both inboxes should receive it.

**Note on uploaded files:** the wizard's file-upload step only sends the
*file names* in the email (e.g. "brief.pdf, logo.png"), not the actual
files — EmailJS's free tier doesn't support attachments well, and this is
still a frontend-only site with nowhere to store an uploaded file. If you
need the actual files delivered, that requires a small backend or a
service like EmailJS's paid attachment API — happy to wire that up if you
want it.

A premium, conversion-focused marketing site for a full-service digital
transformation company, built as a **React (Vite) + Tailwind CSS** app,
to the brief's exact palette and type system.

## Tech stack

- **React 18** (function components + hooks — no class components)
- **Vite** — dev server & build tool
- **Tailwind CSS 3** — utility-first styling, custom design tokens
- **Vanilla `IntersectionObserver`** for scroll reveals and count-up stats
  (no animation library dependency required — see note below)

`framer-motion` is listed in `package.json` because it's the animation
library named in the original brief, but the current build doesn't
require it — all motion here is done with Tailwind's `animate-*`
utilities, CSS keyframes, and small hooks. It's there ready to use if
you want to swap any of the hand-rolled transitions for Framer Motion's
`<motion.div>` / `AnimatePresence` later (the `Contact` step transitions
and `Hero` reveals are the best candidates).

## Getting started

This code was written in a sandboxed environment with no network
access, so **`npm install` has not been run here** — you'll need to do
that yourself the first time:

```bash
npm install
npm run dev      # starts Vite on http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build locally
```

Every file has been syntax-checked with esbuild (including a full
bundle-resolution pass across all imports), so this should install and
run cleanly — but since it's never been run through an actual `npm
install` + `vite build` in this sandbox, please flag anything unusual
if you hit it on first run.

## Project structure

```
dzms-react/
├── index.html                 Vite entry HTML
├── package.json
├── vite.config.js
├── tailwind.config.js          Design tokens: colors, fonts, keyframes
├── postcss.config.js
└── src/
    ├── main.jsx                 React root
    ├── App.jsx                  Composes every section, in order
    ├── index.css                Tailwind directives + shared classes
    ├── data/                    Static content, one file per section
    │   ├── services.js
    │   ├── industries.js
    │   ├── tech.js
    │   ├── portfolio.js
    │   ├── testimonials.js
    │   └── faq.js
    ├── hooks/
    │   └── useReveal.js          Scroll-reveal + count-up hooks
    └── components/
        ├── Preloader.jsx
        ├── CursorGlow.jsx
        ├── Magnetic.jsx           Magnetic-hover wrapper for buttons
        ├── Navbar.jsx             Mega menu + mobile nav
        ├── Hero.jsx
        ├── TrustStrip.jsx
        ├── Services.jsx           Interactive service explorer
        ├── Industries.jsx         Click an industry → see matched services
        ├── Process.jsx            7-step timeline, scroll-driven progress
        ├── TechStack.jsx
        ├── Portfolio.jsx
        ├── Compare.jsx            "Why DZMS" comparison table
        ├── Testimonials.jsx       Auto-scrolling marquee, glass cards
        ├── Pricing.jsx
        ├── FAQ.jsx                Accordion + live search
        ├── Contact.jsx            8-step project inquiry wizard
        ├── Footer.jsx
        └── Fab.jsx
```

## Design tokens

Defined in `tailwind.config.js` under `theme.extend.colors` /
`fontFamily`, matching the brief exactly:

| Token | Tailwind class | Hex |
|---|---|---|
| Primary — Milano Red | `milano` | `#A90E02` |
| Primary Hover | `milano-hover` | `#8D0C02` |
| Secondary — Lemon Chiffon | `chiffon` | `#FFFBD4` |
| Dark | `ink` | `#111111` |
| White | (Tailwind default `white`) | `#FFFFFF` |
| Border | `border` (as a color, e.g. `border-border`) | `#E7DFC2` |
| Muted text | `muted` | `#666666` |

Headings: `font-head` → **Sora**. Body: `font-body` (applied at `<body>`
level) → **Inter**. Both loaded via Google Fonts in `index.html`.

## Sections included

Navbar (mega menu, blur-on-scroll) · Hero (animated blobs, stat
counters, scroll indicator) · Trust marquee · Services explorer
(hover/click detail panel, 12 services) · Industries grid (12
industries, click to surface matched services) · Process timeline (7
steps, animated scroll progress) · Tech stack grid (15 technologies,
hover reveal) · Portfolio (6 case-study cards with CSS device mockups)
· Why DZMS comparison table · Testimonials marquee (glass cards,
pause on hover) · Pricing preview (3 tiers) · FAQ (accordion + live
search) · Contact — an 8-step wizard (service → business type → budget
slider → timeline → description → drag-and-drop file upload with
simulated progress → contact details → animated success state with
confetti) · Footer with newsletter form.

## Notes on the build

- **Frontend only** — no backend, auth, or database. The contact
  wizard and newsletter form simulate submission entirely in React
  state (including a fake file-upload progress animation) and never
  send data anywhere. Wire `Contact.jsx`'s `data` object into a real
  endpoint when you're ready.
- All copy, case studies, client names and testimonials are
  illustrative placeholder content — replace with real ones before
  shipping to production.
- `prefers-reduced-motion` is respected globally via `index.css`.
- Icons are inline SVG / characters — no external icon library
  dependency, so there's nothing extra to install for icons.
- Two small `@keyframes` (`confettiPop`, `rocket`) are defined as plain
  CSS in `index.css` rather than through Tailwind's `theme.extend`,
  because they're triggered via inline `style` attributes rather than
  utility classes, so keeping them outside Tailwind's utility layer
  guarantees they're never tree-shaken.

## Optional next steps

- Swap `Contact.jsx`'s manual step transitions for Framer Motion's
  `AnimatePresence` if you want spring-based motion instead of CSS
  transitions.
- Add TypeScript (`npm install -D typescript @types/react
  @types/react-dom`, rename files to `.tsx`) if you want type safety on
  the data shapes in `src/data/`.
- Hook `Contact.jsx` up to a real backend (or a service like Formspree
  / a serverless function) to actually receive submissions.
