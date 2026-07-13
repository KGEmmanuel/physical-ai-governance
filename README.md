# Physical AI Governance — an open standard for embodied AI safety

> **We spent three years learning to govern AI that writes. We must now govern AI that can apply force.**
> When AI gets a body, a hallucination is no longer a wrong answer — it is a physical action.

This repository is a **call for participants** and a **working draft** of two open, vendor-neutral standards for autonomous embodied AI (humanoids, general-purpose mobile robots, and any AI system that can move and apply force among people), plus the **API** that makes them enforceable and provable.

Convened by **Cognita GRC** · Draft **v0.1** · Status: **request for comment**

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

## What's here

- **[`force-continuum/FORCE-CONTINUUM.md`](force-continuum/FORCE-CONTINUUM.md)** — the **Physical AI Force Continuum (PAFC)**: force levels PAFC‑0…5, the human-control tiers each requires, and the enforcement rules. *The core contribution.*
- **[`embodied-ai-standard/EMBODIED-AI-GOVERNANCE.md`](embodied-ai-standard/EMBODIED-AI-GOVERNANCE.md)** — **"ISO 42001 for Robotics"**: a management-system + technical-control standard built on the six requirements — hardware e-stop, certified force limits, cryptographically-verifiable audit logs, unique digital identity, continuous safety monitoring, clear human accountability — each mapped to the standards above.
- **[`api/GOVERNANCE-API.md`](api/GOVERNANCE-API.md)** — the **universal Physical AI Governance API**: identity & attestation, force-level authorization, tamper-evident audit-log + offline verification, continuous monitoring, and the human-accountability chain. The interoperable layer Cognita (and others) can provide to robotics companies so governance is *machine-enforced and provable*, not promised.

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

**First deliverable:** ratify **Force Continuum v0.1** (levels, human-control coupling, enforcement rules) as an RFC.
**How to join:** open an Issue titled *"Join: [role]"*, or contact Cognita GRC · app.cognitagrc.io.

## Contributing & governance

- Propose changes via pull request against the relevant draft; substantive changes need an Issue + rationale first.
- Decisions by the working group; a lightweight consensus model documented in `GOVERNANCE.md` (to be ratified at the first session).
- **License:** standard text under **CC BY 4.0** (see [`LICENSE`](LICENSE)); the API specification under **Apache-2.0** (see [`api/LICENSE`](api/LICENSE)). Open by design — a public-safety standard must be free to adopt.
- **Website:** [aigovernors.org](https://aigovernors.org) — the community site, document register, and embedded drafts (`index.html` in this repo). The former address, physicalai.cognitagrc.io, permanently redirects here.

## The AI Governors community

The standard is stewarded by **AI Governors** — a global community with one named steward seat per region (every US state, every Canadian province and territory, every EU member, every African country, every country worldwide), mirroring how ISO works through national member bodies. An **AI Governor** is a community steward/advocate designation — **not a government position, official title, or public office** — earned by a light but real commitment: review one draft per release cycle, run one local session, and represent the region in the working group. **Every seat is open at launch.** Apply with a [GitHub Issue "AI Governor: \<your region\>"](https://github.com/KGEmmanuel/physical-ai-governance/issues/new?template=ai-governor.yml) or by email.

*This is a draft for public comment, not legal advice or a certification. It is designed to complement and extend ISO 10218:2025, ISO 13482, the EU Machinery Regulation 2023/1230, the EU AI Act, and ISO/IEC 42001 — not replace them.*
