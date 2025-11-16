
<p align="center">
  <img alt="Chat Guard" src="docs/assets/logo.svg" height="72" />
  <br/>
  <a href="https://github.com/ichbinheimdall/chat-guard/actions/workflows/docs.yml">
    <img alt="Docs" src="https://github.com/ichbinheimdall/chat-guard/actions/workflows/docs.yml/badge.svg" />
  </a>
  <a href="./LICENSE">
    <img alt="License" src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey" />
  </a>
  <a href="https://nodejs.org/">
    <img alt="Node" src="https://img.shields.io/badge/Node-%3E%3D16.9.0-339933" />
  </a>
  <a href="https://github.com/ichbinheimdall/chat-guard/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/ichbinheimdall/chat-guard" />
  </a>
</p>

# Chat Guard

Automated, configurable moderation for Discord — by HMD Developments, Inc. Block spam, invites, links, and bad words; rate-limit mass mentions; escalate from warnings to timed mutes; and keep everything auditable with dedicated moderation logs.

## Why Chat Guard

- Business‑grade moderation: consistent, automated enforcement reduces manual workload.
- Proven protections: anti‑spam, mass‑mention control, link/invite filtering, bad‑word and custom filters.
- Transparent governance: dedicated moderation logs and auditable actions.
- Configurable by design: tune protections, mute durations, and whitelists to your community.
- Enterprise‑ready docs: Privacy, Terms, Security & Compliance, and operational playbooks.

## Highlights

- Automated filtering: bad words, custom terms, links, and invites
- Anti‑spam and mass‑mention protection
- Warning → mute escalation with configurable durations
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

- [Docs Website](https://ichbinheimdall.github.io/chat-guard/)
- [Getting Started](docs/02-Getting-Started.md)
- [Configuration](docs/03-Configuration.md)
- [Architecture](docs/04-Architecture.md)
- [Commands & Usage](docs/05-Commands.md)
- [Data Model](docs/06-Data-Model.md)
- [Security & Compliance](docs/07-Security-Compliance.md)
- [Deployment](docs/08-Deployment.md)
- [Operations](docs/09-Operations.md)
- [FAQ](docs/10-FAQ.md)
- [Privacy Policy](docs/Privacy-Policy.md)
- [Terms of Use](docs/Terms-of-Use.md)

## Get Chat Guard

- Invite the bot: https://discord.com/oauth2/authorize?client_id=870967982522777601&permissions=8&scope=bot%20applications.commands
- Join support server: https://discord.com/invite/b8e2EKJpry
- Vote on top.gg: https://top.gg/bot/870967982522777601/vote

## Security & Privacy

- Non‑commercial license under CC BY‑NC‑SA 4.0 with additional terms. See [LICENSE](./LICENSE).
- Review our [Security & Compliance](docs/07-Security-Compliance.md), [Privacy Policy](docs/Privacy-Policy.md), and [Terms of Use](docs/Terms-of-Use.md).

Docs website: https://ichbinheimdall.github.io/chat-guard/

## License

Non‑commercial use under CC BY‑NC‑SA 4.0 with additional terms. See [LICENSE](./LICENSE).

## Support

Open an [issue](https://github.com/ichbinheimdall/chat-guard/issues) or contact: info@hmddevs.org

This project is based on work by [Klanter](https://github.com/klanter1337/Chat-Guard).
