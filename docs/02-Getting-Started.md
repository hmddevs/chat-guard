# Getting Started

This guide brings you from zero to a running Chat Guard instance.

## Prerequisites

- Node.js v16.9.0 or later
- MongoDB (local or hosted)
- A Discord application with a bot token
- Discord permissions to add a bot to your server

## 1) Clone and Install

```bash
git clone https://github.com/hmddevs/chat-guard.git
cd chat-guard
npm install
```

## 2) Configure

Configuration is read from environment variables. Copy the example file and fill it in:

```bash
cp .env.example .env
```

```bash
DISCORD_BOT_TOKEN=your-bot-token
MONGODB_URI=your-mongodb-connection-string
BOT_OWNERS=your-discord-user-id
BOT_STATUS=Bot is online!
```

- `DISCORD_BOT_TOKEN` (required): Your bot token from the Discord Developer Portal
- `MONGODB_URI` (required): Standard MongoDB connection string
- `BOT_OWNERS`: User IDs with elevated access (e.g., `/info`), comma-separated
- `BOT_STATUS`: Presence text displayed by the bot

`.env` is ignored by git. Load it however suits your setup: export the variables in
your shell, use your process manager or host's environment settings, or on Node 20.6
and later run `node --env-file=.env app.js`.

## 3) Start

```bash
npm start
```

You should see a successful connection log in the console.

## 4) Invite the Bot

Use the slash command `/invite` in any server where the bot is present. You can also construct an OAuth2 URL manually with the bot's client ID and the `applications.commands` scope plus minimal permissions required for moderation features.

## 5) Minimal Setup

- Set a moderation log channel: `/logchannel #moderation-logs`
- Review defaults: `/settings`
- Enable protections as needed: e.g., `/inviteblock enable`, `/spamblock enable`
- Adjust mute duration: `/muteduration 60`

For deeper configuration details, see [Configuration](03-Configuration.md). For operations, see [Operations & Monitoring](09-Operations.md).

[Back to Docs Index](README.md) · [Next: Configuration →](03-Configuration.md)
