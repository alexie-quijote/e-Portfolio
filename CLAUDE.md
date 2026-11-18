# Alexie Faith Quijote — HSS Senior Capstone ePortfolio (HSS 4985/6)

Current stage: **midterm shell** — design, structure, working navigation and clearly labeled placeholders only. Do **not** invent real content (bio, hours, agencies, reflections). Every unfilled spot is a `.placeholder` box starting with "Placeholder:".

## Tech rules
- Plain HTML + ONE shared stylesheet (`style.css`) + at most ONE small script (`script.js`, mobile menu only). No frameworks, no npm, no build step.
- Must work on GitHub Pages at `https://[USERNAME].github.io/[REPONAME]/` exactly as the files sit, and by double-clicking `index.html` (nothing that needs a server).
- All HTML files live in the top-level folder (no subfolders for pages). Uploads go in `assets/images/` and `assets/docs/`.
- **Relative links only** (`href="fieldwork.html"`), never starting with `/`.
- Every page: proper `<title>`, `<meta name="viewport">`, and the same skip link, header, nav and footer.
- Only external resource allowed: Google Fonts. Headings (h1–h3): Instrument Serif (single weight, never bold it, uppercase). Body, labels, nav and buttons: Newsreader (400 body, 600 labels). Both are modern serifs. The user has tried several fonts (Fraunces, Luxurious Roman, Major Mono Display, BJ Cree, Source Serif 4) and picked these; do not change fonts without being asked.

## Pages (file | page title | step label shown as subtitle)
| File | Title | Label |
|---|---|---|
| index.html | Alexie Faith Quijote | none |
| fieldwork.html | In the Field | Fieldwork Record |
| gathering.html | Roots | IPM Step 1: Gathering the Data |
| reflecting.html | My Approach | IPM Step 2: Reflecting |
| knowledge.html | Signature Projects | IPM Step 3: Identifying Relevant Knowledge |
| dissonance.html | Growth Through Challenge | IPM Step 4: Examining Dissonance |
| learning.html | Putting It Together | IPM Step 5: Articulating Learning |
| plan.html | Looking Ahead | IPM Step 6: Developing a Plan |

## Navigation
- Top nav on every page links all 8 pages in the order above, using the page titles. Current page gets `aria-current="page"`. On every screen size it sits behind a Menu button that opens a dropdown panel (`script.js`; without JS the nav stays visible as a row of links).
- Step pages (3–8) show the step label under the `<h1>` and end with Previous/Next step links following the table order. Step 1 has only "Next step". `plan.html` Next = `gathering.html` reading "Back to Step 1: the cycle begins again" (the IPM is a cycle).
- Footer on every page: `Alexie Faith Quijote | HSS Senior Capstone | Elon University | Fall 2026`.

## Reusable pieces (styled once in style.css; reuse, don't restyle)
- `.placeholder` — dashed border, muted background, begins "Placeholder:" and says what goes there.
- `.artifact-card` — `<dl>` with four labeled parts: What it is / Where it came from / Why I chose it / Learning outcomes.
- `.lo-tag` — pill, e.g. "LO 4: Self-reflexivity and respect for difference". One sample on each step page.
- Others: `.timeline`, `.table-scroll` (table scrolls sideways on phones), `.pair` (side by side, stacked on phones), `.cycle` site map, `.btn`, `.step-nav`.

## Design & accessibility
- Warm editorial layout (inspired by the Dribbble "Kanso" interior-design shot the user chose, after the earlier "Aurelique" shot): every page starts with a dark wood band (header + huge left-aligned uppercase title + the step label as a "/ LABEL /" caption). Below it, content sits on a three-column hairline grid: each `<section>` shows its `<h2>` (with an auto "/ 01 /" caption) in the left column and its content in the right two columns (stacked on phones). Add `class="wide"` to a section that needs full width (the fieldwork table). Artifact cards are open hairline blocks with the four parts as key/value rows. Previous/next are big hairline blocks. Footer = dark wood with link columns and the required one-line credit. Thin outlined pill buttons. Motion is CSS-only (title load-in, hover states, sections sliding up on scroll via `animation-timeline: view()`), switched off for `prefers-reduced-motion`. No extra JavaScript for animation.
- **Color scheme (sampled from the reference; replaces the original navy/cream palette, which the user asked to remove):** paper #F7F6F1, ink #1E1E1E, wood #3F281B (and #2B1A10), taupe #847366, stone #A29384, hairline #DDDAD2, muted text #5E5247. Stone/taupe are for borders and decoration only; use ink, wood or muted for text. Use the CSS variables in `:root`; don't hard-code colors.
- Body text at least 16px (base is 18px), strong contrast, alt text on every image, visible `:focus-visible` outlines, respect `prefers-reduced-motion`.
- Must look good on a phone (~375px) and a laptop.

## Pending uploads
- `assets/docs/resume.pdf` does not exist yet; `plan.html` already links to it. Don't remove the link.

## Checks before finishing any change
- Every nav link, previous/next link and site-map link points to a file that exists.
- No `href="/` or `src="/` anywhere; each page has `<title>`, viewport meta and exactly one `aria-current="page"`.

## Things the user rejected (do not add back)
- A giant footer wordmark, and a "Scroll down" circle on the home hero.
