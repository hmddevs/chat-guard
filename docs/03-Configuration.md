# Configuration

This document describes all configurable aspects of Chat Guard and recommended practices for secure and reliable operation.

## File: `src/config.js`

```js
module.exports = {
  Client_Token: "<discord-bot-token>",
  MongoDB_ConnectURL: "<mongodb-connection-string>",
  BotOwners: ["<discord-user-id>", "<optional-second-owner-id>"],
  BotStatus: "Bot is online!",
};
```

- `Client_Token` (required): Discord bot token. Treat as secret.
- `MongoDB_ConnectURL` (required): MongoDB connection string. TLS recommended.
- `BotOwners` (required): Array of user IDs with developer‑level access.
- `BotStatus` (optional): Presence text (e.g., Watching, default configured in code).

## Server Policy (stored in MongoDB)

Chat Guard persists per‑server configuration and state in the `ChatGuard` collection. See [Data Model](06-Data-Model.md) for full schema. Key toggles:

- `CharacterLimit` (boolean) — Enforces 500‑character limit
- `InviteGuard` (boolean) — Blocks Discord invites from non‑whitelisted sources
- `LinkGuard` (boolean) — Blocks generic external links
- `MassPingGuard` (boolean) — Mitigates mass mentions
- `BadWordGuard` (boolean) — Filters profanity list
- `SpamGuard` (boolean) — Blocks burst spam (≥7 messages in 5s)
- `MuteDurationMinute` (number) — Mute duration in minutes (default 60)
- `FiltredWords` (array) — Server‑specific filtered keywords
- `WhiteListMembers|Roles|Channels` (arrays) — Bypass enforcement
- `PunishLogChannelID` (string) — Channel ID for moderation logs

## Recommended Defaults

- Set `PunishLogChannelID` immediately after onboarding.
- Keep `MuteDurationMinute` between 10–120 depending on server risk appetite.
- Enable `InviteGuard`, `LinkGuard`, and `SpamGuard` for baseline hygiene.
- Curate `FiltredWords` to capture community‑specific risks.

## Permissions

The bot requires, at minimum:
- Manage Messages
- Moderate Members (for timeout/mute)
- Read/Send Messages
- Manage Channels (recommended)

Grant only permissions necessary for your policy posture.

## Internationalization

The bot currently sets `moment` locale to `tr` for time formatting. If you need a different locale, adjust the locale initialization in `src/commands.js`.

## Secrets Management

Do not commit tokens or connection strings. Use environment managers (e.g., Heroku config vars, GitHub Actions secrets) and inject into `src/config.js` during deployment, or refactor to load from environment variables.

[Back to Docs Index](README.md) · [Next: Architecture →](04-Architecture.md) · [See also: Commands](05-Commands.md)
