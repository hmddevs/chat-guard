# Configuration

This document describes all configurable aspects of Chat Guard and recommended practices for secure and reliable operation.

## Environment variables

Configuration is read from the environment by `src/config.js`. See `.env.example` for a
template.

```bash
DISCORD_BOT_TOKEN=<discord-bot-token>
MONGODB_URI=<mongodb-connection-string>
BOT_OWNERS=<discord-user-id>,<optional-second-owner-id>
BOT_STATUS=Bot is online!
```

- `DISCORD_BOT_TOKEN` (required): Discord bot token. Treat as secret.
- `MONGODB_URI` (required): MongoDB connection string. TLS recommended.
- `BOT_OWNERS`: Comma-separated user IDs with developer‑level access.
- `BOT_STATUS` (optional): Presence text (e.g., Watching, default configured in code).

The bot fails fast at startup if either required variable is missing.

## Server Policy (stored in MongoDB)

Chat Guard persists per‑server configuration and state in the `ChatGuard` collection. See [Data Model](06-Data-Model.md) for full schema. Key toggles:

- `CharacterLimit` (boolean): enforces 500‑character limit
- `InviteGuard` (boolean): blocks Discord invites from non‑whitelisted sources
- `LinkGuard` (boolean): blocks generic external links
- `MassPingGuard` (boolean): mitigates mass mentions
- `BadWordGuard` (boolean): filters profanity list
- `SpamGuard` (boolean): blocks burst spam (≥7 messages in 5s)
- `MuteDurationMinute` (number): mute duration in minutes (default 60)
- `FiltredWords` (array): server‑specific filtered keywords
- `WhiteListMembers|Roles|Channels` (arrays): bypass enforcement
- `PunishLogChannelID` (string): channel ID for moderation logs

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

Do not commit tokens or connection strings. `src/config.js` reads them from the
environment, and `.env` is git-ignored, so nothing secret needs to live in a tracked
file. In deployment, supply the variables through your platform's own secret store
(e.g. Heroku config vars, GitHub Actions secrets) rather than shipping a `.env`.

[Back to Docs Index](README.md) · [Next: Architecture →](04-Architecture.md) · [See also: Commands](05-Commands.md)
