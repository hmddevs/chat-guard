# FAQ

## Is Chat Guard free to use?

Yes, under the Creative Commons Attribution‑NonCommercial‑ShareAlike 4.0 license with additional terms (see repository LICENSE). Commercial use requires separate arrangements with HMD Developments, Inc.

## What permissions does the bot need?

At minimum: Manage Messages, Moderate Members, Read/Send Messages. Manage Channels is recommended.

## Does it store user messages?

No. It stores only IDs and configuration necessary for operations. Some violation details may be echoed to a log channel.

## Why don’t my slash commands appear?

Global command registration may take several minutes. Ensure the bot is online and no REST errors are printed at startup.

## How does spam detection work?

By default, ≥7 messages from the same author in a rolling 5‑second window triggers spam mitigation when enabled.

## Can I customize the profanity list?

Yes. In addition to the built‑in list, use `/filter` to add or remove server‑specific terms.

## How do I exempt trusted users or channels?

Use `/whitelist add id:<id>` with a user, role, or channel ID. See [Commands](05-Commands.md) for details.

## Where can I get help?

Open an [issue on GitHub](https://github.com/ichbinheimdall/chat-guard/issues) or contact info@hmddevs.org for enterprise support.

[Back to Docs Index](README.md)
