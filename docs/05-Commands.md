# Commands & Usage

This reference lists all slash commands, parameters, required permissions, and example usage.

## General

- `/commands` : shows the bot's command list.
- `/privacy` : links to Privacy Policy and Terms of Use.
- `/invite` : bot invite, support server, and voting links.
- `/info` : bot telemetry (owners only).

## Settings & Policy

- `/settings` : displays current server configuration.
- `/logchannel channel:<#text-channel>` : sets the moderation log channel.
- `/muteduration time:<minutes>` : sets mute duration in minutes.
- `/filter options:<add|remove> word:<string>` : adds or removes filtered terms.
- `/whitelist options:<add|remove> id:<user|role|channel id>` : manages whitelist.
- `/characterlimit options:<enable|disable>` : toggles 500‑char limit.
- `/inviteblock options:<enable|disable>` : toggles invite blocking.
- `/linkblock options:<enable|disable>` : toggles link blocking.
- `/massmentionblock options:<enable|disable>` : toggles mass‑mention protection.
- `/badwordblock options:<enable|disable>` : toggles bad‑word filter.
- `/spamblock options:<enable|disable>` : toggles spam protection.
- `/unmute member:<@user>` : removes active timeout.

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

[Back to Docs Index](README.md) · [See also: Configuration](03-Configuration.md)
