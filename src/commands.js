const client = global.client;
const db = require('./db');
const config = require('./config');
const { EmbedBuilder, InteractionType, PermissionsBitField, ChannelType } = require('discord.js');
const moment = require("moment"); require("moment-duration-format"); moment.locale("tr");

client.on('interactionCreate', async interaction => {
if(interaction.type !== InteractionType.ApplicationCommand) return;
const embed = new EmbedBuilder().setColor("#5865F2").setTimestamp().setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true })});

if (interaction.commandName === 'commands') {
    interaction.reply({
        embeds: [new EmbedBuilder()
            .setColor("#5865F2")
            .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
            .setTitle('🎱 Chat Guard - Command List')
            .setFooter({ text: `Requested by ${interaction.member.user.tag}.` })
            .setTimestamp()
            .setDescription(`
💯 For help: \`/help\`.
💯 To view server's settings: \`/settings\`

🕸️ ⚙️ **Settings:**
→ For whitelist: \`/whitelist [add/remove] [user/role/channel](mention/id)\`
→ For filter: \`/filter [add/remove] [word]\`
→ To set mute duration: \`/muteduration [number] [Enter duration in minutes]\`
→ To set log channel: \`/logchannel #channel [mention/id]\`

🕸️ ⚙️ **Protections:**
→ To unmute: \`/unmute @user [mention/id]\`
→ For mass character limit: \`/characterlimit [enable/disable]\`
→ For invite block: \`/inviteblock [enable/disable]\`
→ For link block: \`/linkblock [enable/disable]\`
→ For mass-mention block: \`/massmentionblock [enable/disable]\`
→ For bad word block: \`/badwordblock [enable/disable]\`
→ For spam block: \`/spamblock [enable/disable]\`

🕸️ ⚙️ **About the Bot:**
🌹 Open-source moderation bot by HMD Developments, Inc.
🌹 Documentation: https://ichbinheimdall.github.io/chat-guard/
🌹 Repository: https://github.com/ichbinheimdall/chat-guard
`)],
        ephemeral: true
    }).catch(() => {});
};
if(interaction.commandName === 'privacy') {
    interaction.reply({ embeds: [new EmbedBuilder()
    .setColor("#5865F2")
    .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true })})
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .setDescription(`
🌹 [Click for Privacy Policy!](https://github.com/ichbinheimdall/chat-guard/blob/main/docs/Privacy-Policy.md)  
🌹 [Click for Terms of Use!](https://github.com/ichbinheimdall/chat-guard/blob/main/docs/Terms-of-Use.md)
`)]});
}; 
if (interaction.commandName === 'invite') {
    interaction.reply({
        embeds: [new EmbedBuilder()
            .setColor("#5865F2")
            .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
🌹 **Chat Guard** is open-source moderation software for Discord.
🌹 [View Documentation](https://ichbinheimdall.github.io/chat-guard/)
🌹 [GitHub Repository](https://github.com/ichbinheimdall/chat-guard)
🌹 [Report Issues](https://github.com/ichbinheimdall/chat-guard/issues)
`)]
    });
};
if (interaction.commandName === 'info') {
    if (!config.BotOwners.includes(interaction.member.id)) return interaction.reply({ content: `❌ This command is exclusive to the developer.`, ephemeral: true });
    interaction.reply({
        embeds: [new EmbedBuilder()
            .setColor("#5865F2")
            .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
🌹 Serving **${client.guilds.cache.size.toLocaleString()}** servers.
🌹 Serving **${client.guilds.cache.reduce((acc, currentValue) => acc + currentValue.memberCount, 0)}** users.
🌹 Ping: **${client.ws.ping}**
🌹 Active for **${moment.duration(client.uptime).format(" D [days], H [hours], m [minutes], s [seconds]")}**.
`)]
    });
};

if (interaction.commandName === 'settings') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }

    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if (Database) {
        interaction.reply({
            embeds: [new EmbedBuilder()
                .setColor("#5865F2")
                .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setDescription(`
⚙️ **Protections:**
→ **Character Limit:** ${Database.CharacterLimit ? '1' : '0'}
→ **Invite Block:** ${Database.InviteGuard ? '1' : '0'}
→ **Link Block:** ${Database.LinkGuard ? '1' : '0'}
→ **Mass Ping Block:** ${Database.MassPingGuard ? '1' : '0'}
→ **Badword Block:** ${Database.BadWordGuard ? '1' : '0'}
→ **Spam Block:** ${Database.SpamGuard ? '1' : '0'}

⚙️ **Whitelist:**
→ Whitelisted members: ${Database.WhiteListMembers ? Database.WhiteListMembers.map(id => `<@${id}>`).join('\n') : 'No members in the whitelist.'}
→ Whitelisted roles: ${Database.WhiteListRoles ? Database.WhiteListRoles.map(id => `<@&${id}>`).join('\n') : 'No roles in the whitelist.'}
→ Whitelisted channels: ${Database.WhiteListChannels ? Database.WhiteListChannels.map(id => `<#${id}>`).join('\n') : 'No channels in the whitelist.'}

⚙️ **Settings:**
→ **Filtered Words**: ${Database.FiltredWords ? Database.FiltredWords.join() : 'No words in the filter.'}
→ **Mute Duration**: ${Database.MuteDurationMinute ? `${Database.MuteDurationMinute} minutes.` : '60'}
→ **Log Channel**: ${Database.PunishLogChannelID ? `<#${Database.PunishLogChannelID}>` : 'Log channel not set.'}

🌹 To see commands and their usage, type \`/commands\`.
🌹 Documentation: https://ichbinheimdall.github.io/chat-guard/
`)]
        }).catch(() => {});
    }

    if (!Database) {
        interaction.reply({
            embeds: [new EmbedBuilder()
                .setColor("#5865F2")
                .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setDescription(`
⚙️ **Settings:**
→ **Character Limit:** 0
→ **Invite Protection:** 0
→ **Link Protection:** 0
→ **Mass Ping Protection:** 0
→ **Badword Protection:** 0
→ **Spam Protection:** 0

⚙️ **Whitelist:**
→ Whitelisted members: **No members in the whitelist.**
→ Whitelisted roles: **No roles in the whitelist.**
→ Whitelisted channels: **No channels in the whitelist.**

🌹 To see commands and their usage, type \`/commands\`.
🌹 Documentation: https://ichbinheimdall.github.io/chat-guard/
`)]
        });
    }
}
if (interaction.commandName === 'logchannel') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const channel = interaction.options?.getChannel('channel');
    if (channel.type !== ChannelType.GuildText) {
        return interaction.reply({ embeds: [embed.setDescription('❌ **You must specify a text channel.**')] }).catch(() => {});
    }
    await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $set: { PunishLogChannelID: channel.id } });
    return interaction.reply({ embeds: [embed.setDescription(`✅ Successfully set **<#${channel.id}>** as the log channel.`)] }).catch(() => {});
}
if (interaction.commandName === 'muteduration') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const duration = interaction.options?.getNumber('time');
    await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $set: { MuteDurationMinute: duration } });
    return interaction.reply({ embeds: [embed.setDescription(`✅ Successfully set mute duration to **${duration}** minutes.`)] }).catch(() => {});
}
if (interaction.commandName === 'filter') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const choice = interaction.options?.getString('options');
    const word = interaction.options?.getString('word');

    if (choice === 'add') {
        const Database = await db.findOne({ ServerID: interaction.guild.id });
        if (Database && Database.FiltredWords.includes(word)) {
            return interaction.reply({ embeds: [embed.setDescription(`**${word}** is already in the filter.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $push: { FiltredWords: word } }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ **${word}** has been successfully added to the filter.`)] }).catch(() => {});
    }

    if (choice === 'remove') {
        const Database = await db.findOne({ ServerID: interaction.guild.id });
        if (!Database || !Database.FiltredWords.includes(word)) {
            return interaction.reply({ embeds: [embed.setDescription(`**${word}** is not in the filter.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { FiltredWords: word } });
        return interaction.reply({ embeds: [embed.setDescription(`✅ **${word}** has been successfully removed from the filter.`)] }).catch(() => {});
    }
}
if (interaction.commandName === 'whitelist') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const choice = interaction.options?.getString('options');
    const id = interaction.options?.getString('id');

    if (choice === 'add') {
        const member = interaction.guild.members.cache.get(id);
        const role = interaction.guild.roles.cache.get(id);
        const channel = interaction.guild.channels.cache.get(id);
        if (!member && !role && !channel) {
            return interaction.reply({ embeds: [embed.setDescription('❌ Example usage: **/whitelist add/remove id (role/channel/user)**')] }).catch(() => {});
        }

        if (member) {
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (Database && Database.WhiteListMembers.includes(member.user.id)) {
                return interaction.reply({ embeds: [embed.setDescription(`**<@${member.user.id}>** is already in the whitelist.`)] }).catch(() => {});
            }
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $push: { WhiteListMembers: member.user.id } }, { upsert: true });
            return interaction.reply({ embeds: [embed.setDescription(`✅ **<@${member.user.id}>** has been successfully added to the whitelist.`)] });
        }

        if (role) {
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (Database && Database.WhiteListRoles.includes(role.id)) {
                return interaction.reply({ embeds: [embed.setDescription(`**<@&${role.id}>** is already in the whitelist.`)] }).catch(() => {});
            }
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $push: { WhiteListRoles: role.id } }, { upsert: true });
            return interaction.reply({ embeds: [embed.setDescription(`✅ **<@&${role.id}>** has been successfully added to the whitelist.`)] });
        }

        if (channel) {
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (Database && Database.WhiteListChannels.includes(channel.id)) {
                return interaction.reply({ embeds: [embed.setDescription(`**<#${channel.id}>** is already in the whitelist.`)] }).catch(() => {});
            }
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $push: { WhiteListChannels: channel.id } }, { upsert: true });
            return interaction.reply({ embeds: [embed.setDescription(`✅ **<#${channel.id}>** has been successfully added to the whitelist.`)] }).catch(() => {});
        }
    }

    if (choice === 'remove') {
        const member = interaction.guild.members.cache.get(id);
        const role = interaction.guild.roles.cache.get(id);
        const channel = interaction.guild.channels.cache.get(id);
        if (!member && !role && !channel) {
            return interaction.reply({ embeds: [embed.setDescription('❌ Example usage: **/whitelist add/remove id/mention (role/channel/user)**')] }).catch(() => {});
        }

        if (member) {
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (!Database || !Database.WhiteListMembers.includes(member.user.id)) {
                return interaction.reply({ embeds: [embed.setDescription(`**<@${member.user.id}>** is not in the whitelist.`)] }).catch(() => {});
            }
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { WhiteListMembers: member.user.id } });
            return interaction.reply({ embeds: [embed.setDescription(`✅ **<@${member.user.id}>** has been successfully removed from the whitelist.`)] }).catch(() => {});
        }

        if (role) {
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (!Database || !Database.WhiteListRoles.includes(role.id)) {
                return interaction.reply({ embeds: [embed.setDescription(`**<@&${role.id}>** is not in the whitelist.`)] }).catch(() => {});
            }
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { WhiteListRoles: role.id } });
            return interaction.reply({ embeds: [embed.setDescription(`✅ **<@&${role.id}>** has been successfully removed from the whitelist.`)] });
        }

        if (channel) {
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (!Database || !Database.WhiteListChannels.includes(channel.id)) {
                return interaction.reply({ embeds: [embed.setDescription(`**<#${channel.id}>** is not in the whitelist.`)] });
            }
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { WhiteListChannels: channel.id } });
            return interaction.reply({ embeds: [embed.setDescription(`✅ **<#${channel.id}>** has been successfully removed from the whitelist.`)] }).catch(() => {});
        }
    }
}
if (interaction.commandName === 'characterlimit') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const choice = interaction.options?.getString('options');

    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if (choice === 'enable') {
        if (Database && Database.CharacterLimit === true) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already enabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { CharacterLimit: true }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Character Limit** has been successfully enabled.`)] }).catch(() => {});
    }

    if (choice === 'disable') {
        if (!Database || Database.CharacterLimit === false) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already disabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { CharacterLimit: false }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Character Limit** has been successfully disabled.`)] }).catch(() => {});
    }
}

if (interaction.commandName === 'inviteblock') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const choice = interaction.options?.getString('options');

    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if (choice === 'enable') {
        if (Database && Database.InviteGuard === true) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already enabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { InviteGuard: true }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Invite protection** has been successfully enabled.`)] }).catch(() => {});
    }
    if (choice === 'disable') {
        if (!Database || Database.InviteGuard === false) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already disabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { InviteGuard: false }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Invite protection** has been successfully disabled.`)] }).catch(() => {});
    }
}
if (interaction.commandName === 'linkblock') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const choice = interaction.options?.getString('options');

    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if (choice === 'enable') {
        if (Database && Database.LinkGuard === true) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already enabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { LinkGuard: true }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Link protection** has been successfully enabled.`)] }).catch(() => {});
    }
    if (choice === 'disable') {
        if (!Database || Database.LinkGuard === false) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already disabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { LinkGuard: false }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Link protection** has been successfully disabled.`)] }).catch(() => {});
    }
}
if (interaction.commandName === 'massmentionblock') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const choice = interaction.options?.getString('options');

    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if (choice === 'enable') {
        if (Database && Database.MassPingGuard === true) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already enabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { MassPingGuard: true }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Mention protection** has been successfully enabled.`)] }).catch(() => {});
    }
    if (choice === 'disable') {
        if (!Database || Database.MassPingGuard === false) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already disabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { MassPingGuard: false }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Mention protection** has been successfully disabled.`)] }).catch(() => {});
    }
}
if (interaction.commandName === 'badwordblock') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const choice = interaction.options?.getString('options');

    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if (choice === 'enable') {
        if (Database && Database.BadWordGuard === true) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already enabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { BadWordGuard: true }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Badword protection** has been successfully enabled.`)] }).catch(() => {});
    }
    if (choice === 'disable') {
        if (!Database || Database.BadWordGuard === false) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already disabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { BadWordGuard: false }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Badword protection** has been successfully disabled.`)] }).catch(() => {});
    }
}
if (interaction.commandName === 'spamblock') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const choice = interaction.options?.getString('options');

    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if (choice === 'enable') {
        if (Database && Database.SpamGuard === true) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already enabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { SpamGuard: true }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Spam protection** has been successfully enabled.`)] }).catch(() => {});
    }
    if (choice === 'disable') {
        if (!Database || Database.SpamGuard === false) {
            return interaction.reply({ embeds: [embed.setDescription(`<@${interaction.member.id}>, This protection is already disabled.`)] }).catch(() => {});
        }
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { SpamGuard: false }, { upsert: true });
        return interaction.reply({ embeds: [embed.setDescription(`✅ <@${interaction.member.id}>, **Spam protection** has been successfully disabled.`)] }).catch(() => {});
    }
}
if (interaction.commandName === 'unmute') {
    if (!config.BotOwners.includes(interaction.member.id) && !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: `❌ You need to be an administrator to use settings commands.`, ephemeral: true });
    }
    const member = interaction.options?.getMember('member');
    if (!member) {
        return interaction.reply({ embeds: [embed.setDescription('❌ Example usage: **/removepenalty @user/user id**')] }).catch(() => {});
    }
    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if (!Database) {
        return interaction.reply({ embeds: [embed.setDescription(`**<@${member.user.id}>** has no penalties.`)] }).catch(() => {});
    }

    if (Database.BlueListMembers.includes(member.user.id)) {
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { BlueListMembers: member.user.id } });
        return interaction.reply({ embeds: [embed.setDescription(`✅ **<@${member.user.id}>**'s warning has been successfully removed.`)] }).catch(() => {});
    }
    if (Database.BlackListMembers.includes(member.user.id)) {
        await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { BlackListMembers: member.user.id } });
        await member.timeout(1000, `Authorized by: ${interaction.member.user.tag}`).catch(() => {});
        return interaction.reply({ embeds: [embed.setDescription(`✅ **<@${member.user.id}>**'s mute has been successfully removed.`)] }).catch(() => {});
    }
    if (!Database.BlueListMembers.includes(member.user.id) && !Database.BlackListMembers.includes(member.user.id)) {
        return interaction.reply({ embeds: [embed.setDescription(`**<@${member.user.id}>** has no penalties.`)] }).catch(() => {});
    }
}
});
