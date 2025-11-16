# Architecture

This document explains Chat Guard’s design and request flow.

## Component Map

- `app.js`: Initializes a `discord.js` client with required intents and boots the system.
- `src/login.js`: Connects to MongoDB, logs into Discord, and registers slash commands via REST on `ready`.
- `src/events.js`: Applies runtime policy on `messageCreate` and `messageUpdate` events.
- `src/commands.js`: Implements slash commands for policy management and information queries.
- `src/functionz.js`: Utility layer — spam detection, punishment workflow, whitelist checks, and helpers.
- `src/db.js`: Mongoose schema and model for per‑server configuration and state.

## Data Flow

1. Startup
   - `app.js` creates the client and loads `login.js`.
   - `login.js` connects to MongoDB and calls `client.login()`.
   - On `ready`, `login.js` registers global application commands.
2. Event Handling
   - `events.js` receives `messageCreate`/`messageUpdate`.
   - Loads server policy from MongoDB; bypasses if the author/channel/roles are whitelisted.
   - Evaluates guards (character limit, mass mention, spam, invite, link, bad word, custom filter).
   - On violation: delete message, warn user first (BlueList), then escalate to timed mute (BlackList) with logging.
3. Commands
   - `commands.js` responds to slash commands with embeds.
   - Settings commands persist changes to MongoDB via `db.js`.

## Enforcement Logic

- Two‑stage enforcement per user:
  - First violation → warning and temporary BlueList entry (2 hours).
  - Subsequent violation during BlueList window → mute for `MuteDurationMinute`, user added to BlackList temporarily.
- Logging: All punishments and warnings are sent to `PunishLogChannelID`.
- Spam: ≥7 messages from same author in 5 seconds triggers spam.
- Invite Allowlist: Server vanity and existing server invites are allowed; others blocked.

## Reliability Considerations

- Idempotency: Guards check feature toggles before any mutation.
- Safety: All message deletions and mutes are wrapped in permission checks to avoid failures.
- Rate‑limits: Slash command registration is run once on `ready` using bulk REST API.

## Extensibility

- Add new guard checks in `events.js` with minimal coupling.
- Extend schema in `db.js` for new toggles/thresholds.
- Keep command options in `login.js` synchronized with handlers in `commands.js`.

[Back to Docs Index](README.md) · [Next: Commands →](05-Commands.md) · [See also: Data Model](06-Data-Model.md)
