# The Forum — Organization & Functioning (Operating Model v1, proposed)
### PAIG-4 · How the AI Governors community is organized as it grows
**Proposed draft · Request for comment · Convened by Cognita GRC (steward, not owner)**

> **Read this first — what exists and what doesn't.** This is a **proposed operating model for a body that does not yet exist as an operating institution.** It has **no members, no chairs, no endorsements, and no affiliations** today. Every seat, chair, and chamber is **open**. This body is **not** a government entity, an intergovernmental organization, or affiliated with the UN, the WEF, GPAI, or the OECD. The standard it stewards is an open draft that **complements — does not replace** — ISO 10218:2025, ISO 13482, the EU Machinery Regulation 2023/1230, the EU AI Act, and ISO/IEC 42001. This document is written so that what is *claimed to exist* never outruns what *actually exists*: every element below is labeled **live**, **forming**, or **proposed**. The full body's formal name is **provisional** and will be ratified by the community at Session 1 (candidate names under consideration; "the Forum" is used generically here).
>
> **We name categories, not companies.** No organization's name appears in this model unless it has actually, verifiably joined. Where a layer of the AI value chain is described, it is described by *category* ("chip and cloud providers," "frontier-model labs"), never by naming firms that have not consented to be named. This is deliberate and permanent.

---

## 1 · Mission (the charter, in one paragraph)

The Forum is a global, open, multi-stakeholder community that stewards practical, implementable standards for governing AI — with a founding focus on **AI that acts in the physical world**. It exists to answer, across every region and every layer of the AI value chain, one question: *how do we bound what AI systems are allowed to do, keep an accountable human in the loop, and prove after the fact what happened?* It convenes the people who build, deploy, regulate, study, and are affected by AI; organizes them so that regional reality and technical layer both have a seat; and produces **open standards and reference implementations** — not just dialogue. It complements existing standards and regulators; it does not replace or impersonate them.

## 2 · The organizing idea — a governance matrix, not a membership list

AI governance fails when organized on only one axis. Geography-only bodies miss the cross-border technical stack; industry-only bodies miss regional law and the public interest. The Forum is organized on **both axes at once**, with functional committees cutting across:

- **Vertical — Chapters (geography).** The regional AI Governors: one named steward per US state, Canadian province and territory, EU member, and country worldwide. *Who, by place.* **Live as a structure today: every seat open.**
- **Horizontal — Chambers (the AI value chain).** One standing council per layer of the stack, from compute to compliance. *Who, by role in the system.* **Proposed; two founding chambers forming (§3).**
- **Committees (functional).** Turn contributions from both axes into deliverables. *How the work gets done.* **One live (Technical), three proposed (§5).**
- **Secretariat.** Cognita GRC, disclosed — coordinates, hosts, convenes; does not own outcomes, with a real handoff plan (§8).

A cell of the matrix is a region × a layer ("data sovereignty in the EU," "compute safety limits in a US state") — the level where standards meet deployment reality.

## 3 · The horizontal axis — Chambers

Each Chamber is a standing council with an **open chair**, a scope, and a stake in specific parts of the standard. Participants are named by category only.

| # | Chamber | The layer it represents | Who sits there (categories) | Primary stake in the standard | Status |
|---|---|---|---|---|---|
| C1 | Compute & Infrastructure | Chips, cloud, HPC, robotics hardware | Chip makers · cloud & HPC providers · robotics-hardware manufacturers | Where force and compute limits are physically enforced (R5) | Proposed · chair open |
| C2 | Networking & Connectivity | Connectivity, edge, latency | Network-equipment vendors · telecoms | Real-time control; comms-loss fail-safe (R2) | Proposed · chair open |
| C3 | Data & Storage | Data platforms, provenance, storage | Database & data-platform providers · storage vendors · open-source data projects | Tamper-evident logs (R6); data sovereignty | Proposed · chair open |
| C4 | Foundation Models & AI Labs | Frontier and open models | Frontier-model labs · open-model labs and communities | The model *requests*; the safety layer *permits* (R5) | Proposed · chair open |
| C5 | Applications & Domains | Verticals deploying embodied AI | Integrators · robot OEMs · platforms in health, mobility, logistics, commerce, public safety | Declared force envelopes per deployment (R7) | **Forming** — first convening planned by the Secretariat |
| C6 | Governance, Compliance & Security | The assurance layer | GRC & compliance-automation vendors · AI-assurance providers · auditors — **includes Cognita GRC, disclosed** | Attestation, audit, conformance, the Governance API | **Forming** — convened by the Secretariat (its home chamber, disclosed) |
| C7 | Public Authorities & Regulators | Law and legitimacy — *not a vendor chamber* | Regulators · standards-body members · public-safety agencies | Alignment with law; legitimacy | Proposed · chair open |
| C8 | Research & Academia | The evidence base | Universities · safety institutes · independent researchers | Feeds the Scientific Committee; red-teams the standard | Proposed · chair open |
| C9 | Civil Society & Public Interest | The people affected | NGOs · ethics organizations · labor · consumer groups | Anti-capture; keeps public safety first | Proposed · chair open |

**Why C7–C9 are first-class, voting chambers — not observers:** a body about machines that can apply force in public that let industry set its own limits would have no legitimacy. On safety-critical decisions the corporate chambers (C1–C6) **cannot outvote** the public-interest chambers (C7–C9). This is a structural safeguard, not decoration (§8).

## 4 · The vertical axis — Chapters (the regional AI Governors)

Already defined in the designation model (aigovernors.org/governors): one named steward per region, **earned not claimed**, not a government office, every seat open. Within the Forum, Chapters: contribute regional reality (regulations, incidents, deployment norms) into every standard; run local convenings whose field reports feed the drafts; elect regional representation into the Plenary and, over time, the Steering Council; and aggregate into **Regional Groups** (Americas · EU/EEA · Wider Europe · Africa · Middle East · Asia–Pacific) for summits and coordination.

## 5 · Governance bodies

- **The Plenary (the Forum in full)** — all Governors, Chamber participants, and Committee members. Ratifies standards, seats chairs, sets direction by rough consensus. Meets at the Annual Forum. *Proposed; first convening = Session 1 (PAIG-0).*
- **The Steering Council** — small, **elected, rotating, term-limited** executive drawn from Regional Group representatives, Chamber Chairs, Committee Chairs, and the Secretariat. Sets agenda, arbitrates, approves releases. *At launch: an interim council convened by the Secretariat, explicitly labeled interim, handing off to elected seats as the body forms.*
- **Functional Committees:**
  - **Technical Committee** — **live today**: the PAIG working groups (Force Continuum, Embodied-AI Standard, Governance API, Process) and the open RFC.
  - **Scientific Committee** — evidence, red-teaming, incident analysis; fed by C8. *Proposed.*
  - **Policy & Regulatory Committee** — maps the standard to law and sovereignty; fed by C7 and the Chapters. *Proposed.*
  - **Ethics & Independence Committee** — conflict-of-interest, anti-capture, and the honesty guardrails; **may withhold or withdraw designations and flag capture.** *Proposed — and deliberately the first committee to seat after Technical.*
- **The Secretariat — the engine, not the boss.** Cognita GRC, disclosed. Hosts the repository and site, coordinates cadence, publishes decisions, maintains the register. **Non-voting on standards content** beyond its own C6 seat.

## 6 · Cadence (the rhythm that makes it a body)

| Tier | Rhythm | What happens | Deliverable | Status |
|---|---|---|---|---|
| Working calls | Monthly · virtual · open | Committee & Chamber sessions; drafts move | Public minutes + updated drafts | **Starts with the Technical WG once first participants are seated** |
| Forum Review | Quarterly · virtual | Cross-axis checkpoint: RFC status, new-Governor confirmations | Public quarterly note + versioned draft cut | **v1 cadence — first checkpoint follows Session 1** |
| Regional & Chamber Summits | Semester · hybrid | Regional Groups and Chambers synthesize positions | Position papers → into the standards | Proposed |
| The Annual Forum | Yearly · flagship | Plenary ratifies the year's release, seats chairs, elects Council | Ratified version + annual report | Proposed — v1 will be a **modest virtual convening, honestly sized** |

No meeting is announced until it is real; every scheduled convening appears in the repository and the site's Latest strip first.

## 7 · Roles

Every role is a **community/volunteer designation — not a government office; it confers no legal or regulatory authority.** All open at launch: **AI Governor** (regional steward — defined in the designation model) · **Chamber Chair / Co-Chair** · **Committee Chair** · **Fellow** (individual expert contributor, credited) · **Regional Group Coordinator** · **Steering Council Member** (elected, rotating) · **Chair of the Forum** (rotating, elected; interim and labeled so at launch) · **Secretariat** (Cognita GRC, disclosed).

## 8 · Independence, funding & anti-capture

A GRC company convening a forum that includes competing vendors and the labs it might sell to has obvious capture exposure. The Forum deserves to exist only if it is structurally resistant to the critiques fairly leveled at elite convening bodies — pay-to-play access, closed doors, dialogue without teeth, incumbent capture:

1. **No pay-to-play — ever.** Seats, chairs, votes, and standards influence are earned by contribution and cannot be bought. There are no membership tiers.
2. **Funding firewall.** If sponsorship ever funds the Secretariat (hosting, staff, travel), sponsors receive **acknowledgment, not influence** — sponsorship funds the secretariat, not the vote. All funding sources published. At launch the Secretariat is a disclosed Cognita subsidy.
3. **Multi-stakeholder majority.** Corporate chambers cannot outvote public-interest chambers (C7–C9) on safety-critical decisions.
4. **An Ethics & Independence Committee with teeth** — mandatory conflict disclosure for every chair and council member; power to withhold or withdraw designations; standing mandate to flag capture publicly.
5. **Radical transparency.** Open repository, public minutes, published decisions and rationales, open licenses. No closed-door track.
6. **The steward handoff is a timeline, not a promise.** Interim Secretariat-convened leadership at launch → elected Chamber/Committee chairs as they are seated → an elected Steering Council and rotating Forum Chair by the first Annual Forum → Cognita steps back to the disclosed Secretariat + C6 role. **Founder control is a phase, not the design.**

The claim this model makes is about **principles, not scale**: open (earned-in, not invite-only), transparent (public process), teeth-bearing (standards + reference code, not only reports), and capture-resistant (no pay-to-play; public-interest chambers with real votes).

## 9 · Phasing — what is real, phase by phase

**Phase 0 — today (v0.1).** Real: the four PAIG drafts and the open RFC (Technical Committee, live); the Wall of Governors with every regional seat open; two founding chambers (C5, C6) *forming*, the rest proposed with chairs open; Cognita as disclosed interim Secretariat; the monthly Technical call + quarterly checkpoint as the only cadence commitments; one modest inaugural virtual convening (Session 1). Nothing shown as filled unless a real person has committed.

**Phase 1 — as people join.** Real chamber and committee chairs seated as volunteers step up; first Regional Group summits; first confirmed Governors credited (never faked); first Annual Forum (virtual); first ratified release; first elected seats.

**Phase 2 — toward the aspiration.** Broader chamber coverage; hybrid Annual Forum; formal governance handoff to the elected Steering Council; the funding firewall formalized; a neutral legal entity (non-profit/foundation) if scale warrants.

## 10 · The operating loop

1. Work happens in the open (repository issues, drafts, RFCs); monthly calls move specific drafts.
2. Both axes feed in — Chapters contribute regional reality, Chambers contribute layer expertise; the relevant Committee integrates.
3. RFCs run in public (issue open ≥ 2 weeks); quarterly checkpoints synthesize.
4. Material safety decisions require the PAIG-0 rule — ≥ 2 functional-safety and ≥ 1 regulatory participant — **and** cannot be carried by corporate chambers alone.
5. Semester summits synthesize; the Annual Forum ratifies and versions.
6. Everything is published: decisions, rationales, funding, disclosures, the register.

---

*Open questions for comment (the RFC): (a) chamber taxonomy — is the nine-chamber cut of the value chain right? (b) voting weights between corporate and public-interest chambers; (c) the interim→elected handoff milestones; (d) the name of the full body (provisional today); (e) whether the Ethics & Independence Committee should precede or follow the first chamber chairs. Comment via the repository.*

*License: CC BY 4.0, like all PAIG standard text. Not a certification scheme; not legal advice; complements ISO 10218:2025, ISO 13482, the EU Machinery Regulation 2023/1230, the EU AI Act, and ISO/IEC 42001.*
