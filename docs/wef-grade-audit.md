# WEF-grade audit — aigovernors.org (home + /governors)
**Audited July 13, 2026 · live site as deployed (repo `KGEmmanuel/physical-ai-governance@main`, canonical host aigovernors.org) · desktop + 390 px captures in `docs/img/before-*`**

Bar: WEF-level craft (weforum.org typography, whitespace, signature data-graphic, IA legible in 5 seconds) with W3C-level honesty. Where they conflict, honesty wins, and disclosures scale *up* with polish.

---

## 1. Verdict headline

**The site clears the honesty bar completely and the functional bar almost completely — it does not yet clear the craft bar, and the reason is structural, not cosmetic.** Every prior P0 is fixed: the join path works three ways (issue template, email, RFC thread), a named steward with an email address exists, the RFC stage is true (issue #1 is open), the register links its comment threads, the viewer has a TOC/anchors/72ch measure, mobile tables stack, and the disclosure spine is the strongest I have seen on any standards site. What remains between this and weforum.org is: **(a) the narrative arc is broken in one place** — the 255-seat community section (≈40% of the page) sits between "the gap" and the standard itself, so a skeptical engineer must scroll past an empty wall before seeing the deliverable that would convince them; **(b) the site's core intellectual contribution — the Force Continuum — has no visual expression anywhere**; it exists only as a markdown table inside a tabbed viewer, which is like the WEF publishing the Global Risks Report without the risks landscape graphic; **(c) the typographic and spacing system is one notch too timid** — uniform 64px sections, a 31px H2 against a 52px H1, no macro-rhythm marking the argument's movements; and **(d) the nav is a flat list of eight links with no active state, no primary CTA, and near-total collapse on mobile.** All four are fixed in this pass.

- **Credibility (5-second read): pass.** Masthead-grade headline, steward disclosure in the eyebrow, Draft v0.1/RFC + license chips above the fold, no slop.
- **Craft: partial.** Clean and disciplined, but reads "very good engineering blog," not "institution."
- **IA: partial fail** — arc broken at one seam (P1), nav under-designed (P1).
- **Honesty: pass, exemplary.** Nothing to fix; several things to *promote* as polish rises.

## 2. First impression / credibility read

Desktop (before): `img/01–07-before-desktop.jpg` · Mobile 390: `img/01–05-before-390.jpg` · After: `img/*-after-desktop.jpg`, `img/*-after-390.jpg`, `img/*-after-governors.jpg`

Above the fold you get what/who/state/paths in the right order, in a serif display over paper-white with an emblem — genuinely institutional. Two things soften it: the eyebrow is a full sentence that wraps to two tracked-uppercase lines at 390 (mastheads are short), and three hero CTAs dilute the two journeys that matter. The wall's honesty copy ("an empty wall is the most honest thing on this site") is the single best credibility device on the page — it deserves to sit *after* the reader has seen the standard, when they're deciding whether to join, not before.

## 3. Findings by dimension

### A. Information architecture & flow
- **[P1] Arc broken: community before standard.** Current order: hero → gap → **Become a Governor + 255-seat wall** → working areas → register → docs → participate → process. The four journeys interleave: the *cold skeptic* and *read-a-draft* journeys are interrupted by the *join* journey at its least convincing moment (an empty wall). **Fix (implemented):** hook → gap (+ committee scope, moved out of the hero) → **the standard** (signature graphic → working areas → register → documents) → **proof** (process & meetings) → **community** (Governors + wall) → **join** (participation). All existing anchors preserved.
- **[P1] Nav: eight undifferentiated links, no active state, no CTA, mobile collapse.** No `aria-current`, no visual answer to "where am I"; at ≤820px everything except Governors/Documents/GitHub disappears and the only prominent action is leaving the site. **Fix:** minimal nav mirroring the new arc + persistent primary CTA ("Become an AI Governor") + scrollspy active state + CTA kept visible on mobile.
- **[P2] Scope card buried inside the hero** makes the hero ~2.5 viewports tall and the scope read as hero furniture rather than the committee's charter. **Fix:** moved to "The gap," retitled as the committee-scope statement.
- **[P2] Hero: 3 CTAs, sentence-length eyebrow.** Fix: 2 CTAs (Become a Governor / Read the Force Continuum), short eyebrow; wall link lives in the community section.
- **[Keep] `/forum` reachable** from Latest strip, register row (PAIG-4), and process section; deep links `#paig-0…3`, `#force`/`#embodied`/`#api`/`#governance`, `#wall`, heading anchors, and the legacy-host 301s in `server.js` all still resolve. Nothing in this pass renames an id.

### B. Typography
- **[P1] No modular scale.** H1 52 / H2 31 / secsub 23 / body 15–15.5 / smalls 11–14.5 sprinkled ad hoc. H2s don't do editorial work; sections announce themselves at nearly body weight. **Fix (implemented):** display `clamp(40–58px)` serif −0.5px tracking, H2 `clamp(30–38px)`, standfirst/dek 17–18px, body 15.5–16px at 60–75ch, caption/label tiers, numbered section kickers (`01 · The gap` …) in tracked small caps — the cheapest "institution" signal there is.
- **[P2] Font stack (Segoe/Georgia system stacks).** Deliberately kept: zero external requests preserves the document-of-record property and the self-contained file. Right trade; noted, not fixed.

### C. Spacing, grid, rhythm
- **[P1] Uniform 64px section padding = no rhythm.** Every movement of the argument weighs the same. **Fix:** 8-based scale, 96–112px desktop section spacing, alternating paper/`--bg2` bands marking the arc's movements (gap=white, standard=white, proof=tinted, community=white, join=tinted), wider breathing room around the signature graphic.
- **[P2] Cards all identical radius/padding** regardless of role (WG card vs seat vs step vs seal). Tightened into one component grammar (16px feature cards / 10px register rows / 8px furniture).

### D. Data-viz — the signature graphic
- **[P1 — highest leverage] The Force Continuum has no graphic.** The one idea a journalist would screenshot — six force levels hard-coupled to human-control tiers, lethal never autonomous — is a markdown table behind a tab. **Fix (implemented):** a full-width **PAFC ladder** in "The standard": six rows, force bars stepping from Presence to a struck-through PAFC-5, coupled HC-0…3 tier chips on the right axis, the coupling rule as the figure's caption, amber/red reserved exactly for PAFC-4/5. Built as semantic HTML/CSS grid rather than a monolithic `<svg>` — same visual authority, but it reflows to stacked cards at 390px, inherits theme tokens, prints, and is screen-reader-legible as real text (an SVG would need a parallel text equivalent). Draft-status + complements-not-replaces line is part of the figure, so every screenshot carries the disclosure.
- **[P2] "The gap" mini-graphic** (three-standards Venn/ledger): considered, deferred — the three-card version already scans, and a second graphic would dilute the signature one. Ask before adding.

### E. Color
- **[P2] Status green doubles as positive accent** (hero RFC pill, seat legend). Kept for stage semantics only where possible; hero chip retained (it *is* a stage). Amber/red now appear in exactly three places: honesty notices, PAFC-4/5, seat-reopened. No neon anywhere. Pass otherwise.

### F. Section-by-section
- **Wall of Governors [P1 — the known weak spot]:** 7 of 8 regions render as collapsed gray bars; the 255-seat scale is invisible; `<summary>` rows are ~48px so targets pass, but nothing invites expansion. **Fix:** first two groups open by default, an "Expand all regions" toggle, seat-count + "all open" state designed into each summary row, total-seats line promoted above the search. Honesty footer, search, per-seat prefilled issue links untouched.
- **Register [P2]:** already the most committee-like element. Polish: stage-legend given a designed rail, caption tied to the table, row hover. Kept: linked RFC pills.
- **Viewer:** passes (TOC, anchors, 72ch, stacked tables at 390, 44px tabs, no raw markdown, per-doc version/date line). Untouched.
- **Become a Governor:** the amber notice is already designed as a formal notice, not a warning — kept verbatim (it is the best paragraph on the site). Charter cards kept.
- **Footer:** seal row exists and is right. Nit: added Draft v0.1 to the seal row so the trust furniture states the version.

### G. Responsive
- **[P1] Mobile nav** (see A) — fixed: at phone widths the nav reduces to emblem + wordmark + the primary CTA (all anchors remain one scroll away; GitHub is linked from every section it matters in). **[P2]** eyebrow wraps to 3 tracked lines at 390 (fixed by shortening); stage-legend chips stack awkwardly (fixed: vertical rail). Register/tables/wall reflow already correct. No horizontal overflow found at 390 before or after.

### H. Accessibility
- Passes most of AA already: skip link, single h1/page, focus-visible everywhere, tablist keyboard nav, reduced-motion honored, `role=region` on scrollable tables, contrast ≥4.5:1 for text tokens (`--dim` 5A6C85 on white = 5.0:1). **Fixes:** `aria-current` on nav (scrollspy), `aria-expanded` semantics via native `<details>` kept, graphic legible as text, expand-all is a real `<button>`.
- **[P2] `nav` lacks a label** — added `aria-label="Site"`.

### I. Performance / integrity of the artifact
- Single self-contained file, zero external requests, no fonts, no analytics, JSON-LD `Organization` (correctly *not* GovernmentOrganization/NGO), OG/meta complete, favicon inline. Pass — preserved exactly. The graphic adds ~4KB of markup, no images.

### J. Honesty (guardrails check)
All disclosures present before and after; this pass *promotes* three of them: the not-a-government-office notice keeps its position at the top of the community section; the draft/complements line is embedded in the signature graphic itself; "steward, not owner" stays in nav eyebrow + footer + participation. No momentum fabricated: Latest strip has three real, dated entries; wall shows 255/255 open; participant count 0 stated in Structure.

## 4. Journey results (before → after)
1. **Cold skeptic:** pass → stronger pass (arc no longer interrupted; graphic answers "what is this technically" in one glance).
2. **Read a draft:** pass (viewer already comfortable) → unchanged plus rhythm polish.
3. **Understand the structure:** partial (order scattered) → pass (standard → register → process in sequence, numbered kickers).
4. **Join:** pass functionally → pass with a persistent CTA and community section repositioned at the decision moment.

## 5. Keep-list (do not touch in future passes)
The not-an-office notice verbatim · the wall's "an empty wall is the most honest thing on this site" copy · roster honesty footer · per-seat prefilled issue links · embedded-markdown zero-dependency viewer + its TOC · stage legend's "Nothing here is a published ISO standard" · seal-row footer · print stylesheet (expands all wall regions before printing) · system-font/zero-request trade · `server.js` host canonicalization · JSON-LD typing as plain `Organization`.

---
*Implementation notes: all changes land in `index.html` + `governors.html` only; every existing id/anchor/URL preserved; before/after captures in `docs/img/`. This environment can't open the branch/PR or run `tsc` — files are ready to commit as one branch.*
