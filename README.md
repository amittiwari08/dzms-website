# DZ Marketing Solutions — React + Vite + Tailwind CSS

A single-page company website for DZ Marketing Solutions. The project's existing theme, layout, component architecture, motion, and section order are preserved; content is aligned to the current DZ Marketing Solutions brand.

## Website content

The site presents:
- IT application and mobile application development
- Cloud applications and enterprise resource planning (ERP)
- IT consulting and technical management
- Digital marketing, SEO, and search indexing
- UI/UX design and AI/workflow automation
- Domain, hosting, website maintenance, and performance improvements
- Selected project examples: I-SPOT Solutions, Dasya Zuber, and Agrix

The existing design system uses the warm neutral palette, Milano red accent, Sora/Inter typography, responsive Tailwind layout, scroll reveals, and animated section treatments.

## Tech stack

- React 18
- Vite
- Tailwind CSS 3
- EmailJS browser SDK for the multi-step project enquiry form
- Native React hooks and CSS animations for interaction and motion

## Getting started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Vite will print the local URL in your terminal (usually `http://localhost:5173`).

Create a production build with:

```bash
npm run build
```

Preview the build with:

```bash
npm run preview
```

## Contact form setup

The multi-step project form uses EmailJS. Configure the service ID, template ID, and public key in `src/emailConfig.js` before expecting submissions to send email. Until configured, the form preserves its local demo flow; check the browser console for the setup reminder.

The form collects uploaded filenames as part of the enquiry. It does not upload the actual files to a server.

## Project structure

```text
index.html
package.json
vite.config.js
tailwind.config.js
postcss.config.js
src/
  App.jsx
  main.jsx
  index.css
  components/
  data/
  hooks/
```

Content is kept in `src/data/` where practical. The existing React/Vite/Tailwind architecture remains in place.
