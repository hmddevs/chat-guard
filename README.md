
<p align="center">
  <img alt="Chat Guard" src="https://img.shields.io/badge/Chat%20Guard-Moderation%20Bot-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
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
  
</p>

# Chat Guard

Configurable Discord moderation by HMD Developments, Inc. Automate message filtering, spam/invite/link blocking, mute escalation, and transparent logging — so your community stays safe and organized.

## Why Chat Guard

- Business‑grade moderation: enforce clear rules consistently and reduce manual workload.
- Proven protections: anti‑spam, mass‑mention controls, link/invite filtering, and word/term filtering.
- Transparent governance: dedicated moderation logs and auditable actions.
- Configurable by design: tune protections, mute durations, and whitelists to your community.
- Enterprise‑friendly: clear Privacy & Terms, Security guidance, and full docs.

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

Docs website (optional): will publish to GitHub Pages via the provided workflow once Pages is enabled.

## License

Non‑commercial use under CC BY‑NC‑SA 4.0 with additional terms. See `LICENSE`.

## Support

Open an issue or contact: info@hmddevs.org

This project is based on work by [Klanter](https://github.com/klanter1337/Chat-Guard).
