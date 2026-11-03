---
name: freshroots-frontend
description: Implement Freshroots pages and components using the project's Next.js, TypeScript, responsive design and accessibility conventions.
---

# Freshroots Frontend Implementation Skill

Use this skill when adding routes, page sections, React components, styling, navigation, forms or frontend behaviour.

## Required reading
- Root CLAUDE.md
- docs/WEBSITE_REQUIREMENTS.md
- docs/DESIGN_SYSTEM.md
- Relevant brand and content documentation

## Implementation standards
- Inspect the existing architecture before changing files.
- Use Next.js App Router and TypeScript conventions already present in the repository.
- Prefer React Server Components. Add client-side components only when real client-side interaction requires them.
- Use semantic HTML, accessible labels, keyboard-friendly controls and visible focus states.
- Build reusable, focused components rather than giant page files.
- Keep data/content separate from presentation when it improves maintainability.
- Use Next.js Image for image assets and configure remote sources explicitly.
- Optimise for mobile first, then tablet and desktop.
- Avoid dead links, fake buttons, fake form submissions and fabricated contact details.
- If a real form destination or contact endpoint is not configured, explain the missing dependency and do not pretend the enquiry was sent.
- Use CSS variables/design tokens from the shared design system. Do not create one-off colours or spacing values without a clear reason.
- Use only dependencies that are justified by a concrete requirement.
- Keep secrets in environment variables; update the example environment file when variables are added.

## Page-level quality
- Keep content concise and specific to verified Freshroots facts.
- Use a meaningful page title, description and heading hierarchy.
- Ensure all images have meaningful alt text or empty alt when decorative.
- Respect reduced-motion preferences.
- Verify all navigation and CTA destinations.
- Do not use client-only effects to implement behaviour that native HTML or server rendering handles more simply.
