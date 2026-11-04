# Alexie Faith Quijote — HSS Senior Capstone ePortfolio (HSS 4985/6)

Current stage: **midterm shell** — design, structure, working navigation and clearly labeled placeholders only. Do **not** invent real content (bio, hours, agencies, reflections). Every unfilled spot is a `.placeholder` box starting with "Placeholder:".

## Tech rules
- Plain HTML + ONE shared stylesheet (`style.css`) + at most ONE small script (`script.js`, mobile menu only). No frameworks, no npm, no build step.
- Must work on GitHub Pages at `https://[USERNAME].github.io/[REPONAME]/` exactly as the files sit, and by double-clicking `index.html` (nothing that needs a server).
- All HTML files live in the top-level folder (no subfolders for pages). Uploads go in `assets/images/` and `assets/docs/`.
- **Relative links only** (`href="fieldwork.html"`), never starting with `/`.
- Every page: proper `<title>`, `<meta name="viewport">`, and the same skip link, header, nav and footer.
- Only external resource allowed: Google Fonts. ONE font family for everything: Source Serif 4 (headings use weight 500, body 400, labels 600). The user tried Fraunces, Luxurious Roman, Major Mono Display and BJ Cree and chose to go back to Source Serif 4; do not change fonts without being asked.

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
- Top nav on every page links all 8 pages in the order above, using the page titles. Current page gets `aria-current="page"`. On phones it collapses behind a Menu button (`script.js`; without JS the nav stays visible).
- Step pages (3–8) show the step label under the `<h1>` and end with Previous/Next step links following the table order. Step 1 has only "Next step". `plan.html` Next = `gathering.html` reading "Back to Step 1: the cycle begins again" (the IPM is a cycle).
- Footer on every page: `Alexie Faith Quijote | HSS Senior Capstone | Elon University | Fall 2026`.

## Reusable pieces (styled once in style.css; reuse, don't restyle)
- `.placeholder` — dashed border, muted background, begins "Placeholder:" and says what goes there.
- `.artifact-card` — `<dl>` with four labeled parts: What it is / Where it came from / Why I chose it / Learning outcomes.
- `.lo-tag` — pill, e.g. "LO 4: Self-reflexivity and respect for difference". One sample on each step page.
- Others: `.timeline`, `.table-scroll` (table scrolls sideways on phones), `.pair` (side by side, stacked on phones), `.cycle` site map, `.btn`, `.step-nav`.

## Design & accessibility
- Calm, professional, clean editorial look: big soft serif headlines, lots of white space, floating white rounded cards with soft shadows, pill-shaped nav (inspired by a Dribbble "CalendarBlog" shot the user chose). Palette: #252942 (navy), #F2E9C2 (cream), #73879F (sky), #4F607E (slate), #F2F0EF (paper). Sky is for borders/decoration only — its contrast is too low for text on paper.
- Body text at least 16px (base is 18px), strong contrast, alt text on every image, visible `:focus-visible` outlines, respect `prefers-reduced-motion`.
- Must look good on a phone (~375px) and a laptop.

## Pending uploads
- `assets/docs/resume.pdf` does not exist yet; `plan.html` already links to it. Don't remove the link.

## Checks before finishing any change
- Every nav link, previous/next link and site-map link points to a file that exists.
- No `href="/` or `src="/` anywhere; each page has `<title>`, viewport meta and exactly one `aria-current="page"`.
