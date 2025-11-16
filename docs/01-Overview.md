# Overview

Chat Guard is a configurable Discord moderation bot engineered by HMD Developments, Inc. to help communities remain safe, compliant, and resilient at any scale. It unifies best‑practice moderation controls into a single, operable service: automated message filtering, link/invite protection, spam mitigation, mass‑mention rate‑limiting, configurable mutes, and comprehensive logging.

## Business Value

- Risk reduction: Proactively blocks harmful content, links, and raids, lowering moderation load.
- Operational efficiency: Consistent, automated enforcement reduces manual intervention.
- Community health: Clear guardrails improve user experience and trust.
- Governance: Configurable policies, audit logs, and data controls support compliance.

## Core Capabilities

- Message policy enforcement (bad words, filtered terms)
- Link and Discord invite protection
- Spam and mass‑mention mitigation
- Character‑limit enforcement
- Warning → mute escalation with configurable durations
- Whitelist for members, roles, and channels
- Moderation logging to a dedicated channel
- Rich, privilege‑aware slash command surface

## Technology Overview

- Language/Runtime: Node.js
- Frameworks: discord.js, mongoose
- Data: MongoDB for persistent server policy and enforcement state
- Packaging: Simple Node process; Procfile for Heroku worker deployment

## Audience

- Server owners and moderators who need reliable, automated controls
- Developers and platform engineers requiring a secure, configurable base bot
- Enterprises seeking a non‑commercial, auditable moderation utility

For a guided setup, see [Getting Started](02-Getting-Started.md). For design details, see [Architecture](04-Architecture.md).

[Back to Docs Index](README.md) · [Next: Getting Started →](02-Getting-Started.md)
