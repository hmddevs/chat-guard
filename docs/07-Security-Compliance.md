# Security & Compliance

This document outlines Chat Guard’s security posture, permission model, and privacy considerations.

## Discord Permissions

Minimum permissions required for full functionality:
- Manage Messages — Delete violating messages
- Moderate Members — Apply timeout (mute)
- Read/Send Messages — Respond and log
- Manage Channels — Recommended for robust operations

Grant the smallest practical set of permissions for your policy.

## Enforcement Safety

- All muting and deletion actions are permission‑gated.
- Logging is required for punitive actions; if `PunishLogChannelID` is missing, warnings are issued instead.
- Known‑good invites (server vanity, server‑owned invites) are allowed; others are blocked when enabled.

## Privacy & Data

- Stored data: Guild (Server) IDs, whitelists, filtered words, log channel ID, temporary enforcement lists.
- No storage of message content beyond embedded summaries in log messages, where configured by policy.
- Direct messages to the bot are not stored.
- Data deletion requests: contact legal@hmddevs.org with proof of control.

## Compliance Guidance

- Non‑commercial license: CC BY‑NC‑SA 4.0 with additional terms in LICENSE.
- Operators should disclose moderation automation in server rules.
- Ensure moderation logs are retained according to your local policies and regulations.

## Secure Operations

- Protect tokens and DB credentials; use environment secrets.
- Restrict who can run settings commands to Administrators.
- Monitor for repeated failed operations; review bot permissions if warnings appear.
