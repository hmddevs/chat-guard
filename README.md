# Chat Guard: Discord Moderation Bot

## Overview

Chat Guard is an advanced Discord bot engineered to facilitate effective moderation and management of chat channels. It offers a comprehensive suite of tools designed to maintain a secure, organized, and respectful environment within Discord communities. By leveraging automated message filtering, user management, and server protection mechanisms, Chat Guard ensures a seamless and safe user experience.

## Features

Chat Guard provides an array of sophisticated features to enhance server moderation:

- **Automated Message Filtering**: Detects and removes messages containing prohibited words, external links, Discord server invites, or custom-defined terms.
- **Spam Mitigation**: Identifies and neutralizes spam messages to prevent channel flooding.
- **Mass Mention Protection**: Restricts messages with excessive user mentions to maintain order.
- **Invite Restriction**: Prohibits the sharing of Discord server invites to safeguard community integrity.
- **Link Restriction**: Blocks external links to minimize exposure to potentially harmful content.
- **Character Limit Enforcement**: Imposes a maximum character count per message to promote concise communication.
- **Mute Management**: Temporarily mutes users who violate server regulations, with configurable durations.
- **Whitelist Configuration**: Permits specific users, roles, or channels to bypass moderation restrictions.
- **Customizable Settings**: Allows server administrators to tailor protections, filtered terms, mute durations, and logging channels.
- **Command Reference**: Provides a detailed list of commands for streamlined bot interaction.

## Installation

### Prerequisites

To deploy Chat Guard, ensure the following requirements are met:

- **Node.js**: Version 16.9.0 or higher.
- **MongoDB**: A functioning MongoDB database instance.
- **Discord Bot Token**: Obtained from the Discord Developer Portal.

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/chat-guard.git
   cd chat-guard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Bot**:
   - Locate and open the `config.js` file.
   - Replace placeholders with your credentials:
     ```javascript
     module.exports = {
       Client_Token: "YOUR_BOT_TOKEN",
       MongoDB_ConnectURL: "YOUR_MONGODB_CONNECTION_STRING",
       BotOwners: ["YOUR_DISCORD_USER_ID"],
       BotStatus: "Bot is online!",
     };
     ```

4. **Launch the Bot**:
   ```bash
   npm start
   ```

## Configuration and Usage

### Commands

Chat Guard supports an extensive command set for server management and configuration. Key commands include:

- `/commands`: Displays a comprehensive list of available commands.
- `/settings`: Presents the current server configuration.
- `/whitelist [add/remove] [user/role/channel]`: Manages whitelist exemptions.
- `/filter [add/remove] [word]`: Modifies the list of filtered terms.
- `/muteduration [time]`: Specifies the duration of mutes in minutes.
- `/logchannel [channel]`: Designates a channel for moderation logs.
- `/characterlimit [enable/disable]`: Activates or deactivates character limit enforcement.
- `/inviteblock [enable/disable]`: Enables or disables invite blocking.
- `/linkblock [enable/disable]`: Activates or deactivates link blocking.
- `/massmentionblock [enable/disable]`: Enables or disables mass mention protection.
- `/badwordblock [enable/disable]`: Activates or deactivates prohibited word filtering.
- `/spamblock [enable/disable]`: Enables or disables spam protection.
- `/unmute [user]`: Removes mute status from a specified user.

### Permissions

To function optimally, Chat Guard requires the following Discord server permissions:

- Manage Messages
- Moderate Members
- Manage Channels
- Read Messages
- Send Messages

### Logging

Administrators may configure a dedicated logging channel using the `/logchannel [channel]` command to record moderation activities for transparency and oversight.

## Contribution Guidelines

Contributions to Chat Guard are highly valued. Interested parties are invited to submit issues or pull requests to enhance the bot’s functionality and performance.

## Licensing

Chat Guard is distributed under the ISC License. For detailed terms, refer to the `LICENSE` file included in the repository.

## Support

For technical assistance or inquiries, please contact the developer directly.

## Acknowledgments

Chat Guard is built upon the following technologies:

- **discord.js**: A robust library for interacting with the Discord API.
- **Mongoose**: An elegant MongoDB object modeling tool.
- **moment.js**: A lightweight library for time formatting.

We express our gratitude to the developers of these technologies for their contributions to the open-source community.

## Conclusion

Chat Guard is committed to fostering safe and organized Discord communities. By implementing Chat Guard, server administrators can ensure a moderated, respectful, and engaging environment for all members.
