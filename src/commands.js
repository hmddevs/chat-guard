const client = global.client;
const db = require('./db');
const config = require('./config');
const { EmbedBuilder, InteractionType, PermissionsBitField, ChannelType } = require('discord.js');
const moment = require("moment"); require("moment-duration-format"); moment.locale("tr");

client.on('interactionCreate', async interaction => {
if(interaction.type !== InteractionType.ApplicationCommand) return;
const embed = new EmbedBuilder().setColor("#5865F2").setTimestamp().setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true })});

if(interaction.commandName === 'davet') {
    interaction.reply({ embeds: [new EmbedBuilder()
    .setColor("#5865F2")
    .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true })})
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .setDescription(`
<a:hologram:990277266892263475> [Botu sunucuna eklemek için tıkla!](https://discord.com/oauth2/authorize?client_id=870967982522777601&permissions=8&scope=bot%20applications.commands)
<a:hologram:990277266892263475> [Destek sunucusuna katılmak için tıkla!](https://discord.com/invite/b8e2EKJpry)
<a:hologram:990277266892263475> [Bota oy vererek destek olmak için tıkla!](https://top.gg/bot/870967982522777601/vote)
`)]});
};

if(interaction.commandName === 'oy') {
    interaction.reply({ embeds: [new EmbedBuilder()
        .setColor("#5865F2")
        .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true })})
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setDescription(`
<a:hologram:990277266892263475> [Botu sunucuna eklemek için tıkla!](https://discord.com/oauth2/authorize?client_id=870967982522777601&permissions=8&scope=bot%20applications.commands)
<a:hologram:990277266892263475> [Destek sunucusuna katılmak için tıkla!](https://discord.com/invite/b8e2EKJpry)
<a:hologram:990277266892263475> [Bota oy vererek destek olmak için tıkla!](https://top.gg/bot/870967982522777601/vote)
`)]});
};


if(interaction.commandName  === 'info') {
 if(config.BotOwners.includes(interaction.member.id) === false ) return interaction.reply({ content: `<a:red:990277321414045767> Bu komut yalnızca geliştiricime özeldir.`, ephmeral: true });
    interaction.reply({ embeds: [new EmbedBuilder()
        .setColor("#5865F2")
        .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true })})
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setDescription(`
<a:hologram:990277266892263475> **${client.guilds.cache.size.toLocaleString()}** sunucuya hizmet veriyorum.
<a:hologram:990277266892263475> **${client.guilds.cache.reduce((acc, currentValue) => acc + currentValue.memberCount, 0)}** kullanıcıya hizmet veriyorum.
<a:hologram:990277266892263475> Pingim: **${client.ws.ping}**
<a:hologram:990277266892263475> **${moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")}** dir aktifim.
<a:hologram:990277266892263475> Ram kullanımı: **234.62/8000.00 MB**
`)] });
};

if(interaction.commandName === 'komutlar') {
    interaction.reply({ embeds: [new EmbedBuilder()
        .setColor("#5865F2")
        .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true })})
        .setTitle('<:rightside:804778651837005894> Chat Guard Komutları')
        .setFooter({ text:`${interaction.member.user.tag} tarafından istendi.`})
        .setTimestamp()
        .setDescription(`
<a:100:990276334435586058> Yardım için \`/yardım\` yazabilirsin.
<a:100:990276334435586058> Sunucunun durumunu görmek için: \`/sunucudurumu\`

<:space:990276555131465729> <a:settings:990276448185106512> **Ayarlamalar:**
<:arrow:990277284281872424> Beyaz liste için: \`/beyazliste [ekle/kaldır] [Rol/kanal/üye](etiket/id)\`
<:arrow:990277284281872424> Filtre için: \`/filtre [ekle/kaldır] [kelime]\`
<:arrow:990277284281872424> Mute süresini ayarlamak için: \`/mutesüre 10 [Süreyi dakika cinsinden girin] \`
<:arrow:990277284281872424> Log kanalını ayarlamak için: \`/logkanalı #kanal [etiket/id\`

<:space:990276555131465729> <a:settings:990276448185106512> **Korumalar:**
<:arrow:990277284281872424> Ceza kaldırmak için: \`/cezakaldır @kullanıcı [etiket/id] \`  
<:arrow:990277284281872424> Uzun yazı engel için: \`/karakterlimit [aç/kapat] \`
<:arrow:990277284281872424> Sunucu davet linki engel: \`/davetkoruma [aç/kapat] \`
<:arrow:990277284281872424> Link engel için: \`/linkkoruma [aç/kapat] \`
<:arrow:990277284281872424> Çoklu etiket engel için: \`/çokluetiket [aç/kapat] \`
<:arrow:990277284281872424> Küfür engel için: \`/küfürkoruma [aç/kapat] \`
<:arrow:990277284281872424> Spam engel için: \`/spamkoruma [aç/kapat] \`

<:space:990276555131465729> <a:settings:990276448185106512> **Bot Hakkında:**
<a:hologram:990277266892263475> Botu sunucuna eklemek/davet etmek için \`/davet\` yazabilirsin.
<a:hologram:990277266892263475> Destek sunucusuna katılmak için \`/destek\` yazabilirsin.
<a:hologram:990277266892263475> Bot top.gg üzerinden oy verip destek olmak için \`/oy\` yazabilirsin. 
`)], ephemeral: true}).catch(() => {});
};

if(interaction.commandName === 'sunucudurumu') {
    if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });

    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if(Database) {
       interaction.reply({ embeds: [new EmbedBuilder().setColor("#5865F2")
            .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true })})
            .setThumbnail(client.user.avatarURL()).setTimestamp().setDescription(`
<a:settings:990276448185106512> **Korumalar:**
<:arrow:990277284281872424> **Karakter Limit:** ${Database.CharacterLimit ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<:arrow:990277284281872424> **Davet Engel:** ${Database.InviteGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<:arrow:990277284281872424> **Link Engel:** ${Database.LinkGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<:arrow:990277284281872424> **Çoklu Etiket Engel:** ${Database.MassPingGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<:arrow:990277284281872424> **Küfür Engel:** ${Database.BadWordGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
<:arrow:990277284281872424> **Spam Engel:** ${Database.SpamGuard ? '<:on:804779243220631552>' : '<:off:804779269577244693>'}
 
<a:settings:990276448185106512> **Beyazliste:**
<:arrow:990277284281872424> Beyazliste'de ki üyeler: ${Database.WhiteListMembers ? Database.WhiteListMembers.map(id => `<@${id}>`).join('\n') : 'Beyazliste\'de hiç üye yok.'}
<:arrow:990277284281872424> Beyazliste'de ki roller: ${Database.WhiteListRoles ? Database.WhiteListRoles.map(id => `<@&${id}>`).join('\n') : 'Beyazliste\'de hiç rol yok.'}
<:arrow:990277284281872424> Beyazliste'de ki kanallar: ${Database.WhiteListChannels ? Database.WhiteListChannels.map(id => `<#${id}>`).join('\n') : 'Beyazliste\'de hiç kanal yok.'}

<a:settings:990276448185106512> **Ayarlamalar:**
<:arrow:990277284281872424> **Filtreli Kelimeler**: ${Database.FiltredWords ? Database.FiltredWords.join() : 'Filtre\'de hiç kelime yok.'}
<:arrow:990277284281872424> **Mute Süresi**: ${Database.MuteDurationMinute ?""+Database.MuteDurationMinute+" Dakika." : '60'}
<:arrow:990277284281872424> **Log Kanalı**: ${Database.PunishLogChannelID ? "<#"+Database.PunishLogChannelID+">" : 'Log kanalı ayarlanmamış.'}

<a:hologram:990277266892263475> Komutları ve kullanımlarını görmek için \`/komutlar\` yazabilirsin.
<a:hologram:990277266892263475> Botu sunucuna eklemek/davet etmek için \`/davet\` yazabilirsin.
<a:hologram:990277266892263475> Destek sunucusuna katılmak için \`/destek\` yazabilirsin.
<a:hologram:990277266892263475> Bot top.gg üzerinden oy verip destek olmak için \`/oy\` yazabilirsin. 
`)]}).catch(() => {}); }

    if(!Database) {
        interaction.reply({ embeds: [new EmbedBuilder()
            .setColor("#5865F2")
            .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true })})
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<a:settings:990276448185106512> **Ayarlamalar:**
<:arrow:990277284281872424> **Karakter Limit:** <:off:804779269577244693>
<:arrow:990277284281872424> **Davet Koruma:** <:off:804779269577244693>
<:arrow:990277284281872424> **Link Koruma:** <:off:804779269577244693>
<:arrow:990277284281872424> **Çoklu Etiket Koruma:** <:off:804779269577244693>
<:arrow:990277284281872424> **Küfür Koruma:** <:off:804779269577244693>
<:arrow:990277284281872424> **Spam Koruma:** <:off:804779269577244693>

<a:settings:990276448185106512> **Beyazliste:**
<:arrow:990277284281872424> Beyazliste'de ki üyeler: **Beyazliste'de hiç üye yok.**
<:arrow:990277284281872424> Beyazliste'de ki roller: **Beyazliste'de hiç rol yok.**
<:arrow:990277284281872424> Beyazliste'de ki kanallar: **Beyazliste'de hiç kanal yok.**

<a:hologram:990277266892263475> Komutları ve kullanımlarını görmek için /komutlar yazabilirsin.
<a:hologram:990277266892263475> Botu sunucuna eklemek/davet etmek için /davet yazabilirsin.
<a:hologram:990277266892263475> Destek sunucusuna katılmak için /destek yazabilirsin.
<a:hologram:990277266892263475> Bot top.gg üzerinden oy verip destek olmak için /oy yazabilirsin.
`)]}); };
}

if(interaction.commandName === 'yardım') {
    interaction.reply({ embeds: [new EmbedBuilder()
        .setColor("#5865F2")
        .setAuthor({ name: interaction.member.user.tag, iconURL: interaction.member.user.avatarURL({ dynamic: true })})
        .setTitle('<:rightside:804778651837005894> Chat Guard Komutları')
        .setFooter({ text:`${interaction.member.user.tag} tarafından istendi.`})
        .setTimestamp()
        .setDescription(`
<a:100:990276334435586058> Komutlar için \`/komutlar\` yazabilirsin.
<a:100:990276334435586058> Sunucunun durumunu görmek için: \`/sunucudurumu\`

<:space:990276555131465729> <a:settings:990276448185106512> **Ayarlamalar:**
<:arrow:990277284281872424> Beyaz liste için: \`/beyazliste [ekle/kaldır] [Rol/kanal/üye](etiket/id)\`
<:arrow:990277284281872424> Filtre için: \`/filtre [ekle/kaldır] [kelime]\`
<:arrow:990277284281872424> Mute süresini ayarlamak için: \`/mutesüre 10 [Süreyi dakika cinsinden girin] \`
<:arrow:990277284281872424> Log kanalını ayarlamak için: \`/logkanalı #kanal [etiket/id\`

<:space:990276555131465729> <a:settings:990276448185106512> **Korumalar:**
<:arrow:990277284281872424> Ceza kaldırmak için: \`/cezakaldır @kullanıcı [etiket/id] \`  
<:arrow:990277284281872424> Uzun yazı engel için: \`/karakterlimit [aç/kapat] \`
<:arrow:990277284281872424> Sunucu davet linki engel: \`/davetkoruma [aç/kapat] \`
<:arrow:990277284281872424> Link engel için: \`/linkkoruma [aç/kapat] \`
<:arrow:990277284281872424> Çoklu etiket engel için: \`/çokluetiket [aç/kapat] \`
<:arrow:990277284281872424> Küfür engel için: \`/küfürkoruma [aç/kapat] \`
<:arrow:990277284281872424> Spam engel için: \`/spamkoruma [aç/kapat] \`

<:space:990276555131465729> <a:settings:990276448185106512> **Bot Hakkında:**
<a:hologram:990277266892263475> Botu sunucuna eklemek/davet etmek için \`/davet\` yazabilirsin.
<a:hologram:990277266892263475> Destek sunucusuna katılmak için \`/destek\` yazabilirsin.
<a:hologram:990277266892263475> Bot top.gg üzerinden oy verip destek olmak için \`/oy\` yazabilirsin. 
`)], ephemeral: true}).catch(() => {});
}

if(interaction.commandName === 'beyazliste') {
    if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
    const tercih = interaction.options?.getString('secim'); 
    const id = interaction.options?.getString('id');

    if(tercih === 'ekle' ) {
        var member = interaction.guild.members.cache.get(id);
        var role = interaction.guild.roles.cache.get(id);
        var channel = interaction.guild.channels.cache.get(id);
        if(!member && !role && !channel) return interaction.reply({ embeds: [embed.setDescription('<a:red:990277321414045767> Örnek kullanım: **/beyazliste ekle/kaldır id (rol/kanal/kullanıcı)**')]}).catch(() => {});
    
        if(member){   
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (Database && Database.WhiteListMembers.includes(member.user.id)) return interaction.reply({ embeds:[embed.setDescription('**<@'+member.user.id+'>**, İsimli üye zaten beyazliste\'de bulunmakta')]}).catch(() => {});
    
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $push: { WhiteListMembers: member.user.id } }, { upsert: true });
            return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **<@'+member.user.id+'>**, İsimli üye başarıyla beyaliste\'ye eklendi')]});}
  
        if(role) { 
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (Database && Database.WhiteListRoles.includes(role.id))  return interaction.reply({ embeds:[embed.setDescription('**<@&'+role.id+'>**, İsimli Rol zaten beyazliste\'de bulunmakta')]}).catch(() => {});
      
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $push: { WhiteListRoles: role.id } }, { upsert: true });
            return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **<@&'+role.id+'>**, İsimli rol başarıyla beyaliste\'ye eklendi')]});}
  
        if(channel) { 
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (Database && Database.WhiteListChannels.includes(channel.id)) return interaction.reply({ embeds:[embed.setDescription('**<#'+channel.id+'>**, İsimli kanal zaten beyazliste\'de bulunmakta')]}).catch(() => {});
  
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $push: { WhiteListChannels: channel.id } }, { upsert: true });
            return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **<#'+channel.id+'>**, İsimli kanal başarıyla beyazliste\'ye eklendi')]}).catch(() => {});}
    }
    if (tercih === 'kaldır' ) {

        var member = interaction.guild.members.cache.get(id);
        var role = interaction.guild.roles.cache.get(id);
        var channel = interaction.guild.channels.cache.get(id);
        if(!member && !role && !channel) return interaction.reply({ embeds:[embed.setDescription('<a:red:990277321414045767> Örnek kullanım: **/beyaliste ekle/kaldır id/etiket (rol/kanal/kullanıcı)**')]}).catch(() => {});

        if(member){   
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (!Database || !Database.WhiteListMembers.includes(member.user.id)) return interaction.reply({ embeds:[embed.setDescription('**<@'+member.user.id+'>**, İsimli üye zaten beyazliste\'de değil.')]}).catch(() => {});
   
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { WhiteListMembers: member.id } } );
            return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **<@'+member.user.id+'>**, İsimli üye başarıyla beyaliste\'den kaldırıldı.')]}).catch(() => {});}
 
        if(role) { 
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (!Database || !Database.WhiteListRoles.includes(role.id)) return interaction.reply({ embeds:[embed.setDescription('**<@&'+role.id+'>**, İsimli rol zaten beyazliste\'de değil.')]}).catch(() => {});
     
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { WhiteListRoles: role.id } } );
            return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **<@&'+role.id+'>**, İsimli rol başarıyla beyaliste\'den kaldırıldı.')]});}
 
        if(channel) { 
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if (!Database || !Database.WhiteListChannels.includes(channel.id)) return interaction.reply({ embeds:[embed.setDescription('**<#'+channel.id+'>**, İsimli kanal zaten beyazliste\'de değil.')]});
 
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { WhiteListChannels: channel.id }});
            return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **<#'+channel.id+'>**, İsimli kanal başarıyla beyaliste\'den kaldırıldı.')]}).catch(() => {});}
    };
};

if(interaction.commandName === 'filtre') {
    if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
    const tercih = interaction.options?.getString('secim'); 
    const word = interaction.options?.getString('word');
   
        if (tercih === 'ekle'  ) {
            const Database = await db.findOne({ ServerID: interaction.guild.id });    
            if (Database && Database.FiltredWords.includes(word) === true) return interaction.reply({ embeds:[embed.setDescription('**'+word+'**, Bu kelime zaten filtre\'de var.')]}).catch(() => {});
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $push: { FiltredWords: word } }, { upsert: true });
            return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **'+word+'**, Başarıyla filtre\'ye eklendi.')]}).catch(() => {});
        };
   
        if (tercih === 'kaldır' ) {
            const Database = await db.findOne({ ServerID: interaction.guild.id });    
            if (!Database || Database.FiltredWords.includes(word) !== true) return interaction.reply({ embeds:[embed.setDescription('**'+word+'**, Bu kelime zaten filtre\'de değil.')]}).catch(() => {});     
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { FiltredWords: word }});
            return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **'+word+'**, Başarıyla filtre\'den kaldırıldı.')]}).catch(() => {}); 
        };
    };
if(interaction.commandName === 'logkanalı') {
 if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
   const channel = interaction.options?.getChannel('channel');
   if(channel.type !== ChannelType.GuildText ) return interaction.reply({ embeds:[embed.setDescription('<a:red:990277321414045767> **Yazılı bir kanal belirtmelisin.**')]}).catch(() => {});
   await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $set: { PunishLogChannelID: channel.id } });
   return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> Başarıyla **<#'+channel+'>**, kanalı log kanalı olarak ayarlandı.')]}).catch(() => {});
};

if(interaction.commandName === 'mutesüre') {
    if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
    const sure = interaction.options?.getNumber('süre');
    await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $set: { MuteDurationMinute: sure } });
    return interaction.reply({ embeds: [embed.setDescription('<:check:990277303579836468> Başarıyla mute süresi **'+sure+'**, dakika olarak ayarlandı.')]}).catch(() => {});
}

if(interaction.commandName === 'cezakaldır') {
    if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
    const member = interaction.options?.getMember('üye');
    if(!member) return interaction.reply({ embeds:[embed.setDescription('<a:red:990277321414045767> Örnek kullanım: **/cezakaldır @user/user id**')]}).catch(() => {});        
    const Database = await db.findOne({ ServerID: interaction.guild.id });
    if(!Database) return  interaction.reply({ embeds:[embed.setDescription('**<@'+member.user.id+'>**, İsimli üye\'nin herhangi bir cezası bulunamadı.')]}).catch(() => {});
    
    if(Database.BlueListMembers.includes(member.user.id) === true) {
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { BlueListMembers: member.user.id } });
            return  interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **<@'+member.user.id+'>**, İsimli üye\'nin uyarısı başarıyla kaldırıldı.')]}).catch(() => {});
        }
        
        if(Database.BlackListMembers.includes(member.user.id) === true) {
            await db.findOneAndUpdate({ ServerID: interaction.guild.id }, { $pull: { BlackListMembers: member.user.id } });
            member.timeout(1000 , "Ceza Kaldırıldı -ChatGuard").catch(() => {});
            return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> **<@'+member.user.id+'>**, İsimli üye\'nin mutesi başarıyla kaldırıldı.')]}).catch(() => {});
        }
        if(Database.BlueListMembers.includes(member.user.id) === false || Database.BlackListMembers.includes(member.user.id) === false) return  interaction.reply({ embeds:[embed.setDescription('**<@'+member.user.id+'>**, İsimli üye\'nin herhangi bir cezası bulunamadı.')]}).catch(() => {});
    }

    if(interaction.commandName === 'karakterlimit') {
        if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
        const tercih = interaction.options?.getString('secim'); 
    
            const Database = await db.findOne({ServerID: interaction.guild.id});
            if(tercih === 'aç') {
                if(Database && Database.CharacterLimit == true) return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten açık.')]}).catch(() => {});
    
                await db.findOneAndUpdate({ServerID: interaction.guild.id}, { CharacterLimit: true }, {upsert: true});
                return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> <@'+interaction.member.id+'>, **Karakter Limit** başarıyla açıldı.')]}).catch(() => {});
            }
    
            if(tercih === 'kapat') {
                if(!Database || Database.CharacterLimit == false)  return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten kapalı.')]}).catch(() => {});
                await db.findOneAndUpdate({ServerID: interaction.guild.id}, { CharacterLimit: false }, {upsert: true});
                return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> <@'+interaction.member.id+'>, **Karakter Limit** başarıyla kapatıldı.')]}).catch(() => {}); 
            }
    
        };

        if(interaction.commandName === 'davetkoruma') {
            if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
            const tercih = interaction.options?.getString('secim'); 
        
                const Database = await db.findOne({ServerID: interaction.guild.id});
                if(tercih === 'aç') {
                    if(Database && Database.InviteGuard == true) return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten açık.')]}).catch(() => {});
        
                    await db.findOneAndUpdate({ServerID: interaction.guild.id}, { InviteGuard: true }, {upsert: true});
                    return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> <@'+interaction.member.id+'>, **Davet koruması** başarıyla açıldı.')]}).catch(() => {});
                }
        
                if(tercih === 'kapat') {
                    if(!Database || Database.InviteGuard == false)  return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten kapalı.')]}).catch(() => {});
                    await db.findOneAndUpdate({ServerID: interaction.guild.id}, { InviteGuard: false }, {upsert: true});
                    return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> <@'+interaction.member.id+'>, **Invite koruması** başarıyla kapatıldı.')]}).catch(() => {});
                }
            }
            if(interaction.commandName === 'linkkoruma') {
                if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
                const tercih = interaction.options?.getString('secim'); 
            
                    const Database = await db.findOne({ServerID: interaction.guild.id});
                    if(tercih=== 'aç') {
                        if(Database && Database.LinkGuard == true) return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten açık.')]}).catch(() => {});
            
                        await db.findOneAndUpdate({ServerID: interaction.guild.id}, { LinkGuard: true }, {upsert: true});
                        return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> <@'+interaction.member.id+'>, **Link koruması** başarıyla açıldı.')]}).catch(() => {});
                    }
            
                    if(tercih=== 'kapat') {
                        if(!Database || Database.LinkGuard == false)  return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten kapalı.')]}).catch(() => {});
                        await db.findOneAndUpdate({ServerID: interaction.guild.id}, { LinkGuard: false }, {upsert: true});
                        return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> <@'+interaction.member.id+'>, **Link koruması** başarıyla kapatıldı.')]}).catch(() => {});
                    }
            
                }

                
    if(interaction.commandName === 'çokluetiket') {
        if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
        const tercih = interaction.options?.getString('secim'); 

    
            const Database = await db.findOne({ ServerID: interaction.guild.id });
            if(tercih=== 'aç') {
                if(Database && Database.MassPingGuard == true) return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten açık.')]}).catch(() => {});
    
                await db.findOneAndUpdate({ServerID: interaction.guild.id}, { MassPingGuard: true }, {upsert: true});
                return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> <@'+interaction.member.id+'>, **Etiket koruması** başarıyla açıldı.')]}).catch(() => {});
            }
    
            if(tercih=== 'kapat') {
                if(!Database || Database.MassPingGuard == false)  return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten kapalı.')]}).catch(() => {});
                await db.findOneAndUpdate({ServerID: interaction.guild.id}, { MassPingGuard: false }, {upsert: true});
                return interaction.reply({ embeds:[embed.setDescription('<:check:990277303579836468> <@'+interaction.member.id+'>, **Etiket koruması** başarıyla kapatıldı.')]}).catch(() => {});   
            }
    
        }
        if(interaction.commandName === 'küfürkoruma') {
        if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
    
        const tercih = interaction.options?.getString('secim'); 

    
            const Database = await db.findOne({ServerID: interaction.guild.id});
            if(tercih=== 'aç') {
                if(Database && Database.BadWordGuard == true) return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten açık.')]}).catch(() => {});
    
                await db.findOneAndUpdate({ServerID: interaction.guild.id}, { BadWordGuard: true }, {upsert: true});
                return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, **Küfür koruması** başarıyla açıldı.')]}).catch(() => {});
            }
    
            if(tercih=== 'kapat') {
                if(!Database || Database.BadWordGuard == false)  return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten kapalı.')]}).catch(() => {});
                await db.findOneAndUpdate({ServerID: interaction.guild.id}, { BadWordGuard: false }, {upsert: true});
                return interaction.reply({ embeds: [embed.setDescription('<@'+interaction.member.id+'>, **Küfür koruması** başarıyla kapatıldı.')]}).catch(() => {});
            }
    
        }
        if(interaction.commandName === 'spamkoruma') {
        if(config.BotOwners.includes(interaction.member.id) === false &&  !interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `<a:red:990277321414045767> Ayar komutlarını kullanabilmen için yönetici olman gerek.`, ephemeral: true });
    
        const tercih = interaction.options?.getString('secim'); 

    
            const Database = await db.findOne({ServerID: interaction.guild.id});
            if(tercih=== 'aç') {
                if(Database && Database.SpamGuard == true) return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten açık.')]}).catch(() => {});
    
                await db.findOneAndUpdate({ServerID: interaction.guild.id }, { SpamGuard: true }, {upsert: true});
                return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, **Spam koruması** başarıyla açıldı.')]}).catch(() => {});
            }
    
            if(tercih=== 'kapat') {
                if(!Database || Database.SpamGuard == false)  return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, Bu Koruma zaten kapalı.')]}).catch(() => {});
                await db.findOneAndUpdate({ServerID: interaction.guild.id}, { SpamGuard: false }, {upsert: true});
                return interaction.reply({ embeds:[embed.setDescription('<@'+interaction.member.id+'>, **Spam koruması** başarıyla kapatıldı.')]}).catch(() => {});
            }
    
        }

});



