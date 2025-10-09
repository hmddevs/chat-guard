
# Chat Guard

## Overview

**Chat Guard** is a powerful Discord moderation bot designed to help server administrators maintain a safe, organized, and respectful community. It provides advanced message filtering, user management, anti-spam, and customizable moderation tools, all easily configurable for your server’s needs.

---

## Features

- **Automated Message Filtering**: Block prohibited words, links, Discord invites, and custom terms.
- **Spam & Flood Protection**: Detect and neutralize spam and mass mentions.
- **Invite & Link Blocking**: Prevent sharing of Discord invites and external links.
- **Character Limit Enforcement**: Set maximum message length to keep chats concise.
- **Mute Management**: Temporarily mute users who break rules, with custom durations.
- **Whitelist System**: Exempt trusted users, roles, or channels from moderation.
- **Customizable Settings**: Adjust filters, mute durations, logging, and more.
- **Comprehensive Command Set**: Intuitive commands for all bot features.
- **Logging**: Record moderation actions for transparency.

---

## Architecture

Chat Guard is built with Node.js and leverages the following technologies:

- [discord.js](https://discord.js.org/) for Discord API integration
- [mongoose](https://mongoosejs.com/) for MongoDB data management
- [moment](https://momentjs.com/) and [moment-duration-format](https://github.com/jsmreese/moment-duration-format) for time formatting

The codebase is modular, with core logic in the `src/` directory:

- `commands.js`: Command definitions and handlers
- `config.js`: Configuration file (edit this to set up your bot)
- `db.js`: Database connection and models
- `events.js`: Discord event listeners
- `functionz.js`: Utility functions
- `login.js`: Bot login and startup logic

---

## Setup & Installation

### Prerequisites

- **Node.js** v16.9.0 or higher
- **MongoDB** (local or cloud instance)
- **Discord Bot Token** (from the [Discord Developer Portal](https://discord.com/developers/applications))

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ichbinheimdall/chat-guard.git
   cd chat-guard
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure the bot:**
   - Open `src/config.js` and fill in your credentials:
     ```js
     module.exports = {
       Client_Token: "YOUR_BOT_TOKEN",
       MongoDB_ConnectURL: "YOUR_MONGODB_CONNECTION_STRING",
       BotOwners: ["YOUR_DISCORD_USER_ID"],
       BotStatus: "Bot is online!",
     };
     ```
4. **Start the bot:**
   ```bash
   npm start
   ```

---

## Usage & Commands

Chat Guard provides a rich set of commands for server management. Some key commands:

- `/commands` — List all available commands
- `/settings` — Show current server configuration
- `/whitelist [add/remove] [user/role/channel]` — Manage whitelist
- `/filter [add/remove] [word]` — Edit filtered words
- `/muteduration [time]` — Set mute duration
- `/logchannel [channel]` — Set moderation log channel
- `/characterlimit [enable/disable]` — Toggle character limit
- `/inviteblock [enable/disable]` — Toggle invite blocking
- `/linkblock [enable/disable]` — Toggle link blocking
- `/massmentionblock [enable/disable]` — Toggle mass mention protection
- `/badwordblock [enable/disable]` — Toggle bad word filtering
- `/spamblock [enable/disable]` — Toggle spam protection
- `/unmute [user]` — Unmute a user

> **Note:** You must have appropriate Discord permissions (Manage Messages, Moderate Members, etc.) to use moderation commands.

---

## Permissions

To function properly, Chat Guard requires the following Discord permissions:

- Manage Messages
- Moderate Members
- Manage Channels
- Read Messages
- Send Messages

---

## Logging & Transparency

Set a dedicated log channel with `/logchannel [channel]` to record moderation actions for review and transparency.

---

## Privacy & Data

Chat Guard may collect and store certain data (User IDs, Server IDs, Whitelisted IDs, Log Channel IDs) as required for operation. Direct messages to the bot are **not** stored. For data deletion requests, contact: [legal@hmddevs.org](mailto:legal@hmddevs.org).

---

## Contributing

Contributions are welcome! Please open issues or pull requests to suggest features, report bugs, or improve documentation.

---

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**. See the [LICENSE](./LICENSE) file for details and additional terms specific to Chat Guard.

---

## Support

For help or questions, open an issue or contact the developer at [info@hmddevs.org](mailto:info@hmddevs.org).

---

## Acknowledgments

- [discord.js](https://discord.js.org/)
- [mongoose](https://mongoosejs.com/)
- [moment](https://momentjs.com/)
- [moment-duration-format](https://github.com/jsmreese/moment-duration-format)

Special thanks to the open-source community and all contributors.
