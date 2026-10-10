# Scholarly Folio Hub

Build a responsive, professional personal academic website for Prof. [Full Name], Professor of Management at [University]. Research focus: [e.g. strategy, organizational behavior, marketing]. 

GOAL

A clean, credible, modern academic portfolio that feels fresh and editorial, not a 1990s faculty page and not a flashy tech portfolio. The audience is students, university committees, journalists, conference organizers and corporate clients. Use realistic, well-written PLACEHOLDER content throughout (clearly marked as sample data) so I can replace it later. Be creative with layout and details, but keep everything professional and understated.

TECH

React + TypeScript + Vite, Tailwind CSS, shadcn/ui, React Router, Framer Motion (motion) for animations, lucide-react for icons. Keep all content in typed data files under /src/data (profile.ts, publications.ts, books.ts, courses.ts, writing.ts, achievements.ts, grants.ts) so it's easy to edit without touching components.

PAGES (routes)

1. About (home, "/")

2. Writing ("/writing")

3. Research ("/research")

4. Teaching ("/teaching")

5. Achievements ("/achievements")

6. Contact ("/contact")

Also a simple 404 page.

DESIGN SYSTEM

- Mood: calm, confident, editorial, academic. Lots of whitespace, strong typography, restrained color.

- Colors (define as CSS variables / Tailwind tokens, support light mode; optional dark mode toggle):

  background: warm off-white #FAF9F6

  surface/cards: #FFFFFF with 1px border #E8E6E1

  heading text: #14142B

  body text: #3A3A45

  muted text: #8A8A94

  one accent color: deep teal #0F5E5A (used sparingly for links, active states, buttons, small highlights)

- Typography: headings in a refined serif (Newsreader or Fraunces), body in Inter. Large serif page titles with slightly tight letter-spacing. Body line-height ~1.7, comfortable reading width (~65 characters) for text blocks.

- Navigation: sticky top header with name in serif on the left and small, uppercase, letter-spaced nav links on the right. Active link is dark with a thin animated underline. Subtle backdrop blur and a soft bottom border that appears after scrolling. On mobile, collapse into a clean slide-in menu with a hamburger icon.

- Container: centered, max-width ~1200px, generous side padding. Thin 2px accent-colored line at the very top of the page.

- Buttons: understated, 2 styles (solid accent, outline). Links in body text use a thin light underline that darkens on hover.

- Footer: simple, with name, short tagline, email, social links (LinkedIn, Google Scholar, ORCID), and "Last updated [month year]".

PAGE CONTENT & LAYOUT

1) ABOUT (home)

- Hero: two-column on desktop (portrait on the left ~330px with slightly rounded corners and a very subtle offset border or shadow; large serif name, one-line positioning, and bio on the right). Stack on mobile.

- Short 3-paragraph bio (career path, current focus, education).

- Row of buttons: "Download CV" (placeholder PDF link), "Read my research", "Get in touch".

- Social/profile links with icons: LinkedIn, Google Scholar, ORCID, Email.

- A "At a glance" strip of 4 animated count-up stats (e.g. 20+ years teaching, 60+ publications, 3,000+ students taught, 15 countries).

- "Research interests" section with 3 to 4 short cards (title + 2-line description).

- "Currently" block: what he is researching/teaching this term.

- "Selected recent work" preview: 3 latest publications and 3 latest writings with "View all" links.

- Short newsletter signup section (email field + subscribe button, UI only for now).

2) WRITING

- Page title and one-line intro.

- Filter chips by type: All, Articles, Op-eds, Blog, Newsletter.

- List of 8 to 10 sample pieces in an editorial list layout (not heavy cards): date on the left, title in medium weight, a one-line summary, publication/source and read time in muted text, arrow icon on hover.

- A "Start here" featured block with the 3 best pieces.

- Newsletter signup block at the bottom.

3) RESEARCH

- Page title and short intro on research themes.

- Tabs or anchored sections: Publications, Books, Working Papers, Grants.

- Publications: two-column grid per item (small muted year on the left; title, authors, journal/venue and citation count on the right; DOI/PDF links as small text buttons). Include year filter and topic filter and a search box. Show 10 sample papers. Highlight "Selected" papers.

- Books: card grid with book cover placeholder, title, publisher, year, one-line description, "View" link. Show 3 sample books.

- Working Papers: list with status badge (Under review, Revise & resubmit, Working paper) and SSRN link.

- Grants & Funded Projects: simple timeline or list with funder, amount (optional), years, role.

- "Research in plain English" section with 2 short summaries of key papers written for non-specialists.

- A button linking out to the full Google Scholar profile.

4) TEACHING

- Page title and short teaching philosophy paragraph.

- Courses: grouped by level (Undergraduate, MBA, Executive Education, PhD) with course name, institution, term, and 2-line description. Show 6 to 8 sample courses.

- Student supervision: table or list of PhD/Master's students supervised (name, thesis title, year, current position) using sample data.

- Student testimonials: small carousel or 3-column quotes with name/role (marked as sample).

- Teaching awards callout.

- Optional resources: downloadable syllabus/reading list links (placeholder).

5) ACHIEVEMENTS

- Page title and short intro.

- Timeline layout (vertical line with year markers) of awards, fellowships, best paper prizes, keynote invitations, and leadership roles. Show 10 sample items with category tags (Award, Fellowship, Editorial Role, Recognition, Service).

- Sections: Honors & Awards, Editorial & Professional Service, Memberships, Media & Invited Talks.

- A "Featured recognition" highlight at the top with the 3 most prominent items.

6) CONTACT

- Page title and a warm 2-line intro.

- Four audience cards: Speaking invitations, Consulting & advisory, Student inquiries, Media requests. Each with a short description and an "Email" button.

- Contact form (name, email, topic dropdown, message) with client-side validation using react-hook-form + zod, success toast, UI only for now (no backend; add a TODO comment for connecting Formspree or Resend).

- Office details: university, department, address, office hours, optional booking link.

- Social/profile links.

ANIMATIONS (professional, subtle, never distracting)

- Use Motion/Framer Motion. Durations 400 to 700ms with gentle easing.

- Page transitions: soft fade + 12px upward slide between routes.

- Scroll reveal: sections, paragraphs, cards and list items fade up (opacity + 16 to 24px translate) once when entering the viewport, with 60ms stagger.

- Hero: staggered reveal of name, positioning line and bio; portrait fades in with a slight scale from 0.98 to 1.

- Count-up animation on the stats strip when it enters the viewport.

- Nav: animated underline on hover and active state; header shadow/border fades in on scroll.

- Cards and list rows: soft hover lift or background tint, arrow icon slides in.

- Achievements timeline: line draws in as you scroll; markers pop in with a small scale.

- Smooth anchor scrolling.

- Respect prefers-reduced-motion by disabling or minimizing all animation.

- No parallax overload, no bouncing, no neon glow, no glassmorphism cards, no typing effects.

RESPONSIVENESS & ACCESSIBILITY

- Mobile-first. Test layouts at 375px, 768px, 1024px, 1440px. No horizontal overflow. Two-column layouts stack on mobile; touch targets at least 44px.

- Semantic HTML, proper heading hierarchy, visible focus states, keyboard navigable menu, alt text on all images, WCAG AA color contrast.

- Fast: lazy-load images, use optimized fonts with font-display swap.

SEO & EXTRAS

- Per-page titles and meta descriptions, Open Graph tags, favicon placeholder.

- Add Person schema.org JSON-LD on the home page.

- Include placeholder images (portrait, book covers) with clear "replace me" labeling.

- Add a short README comment or /src/data header explaining where to edit content.

CONTENT RULES

- Write believable, polished sample copy for a management professor (strategy/organizations topics). Mark all sample names, numbers, awards and quotes as placeholders. Do not use real people's names, real institutions' logos, or text copied from any existing website.

Start by building the design system, layout shell (header, footer, routes) and the About page. Then build the remaining pages one by one, keeping the style consistent.


build this website 
i am attatching refrence images u can take idea from it

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c73d995e-637b-4d92-b71e-d2df3517b28b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
