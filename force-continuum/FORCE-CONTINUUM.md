# The Physical AI Force Continuum (PAFC)
### A graduated force-authorization scale for autonomous embodied AI
**Draft v0.1 · Request for comment · Convened by Cognita GRC**

---

## 1. Purpose & scope

Policing has a *use-of-force continuum* — a graduated scale from presence to lethal force, with escalation rules and accountability at each step. Aviation and driving automation have *levels* (SAE J3016, L0–L5). Embodied AI has neither: a humanoid that can walk, grip, restrain, and take real-time commands operates today with no standardized, machine-enforced definition of **how much force it may apply and how much human control that force requires.**

The **Physical AI Force Continuum (PAFC)** fills that gap. It applies to any autonomous or semi-autonomous embodied AI system that can move and apply force in a shared space with humans — humanoids, general-purpose mobile manipulators, security/patrol robots, care robots.

It **complements, not replaces**, the physical-safety standards: force limits reference the biomechanical body-part limits now in **ISO 10218-2:2025** (formerly ISO/TS 15066); stops reference **IEC 60204-1** stop categories; safety functions reference **IEC 61508 (SIL) / ISO 13849 (Performance Level)**; risk assessment references **ISO 12100** and the **EU Machinery Regulation 2023/1230**. PAFC adds what those lack: **a force-graduation scale coupled to mandatory human control, enforced in the machine and provable after the fact.**

## 2. Two axes, one rule

- **Force level (PAFC-0…5):** the maximum physical effect the system is authorized to produce.
- **Human-control tier (HC-0…3):** how directly a human must be involved.

**The governing rule (Force–Control Coupling):** *the higher the authorized force, the higher the minimum human-control tier.* Force is never decoupled from an accountable human.

## 3. The Force Continuum

| Level | Name | Physical capability authorized | Force ceiling | Min. human-control tier | In-machine enforcement |
|---|---|---|---|---|---|
| **PAFC-0** | **Presence** | Observe, occupy space, navigate passively. No interaction intended. | None | HC-0 (autonomous) | Motion limits, geofence |
| **PAFC-1** | **Signal** | Communicate: speech, light, gesture, alert; *request* compliance. | None (informational) | HC-0 (autonomous), logged | — |
| **PAFC-2** | **Position** | Move to block, follow, guide-by-position, create distance. **No intentional contact.** | Only incidental contact **below** ISO 10218-2 quasi-static limits | HC-1 (supervised / on-the-loop) | Speed-&-separation monitoring (safety-rated) |
| **PAFC-3** | **Contact (limited)** | *Intentional* physical contact: guide, support, gently restrain. | **Hard-capped, body-part-specific, ≤ ISO 10218-2 PFL biomechanical limits.** Reversible. | HC-1 + escalation to HC-2 | Power-&-force-limiting (safety-rated, PLd/e) |
| **PAFC-4** | **Less-than-lethal force** | Force intended to *stop or incapacitate* a person, beyond injury-limit contact. | Bounded; **non-lethal by design**; documented effect profile | **HC-2 (human-in-the-loop authorization required per action)** | Per-action human authorization gate; full logging |
| **PAFC-5** | **Lethal force** | Capable of causing death. | — | **HC-3 only, or PROHIBITED** | **Never an autonomous decision** |

### Human-control tiers

| Tier | Name | Meaning | Max PAFC permitted |
|---|---|---|---|
| **HC-0** | **Autonomous** | Human out of the loop; may act without real-time human involvement. | ≤ PAFC-1 |
| **HC-1** | **Supervised** | Human on the loop: actively monitoring, can override/stop at any time. | PAFC-2, PAFC-3 |
| **HC-2** | **Authorized** | Human in the loop: an accountable human must *authorize the specific action* before it occurs. | PAFC-4 |
| **HC-3** | **Directed** | Direct, real-time human control of the actuation. | The only conceivable path to any PAFC-5-capable actuator |

## 4. Enforcement rules

- **R1 — Force–Control Coupling.** A system may operate at a force level only if the *required minimum human-control tier* is present and verified. (Table §3.)
- **R2 — Fail to lowest safe state.** On any fault, sensor loss, uncertainty above threshold, comms loss, or loss of the required human-control tier, the system **defaults down**, terminating in a safety-rated stop (IEC 60204-1 Cat 0/1).
- **R3 — No silent escalation.** Operating at or moving above **PAFC-2** requires an **explicit, logged authorization** at the required human-control tier. Escalation is an event, never a side effect.
- **R4 — Hard ceiling.** **PAFC-5 is never an autonomous decision.** Autonomous lethal force is prohibited; any lethal-capable actuation, where lawful at all, requires HC-3 meaningful human control.
- **R5 — Enforced in the machine.** Each level's limits are enforced by a **safety-rated layer independent of the AI/learning stack** (hardware/firmware, SIL/PL-rated) — not by the model, and not by policy alone. The learning system *requests*; the safety layer *permits*.
- **R6 — Provable.** Every level state, every escalation authorization, every force application, and the identity of the accountable human are written to a **tamper-evident, offline-verifiable log** (see the Embodied-AI Governance standard). If it can't be proven, it didn't happen safely.
- **R7 — Declared envelope.** Every deployment publishes its **maximum authorized PAFC level** and the human-control regime, per context/zone (e.g., a care robot capped at PAFC-3; a warehouse robot at PAFC-2 near people).

## 5. Special context: law enforcement & security robots

Robots are already deployed in policing and security (patrol, surveillance, EOD). This is the highest-stakes context and the reason a *continuum* — not a binary — is essential.

- **Autonomous ceiling:** without HC-2 authorization, a security robot may operate **no higher than PAFC-2** (presence, signal, positioning). Deterrence and de-escalation are autonomous-safe; force is not.
- **PAFC-4 (less-than-lethal)** requires **per-action human authorization (HC-2)**, an accountable officer, and complete tamper-evident logging — the robotic analogue of the human use-of-force report.
- **PAFC-5 (lethal)** as an autonomous decision is **prohibited.** This aligns with the international "meaningful human control" position on autonomous weapons and with public-safety debates over remotely-operated lethal robots. Where any lethal capability is lawful, it is HC-3 (direct human control) only.
- **Transparency:** a robot operating above PAFC-1 in public should be **identifiable** (visible identity, see the digital-identity control) and its force envelope publicly declared.

## 6. How to read a robot's PAFC rating

A conformant system carries a machine-readable **Force Envelope Declaration**: `{ maxLevel, humanControlByLevel, zones[], certifiedForceLimits, safetyIntegrity }`, attestable via the Governance API. A buyer, regulator, or bystander can then answer *"what is this machine allowed to do to a person, and who is accountable?"* — before, not after.

---

*v0.1 open questions for the working group: (a) do we need a PAFC-3.5 for "restraint of a resisting person"? (b) zone-conditional levels vs. a single deployment ceiling; (c) how HC-1 "meaningful" supervision is measured (attention, latency, span-of-control); (d) mapping PAFC to insurance/liability tiers. Open an Issue to weigh in.*

Referenced standards: ISO 10218-1/-2:2025 · ISO 13482 · IEC 60204-1 · IEC 61508 · ISO 13849 · ISO 12100 · EU Machinery Regulation 2023/1230 · EU AI Act · SAE J3016 (analogue).
