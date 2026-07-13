# AI Governors — a global community stewarding the Physical AI Governance standard

> **We spent three years learning to govern AI that writes. We must now govern AI that can apply force.**
> When AI gets a body, a hallucination is no longer a wrong answer — it is a physical action.

**AI Governors** ([aigovernors.org](https://aigovernors.org)) is an open, global community stewarding **PAIG — the Physical AI Governance standard**: open, vendor-neutral working drafts for autonomous embodied AI (humanoids, general-purpose mobile robots, and any AI system that can move and apply force among people), plus the **API** that makes them enforceable and provable. This repository is the standard's source of truth and the community's public record.

Convened by **Cognita GRC** (steward, not owner) · Draft **v0.1** · Status: **request for comment** · Every seat open

---

## The community

The standard is stewarded by one named **AI Governor** per region — every US state, every Canadian province and territory, every EU member, every African country, every country worldwide — mirroring how ISO works through one national member body per country. Chapters contribute regional reality (regulations, incidents, deployment norms) into the drafts so the standard isn't written only by whoever was in the room first.

**Plainly: "AI Governor" is a community designation, not a government position, official title, or public office, and it confers no legal or regulatory authority. It is earned, not claimed** — one substantive draft review per release cycle, one local session per cycle, and representing your region in the working group. The full model — what the role is, what it isn't, what earns and keeps it — is at **[aigovernors.org/governors](https://aigovernors.org/governors)**.

**Every seat is open at launch** — the [Wall of Governors](https://aigovernors.org/#governors) shows 255 seats, all open, and will only ever show people currently doing the work. **Apply:** open an Issue [*"AI Governor: \<your region\>"*](https://github.com/KGEmmanuel/physical-ai-governance/issues/new?template=ai-governor.yml) using the template, or email guillaume@cognitagrc.io (same standing as an Issue).

As the community grows, the proposed shape of the full body — regional Chapters × value-chain Chambers, functional committees, an open cadence, structural anti-capture — is **[`FORUM-OPERATING-MODEL.md`](FORUM-OPERATING-MODEL.md)** (PAIG-4): a **proposed model, not an operating institution — it has no members, chairs, endorsements, or affiliations today**, and it names categories, never companies. Comment on it in [issue #3](https://github.com/KGEmmanuel/physical-ai-governance/issues/3).

---

## Why this exists (the gap — grounded, not speculative)

Real, current standards already cover parts of the problem — and stop short of the hard part:

| What exists (2025–2027) | What it covers | Where it stops |
|---|---|---|
| **ISO 10218-1/-2:2025** (absorbed ISO/TS 15066) | Industrial + collaborative robots: safety-rated stop, speed & separation, hand-guiding, **power-and-force-limiting** with body-part biomechanical limits | Assumes defined tasks / integrator-controlled cells — not open-world autonomy |
| **ISO 13482** | Personal-care & service robots near the public | Not general-purpose humanoids taking real-time commands / self-evolving behaviour |
| **IEC 61508 · ISO 13849 · ISO 12100** | Functional safety (SIL / Performance Levels), machinery risk | The *physical* safety layer — not the *AI decision + accountability* layer |
| **EU Machinery Regulation 2023/1230** (from Jan 2027) | Physical safety of machinery incl. humanoids; adds AI / self-evolving-behaviour review + 10-yr documentation | A conformity regime, not a **graduated force-authorization scale** or a **universal provable-accountability layer** |
| **EU AI Act · ISO/IEC 42001 · NIST AI RMF** | AI management, risk, transparency | Govern *algorithms, data, decisions* — written for disembodied AI |

**The two missing pieces:**
1. **How much force an autonomous machine may apply, and how much human control that force requires** — a *Force Continuum*, enforced in the machine, not a policy PDF.
2. **A universal, cryptographically-provable way to answer, after an incident: what was it told, what did it decide, and who was accountable?** — an *embodied-AI governance standard* + an *API* any robot vendor can implement.

This repo drafts both.

---

## What's here (the document register)

| Doc ID | Document | What it is |
|---|---|---|
| PAIG-1 | [`force-continuum/FORCE-CONTINUUM.md`](force-continuum/FORCE-CONTINUUM.md) | The **Physical AI Force Continuum (PAFC)** — force levels PAFC-0…5, the human-control tiers each requires, and the enforcement rules. *The core contribution.* **RFC open: [issue #1](https://github.com/KGEmmanuel/physical-ai-governance/issues/1).** |
| PAIG-2 | [`embodied-ai-standard/EMBODIED-AI-GOVERNANCE.md`](embodied-ai-standard/EMBODIED-AI-GOVERNANCE.md) | **"ISO 42001 for Robotics"** (working title) — a management system + six mandatory technical controls: hardware e-stop, certified force limits, verifiable audit logs, unique digital identity, continuous monitoring, clear human accountability. |
| PAIG-3 | [`api/GOVERNANCE-API.md`](api/GOVERNANCE-API.md) | The **Physical AI Governance API** — identity & attestation, force-level authorization, tamper-evident audit log + offline verification, monitoring, and the human-accountability chain. |
| PAIG-0 | [`GOVERNANCE.md`](GOVERNANCE.md) | Working group & governance — the rough-consensus decision model, first-session agenda, roadmap. |
| PAIG-4 | [`FORUM-OPERATING-MODEL.md`](FORUM-OPERATING-MODEL.md) | The Forum's **proposed** operating model (Chapters × Chambers × Committees, anti-capture design). A v1 proposal — nothing in it is operational until seated. |

The site — [aigovernors.org](https://aigovernors.org) (this repo's `index.html`, plus [`/governors`](https://aigovernors.org/governors) and [`/forum`](https://aigovernors.org/forum)) — renders all drafts with a document register, the Wall of Governors, and the participation paths.

## Design principles (non-negotiable)

1. **Govern force, not just decisions.** The unit of risk is the physical act.
2. **Human control scales with force.** The more force, the more meaningful human control required. No autonomous lethal force — ever.
3. **Enforced in the machine.** Limits are safety-rated hardware/firmware, independent of the learning stack — not policy.
4. **Provable by construction.** Every command, decision, force-level change, and human authorization is written to a tamper-evident, offline-verifiable log. *"Trust me" is not a safety control.*
5. **Fail to the lowest safe state.** On fault, uncertainty, or loss of human control, default down — to a safety-rated stop.
6. **Vendor-neutral and open.** A standard only works if everyone can implement it; the incumbents can't own the trust layer.

---

## Call for participants

We're forming an open working group to take this from v0.1 to a citable standard. We want **roboticists, safety & functional-safety engineers, standards-body members (ISO/TC 299, IEC), regulators, law-enforcement and public-safety experts, AI-governance leaders, ethicists, and insurers.**

**First deliverable:** ratify **Force Continuum v0.1** (levels, human-control coupling, enforcement rules) as an RFC — comment now on [issue #1](https://github.com/KGEmmanuel/physical-ai-governance/issues/1).
**How to join:** open an Issue titled *"Join: [role]"* (template provided), become your region's [AI Governor](https://aigovernors.org/governors), or email guillaume@cognitagrc.io.

## Contributing & governance

- Propose changes via pull request against the relevant draft; substantive changes need an Issue + rationale first.
- Decisions by the working group; a lightweight consensus model documented in [`GOVERNANCE.md`](GOVERNANCE.md) (to be ratified at the first session).
- **License:** standard text under **CC BY 4.0** (see [`LICENSE`](LICENSE)); the API specification under **Apache-2.0** (see [`api/LICENSE`](api/LICENSE)). Open by design — a public-safety standard must be free to adopt.
- **Website:** [aigovernors.org](https://aigovernors.org) — the community site, document register, and embedded drafts (`index.html` in this repo).
- **Translations** (FR/ES first) are open work — [issue #2](https://github.com/KGEmmanuel/physical-ai-governance/issues/2).

*This is a draft for public comment, not legal advice or a certification. It is designed to complement and extend ISO 10218:2025, ISO 13482, the EU Machinery Regulation 2023/1230, the EU AI Act, and ISO/IEC 42001 — not replace them. No members, endorsements, adoptions, or filled seats are claimed; every seat and convenor role is open. Cognita GRC convenes and stewards; it does not own the standard.*
