# Operations & Monitoring

This guide describes day‑to‑day operations, health checks, and troubleshooting.

## Health & Status

- On startup, console should log successful Discord and MongoDB connections.
- Use `/info` (BotOwners) to check bot uptime, ping, and reach.

## Routine Checks

- Verify the bot has required permissions in target channels.
- Review `/settings` periodically to ensure policies match server rules.
- Confirm `PunishLogChannelID` is set and accessible.

## Troubleshooting

- Bot not responding:
  - Check token validity and intents in the Developer Portal.
  - Ensure `GatewayIntentBits.MessageContent` is enabled where required.
  - Confirm MongoDB connectivity.
- Commands missing:
  - Wait for global command registration to propagate (can take minutes).
  - Restart once after deployment; ensure no REST errors are printed.
- Cannot mute users:
  - Confirm the bot role is above target roles and has Moderate Members.
  - Verify guild allows timeouts.
- Logs not appearing:
  - Ensure `PunishLogChannelID` points to a text channel the bot can write to.

## Policy Tuning

- Start with: Invite, Link, and Spam protections enabled.
- Add community‑specific `FiltredWords` based on moderation learnings.
- Set mute duration proportional to violation severity and community tolerance.

## Backup & Recovery

- Backup MongoDB regularly; retain per your governance policy.
- If the process restarts, temporary BlueList/BlackList caches may reset; policy toggles persist in DB.
