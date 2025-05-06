const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const client = global.client;
const process = global.process;
const db = require('./db');
const { Spam, RandomColor, BadWord, WhiteList, Punish } = require('./functionz');

client.on('messageCreate', async (message) => {
   if(!message.guild || message.author.bot || message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return;
    const Database = await db.findOne({ ServerID: message.guild.id });
    if(!Database || await WhiteList(message) === true) return;
    const embed = new EmbedBuilder().setColor(RandomColor()).setTimestamp().setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true })});
    if(message.content.length > '500') { 
        if(Database.CharacterLimit === false || Database.CharacterLimit === null || !Database.CharacterLimit) return;
        if (message && message.deletable) message.delete().catch(() => {});
        return await Punish(message, 'CharacterLimit', embed);
    }
    if(message.mentions.users.size >= 5) { 
        if(Database.MassPingGuard === false || Database.MassPingGuard === null || !Database.MassPingGuard) return;
        if (message && message.deletable) message.delete().catch(() => {});
        return await Punish(message, 'MassPingGuard', embed);
    }

    if(await Spam(message) === true ) {
        if(Database.SpamGuard === false || Database.SpamGuard === null || !Database.SpamGuard) return;
        if (message && message.deletable) message.delete().catch(() => {});
        return await Punish(message, 'SpamGuard', embed);
    }
    
    let InviteGuardReg = /(https:\/\/)?(www\.)?(discord\.gg|discord\.me|discordapp\.com\/invite|discord\.com\/invite)\/([a-z0-9-.]+)?/i;  
    if (InviteGuardReg.test(message.content)){
        if(Database.InviteGuard === false || Database.InviteGuard === null || !Database.InviteGuard) return;
       if(message.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.Flags.ManageGuild)) {
        const invites = await message.guild.invites.fetch();
        if((message.guild.vanityURLCode && message.content.match(InviteGuardReg).some((i) => i === message.guild.vanityURLCode)) || invites.some((x) => message.content.match(InviteGuardReg).some((i) => i === x.code))) return;
    };
       if(message && message.deletable) message.delete()
       return await Punish(message, 'InviteGuard', embed);
    };
    let LinkGuardReg = /(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi;
    if (LinkGuardReg.test(message.content)){
        if(Database.LinkGuard === false || Database.LinkGuard === null || !Database.LinkGuard) return;
        if (message && message.deletable) message.delete().catch(() => {});
        return message.channel.send({ embeds: [embed.setDescription('❌ <@'+message.author.id+'>, You are not allowed to use messages containing links!')]})
        .then(x => setTimeout(() => x.delete().catch(() => {}), 5000)).catch(() => {});
    }
    if(BadWord(message.content) === true) { 
        if(Database.BadWordGuard === false || Database.BadWordGuard === null || !Database.BadWordGuard) return;
        if (message && message.deletable) message.delete().catch(() => {});
        return message.channel.send({ embeds: [embed.setDescription('❌ <@'+message.author.id+'>, You are not allowed to use messages containing bad words!')]})
        .then(x => setTimeout(() => x.delete().catch(() => {}), 5000)).catch(() => {});

    }
    if (Database && Database.FiltredWords.some(Word => ` ${message.content.toLowerCase()} `.includes(` ${Word} `)) === true) {
     if (message && message.deletable) message.delete().catch(() => {});
     return message.channel.send({ embeds: [embed.setDescription('❌ <@'+message.author.id+'>, You are not allowed to use messages containing filtered words!')]})
     .then(x => setTimeout(() => x.delete().catch(() => {}), 5000)).catch(() => {});
    }
});

client.on('messageUpdate', async (oldMessage, newMessage) => {
    if(!newMessage.guild || newMessage.author.bot || newMessage.member.permissions.has(PermissionsBitField.Flags.Administrator)) return;
     const Database = await db.findOne({ ServerID: newMessage.guild.id });
     if(!Database || await WhiteList(newMessage) === true) return;
     const embed = new EmbedBuilder().setColor(RandomColor()).setTimestamp().setAuthor({ name: newMessage.guild.name, iconURL: newMessage.guild.iconURL({ dynamic: true })});
 
     if(newMessage.content.length > '500') { 
         if(Database.CharacterLimit === false || Database.CharacterLimit === null || !Database.CharacterLimit) return;
         if (newMessage && newMessage.deletable) newMessage.delete().catch(() => {});
         return await Punish(newMessage, 'CharacterLimit', embed);
     }

     let InviteGuardReg = /(https:\/\/)?(www\.)?(discord\.gg|discord\.me|discordapp\.com\/invite|discord\.com\/invite)\/([a-z0-9-.]+)?/i;  
     if (InviteGuardReg.test(newMessage.content)){
         if(Database.InviteGuard === false || Database.InviteGuard === null || !Database.InviteGuard) return;
        if(newMessage.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.Flags.ManageGuild)) {
         const invites = await newMessage.guild.invites.fetch();
         if((newMessage.guild.vanityURLCode && newMessage.content.match(InviteGuardReg).some((i) => i === newMessage.guild.vanityURLCode)) || invites.some((x) => newMessage.content.match(InviteGuardReg).some((i) => i === x.code))) return;
     };
        if(newMessage && newMessage.deletable) newMessage.delete()
        return await Punish(newMessage, 'InviteGuard', embed);
     };
     if (/(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi.test(newMessage.content)){
         if(Database.LinkGuard === false || Database.LinkGuard === null || !Database.LinkGuard) return;
         if (newMessage && newMessage.deletable) newMessage.delete().catch(() => {});
         return newMessage.channel.send({ embeds: [embed.setDescription('❌ <@'+newMessage.author.id+'>, You are not allowed to use messages containing links!')] })
         .then(x => setTimeout(() => x.delete().catch(() => {}), 5000)).catch(() => {});
     }
     if(BadWord(newMessage.content) === true) { 
         if(Database.BadWordGuard === false || Database.BadWordGuard === null || !Database.BadWordGuard) return;
         if (newMessage && newMessage.deletable) newMessage.delete().catch(() => {});
         return newMessage.channel.send({ embeds: [embed.setDescription('❌ <@'+newMessage.author.id+'>, You are not allowed to use messages containing bad words!')] })
         .then(x => setTimeout(() => x.delete().catch(() => {}), 5000)).catch(() => {});
     }
    
   if(Database && Database.FiltredWords.some(Word => ` ${newMessage.content.toLowerCase()} `.includes(` ${Word} `)) === true) {
    if(newMessage && newMessage.deletable) newMessage.delete().catch(() => {});
    return newMessage.channel.send({ embeds: [embed.setDescription('❌ <@'+newMessage.author.id+'>, You are not allowed to use messages containing filtered words!')] })
    .then(x => setTimeout(() => x.delete().catch(() => {}), 5000)).catch(() => {});
    }
 });
 
client.on('disconnect', () => console.log('Connection to Discord API has been lost.'));
client.on('reconnecting', () => console.log('Reconnecting to Discord API...'));
client.on('error', (error) => console.log(error));
client.on('warn', (warn) => console.log(warn));
process.on('unhandledRejection', (error) => console.log(error));
process.on('uncaughtException', (error) =>  console.log(error) );

