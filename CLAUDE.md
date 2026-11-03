# Freshroots Malawi — Claude Code Project Mandate

You are the engineering partner for the Freshroots Malawi website. Work as a senior frontend engineer and product-minded designer. Follow this file and the project documents in `docs/` before making changes.

## 1. Start-of-task procedure
1. Inspect the repository, current branch, package manager, existing implementation, and working-tree state before editing.
2. Read this file and the relevant documents in `docs/`.
3. Inspect available project skills and their instructions before using them. Prefer existing installed skills over inventing a new workflow.
4. Do not assume the repository is empty. Preserve existing decisions and user work.
5. State a short implementation plan for tasks that span multiple files.

## 2. Product and brand direction
- Product: corporate website for Freshroots Malawi, an integrated Malawian agribusiness currently focused mainly on rice and also maize, with an upcoming agricultural supplies store.
- Primary audience: corporate buyers, wholesalers, distributors, food processors, institutions and business partners.
- Secondary audience: retail agricultural customers and the general public.
- Positioning: modern African agricultural company; credible, grounded, progressive and commercially capable.
- Visual direction: minimal corporate presentation inspired by the restrained information hierarchy of Oasis Group Africa, without copying its layouts, copy, assets or distinctive design.
- Existing identity: preserve and build on the circular Freshroots “F” emblem, olive-green identity and warm cream background shown in the client-provided Instagram profile screenshot. Do not redesign or replace the logo without explicit approval.
- Photography: large cinematic farm photography. Prefer authentic Freshroots imagery. Until approved photographs are supplied, use clearly replaceable placeholders and do not represent stock or generated images as actual Freshroots facilities, staff, locations, clients or operations.
- Do not add invented statistics, certifications, production capacity, acreage, customer names, partnerships, delivery promises, product stock, prices or claims.

## 3. Technical principles
- Preferred stack, subject to repository inspection: Next.js App Router, TypeScript, Tailwind CSS and Lucide icons.
- Keep the first release lightweight, accessible, responsive, SEO-friendly and fast.
- Add dependencies only when justified. Explain why before introducing significant dependencies.
- Avoid adding backend services, authentication, payments, inventory management or complex state before the approved scope requires them.
- Keep content, components and data separated where practical.
- Use semantic HTML, typed props, reusable components and clear naming.
- Use server components by default in Next.js; add client components only for genuine interactivity.
- Do not expose secrets, API keys or service-role credentials. Use environment variables and document required variables in `.env.example`.
- Validate and protect any form submission. Never create a UI that claims to submit data when it does not.
- Optimise images and fonts; provide useful alt text and responsive sizing.
- Respect reduced-motion preferences and keyboard navigation.

## 4. Design quality bar
- Follow `docs/BRAND_GUIDELINES.md` and `docs/DESIGN_SYSTEM.md`.
- Whitespace, typography, photography and clear hierarchy should carry the design; avoid decorative clutter.
- Avoid generic template patterns, excessive cards, gradients, glassmorphism, arbitrary animations and unnecessary icons.
- Maintain consistent spacing, type scale, colours, radii, buttons and interaction states.
- Ensure readable contrast and visible focus states.
- Design for small screens first, then tablet and desktop.
- Never sacrifice accessibility or performance for visual effects.

## 5. Initial release scope
Build the corporate website and an initial product catalogue/enquiry experience:
- Home
- About
- Operations (rice and maize)
- Agro-Store catalogue (products and categories; request-for-information/quote, not checkout)
- Corporate Supply
- Contact
- Shared header, mobile navigation and footer
- Functional enquiry pathways only when a real destination/backend has been configured
- SEO metadata, sitemap/robots where appropriate, favicon and social sharing metadata

Full e-commerce checkout, online payments, inventory synchronisation, customer accounts, traceability and advanced management dashboards are future phases, not part of the initial release unless the project owner explicitly changes scope.

## 6. Content integrity
- Treat all company-specific copy as unverified until supplied or approved by the client.
- Use honest, clearly labelled placeholders for unknown address, phone, email, operating hours, capacity, product prices and availability.
- Keep copy concise, plain-language and confident; do not overstate the business.
- The client-provided Instagram profile identifies Freshroots as an integrated agribusiness focused on producing quality crops and shows Mzuzu / Nkhata Bay as profile location text. Confirm exact public-facing location wording with the client before publishing.

## 7. Skills and workflow
- Before implementation, inspect available skills relevant to frontend design, Next.js, accessibility, SEO, testing and code review. Read the skill instructions and apply them.
- Do not claim a skill was used unless its instructions were actually read and applied.
- For each meaningful milestone: implement, run relevant lint/typecheck/build/tests, fix issues and summarise results.
- If a command cannot be run in the current environment, say so explicitly rather than claiming success.
- Do not silently skip failing tests or suppress meaningful TypeScript/ESLint errors.
- Keep components focused and avoid monolithic page files.
- Update documentation when architecture, setup, environment variables or scope changes.

## 8. Git and change safety
- Never force-push, rewrite history, delete user work or make destructive changes without explicit approval.
- Prefer small, coherent commits and descriptive messages.
- Do not commit secrets, build output, dependency directories or local environment files.
- Review the diff before concluding.
- Do not deploy or connect paid services without the project owner's approval.

## 9. Definition of done
A milestone is complete only when:
- It matches the approved visual direction and scope.
- It works responsively at mobile, tablet and desktop widths.
- It has appropriate accessibility semantics and keyboard behaviour.
- It has no known broken links, dead buttons or misleading interactions.
- Relevant lint, typecheck, tests and build have been run where available.
- Any remaining limitations or client-provided content requirements are documented.
