# Embodied AI Governance Standard — "ISO 42001 for Robotics"
### A management-system + technical-control standard for autonomous embodied AI
**Draft v0.1 · Request for comment · Convened by Cognita GRC**

---

## 0. Purpose

ISO/IEC 42001 gives organizations an *AI management system* for disembodied AI. The EU Machinery Regulation and ISO 10218/13482 give *physical safety* for machines. **Neither joins the two** for a general-purpose robot that learns, decides, and applies force in public. This standard does: a governance layer that binds the AI decision, the physical actuation, the Force Continuum, and a **provable accountability record** into one conformable system.

It is structured as a **management system (Part A)** wrapping **six mandatory technical controls (Part B)**, each mapped to the standards it extends. Conformance is demonstrated by **pre-deployment attestation + continuous monitoring** via the Governance API.

---

## Part A — Management system (extends ISO/IEC 42001)

- **A.1 Governance policy & scope** — a board-owned embodied-AI safety policy; the declared **Force Continuum ceiling** (PAFC) per product/deployment.
- **A.2 Risk assessment** — combined **ISO 12100** machinery risk + **AI risk (NIST AI RMF / ISO 23894)** + **self-evolving-behaviour** review (EU MR 2023/1230). Assess bodily-harm scenarios per PAFC level.
- **A.3 Roles, competence, accountability** — a named **Accountable Operator** per deployment and a documented **responsibility chain** (manufacturer → integrator → operator → supervisor). (See Control 6.)
- **A.4 Human oversight design** — the human-control tiers (HC-0…3) engineered per PAFC level, with measured supervision quality (attention, latency, span-of-control).
- **A.5 Incident management** — a first-hour physical-incident playbook (contain → preserve evidence → notify), evidence via Control 3.
- **A.6 Continual improvement & conformity** — attestation before deployment, re-attestation on material/model change, continuous monitoring (Control 5), independent review.

---

## Part B — The six mandatory technical controls

### Control 1 — Hardware-enforced emergency stop
- A **safety-rated** emergency stop (**IEC 60204-1** Cat 0 or Cat 1) that is **independent of the AI/compute stack** and cannot be overridden by software or a model.
- **Physically accessible** on the unit **and** remotely triggerable (authenticated); triggers the **fail-to-lowest-safe-state** (Force Continuum R2).
- Integrity: **PLe / SIL 3** target; protected against corruption (EU MR cybersecurity duty).
- *Extends: IEC 60204-1, ISO 13849, IEC 61508.*

### Control 2 — Certified force limits
- The system's **force / power / speed envelope** is **certified** against **ISO 10218-2:2025 (ex-15066)** body-part biomechanical limits, per authorized **PAFC level**.
- Enforced by a **safety-rated layer independent of the learning stack** — the model *requests* motion; the safety layer *clamps* it. Limits are not a training objective.
- The certified envelope is published in the machine-readable **Force Envelope Declaration**.
- *Extends: ISO 10218-2:2025, ISO 13482, ISO 13849.*

### Control 3 — Cryptographically verifiable audit logs
- An **append-only, tamper-evident** log (hash-chained + signed) of: commands received, decisions taken, **PAFC level changes and authorizations**, force applications, sensor snapshots at decision points, human-control tier, and the accountable human's identity.
- **Offline-verifiable** by any party (a `verify` routine) — integrity provable without trusting the vendor's server.
- **Retention** aligned to EU MR (10 years) where applicable; privacy-minimized (log the *decision + provenance*, not gratuitous personal data).
- **This is the answer to "can you prove why it happened?"** — and the control most absent from every current standard.
- *Extends: ISO 42001 (records), EU MR (documentation), EU AI Act (logging Art. 12 analogue).*

### Control 4 — Unique digital identity
- Every unit holds a **cryptographic identity** (hardware-rooted where possible) — attestable, non-transferable, **revocable**.
- Binds every logged action to a specific machine → *we always know which robot did what.* Enables fleet inventory, recall, and revocation of a compromised or decertified unit.
- *Extends: non-human-identity / device-identity practice; EU MR unique identification; ISO 42001 asset inventory.*

### Control 5 — Continuous safety monitoring
- Runtime monitoring of: the **certified envelope** (are limits holding?), **behavioural drift / self-evolving behaviour** bounds (EU MR), anomaly and out-of-distribution detection, health/faults, and human-oversight quality.
- Breach → **automatic downgrade** on the Force Continuum + alert to the Accountable Operator; feeds the governance dashboard.
- *Extends: EU MR self-evolving-behaviour review; NIST AI RMF Manage; ISO 42001 monitoring.*

### Control 6 — Clear human accountability
- A **named Accountable Operator** per deployment and a **documented responsibility chain**; the **human-control tier is enforced per PAFC level** (no force above the coupled tier).
- Authorizations for PAFC-4 are **attributable to a specific person** and logged (Control 3). Liability address is never ambiguous.
- *Extends: ISO 42001 roles; EU AI Act human oversight (Art. 14 analogue); EU MR operator duties.*

---

## Conformance model

1. **Attest** — before deployment, the manufacturer/integrator attests each control (e-stop rated, force limits certified, log verifiable, identity issued, monitoring live, accountable operator named) via the Governance API → a signed **Conformance Attestation** + the Force Envelope Declaration.
2. **Prove continuously** — Control 5 telemetry + Control 3 logs keep the attestation *live*; drift or breach flips status.
3. **Verify independently** — regulators, buyers, insurers, and (for public-facing units) the public can verify the attestation and the log integrity **without trusting the vendor** — the whole point.

> A certificate is a claim. This standard is built so the claim is **continuously provable** — which is the only kind of safety assurance that survives an incident and an audit.

*v0.1 open questions: SIL/PL targets per PAFC level; how to certify a *learning* controller whose behaviour changes (Control 2 vs. self-evolving behaviour); minimum log schema; third-party attestation vs. self-attestation; alignment to the EU MR conformity route. Open an Issue.*

Referenced/extended: ISO/IEC 42001 · ISO 10218-1/-2:2025 · ISO 13482 · IEC 60204-1 · IEC 61508 · ISO 13849 · ISO 12100 · ISO 23894 · NIST AI RMF · EU Machinery Regulation 2023/1230 · EU AI Act.
