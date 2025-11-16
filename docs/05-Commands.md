# Commands & Usage

This reference lists all slash commands, parameters, required permissions, and example usage.

## General

- `/commands` — Shows the bot's command list.
- `/privacy` — Links to Privacy Policy and Terms of Use.
- `/invite` — Bot invite, support server, and voting links.
- `/info` — Bot telemetry (owners only).

## Settings & Policy

- `/settings` — Displays current server configuration.
- `/logchannel channel:<#text-channel>` — Sets the moderation log channel.
- `/muteduration time:<minutes>` — Sets mute duration in minutes.
- `/filter options:<add|remove> word:<string>` — Adds/removes filtered terms.
- `/whitelist options:<add|remove> id:<user|role|channel id>` — Manages whitelist.
- `/characterlimit options:<enable|disable>` — Toggles 500‑char limit.
- `/inviteblock options:<enable|disable>` — Toggles invite blocking.
- `/linkblock options:<enable|disable>` — Toggles link blocking.
- `/massmentionblock options:<enable|disable>` — Toggles mass‑mention protection.
- `/badwordblock options:<enable|disable>` — Toggles bad‑word filter.
- `/spamblock options:<enable|disable>` — Toggles spam protection.
- `/unmute member:<@user>` — Removes active timeout.

## Permissions

- Most policy commands require Administrator or BotOwner.
- `/info` is restricted to `config.BotOwners`.

## Examples

- Set log channel: `/logchannel #moderation-logs`
- Enable spam protection: `/spamblock enable`
- Add a filtered word: `/filter options:add word:spoiler`
- Whitelist a role: `/whitelist options:add id:123456789012345678`
- Set mute duration to 45 minutes: `/muteduration 45`

Notes:
- Whitelist accepts IDs of users, roles, or channels. Obtain IDs from Discord developer mode.
- Log channel must be a text channel where the bot can send messages.
