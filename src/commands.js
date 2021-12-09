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

    if (command.toLowerCase() === "sunucu-ayrıl") {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);

      let guilds = client.guilds.cache.filter(g => g.memberCount < 20).array();
      for (let i = 0; i < guilds.length; i++) {
        setTimeout(() => guilds[i].leave().catch(() => {}), i * 5000);
      };
    };
    if (command.toLowerCase() === "eval") {
        if(message.author.id !== "387675598044135436") return;
        if (!args[0] || args[0].includes('token')) return message.channel.send("Kod belirtilmedi! `" + prefix + "eval `__`<kod>`__");
          let code = args.join(' ');
          function clean(text) {
              if (typeof text !== 'string')
                  text = require('util').inspect(text, { depth: 0 })
              text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
              return text;
          };
        try {
            var evaled = clean(await eval(code));
          if(evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace("token", "Yasaklı komut").replace(client.token, "Yasaklı komut");
            message.channel.send(`${evaled.replace(client.token, "Yasaklı komut")}`, {code: "js", split: true});
        } catch(err) { message.channel.send(err, {code: "js", split: true}) };
        return;
    };
    if (command.toLowerCase() === "sunucu-liste") {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);

      let res = ``;
      for (let g of client.guilds.cache.array()) {
        res += `${g.id} | ${g.name} (${g.memberCount}) | ${(await g.fetchInvites().catch(() => undefined))?.first()?.code || await g.channels.cache.random().createInvite().then(i => i.code).catch(() => "Yetersiz izin")}\n`;
      };
      message.channel.send(res, { split: { char: "\n" }, code: "xl" });
    }
    if(command.toLowerCase() === 'davet') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<a:hologram:907617268173783060> [Botu sunucuna eklemek için tıkla!](https://discord.com/oauth2/authorize?client_id=870967982522777601&permissions=8&scope=bot%20applications.commands)
<a:hologram:907617268173783060> [Destek sunucusuna katılmak için tıkla!](https://discord.com/invite/d44zqCemN3)
<a:hologram:907617268173783060> [Bota oy vererek destek olmak için tıkla!](https://top.gg/bot/870967982522777601/vote)
        `))
    } 
    if(command.toLowerCase() === 'destek') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<a:hologram:907617268173783060> [Botu sunucuna eklemek için tıkla!](https://discord.com/oauth2/authorize?client_id=870967982522777601&permissions=8&scope=bot%20applications.commands)
<a:hologram:907617268173783060> [Destek sunucusuna katılmak için tıkla!](https://discord.com/invite/d44zqCemN3)
<a:hologram:907617268173783060> [Bota oy vererek destek olmak için tıkla!](https://top.gg/bot/870967982522777601/vote)
        `))
    } 
    if(command.toLowerCase() === 'oy') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<a:hologram:907617268173783060> [Botu sunucuna eklemek için tıkla!](https://discord.com/oauth2/authorize?client_id=870967982522777601&permissions=8&scope=bot%20applications.commands)
<a:hologram:907617268173783060> [Destek sunucusuna katılmak için tıkla!](https://discord.com/invite/d44zqCemN3)
<a:hologram:907617268173783060> [Bota oy vererek destek olmak için tıkla!](https://top.gg/bot/870967982522777601/vote)
        `))
    } 
    if(command.toLowerCase() === 'info') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<a:hologram:907617268173783060> **${client.guilds.cache.size.toLocaleString()}** sunucuya hizmet veriyorum.
<a:hologram:907617268173783060> **${client.guilds.cache.reduce((acc, currentValue) => acc + currentValue.memberCount, 0)}** kullanıcıya hizmet veriyorum.
<a:hologram:907617268173783060> Pingim: **${client.ws.ping}**
<a:hologram:907617268173783060> **${moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")}** dir aktifim.
        `))
    } 


    if(command.toLowerCase() === 'serverstatus') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}sunucudurumu\`

        `))
    }
    if(command.toLowerCase() === 'spamguard') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}spamkoruma\`

        `))
    }
    if(command.toLowerCase() === 'badwordguard') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}küfürkoruma\`

        `))
    }
    if(command.toLowerCase() === 'characterlimit') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}karakterlimit\`

        `))
    }
    if(command.toLowerCase() === 'masspingguard') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}çokluetiket\`

        `))
    }
    if(command.toLowerCase() === 'linkguard') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}linkkoruma\`

        `))
    }
    if(command.toLowerCase() === 'whitelist') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}beyazliste\`

        `))
    }
    if(command.toLowerCase() === 'muterole') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}muterolü\`

        `))
    }
    if(command.toLowerCase() === 'logchannel') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}logkanalı\`

        `))
    }
    if(command.toLowerCase() === 'inviteguard') {
        if(config.BotOwners.includes(message.member.id) === false ) return message.channel.send(`<a:red:909521226207203338> Bu komut yalnızca geliştiricime özeldir.`);
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setDescription(`
<:bosluk:909565384775065670> <a:ayar:909561268128591872> Artık bu komut tamamen Türkçe!
<:ok:909555365056753755> Yeni kullanım: \`${config.Prefix}davetkoruma\`

        `))
    }


    if(command.toLowerCase() === 'sunucudurumu') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        const Database = await db.findOne({ ServerID: message.guild.id });
        if(Database) {

            message.channel.send(new MessageEmbed()
                .setColor("#5865F2")
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setDescription(`
<a:ayar:909561268128591872> **Korumalar:**
<:ok:909555365056753755> **Karakter Limit:** ${Database.CharacterLimit ? '<:acik:909505874429612112>' : '<:kapali:909505750211125358>'}
<:ok:909555365056753755> **Davet Engel:** ${Database.InviteGuard ? '<:acik:909505874429612112>' : '<:kapali:909505750211125358>'}
<:ok:909555365056753755> **Link Engel:** ${Database.LinkGuard ? '<:acik:909505874429612112>' : '<:kapali:909505750211125358>'}
<:ok:909555365056753755> **Çoklu Etiket Engel:** ${Database.MassPingGuard ? '<:acik:909505874429612112>' : '<:kapali:909505750211125358>'}
<:ok:909555365056753755> **Küfür Engel:** ${Database.BadWordGuard ? '<:acik:909505874429612112>' : '<:kapali:909505750211125358>'}
<:ok:909555365056753755> **Spam Engel:** ${Database.SpamGuard ? '<:acik:909505874429612112>' : '<:kapali:909505750211125358>'}
     
<a:ayar:909561268128591872> **Beyazliste:**
<:ok:909555365056753755> Beyazliste'de ki üyeler: ${Database.WhiteListMembers ? Database.WhiteListMembers.map(id => `<@${id}>`).join('\n') : 'Beyazliste\'de hiç üye yok.'}
<:ok:909555365056753755> Beyazliste'de ki roller: ${Database.WhiteListRoles ? Database.WhiteListRoles.map(id => `<@&${id}>`).join('\n') : 'Beyazliste\'de hiç rol yok.'}
<:ok:909555365056753755> Beyazliste'de ki kanallar: ${Database.WhiteListChannels ? Database.WhiteListChannels.map(id => `<#${id}>`).join('\n') : 'Beyazliste\'de hiç kanal yok.'}
 
<a:ayar:909561268128591872> **Ayarlamalar:**
<:ok:909555365056753755> **Filtreli Kelimeler**: ${Database.FiltredWords ? Database.FiltredWords.join() : 'Filtre\'de hiç kelime yok.'}
<:ok:909555365056753755> **Mute Rolü**: ${Database.MutedRoleID ? "<@&"+Database.MutedRoleID+">" : 'Mute Rolü ayarlanmamış.'}
<:ok:909555365056753755> **Mute Süresi**: ${Database.MuteDurationMinute ?""+Database.MuteDurationMinute+" Dakika." : '60'}
<:ok:909555365056753755> **Log Kanalı**: ${Database.PunishLogChannelID ? "<#"+Database.PunishLogChannelID+">" : 'Log kanalı ayarlanmamış.'}

<a:hologram:907617268173783060> Komutları ve kullanımlarını görmek için \`${config.Prefix}komutlar\` yazabilirsin.
<a:hologram:907617268173783060> Botu sunucuna eklemek/davet etmek için \`${config.Prefix}davet\` yazabilirsin.
<a:hologram:907617268173783060> Destek sunucusuna katılmak için \`${config.Prefix}destek\` yazabilirsin.
<a:hologram:907617268173783060> Bot top.gg üzerinden oy verip destek olmak için \`${config.Prefix}oy\` yazabilirsin. 
  `)).catch(() => {}); }

        if(!Database) {
            message.channel.send(new MessageEmbed()
                .setColor("#5865F2")
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setThumbnail(client.user.avatarURL())
                .setTimestamp()
                .setDescription(`
<a:ayar:909561268128591872> **Ayarlamalar:**
<:ok:909555365056753755> **Karakter Limit:** <:kapali:909505750211125358>
<:ok:909555365056753755> **Davet Koruma:** <:kapali:909505750211125358>
<:ok:909555365056753755> **Link Koruma:** <:kapali:909505750211125358>
<:ok:909555365056753755> **Çoklu Etiket Koruma:** <:kapali:909505750211125358>
<:ok:909555365056753755> **Küfür Koruma:** <:kapali:909505750211125358>
<:ok:909555365056753755> **Spam Koruma:** <:kapali:909505750211125358>

<a:ayar:909561268128591872> **Beyazliste:**
<:ok:909555365056753755> Beyazliste'de ki üyeler: **Beyazliste'de hiç üye yok.**
<:ok:909555365056753755> Beyazliste'de ki roller: **Beyazliste'de hiç rol yok.**
<:ok:909555365056753755> Beyazliste'de ki kanallar: **Beyazliste'de hiç kanal yok.**

<a:hologram:907617268173783060> Komutları ve kullanımlarını görmek için ${config.Prefix}komutlar yazabilirsin.
<a:hologram:907617268173783060> Botu sunucuna eklemek/davet etmek için ${config.Prefix}davet yazabilirsin.
<a:hologram:907617268173783060> Destek sunucusuna katılmak için ${config.Prefix}destek yazabilirsin.
<a:hologram:907617268173783060> Bot top.gg üzerinden oy verip destek olmak için ${config.Prefix}oy yazabilirsin.
`)).catch(() => {}); }

    }
    if(command.toLowerCase() === 'komutlar') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setTitle('<:yan:909473876981977118> Chat Guard Komutları')
            .setFooter(`${message.author.tag} tarafından istendi.`)
            .setTimestamp()
            .setDescription(`
:star: Yardım için \`${config.Prefix}yardım\` yazabilirsin.
:star: Sunucunun durumunu görmek için: \`${config.Prefix}sunucudurumu\`

<:bosluk:909565384775065670> <a:ayar:909561268128591872> **Ayarlamalar:**
<:ok:909555365056753755> Beyaz liste için: \`${config.Prefix}beyazliste [ekle/kaldır] [Rol/kanal/üye](etiket/id)\`
<:ok:909555365056753755> Filtre için: \`${config.Prefix}filtre [ekle/kaldır] [kelime]\`
<:ok:909555365056753755> Mute rolünü ayarlamak için: \`${config.Prefix}muterolü @rol [etiket/id] \`
<:ok:909555365056753755> Mute süresini ayarlamak için: \`${config.Prefix}mutesüre 10 [Süreyi dakika cinsinden girin] \`
<:ok:909555365056753755> Log kanalını ayarlamak için: \`${config.Prefix}logkanalı #kanal [etiket/id\`

<:bosluk:909565384775065670> <a:ayar:909561268128591872> **Korumalar:**
<:ok:909555365056753755> Ceza kaldırmak için: \`${config.Prefix}cezakaldır @kullanıcı [etiket/id] \`  
<:ok:909555365056753755> Uzun yazı engel için: \`${config.Prefix}karakterlimit [aç/kapat] \`
<:ok:909555365056753755> Sunucu davet linki engel: \`${config.Prefix}davetkoruma [aç/kapat] \`
<:ok:909555365056753755> Link engel için: \`${config.Prefix}linkkoruma [aç/kapat] \`
<:ok:909555365056753755> Çoklu etiket engel için: \`${config.Prefix}çokluetiket [aç/kapat] \`
<:ok:909555365056753755> Küfür engel için: \`${config.Prefix}küfürkoruma [aç/kapat] \`
<:ok:909555365056753755> Spam engel için: \`${config.Prefix}spamkoruma [aç/kapat] \`

<:bosluk:909565384775065670> <a:ayar:909561268128591872> **Bot Hakkında:**
<a:hologram:907617268173783060> Botu sunucuna eklemek/davet etmek için \`${config.Prefix}davet\` yazabilirsin.
<a:hologram:907617268173783060> Destek sunucusuna katılmak için \`${config.Prefix}destek\` yazabilirsin.
<a:hologram:907617268173783060> Bot top.gg üzerinden oy verip destek olmak için \`${config.Prefix}oy\` yazabilirsin. 
    `)).catch(() => {});
    }
    if(command.toLowerCase() === 'yardım') {
        message.channel.send(new MessageEmbed()
            .setColor("#5865F2")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setTitle('<:yan:909473876981977118> Chat Guard Komutları')
            .setFooter(`${message.author.tag} tarafından istendi.`)
            .setTimestamp()
            .setDescription(`
:star: Komutlar için \`${config.Prefix}komutlar\` yazabilirsin.
:star: Sunucunun durumunu görmek için: \`${config.Prefix}sunucudurumu\`

<:bosluk:909565384775065670> <a:ayar:909561268128591872> **Ayarlamalar:**
<:ok:909555365056753755> Beyaz liste için: \`${config.Prefix}beyazliste [ekle/kaldır] [Rol/kanal/üye](etiket/id)\`
<:ok:909555365056753755> Filtre için: \`${config.Prefix}filtre [ekle/kaldır] [kelime]\`
<:ok:909555365056753755> Mute rolünü ayarlamak için: \`${config.Prefix}muterolü @rol [etiket/id] \`
<:ok:909555365056753755> Mute süresini ayarlamak için: \`${config.Prefix}mutesüre 10 [Süreyi dakika cinsinden girin] \`
<:ok:909555365056753755> Log kanalını ayarlamak için: \`${config.Prefix}logkanalı #kanal [etiket/id\`

<:bosluk:909565384775065670> <a:ayar:909561268128591872> **Korumalar:**
<:ok:909555365056753755> Ceza kaldırmak için: \`${config.Prefix}cezakaldır @kullanıcı [etiket/id] \`  
<:ok:909555365056753755> Uzun yazı engel için: \`${config.Prefix}karakterlimit [aç/kapat] \`
<:ok:909555365056753755> Sunucu davet linki engel: \`${config.Prefix}davetkoruma [aç/kapat] \`
<:ok:909555365056753755> Link engel için: \`${config.Prefix}linkkoruma [aç/kapat] \`
<:ok:909555365056753755> Çoklu etiket engel için: \`${config.Prefix}çokluetiket [aç/kapat] \`
<:ok:909555365056753755> Küfür engel için: \`${config.Prefix}küfürkoruma [aç/kapat] \`
<:ok:909555365056753755> Spam engel için: \`${config.Prefix}spamkoruma [aç/kapat] \`

<:bosluk:909565384775065670> <a:ayar:909561268128591872> **Bot Hakkında:**
<a:hologram:907617268173783060> Botu sunucuna eklemek/davet etmek için \`${config.Prefix}davet\` yazabilirsin.
<a:hologram:907617268173783060> Destek sunucusuna katılmak için \`${config.Prefix}destek\` yazabilirsin.
<a:hologram:907617268173783060> Bot top.gg üzerinden oy verip destek olmak için \`${config.Prefix}oy\` yazabilirsin. 
    `)).catch(() => {});
    }
   
    if(command.toLowerCase() === 'beyazliste') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);



        if(!args[0]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: **'+config.Prefix+'beyazliste ekle/kaldır id/etiket (rol/kanal/kullanıcı)**'));

        if (args[0] === 'ekle' || args[0] === 'add' ) {
           
            var member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
            var role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
            var channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
            if(!member && !role && !channel) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: **'+config.Prefix+'beyazliste ekle/kaldır id/etiket (rol/kanal/kullanıcı)**')).catch(() => {});

        
            if(member){   
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (Database && Database.WhiteListMembers.includes(member.user.id)) return message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye zaten beyazliste\'de bulunmakta')).catch(() => {});
        
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $push: { WhiteListMembers: member.user.id } }, { upsert: true });
                return message.channel.send(embed.setDescription('<:onay:909504199992168468> **<@'+member.user.id+'>**, İsimli üye başarıyla beyaliste\'ye eklendi'));}
      
            if(role) { 
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (Database && Database.WhiteListRoles.includes(role.id))  return message.channel.send(embed.setDescription('**<@&'+role.id+'>**, İsimli Rol zaten beyazliste\'de bulunmakta')).catch(() => {});
          
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $push: { WhiteListRoles: role.id } }, { upsert: true });
                return message.channel.send(embed.setDescription('<:onay:909504199992168468> **<@&'+role.id+'>**, İsimli rol başarıyla beyaliste\'ye eklendi'));}
      
            if(channel) { 
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (Database && Database.WhiteListChannels.includes(channel.id)) return message.channel.send(embed.setDescription('**<#'+channel.id+'>**, İsimli kanal zaten beyazliste\'de bulunmakta')).catch(() => {});
      
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $push: { WhiteListChannels: channel.id } }, { upsert: true });
                return message.channel.send(embed.setDescription('<:onay:909504199992168468> **<#'+channel.id+'>**, İsimli kanal başarıyla beyazliste\'ye eklendi')).catch(() => {});}
        }
        if (args[0] === 'remove' || args[0] === 'kaldır' ) {

            var member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
            var role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
            var channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
            if(!member && !role && !channel) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: **'+config.Prefix+'beyaliste ekle/kaldır id/etiket (rol/kanal/kullanıcı)**')).catch(() => {});

            if(member){   
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (!Database || !Database.WhiteListMembers.includes(member.user.id)) return message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye zaten beyazliste\'de değil.')).catch(() => {});
       
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { WhiteListMembers: member.id } } );
                return message.channel.send(embed.setDescription('<:onay:909504199992168468> **<@'+member.user.id+'>**, İsimli üye başarıyla beyaliste\'den kaldırıldı.')).catch(() => {});}
     
            if(role) { 
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (!Database || !Database.WhiteListRoles.includes(role.id)) return message.channel.send(embed.setDescription('**<@&'+role.id+'>**, İsimli rol zaten beyazliste\'de değil.')).catch(() => {});
         
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { WhiteListRoles: role.id } } );
                return message.channel.send(embed.setDescription('<:onay:909504199992168468> **<@&'+role.id+'>**, İsimli rol başarıyla beyaliste\'den kaldırıldı.'));}
     
            if(channel) { 
                const Database = await db.findOne({ ServerID: message.guild.id });
                if (!Database || !Database.WhiteListChannels.includes(channel.id)) return message.channel.send(embed.setDescription('**<#'+channel.id+'>**, İsimli kanal zaten beyazliste\'de değil.'));
     
                await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { WhiteListChannels: channel.id }});
                return message.channel.send(embed.setDescription('<:onay:909504199992168468> **<#'+channel.id+'>**, İsimli kanal başarıyla beyaliste\'den kaldırıldı.')).catch(() => {});}
        }
    }
    if(command.toLowerCase() === 'filtre') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: '+config.Prefix+'filtre ekle/kaldır kelime')).catch(() => {});
   
        if (args[0] === 'ekle' || args[0] === 'add' ) {
            if (!args[1]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: '+config.Prefix+'filtre ekle/kaldır kelime')).catch(() => {});
            const Database = await db.findOne({ ServerID: message.guild.id });    
            if (Database && Database.FiltredWords.includes(args[1]) === true) return message.channel.send(embed.setDescription('**'+args[1]+'**, Bu kelime zaten filtre\'de var.')).catch(() => {});

            await db.findOneAndUpdate({ ServerID: message.guild.id }, { $push: { FiltredWords: args[1] } }, { upsert: true });
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> **'+args[1]+'**, Başarıyla filtre\'ye eklendi.')).catch(() => {});
        }
   
        if (args[0] === 'kaldır' || args[0] === 'remove' ) {
            if (!args[1]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: '+config.Prefix+'filtre ekle/kaldır kelime')).catch(() => {});
            const Database = await db.findOne({ ServerID: message.guild.id });    
            if (!Database || Database.FiltredWords.includes(args[1]) !== true) return message.channel.send(embed.setDescription('**'+args[1]+'**, Bu kelime zaten filtre\'de değil.')).catch(() => {});
           
            await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { FiltredWords: args[1] }});
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> **'+args[1]+'**, Başarıyla filtre\'den kaldırıldı.')).catch(() => {}); }
    }
    if(command.toLowerCase() === 'muterolü') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        let MuteRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if(!MuteRole) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: **'+config.Prefix+'muterolü @rol/rol id**')).catch(() => {});
        await db.findOneAndUpdate({ ServerID: message.guild.id }, { $set: { MutedRoleID: MuteRole.id } });
        return message.channel.send(embed.setDescription('<:onay:909504199992168468> Başarıyla **<@&'+MuteRole+'>**, Rolü mute rolü olarak ayarlandı.')).catch(() => {});
    }
    if(command.toLowerCase() === 'logkanalı') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        let LogChannell = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if(!LogChannell) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: **'+config.Prefix+'logkanalı #kanal/kanal id**')).catch(() => {});
        await db.findOneAndUpdate({ ServerID: message.guild.id }, { $set: { PunishLogChannelID: LogChannell.id } });
        return message.channel.send(embed.setDescription('<:onay:909504199992168468> Başarıyla **<#'+LogChannell+'>**, kanalı log kanalı olarak ayarlandı.')).catch(() => {});
    }
    if(command.toLowerCase() === 'mutesüre') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if(!args[0] ||args[0] < 1) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: **'+config.Prefix+'mutesüre 15 (Süreyi dakika cinsinden giriniz.)**')).catch(() => {});
        await db.findOneAndUpdate({ ServerID: message.guild.id }, { $set: { MuteDurationMinute: args[0] } });
        return message.channel.send(embed.setDescription('<:onay:909504199992168468> Başarıyla mute süresi **'+args[0]+'**, dakika olarak ayarlandı.')).catch(() => {});
    }
    if(command.toLowerCase() === 'cezakaldır') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const Database = await db.findOne({ ServerID: message.guild.id });

        if(!member) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: **'+config.Prefix+'cezakaldır @user/user id**')).catch(() => {});

        if(!Database) return  message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye\'nin herhangi bir cezası bulunamadı.')).catch(() => {});

        if(Database.BlueListMembers.includes(member.user.id) === true) {
            await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { BlueListMembers: member.user.id } });
            return  message.channel.send(embed.setDescription('<:onay:909504199992168468> **<@'+member.user.id+'>**, İsimli üye\'nin uyarısı başarıyla kaldırıldı.')).catch(() => {});
        }
        
        if(Database.BlackListMembers.includes(member.user.id) === true) {
            await db.findOneAndUpdate({ ServerID: message.guild.id }, { $pull: { BlackListMembers: member.user.id } });
            const MuteRole = message.guild.roles.cache.find(role => role.id === Database.MutedRoleID);
            member.roles.remove(MuteRole).catch(() => {});

            return message.channel.send(embed.setDescription('<:onay:909504199992168468> **<@'+member.user.id+'>**, İsimli üye\'nin mutesi başarıyla kaldırıldı.')).catch(() => {});
        }
        if(Database.BlueListMembers.includes(member.user.id) === false || Database.BlackListMembers.includes(member.user.id) === false) return  message.channel.send(embed.setDescription('**<@'+member.user.id+'>**, İsimli üye\'nin herhangi bir cezası bulunamadı.')).catch(() => {});
    }
      

    if(command.toLowerCase() === 'karakterlimit') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: '+config.Prefix+'karakterlimit aç/kapat.')).catch(() => {});
        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.CharacterLimit == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { CharacterLimit: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> <@'+message.author.id+'>, **Karakter Limit** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.CharacterLimit == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.')).catch(() => {});
            await db.findOneAndUpdate({ServerID: message.guild.id}, { CharacterLimit: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> <@'+message.author.id+'>, **Karakter Limit** başarıyla kapatıldı.')).catch(() => {}); 
        }

    }
    if(command.toLowerCase() === 'davetkoruma') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: '+config.Prefix+'davetkoruma aç/kapat.')).catch(() => {});

        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.InviteGuard == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { InviteGuard: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> <@'+message.author.id+'>, **Davet koruması** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.InviteGuard == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.')).catch(() => {});
            await db.findOneAndUpdate({ServerID: message.guild.id}, { InviteGuard: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> <@'+message.author.id+'>, **Invite koruması** başarıyla kapatıldı.')).catch(() => {});
        }

    }
    if(command.toLowerCase() === 'linkkoruma') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: '+config.Prefix+'linkkoruma aç/kapat.')).catch(() => {});

        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.LinkGuard == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { LinkGuard: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> <@'+message.author.id+'>, **Link koruması** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.LinkGuard == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.')).catch(() => {});
            await db.findOneAndUpdate({ServerID: message.guild.id}, { LinkGuard: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> <@'+message.author.id+'>, **Link koruması** başarıyla kapatıldı.')).catch(() => {});
        }

    }
    if(command.toLowerCase() === 'çokluetiket') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Aar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: '+config.Prefix+'çokluetiket aç/kapat.')).catch(() => {});

        const Database = await db.findOne({ServerID: message.guild.id});
        if(args[0] === 'aç') {
            if(Database && Database.MassPingGuard == true) return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten açık.')).catch(() => {});

            await db.findOneAndUpdate({ServerID: message.guild.id}, { MassPingGuard: true }, {upsert: true});
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> <@'+message.author.id+'>, **Etiket koruması** başarıyla açıldı.')).catch(() => {});
        }

        if(args[0] === 'kapat') {
            if(!Database || Database.MassPingGuard == false)  return message.channel.send(embed.setDescription('<@'+message.author.id+'>, Bu Koruma zaten kapalı.'));
            await db.findOneAndUpdate({ServerID: message.guild.id}, { MassPingGuard: false }, {upsert: true});
            return message.channel.send(embed.setDescription('<:onay:909504199992168468> <@'+message.author.id+'>, **Etiket koruması** başarıyla kapatıldı.')).catch(() => {});   
        }

    }
    if(command.toLowerCase() === 'küfürkoruma') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: '+config.Prefix+'küfürkoruma aç/kapat.')).catch(() => {});

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
    if(command.toLowerCase() === 'spamkoruma') {
        if(config.BotOwners.includes(message.member.id) === false && !message.member.hasPermission(8)) return message.channel.send(`<a:red:909521226207203338> Ayar komutlarını kullanabilmen için yönetici olman gerek.`);

        if (!args[0]) return message.channel.send(embed.setDescription('<a:red:909521226207203338> Örnek kullanım: '+config.Prefix+'spamkoruma aç/kapat.')).catch(() => {});

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
