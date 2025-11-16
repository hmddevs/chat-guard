# Getting Started

This guide brings you from zero to a running Chat Guard instance.

## Prerequisites

- Node.js v16.9.0 or later
- MongoDB (local or hosted)
- A Discord application with a bot token
- Discord permissions to add a bot to your server

## 1) Clone and Install

```bash
git clone https://github.com/ichbinheimdall/chat-guard.git
cd chat-guard
npm install
```

## 2) Configure

Edit `src/config.js` and set the following fields:

```js
module.exports = {
  Client_Token: "YOUR_DISCORD_BOT_TOKEN",
  MongoDB_ConnectURL: "YOUR_MONGODB_CONNECTION_STRING",
  BotOwners: ["YOUR_DISCORD_USER_ID"],
  BotStatus: "Bot is online!",
};
```

- `Client_Token`: Your bot token from the Discord Developer Portal
- `MongoDB_ConnectURL`: Standard MongoDB connection string
- `BotOwners`: User IDs with elevated access (e.g., `/info`)
- `BotStatus`: Presence text displayed by the bot

## 3) Start

```bash
npm start
```

You should see a successful connection log in the console.

## 4) Invite the Bot

Use the slash command `/invite` in any server where the bot is present. You can also construct an OAuth2 URL manually with the bot’s client ID and the `applications.commands` scope plus minimal permissions required for moderation features.

## 5) Minimal Setup

- Set a moderation log channel: `/logchannel #moderation-logs`
- Review defaults: `/settings`
- Enable protections as needed: e.g., `/inviteblock enable`, `/spamblock enable`
- Adjust mute duration: `/muteduration 60`

For deeper configuration details, see 03-Configuration.md. For operations, see 09-Operations.md.
