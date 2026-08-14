<div align="center">

<img alt="Chat Guard" src="docs/assets/logo.svg" height="80" />

### Automated Discord Moderation

Configurable content filtering and community protection for Discord servers.

[![Documentation](https://img.shields.io/badge/Read%20the%20Docs-0b5fff?style=for-the-badge)](https://hmddevs.github.io/chat-guard/)
[![GitHub](https://img.shields.io/badge/View%20on%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hmddevs/chat-guard)

[![Build Status](https://github.com/hmddevs/chat-guard/actions/workflows/docs.yml/badge.svg)](https://github.com/hmddevs/chat-guard/actions/workflows/docs.yml)
[![Licence](https://img.shields.io/badge/Licence-CC%20BY--NC--SA%204.0-lightgrey)](./LICENSE)
[![Node](https://img.shields.io/badge/Node-%3E%3D16.9.0-339933)](https://nodejs.org/)
[![Issues](https://img.shields.io/github/issues/hmddevs/chat-guard)](https://github.com/hmddevs/chat-guard/issues)

</div>

---

## Overview

Chat Guard is an open-source Discord moderation bot built for communities that need reliable, automated enforcement. It provides configurable protections, escalation policies, whitelisting, and auditable moderation logs.

## Features

- **Bad word filtering** with customisable word lists and server-specific terms
- **Spam prevention** for duplicate messages and rapid posting
- **Mass mention control** to prevent @everyone/@here abuse
- **Link and invite blocking** for external URLs and Discord invites
- **Character limits** to enforce message length constraints
- **Escalation policy** from warning to timed mute with configurable duration
- **Granular whitelisting** by member, role, or channel
- **Dedicated logging** of all moderation actions in real time

## Quick Start

### Prerequisites

- Node.js 16.9.0 or later
- MongoDB instance
- Discord bot token

### Installation

```bash
git clone https://github.com/hmddevs/chat-guard.git
cd chat-guard
npm install
```

Copy `.env.example` to `.env` and set your Discord bot token, MongoDB connection URL, and bot owner IDs, then start the bot:

```bash
npm start
```

### First Steps

1. Invite the bot to your Discord server with Administrator permissions.
2. Set up logging with `/logchannel #moderation-logs`.
3. Enable protections: spam, bad words, link blocking via slash commands.
4. Whitelist trusted roles to exempt moderators and admins from filters.
5. Review logs and adjust settings as needed.

See the [Getting Started Guide](docs/02-Getting-Started.md) and [Configuration Reference](docs/03-Configuration.md) for details.

## Documentation

Full documentation is available at [hmddevs.github.io/chat-guard](https://hmddevs.github.io/chat-guard/).

- [Architecture Overview](docs/04-Architecture.md)
- [Commands Reference](docs/05-Commands.md)
- [Deployment Guide](docs/08-Deployment.md)
- [Security and Compliance](docs/07-Security-Compliance.md)
- [FAQ](docs/10-FAQ.md)

## Technology

- **Runtime**: Node.js (16.9.0+)
- **Framework**: discord.js v14
- **Database**: MongoDB with Mongoose ODM
- **Architecture**: Event-driven command handling
- **Deployment**: PM2, Docker, Heroku, or bare Node.js

## Contributing

Contributions are welcome. Please review the [Contributing Guidelines](CONTRIBUTING.md), [Code of Conduct](CODE_OF_CONDUCT.md), and [Security Policy](SECURITY.md) before opening a pull request.

File bugs or feature requests via [GitHub Issues](https://github.com/hmddevs/chat-guard/issues).

## Licence

CC BY-NC-SA 4.0 with additional project-specific terms. See [LICENSE](./LICENSE) for full details.

- Free for non-commercial use
- Attribution required
- Derivatives must use the same licence
- Commercial use requires permission

For commercial licensing enquiries, contact info@hmddevs.org.

## Support

- **Documentation**: [hmddevs.github.io/chat-guard](https://hmddevs.github.io/chat-guard/)
- **Bug reports**: [GitHub Issues](https://github.com/hmddevs/chat-guard/issues)
- **Questions**: [GitHub Discussions](https://github.com/hmddevs/chat-guard/discussions)
- **Email**: info@hmddevs.org

---

<div align="center">

Chat Guard is based on work by [Klanter](https://github.com/klanter1337/Chat-Guard).

Built by [HMD Developments](https://github.com/hmddevs).

</div>
