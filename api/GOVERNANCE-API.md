# Physical AI Governance API
### The vendor-neutral interface that makes the standards enforceable and provable
**Draft v0.1 · Request for comment · Reference provider: Cognita GRC**

---

## Why an API

A standard that lives in a PDF is a hope. The Force Continuum and the six controls only bite if they are **enforced at runtime and provable after the fact** — across vendors, without each robotics company reinventing (or quietly weakening) the trust layer. This API is that layer: a **thin, interoperable governance contract** any robot integrates against, and any regulator/insurer/buyer can verify against.

It handles **governance metadata, attestations, authorizations, and signed integrity records** — not raw video/audio (privacy-minimized by design). It is offered by Cognita as a hosted trust layer for robotics companies, and published open so it can become a standard rather than a lock-in.

**Design constraints:** vendor-neutral · low-latency for the authorization path (safety-critical) · **the API authorizes and records; it never becomes the safety-rated stop** (that stays hardware, Control 1) · content-minimized · offline-verifiable logs.

---

## Surface (v0.1)

### 1. Identity & attestation
```
POST /v1/robots                      # register a unit → issues a unique cryptographic identity (Control 4)
POST /v1/robots/{id}/attest          # submit a Conformance Attestation (e-stop rated, force limits certified,
                                     #   log key, monitoring endpoint, accountable operator) → signed attestation
GET  /v1/robots/{id}/envelope        # the machine-readable Force Envelope Declaration (maxPAFC, HC-by-level, zones)
POST /v1/robots/{id}/revoke          # revoke identity/attestation (compromise, decertification, recall)
```
`attest` returns `{ attestationId, status: certified|degraded, maxPAFC, validUntil, signature }`.

### 2. Force-level authorization (the coupling gate)
The learning stack **requests** to operate at / escalate to a PAFC level; the API checks the required human-control tier and returns a decision. **Escalation above PAFC-2 requires a human-authorization token.**
```
POST /v1/force/authorize
  { robotId, currentPAFC, requestedPAFC, context, humanAuthToken? }
→ { granted: bool, grantedPAFC, requiredHumanControl: HC-0..3,
    reason, expires, eventId }                # every decision is logged (§3)
```
Rules enforced: Force–Control Coupling (R1), no-silent-escalation (R3), hard ceiling (R4 — PAFC-5 never granted autonomously). A `deny` instructs the caller to **fail down** (R2). Human authorization for PAFC-4 is minted by:
```
POST /v1/human/authorize             # an accountable operator authorizes a specific action → humanAuthToken
                                     #   (short-lived, single-use, attributable) (Control 6)
```

### 3. Tamper-evident audit log (Control 3)
```
POST /v1/events                      # append a signed, hash-chained event
  { robotId, type: command|decision|pafc_change|force_applied|human_auth|fault,
    pafc, humanControl, operatorId?, digest, ts }     # content-minimized: digests/enums, not raw media
GET  /v1/events?robotId=&since=      # retrieve the chain (authorized readers)
GET  /v1/verify?robotId=&range=      # OFFLINE-verifiable proof of integrity (hash chain + signatures)
```
The `verify` output lets a regulator/insurer confirm *nothing was edited* without trusting the provider — the core "can you prove it?" capability.

### 4. Continuous safety monitoring (Control 5)
```
POST /v1/telemetry                   # envelope-holding, drift/OOD, health, oversight-quality signals
GET  /v1/robots/{id}/status          # live governance status: attestation valid? envelope holding? current PAFC?
                                     #   drift alerts? → drives the compliance dashboard
```
A monitored breach can trigger a server-side `deny`/downgrade on the next `authorize`, and alerts the Accountable Operator.

### 5. Accountability & incident
```
POST /v1/deployments                 # register deployment: accountable operator, responsibility chain, zone ceilings
POST /v1/incidents                   # open an incident → freezes & preserves the relevant event chain (evidence)
GET  /v1/incidents/{id}/evidence     # the verifiable record: what it was told, decided, force applied, who authorized
```

---

## The "answer after an accident"

When something goes wrong, one `GET /v1/incidents/{id}/evidence` + `GET /v1/verify` returns, provably:
- **what the robot was told** (commands), **what it decided** (decisions + PAFC changes),
- **what force it applied** and at what level, **who authorized** anything above PAFC-2, and
- **that the record was not altered.**

That is the difference between "we're investigating" and "here is the tamper-evident chain of custody" — and it's the layer Cognita provides.

## Where Cognita fits (honest framing)

Cognita operates the **hosted trust layer**: identity issuance, attestation, the authorization gate, the tamper-evident ledger + offline `verify`, the monitoring dashboard, and the incident evidence pack — the same **Discover → Govern → Prove** loop Cognita runs for software AI, extended to embodied AI. The **standard and the API spec are open** (Apache-2.0) so robot makers can implement or self-host; Cognita's product is the *provable, managed, interoperable* implementation — not ownership of the standard.

---

*v0.1 open questions: latency budget + offline/edge fallback for the authorization gate (safety-critical); the minimal signed-event schema; identity rooting (TPM/secure-element); how `verify` anchors (transparency log / notarization); privacy review of what may ever transit `/v1/events`. Open an Issue.*
