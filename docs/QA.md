# Site QA Checklist

Manual verification steps for all routes and forms. Recommended env: `MOCK_EMAIL_MODE=true` to avoid outbound email.

## Global
- Load home page `/` on desktop and mobile widths.
- Verify top navigation links navigate correctly and header CTAs work.
- Confirm sticky “Hire Robert” button opens `/hire#advisory-form`.
- Check footer links: Privacy, Terms, key resources.

## Routes
- `/` Home: Hero text, credibility strip, “What I Do” cards, featured presentation/podcast, bio, Work With tiles, MYGOAL spotlight, multi-step form renders and submits (success message).
- `/about`: Hero, signature focus areas, leadership themes, expertise, career, education timelines, testimonials placeholders, MDX block renders.
- `/services`: Tracks A/B/C cards, engagement structure list, packages list, inquiry section with multi-step form.
- `/speaking`: Topics list, flagship talk panel, packages, conference outreach widget (copy + generate pitch), booking form.
- `/case-highlights`: Outcomes list and confidentiality note.
- `/media`: YouTube embed loads, verified media links buttons, list cards.
- `/mygoal`: MYGOAL + Haven sections with CTAs and resource links.
- `/resources`: Featured resource cards with external links, downloadables list.
- `/insights`: Cards for insights with “Request full article” link.
- `/contact`: Hero, router form tabs, scheduler CTA, multi-step form at bottom.
- `/speaker-kit`: Bios (3 lengths), headshot placeholders, download CTA, speaker-kit request form.
- `/hire`: Multi-step inquiry with routing note and scheduler CTA.
- `/privacy`: Copy renders.
- `/terms`: Copy renders.
- `/health`: Returns JSON `{ status: "ok", buildTime, gitCommit }` with HTTP 200.

## Forms (with MOCK_EMAIL_MODE=true)
- Advisory form (e.g., `/contact` tab: Advisory): Fill required fields → success message.
- Speaking form (`/speaking#speaking-form`): Fill required fields → success message.
- Mentorship form (`/contact` tab: Mentorship): Fill required fields → success message.
- Multi-step flow (`/contact` or `/hire#advisory-form`): Complete all steps, submit, see success message.
- Speaker kit request (`/speaker-kit`): Submit → success message.

## Accessibility / UI
- Keyboard tab order works; focus rings visible on buttons/links.
- Contrast appears sufficient on dark background.
- Responsive: test ~360px mobile and ~1280px desktop for layout integrity.
- Media embeds are responsive.

## Health/Analytics/Schema
- `/health` reachable without auth.
- View source: JSON-LD schema scripts present.
- Network: analytics scripts load only if env vars set.

## Performance quick check
- Run `npm run build` locally: succeeds without warnings/errors.
- Spot-check image loading from `/images/robert-headshot.jpg` and `/images/robert-full.jpg`.

## Mobile checklist
- No horizontal scroll on key pages at ~390px width.
- Mobile nav opens/closes, CTA visible and tappable.
- Anchored CTAs scroll to correct form sections (with offset).
- Forms usable without zoom; success state visible; submit button reachable.
- Media embeds remain responsive (`aspect-video`).
