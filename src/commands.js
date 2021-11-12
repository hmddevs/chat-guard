const client = global.client;
const db = require('./db');
const config = require('./config');
const { MessageEmbed } = require('discord.js');
const { RandomColor } = require('./functionz');
const moment = require("moment")
require("moment-duration-format")
moment.locale("tr")

client.on('message', async message => {
    if(!message.guild || message.author.bot) return;
    if(!message.content.startsWith(config.Prefix)) return;
    let args = message.content.split(' ').slice(1);
    let command = message.content.split(' ')[0].slice(config.Prefix.length);
    if(!command) return;
    const embed = new MessageEmbed().setColor("#5865F2").setTimestamp().setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }));


    if(command.toLowerCase() === 'davet') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<a:holo:812402157278068746> [Botu sunucuna eklemek için tıkla!](https://discord.com/oauth2/authorize?client_id=870967982522777601&permissions=8&scope=bot%20applications.commands)
<a:holo:812402157278068746> [Destek sunucusuna katılmak için tıkla!](https://discord.com/invite/d44zqCemN3)
<a:holo:812402157278068746> [Bota oy vererek destek olmak için tıkla!](https://top.gg/bot/870967982522777601/vote)
        `))
    } 

    if(command.toLowerCase() === 'destek') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<a:holo:812402157278068746> [Botu sunucuna eklemek için tıkla!](https://discord.com/oauth2/authorize?client_id=870967982522777601&permissions=8&scope=bot%20applications.commands)
<a:holo:812402157278068746> [Destek sunucusuna katılmak için tıkla!](https://discord.com/invite/d44zqCemN3)
<a:holo:812402157278068746> [Bota oy vererek destek olmak için tıkla!](https://top.gg/bot/870967982522777601/vote)
        `))
    } 

    if(command.toLowerCase() === 'oy') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<a:holo:812402157278068746> [Botu sunucuna eklemek için tıkla!](https://discord.com/oauth2/authorize?client_id=870967982522777601&permissions=8&scope=bot%20applications.commands)
<a:holo:812402157278068746> [Destek sunucusuna katılmak için tıkla!](https://discord.com/invite/d44zqCemN3)
<a:holo:812402157278068746> [Bota oy vererek destek olmak için tıkla!](https://top.gg/bot/870967982522777601/vote)
        `))
    } 

    if(command.toLowerCase() === 'info') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:811921646507261963> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<a:holo:812402157278068746> **${client.guilds.cache.size.toLocaleString()}** sunucuya hizmet veriyorum.
<a:holo:812402157278068746> **${client.guilds.cache.reduce((acc, currentValue) => acc + currentValue.memberCount, 0)}** kullanıcıya hizmet veriyorum.
<a:holo:812402157278068746> Pingim: **${client.ws.ping}**
<a:holo:812402157278068746> **${moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")}** dir aktifim.
        `))
    } 


    if(command.toLowerCase() === 'serverstatus') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        const Database = await db.findOne({ ServerID: message.guild.id });
        if(Database) {

            message.channel.send(new MessageEmbed()
                .setColor("#5865F2")
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setDescription(`
__**Sistemler:**__
<a:holo:812402157278068746> **Character Limit:** ${Database.CharacterLimit ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<a:holo:812402157278068746> **Invite Guard:** ${Database.InviteGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<a:holo:812402157278068746> **Link Guard:** ${Database.LinkGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<a:holo:812402157278068746> **MassPing Guard:** ${Database.MassPingGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<a:holo:812402157278068746> **BadWord Guard:** ${Database.BadWordGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<a:holo:812402157278068746> **Spam Guard:** ${Database.SpamGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
     
__**Whitelist:**__
\`>\` Whitelist'te ki üyeler: ${Database.WhiteListMembers ? Database.WhiteListMembers.map(id => `<@${id}>`).join('\n') : 'Whitlist\'te hiç üye yok.'}
\`>\` Whitelist'te ki roller: ${Database.WhiteListRoles ? Database.WhiteListRoles.map(id => `<@&${id}>`).join('\n') : 'Whitlist\'te hiç rol yok.'}
\`>\` Whitelist'te ki kanallar: ${Database.WhiteListChannels ? Database.WhiteListChannels.map(id => `<#${id}>`).join('\n') : 'Whitlist\'te hiç kanal yok.'}
 
__**Diğer Sistemler:**__
<a:holo:812402157278068746> **Filtreli Kelimeler**: ${Database.FiltredWords ? Database.FiltredWords.join() : 'Filtre\'de hiç kelime yok.'}
<a:holo:812402157278068746> **Mute Rolü**: ${Database.MutedRoleID ? "<@&"+Database.MutedRoleID+">" : 'Mute Rolü ayarlanmamış.'}
<a:holo:812402157278068746> **Mute Süresi**: ${Database.MuteDurationMinute ?""+Database.MuteDurationMinute+" Dakika." : '60'}
<a:holo:812402157278068746> **Log Kanalı**: ${Database.PunishLogChannelID ? "<#"+Database.PunishLogChannelID+">" : 'Log kanalı ayarlanmamış.'}

<a:holo:812402157278068746>Komutları ve kullanımlarını görmek için \`${config.Prefix}komutlar\` yazabilirsin.
<a:holo:812402157278068746>Botu sunucuna eklemek/davet etmek için \`${config.Prefix}davet\` yazabilirsin.
<a:holo:812402157278068746>Destek almak/destek sunucusuna katılmak için \`${config.Prefix}destek\` yazabilirsin.
<a:holo:812402157278068746>Bot top.gg üzerinden oy verip destek olmak için \`${config.Prefix}oy\` yazabilirsin.
  `)).catch(() => {}); }

        if(!Database) {
            message.channel.send(new MessageEmbed()
                .setColor("#5865F2")
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setDescription(`
__**SİSTEMLER**__
<a:holo:812402157278068746> **Character Limit:**<:off:804779269577244693>
<a:holo:812402157278068746> **Invite Guard:**<:off:804779269577244693>
<a:holo:812402157278068746> **Link Guard:**<:off:804779269577244693>
<a:holo:812402157278068746> **MassPing Guard:**<:off:804779269577244693>
<a:holo:812402157278068746> **BadWord Guard:**<:off:804779269577244693>
<a:holo:812402157278068746> **Spam Guard:**<:off:804779269577244693>

__**WHİTELİST**__
\`>\` Whitelist'te ki üyeler: **Whitlist'te hiç üye yok.**
\`>\` Whitelist'te ki roller: **Whitlist'te hiç rol yok.**
\`>\` Whitelist'te ki kanallar: **Whitlist'te hiç kanal yok.**

<a:holo:812402157278068746> Komutları ve kullanımlarını görmek için ${config.Prefix}komutlar yazabilirsin.
<a:holo:812402157278068746> Botu sunucuna eklemek/davet etmek için ${config.Prefix}davet yazabilirsin.
<a:holo:812402157278068746> Destek almak/destek sunucusuna katılmak için ${config.Prefix}destek yazabilirsin.
<a:holo:812402157278068746> Bot top.gg üzerinden oy verip destek olmak için ${config.Prefix}oy yazabilirsin.
`)).catch(() => {}); }

    }

    if(command.toLowerCase() === 'komutlar') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setTitle('<a:holo:812402157278068746> Chat Guard Komutları')
            .setTimestamp()
            .setDescription(`
<:yann:804778651837005894> Komutları görmek için \`${config.Prefix}komutlar\` yazabilirsin.

<:yann:804778651837005894> Yardım için \`${config.Prefix}yardım\` yazabilirsin.

<a:holo:812402157278068746> Sunucunun durumunu görmek için: \`${config.Prefix}serverstatus\`

<a:holo:812402157278068746> Üyeleri bir rolü veya kanalı whitelist'e almak için: \`${config.Prefix}whitelist [ekle veya kaldır] [Rol veya kanal veya üye](etiket veya id)\`
    
<a:holo:812402157278068746> Sunucuda Herhangi bir kelimenin  kullanılmaması yani filtreye eklemek için: \`${config.Prefix}filtre [ekle veya kaldır] [kelime]\`

<a:holo:812402157278068746> Mute rolünü ayarlamak için: \`${config.Prefix}muterole @role [etiket veya id] \`

<a:holo:812402157278068746> Mute süresini ayarlamak için: \`${config.Prefix}mutesüre 10 [Süreyi dakika cinsinden girin] \`

<a:holo:812402157278068746> Log kanalını ayarlamak için: \`${config.Prefix}logchannel @channel [etiket veya id\`

<a:holo:812402157278068746> Sunucuda ceza yemiş belirli bir kullanıcının cezasını kaldırmak için: \`${config.Prefix}cezakaldır @user [etiket veya id] \`
    
<a:holo:812402157278068746> Sunucuda Çok uzun yazılıp sohbeti dolduran mesajların silinmesi için: \`${config.Prefix}characterlimit [aç veya kapat] \`
    
<a:holo:812402157278068746> Sunucuda Başka sunucuların davet linklerinin  paylaşılmaması için: \`${config.Prefix}inviteguard [aç veya kapat] \`
    
<a:holo:812402157278068746> Sunucuda herhangi bir link paylaşılmaması için için: \`${config.Prefix}linkguard [aç veya kapat] \`
    
<a:holo:812402157278068746> Sunucuda Mesajında bir sürü kişinin etiketlenememesi için: \`${config.Prefix}masspingguard [aç veya kapat] \`

<a:holo:812402157278068746> Sunucuda Küfür içerikli mesajlar atılmaması için: \`${config.Prefix}badwordguard [aç veya kapat] \`

<a:holo:812402157278068746> Sunucuda spam yapılmaması için: \`${config.Prefix}spamguard [aç veya kapat] \`

<a:holo:812402157278068746> Botu sunucuna eklemek/davet etmek için \`${config.Prefix}davet\` yazabilirsin.

<a:holo:812402157278068746> Destek almak/destek sunucusuna katılmak için \`${config.Prefix}destek\` yazabilirsin.

<a:holo:812402157278068746> Bot top.gg üzerinden oy verip destek olmak için \`${config.Prefix}oy\` yazabilirsin.
    
      `)).catch(() => {});
    }

    if(command.toLowerCase() === 'yardım') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setTitle('<:yann:804778651837005894> Chat Guard Komutları')
            .setTimestamp()
            .setDescription(`
:star: Komutları görmek için \`${config.Prefix}komutlar\` yazabilirsin.

:star: Yardım için \`${config.Prefix}yardım\` yazabilirsin.

<a:holo:812402157278068746> Sunucunun durumunu görmek için: \`${config.Prefix}serverstatus\`

<a:holo:812402157278068746> Üyeleri bir rolü veya kanalı whitelist'e almak için: \`${config.Prefix}whitelist [ekle veya kaldır] [Rol veya kanal veya üye](etiket veya id)\`
    
<a:holo:812402157278068746> Sunucuda Herhangi bir kelimenin  kullanılmaması yani filtreye eklemek için: \`${config.Prefix}filtre [ekle veya kaldır] [kelime]\`

<a:holo:812402157278068746> Mute rolünü ayarlamak için: \`${config.Prefix}muterole @role [etiket veya id] \`

<a:holo:812402157278068746> Mute süresini ayarlamak için: \`${config.Prefix}mutesüre 10 [Süreyi dakika cinsinden girin] \`

<a:holo:812402157278068746> Log kanalını ayarlamak için: \`${config.Prefix}logchannel @channel [etiket veya id\`

<a:holo:812402157278068746> Sunucuda ceza yemiş belirli bir kullanıcının cezasını kaldırmak için: \`${config.Prefix}cezakaldır @user [etiket veya id] \`
    
<a:holo:812402157278068746> Sunucuda Çok uzun yazılıp sohbeti dolduran mesajların silinmesi için: \`${config.Prefix}characterlimit [aç veya kapat] \`
    
<a:holo:812402157278068746> Sunucuda Başka sunucuların davet linklerinin  paylaşılmaması için: \`${config.Prefix}inviteguard [aç veya kapat] \`
    
<a:holo:812402157278068746> Sunucuda herhangi bir link paylaşılmaması için için: \`${config.Prefix}linkguard [aç veya kapat] \`
    
<a:holo:812402157278068746> Sunucuda Mesajında bir sürü kişinin etiketlenememesi için: \`${config.Prefix}masspingguard [aç veya kapat] \`

<a:holo:812402157278068746> Sunucuda Küfür içerikli mesajlar atılmaması için: \`${config.Prefix}badwordguard [aç veya kapat] \`

<a:holo:812402157278068746> Sunucuda spam yapılmaması için: \`${config.Prefix}spamguard [aç veya kapat] \`

<a:holo:812402157278068746> Botu sunucuna eklemek/davet etmek için \`${config.Prefix}davet\` yazabilirsin.

<a:holo:812402157278068746> Destek almak/destek sunucusuna katılmak için \`${config.Prefix}destek\` yazabilirsin.

<a:holo:812402157278068746> Bot top.gg üzerinden oy verip destek olmak için \`${config.Prefix}oy\` yazabilirsin.
    
      `)).catch(() => {});
    }
   
    if(command.toLowerCase() === 'whitelist') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);



        if(!args[0]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: **'+config.Prefix+'whitelist ekle/kaldır id/etiket (rol veya kanal veya kullanıcı)**'));

        if (args[0] === 'ekle' || args[0] === 'add' ) {
           
            var member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
            var role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
            var channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
            if(!member && !role && !channel) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: **'+config.Prefix+'whitelist ekle/kaldır id/etiket (rol veya kanal veya kullanıcı)**')).catch(() => {});

        
            if(member){   
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (Database && Database.WhiteListMembers.includes(member.user.id)) return message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye zaten whitlist\'te bulunmakta')).catch(() => {});
        
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $push: { WhiteListMembers: member.user.id } }, { upsert: true });
                return message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye başarıyla whitelist\'e eklendi'));}
      
            if(role) { 
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (Database && Database.WhiteListRoles.includes(role.id))  return message.channel.send(embed.setDescription('**<@&'+role.id+'>**, İsimli Rol zaten whitlist\'te bulunmakta')).catch(() => {});
          
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $push: { WhiteListRoles: role.id } }, { upsert: true });
                return message.channel.send(embed.setDescription('**<@&'+role.id+'>**, İsimli rol başarıyla whitelist\'e eklendi'));}
      
            if(channel) { 
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (Database && Database.WhiteListChannels.includes(channel.id)) return message.channel.send(embed.setDescription('**<#'+channel.id+'>**, İsimli kanal zaten whitlist\'te bulunmakta')).catch(() => {});
      
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $push: { WhiteListChannels: channel.id } }, { upsert: true });
                return message.channel.send(embed.setDescription('**<#'+channel.id+'>**, İsimli kanal başarıyla whitelist\'e eklendi')).catch(() => {});}
        }
        if (args[0] === 'remove' || args[0] === 'kaldır' ) {

            var member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
            var role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
            var channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
            if(!member && !role && !channel) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: **'+config.Prefix+'whitelist ekle/kaldır id/etiket (rol veya kanal veya kullanıcı)**')).catch(() => {});

            if(member){   
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (!Database || !Database.WhiteListMembers.includes(member.user.id)) return message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye zaten whitlist\'te değil.')).catch(() => {});
       
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { WhiteListMembers: member.id } } );
                return message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye başarıyla whitelist\'ten kaldırıldı.')).catch(() => {});}
     
            if(role) { 
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (!Database || !Database.WhiteListRoles.includes(role.id)) return message.channel.send(embed.setDescription('**<@&'+role.id+'>**, İsimli rol zaten whitlist\'te değil.')).catch(() => {});
         
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { WhiteListRoles: role.id } } );
                return message.channel.send(embed.setDescription('**<@&'+role.id+'>**, İsimli rol başarıyla whitelist\'ten kaldırıldı.'));}
     
            if(channel) { 
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (!Database || !Database.WhiteListChannels.includes(channel.id)) return message.channel.send(embed.setDescription('**<#'+channel.id+'>**, İsimli kanal zaten whitlist\'te değil.'));
     
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { WhiteListChannels: channel.id }});
                return message.channel.send(embed.setDescription('**<#'+channel.id+'>**, İsimli kanal başarıyla whitelist\'ten kaldırıldı.')).catch(() => {});}
        }
    }

    if(command.toLowerCase() === 'filtre') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: '+config.Prefix+'filtre ekle/kaldır kelime')).catch(() => {});
   
        if (args[0] === 'ekle' || args[0] === 'add' ) {
            if (!args[1]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: '+config.Prefix+'filtre ekle/kaldır kelime')).catch(() => {});
            const Database = await db.findOne({ ServerID: message.guild.id });    
            if (Database && Database.FiltredWords.includes(args[1]) === true) return message.channel.send(embed.setDescription('**'+args[1]+'**, Bu kelime zaten filtre\'de var.')).catch(() => {});

            await db.findOneAndUpdate({ ServerID: message.guild.id }, { $push: { FiltredWords: args[1] } }, { upsert: true });
            return message.channel.send(embed.setDescription('**'+args[1]+'**, Başarıyla filtre\'ye eklendi.')).catch(() => {});
        }
   
        if (args[0] === 'kaldır' || args[0] === 'remove' ) {
            if (!args[1]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: '+config.Prefix+'filtre ekle/kaldır kelime')).catch(() => {});
            const Database = await db.findOne({ ServerID: message.guild.id });    
            if (!Database || Database.FiltredWords.includes(args[1]) !== true) return message.channel.send(embed.setDescription('**'+args[1]+'**, Bu kelime zaten filtre\'de değil.')).catch(() => {});
           
            await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { FiltredWords: args[1] }});
            return message.channel.send(embed.setDescription('**'+args[1]+'**, Başarıyla filtre\'den kaldırıldı.')).catch(() => {}); }
    }

    if(command.toLowerCase() === 'muterole') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        let MuteRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if(!MuteRole) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: **'+config.Prefix+'muterole @role/role id**')).catch(() => {});
        await db.findOneAndUpdate({ ServerID: message.guild.id }, { $set: { MutedRoleID: MuteRole.id } });
        return message.channel.send(embed.setDescription('Başarıyla **<@&'+MuteRole+'>**, Rolü mute rolü olarak ayarlandı.')).catch(() => {});
    }

    if(command.toLowerCase() === 'logchannel') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        let LogChannell = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if(!LogChannell) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: **'+config.Prefix+'logchannel @channel/channel id**')).catch(() => {});
        await db.findOneAndUpdate({ ServerID: message.guild.id }, { $set: { PunishLogChannelID: LogChannell.id } });
        return message.channel.send(embed.setDescription('Başarıyla **<#'+LogChannell+'>**, kanalı log kanalı olarak ayarlandı.')).catch(() => {});
    }

    if(command.toLowerCase() === 'mutesüre') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if(!args[0] ||args[0] < 1) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: **'+config.Prefix+'mutesüre 15 (Süreyi dakika cinsinden giriniz.)**')).catch(() => {});
        await db.findOneAndUpdate({ ServerID: message.guild.id }, { $set: { MuteDurationMinute: args[0] } });
        return message.channel.send(embed.setDescription('Başarıyla mute süresi **'+args[0]+'**, dakika olarak ayarlandı.')).catch(() => {});
    }

    if(command.toLowerCase() === 'cezakaldır') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const Database = await db.findOne({ ServerID: message.guild.id });

        if(!member) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: **'+config.Prefix+'cezakaldır @user/user id**')).catch(() => {});

        if(!Database) return  message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye\'nin herhangi bir cezası bulunamadı.')).catch(() => {});

        if(Database.BlueListMembers.includes(member.user.id) === true) {
            await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { BlueListMembers: member.user.id } });
            return  message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye\'nin uyarısı başarıyla kaldırıldı.')).catch(() => {});
        }
        
        if(Database.BlackListMembers.includes(member.user.id) === true) {
            await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { BlackListMembers: member.user.id } });
            const MuteRole = message.guild.roles.cache.find(role => role.id === Database.MutedRoleID);
            member.roles.remove(MuteRole).catch(() => {});

            return message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye\'nin mutesi başarıyla kaldırıldı.')).catch(() => {});
        }
        if(Database.BlueListMembers.includes(member.user.id) === false || Database.BlackListMembers.includes(member.user.id) === false) return  message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye\'nin herhangi bir cezası bulunamadı.')).catch(() => {});
    }
      

    if(command.toLowerCase() === 'characterlimit') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: '+config.Prefix+'characterlimit aç/kapat.')).catch(() => {});
        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.CharacterLimit == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { CharacterLimit: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Karakter Limit** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.CharacterLimit == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.')).catch(() => {});
            await db.findOneAndUpdate({ServerID: message.guild.id}, { CharacterLimit: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Karakter Limit** başarıyla kapatıldı.')).catch(() => {}); 
        }

    }

    if(command.toLowerCase() === 'inviteguard') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: '+config.Prefix+'inviteguard aç/kapat.')).catch(() => {});

        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.InviteGuard == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { InviteGuard: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Invite koruması** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.InviteGuard == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.')).catch(() => {});
            await db.findOneAndUpdate({ServerID: message.guild.id}, { InviteGuard: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Invite koruması** başarıyla kapatıldı.')).catch(() => {});
        }

    }

    if(command.toLowerCase() === 'linkguard') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: '+config.Prefix+'linkguard aç/kapat.')).catch(() => {});

        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.LinkGuard == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { LinkGuard: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Link koruması** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.LinkGuard == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.')).catch(() => {});
            await db.findOneAndUpdate({ServerID: message.guild.id}, { LinkGuard: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Link koruması** başarıyla kapatıldı.')).catch(() => {});
        }

    }

    if(command.toLowerCase() === 'masspingguard') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Aar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: '+config.Prefix+'masspingguard aç/kapat.')).catch(() => {});

        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.MassPingGuard == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { MassPingGuard: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Etiket koruması** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.MassPingGuard == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.'));
            await db.findOneAndUpdate({ServerID: message.guild.id}, { MassPingGuard: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Etiket koruması** başarıyla kapatıldı.')).catch(() => {});   
        }

    }

    if(command.toLowerCase() === 'badwordguard') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: '+config.Prefix+'badwordguard aç/kapat.')).catch(() => {});

        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.BadWordGuard == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { BadWordGuard: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Küfür koruması** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.BadWordGuard == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.')).catch(() => {});
            await db.findOneAndUpdate({ServerID: message.guild.id}, { BadWordGuard: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Küfür koruması** başarıyla kapatıldı.')).catch(() => {});
        }

    }
  
    if(command.toLowerCase() === 'spamguard') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:811921646507261963> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:811921646507261963> Örnek kullanım: '+config.Prefix+'spamguard aç/kapat.')).catch(() => {});

        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.SpamGuard == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { SpamGuard: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Spam koruması** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.SpamGuard == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.')).catch(() => {});
            await db.findOneAndUpdate({ServerID: message.guild.id}, { SpamGuard: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<@'+message.author.id+'>, **Spam koruması** başarıyla kapatıldı.')).catch(() => {});
        }

    }
});
