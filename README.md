# Freshroots Malawi

A modern corporate website for Freshroots Malawi, showcasing its integrated agribusiness, rice and maize production, and upcoming agricultural supplies store.

The site is designed around a minimal corporate experience, authentic agricultural storytelling and clear pathways for business enquiries.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- GitHub Actions quality workflow

## Requirements

- Node.js 20.9 or later (CI uses Node.js 24)
- npm

## Getting started

```bash
npm ci
npm run dev
```

Open http://localhost:3000 in your browser.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

These three checks also run in GitHub Actions for pushes and pull requests.

## Environment

Create a `.env.local` file for local development when configuring a public production URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-approved-domain
```

Set `NEXT_PUBLIC_SITE_URL` to the final client-approved website URL in the deployment environment. Until then, the sitemap intentionally returns no entries rather than publishing incorrect localhost or placeholder URLs.

## Enquiry experience

The corporate supply, Agro-Store and contact forms currently prepare an enquiry message in the visitor's browser. The visitor can copy the prepared message and send it through the official Freshroots Instagram profile.

- The forms do not send data to a server.
- The website does not store enquiry details.
- The interface does not claim that an enquiry has been submitted.
- A verified business email address or approved form recipient/backend is required before enabling direct online submissions.

## Project guidance

- Read the root `CLAUDE.md` before making changes.
- Project-specific Claude Code skills are in `.claude/skills/`.
- Brand direction: `docs/BRAND_GUIDELINES.md`
- Design system: `docs/DESIGN_SYSTEM.md`
- Website scope: `docs/WEBSITE_REQUIREMENTS.md`
- Client assets and content checklist: `docs/CONTENT_REQUIREMENTS.md`

## Project structure

- `src/app/` — routes, SEO metadata routes and global styles.
- `src/components/` — shared site components and enquiry builder.
- `src/components/home/` — homepage sections.
- `src/content/` — site copy, navigation and catalogue categories.
- `.github/workflows/` — automated repository quality checks.

## Content and asset limitations

The homepage uses temporary Unsplash imagery for layout development. These images do not represent Freshroots' actual farms or facilities and are visibly labelled as placeholders. Replace them with client-approved photography before launch.

The header monogram and generated social/favicon treatment are provisional typographic placeholders. Replace them with the original approved Freshroots logo asset when supplied.

No production statistics, certifications, stock levels, prices, corporate partners or unconfirmed contact information are fabricated. The Agro-Store is presented as a planned initiative and its categories are not represented as available products. E-commerce checkout, online payments, live inventory and customer accounts are outside V1 scope.
