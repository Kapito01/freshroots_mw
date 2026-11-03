---
name: freshroots-quality
description: Review Freshroots website changes for build correctness, visual consistency, responsive behaviour, accessibility, SEO and content accuracy.
---

# Freshroots Quality Review Skill

Use this skill after implementing a meaningful feature, page, component or release milestone. Review first; do not silently rewrite unrelated code.

## Review procedure
1. Read CLAUDE.md and the requirements relevant to the change.
2. Inspect the changed files and the complete diff.
3. Run available checks:
   - npm run lint
   - npm run typecheck
   - npm run build
   - Relevant tests, if configured
4. When a browser/preview is available, review mobile, tablet and desktop widths.
5. Check keyboard navigation, focus visibility, heading order, form labels, alt text and colour contrast.
6. Verify links, CTA behaviour, navigation and error/empty states.
7. Check image loading, responsive sizing, metadata and page descriptions.
8. Search for unsupported claims, invented statistics, certifications, contact details, prices, availability or company relationships.
9. Report blockers separately from suggestions. Do not claim checks passed unless they were actually run.

## Severity
- Critical: broken build, exposed secrets, misleading submission, security flaw, inaccessible core navigation.
- High: broken primary journey, mobile overflow, incorrect company claim, serious performance or SEO issue.
- Medium: inconsistent spacing, minor accessibility issue, missing metadata or visual regression.
- Low: polish, copy refinement or minor implementation improvements.

## Output
Provide a brief summary of:
- What was reviewed.
- Checks run and their actual results.
- Findings grouped by severity.
- Remaining assumptions or client approvals required.
- Any commands that could not be run in the current environment.
