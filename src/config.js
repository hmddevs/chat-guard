/**
 * Bot Configuration
 *
 * Values are read from environment variables. Set them in your shell, your
 * process manager, or your host's environment settings. See .env.example for
 * the full list.
 *
 * Do not put real tokens in this file: it is tracked by git, so anything
 * written here can be committed and published by accident.
 */

const required = ["DISCORD_BOT_TOKEN", "MONGODB_URI"];
const missing = required.filter((name) => !process.env[name]);

if (missing.length > 0) {
	throw new Error(
		`Missing required environment variable(s): ${missing.join(", ")}. ` +
			"See .env.example for the full list.",
	);
}

const owners = (process.env.BOT_OWNERS || "")
	.split(",")
	.map((id) => id.trim())
	.filter(Boolean);

module.exports = {
	// Discord bot token, from the Discord developer portal
	Client_Token: process.env.DISCORD_BOT_TOKEN,

	// MongoDB connection string
	MongoDB_ConnectURL: process.env.MONGODB_URI,

	// Discord user IDs who are bot owners, comma-separated in BOT_OWNERS
	BotOwners: owners,

	// The status message displayed by the bot
	BotStatus: process.env.BOT_STATUS || "Bot is online!",
};
