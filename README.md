
<div align="center">

<img alt="Chat Guard" src="docs/assets/logo.svg" height="80" />

### Automated Discord Moderation

*Enterprise-grade content filtering and community protection for Discord servers*

[![Documentation](https://img.shields.io/badge/Read%20the%20Docs-0b5fff?style=for-the-badge)](https://ichbinheimdall.github.io/chat-guard/)
[![GitHub](https://img.shields.io/badge/View%20on%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ichbinheimdall/chat-guard)

[![Build Status](https://github.com/ichbinheimdall/chat-guard/actions/workflows/docs.yml/badge.svg)](https://github.com/ichbinheimdall/chat-guard/actions/workflows/docs.yml)
[![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey)](./LICENSE)
[![Node](https://img.shields.io/badge/Node-%3E%3D16.9.0-339933)](https://nodejs.org/)
[![Issues](https://img.shields.io/github/issues/ichbinheimdall/chat-guard)](https://github.com/ichbinheimdall/chat-guard/issues)

</div>

---

## Overview

**Chat Guard** is a powerful, open-source Discord moderation bot designed for communities that demand reliability, transparency, and control. Built with business-grade architecture, it provides automated enforcement of community guidelines while maintaining full auditability through dedicated moderation logs.

Whether you're managing a small community or a large-scale server, Chat Guard scales with your needs—offering configurable protections, intelligent escalation policies, and comprehensive whitelisting capabilities.

## Key Features

<table>
<tr>
<td width="50%">

### 🛡️ Protection Layer
- **Bad Word Filtering** — Block offensive language with customizable word lists
- **Spam Prevention** — Rate-limit duplicate messages and rapid posting
- **Mass Mention Control** — Prevent @everyone/@here abuse and mass pings
- **Link & Invite Blocking** — Filter external links and Discord invites
- **Character Limits** — Enforce message length constraints

</td>
<td width="50%">

### ⚙️ Smart Configuration
- **Escalation Policy** — Warning → timed mute with configurable duration
- **Granular Whitelisting** — Exempt members, roles, or channels
- **Custom Filters** — Add server-specific banned terms
- **Dedicated Logging** — Track all moderation actions in real-time
- **Admin Controls** — Fine-tune each protection independently

</td>
</tr>
</table>

## Why Chat Guard?

| Benefit | Description |
|---------|-------------|
| **Business-Grade Reliability** | Consistent, automated enforcement reduces moderator workload and human error |
| **Full Transparency** | Dedicated moderation logs provide complete audit trails for accountability |
| **Configurable by Design** | Tune protections, escalation policies, and exemptions to match your community |
| **Self-Hosted & Private** | Deploy on your infrastructure with full control over data and configuration |
| **Enterprise Documentation** | Comprehensive guides covering architecture, security, compliance, and operations |

## Quick Start

### Prerequisites
- Node.js ≥16.9.0
- MongoDB instance
- Discord Bot Token

### Installation

```bash
# Clone the repository
git clone https://github.com/ichbinheimdall/chat-guard.git
cd chat-guard

# Install dependencies
npm install

# Configure your environment
# Edit src/config.js with:
#   - Discord bot token
#   - MongoDB connection URL
#   - Bot owner IDs

# Launch the bot
npm start
```

### First Steps

1. **Invite your bot** to your Discord server with Administrator permissions
2. **Set up logging** with `/logchannel #moderation-logs`
3. **Configure protections** — enable spam, bad words, link blocking via slash commands
4. **Whitelist trusted roles** — exempt moderators and admins from filters
5. **Monitor and tune** — review logs and adjust settings as needed

📖 **Detailed Setup**: [Getting Started Guide](docs/02-Getting-Started.md) · [Configuration Reference](docs/03-Configuration.md)

## Documentation

Comprehensive documentation is available at **[ichbinheimdall.github.io/chat-guard](https://ichbinheimdall.github.io/chat-guard/)**

### Quick Links
- 📘 [Architecture Overview](docs/04-Architecture.md) — System design and component interaction
- 🔧 [Commands Reference](docs/05-Commands.md) — Complete slash command catalog
- 🚀 [Deployment Guide](docs/08-Deployment.md) — Production deployment strategies
- 🔒 [Security & Compliance](docs/07-Security-Compliance.md) — Best practices and governance
- ❓ [FAQ](docs/10-FAQ.md) — Common questions and troubleshooting

## Use Cases

**Chat Guard** is trusted by:

- **Community Managers** — Automate repetitive moderation tasks, maintain consistent policy enforcement
- **Server Admins** — Reduce manual workload, provide 24/7 automated protection
- **Developers** — Deploy a secure, well-documented foundation for custom moderation workflows
- **Organizations** — Ensure compliance with transparent audit logs and configurable controls

## Security & Privacy

Chat Guard is committed to transparency and responsible data handling:

- ✅ **Open Source** — Review the complete codebase for security and compliance
- ✅ **Self-Hosted** — Your data stays on your infrastructure
- ✅ **Privacy by Design** — Minimal data collection, configurable retention policies
- ✅ **Audit-Ready** — Comprehensive logging for governance and compliance

📄 [Privacy Policy](docs/Privacy-Policy.md) · [Terms of Use](docs/Terms-of-Use.md) · [Security Policy](SECURITY.md)

## Technology Stack

- **Runtime**: Node.js (≥16.9.0)
- **Framework**: discord.js v14
- **Database**: MongoDB with Mongoose ODM
- **Architecture**: Event-driven command handling
- **Deployment**: PM2, Docker, Heroku, or bare Node.js

## Contributing

We welcome contributions! Please review our:

- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)

Open an [issue](https://github.com/ichbinheimdall/chat-guard/issues) to report bugs or request features.

## License

Chat Guard is licensed under **CC BY-NC-SA 4.0** with additional project-specific terms.

- ✅ **Free for non-commercial use**
- ✅ **Attribution required**
- ✅ **Share-alike** — Derivatives must use same license
- ❌ **No commercial use without permission**

See [LICENSE](./LICENSE) for full terms. For commercial licensing inquiries, contact **info@hmddevs.org**.

## Support

- 📖 **Documentation**: [ichbinheimdall.github.io/chat-guard](https://ichbinheimdall.github.io/chat-guard/)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/ichbinheimdall/chat-guard/issues)
- 💬 **Questions**: [GitHub Discussions](https://github.com/ichbinheimdall/chat-guard/discussions)
- 📧 **Email**: info@hmddevs.org

---

<div align="center">

### Acknowledgments

Chat Guard is based on work by [Klanter](https://github.com/klanter1337/Chat-Guard).

Made with ❤️ by [HMD Developments, Inc.](https://github.com/ichbinheimdall)

</div>

# Chat Guard

Automated, configurable moderation for Discord — by HMD Developments, Inc.
Keep your community safe and orderly with policy‑driven controls, transparent logs, and minimal moderator overhead.

## Why Chat Guard

- Business‑grade: consistent, automated enforcement that scales with your community.
- Proven protections: anti‑spam, mass‑mention control, link/invite filtering, bad‑word and custom filters.
- Transparent governance: dedicated moderation logs and auditable actions.
- Configurable by design: tune protections, mute durations, and whitelists.
- Enterprise‑ready: full documentation, Privacy & Terms, and Security guidance.

## Highlights

- Automated filtering: bad words, custom terms, links, and invites
- Anti‑spam and mass‑mention protection
- Warning → timed mute escalation (configurable duration)
- Whitelist by member, role, or channel
- Dedicated moderation logs

## Who It’s For

- Community owners who need reliable and safe automation
- Moderators seeking consistent enforcement with minimal friction
- Developers who want a secure, configurable foundation

## Quick Start

```bash
git clone https://github.com/ichbinheimdall/chat-guard.git
cd chat-guard
npm install
# edit src/config.js with your token & MongoDB URL
npm start
```

## Documentation

- Full Docs: https://ichbinheimdall.github.io/chat-guard/
- Quick Links: [Getting Started](docs/02-Getting-Started.md) · [Commands](docs/05-Commands.md) · [Deployment](docs/08-Deployment.md)

## Get Started

Chat Guard is open-source and designed for self-hosting. Clone the repository, configure your environment, and deploy your own instance:

```bash
git clone https://github.com/ichbinheimdall/chat-guard.git
cd chat-guard
npm install
# Configure src/config.js with your bot token and MongoDB URL
npm start
```

See [Getting Started](docs/02-Getting-Started.md) and [Deployment](docs/08-Deployment.md) for detailed instructions.

## Security & Privacy

- Non‑commercial license under CC BY‑NC‑SA 4.0 with additional terms. See [LICENSE](./LICENSE).
- Review our [Security & Compliance](docs/07-Security-Compliance.md), [Privacy Policy](docs/Privacy-Policy.md), and [Terms of Use](docs/Terms-of-Use.md).

Docs website: https://ichbinheimdall.github.io/chat-guard/

## License

Non‑commercial use under CC BY‑NC‑SA 4.0 with additional terms. See [LICENSE](./LICENSE).

## Support

Open an [issue](https://github.com/ichbinheimdall/chat-guard/issues) or contact: info@hmddevs.org

## Acknowledgments

This project is based on work by [Klanter](https://github.com/klanter1337/Chat-Guard).
