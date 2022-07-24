const {  ActivityType, ApplicationCommandType, ApplicationCommandOptionType, Routes  } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { connect } = require('mongoose');
const config = require('./config');
const client = global.client;

connect(config["MongoDB_ConnectURL"], { useNewUrlParser: true, useUnifiedTopology: true,})
.catch(() => console.log('HATA - Database\'e bağlanılamadı.'));

client.login(config["Client_Token"])
.catch(() => console.log('HATA - API\'e bağlanılamadı.'));

client.on('ready', async () => { 
 client.user.setPresence({ status: "idle", activities: [{ name: config["BotStatus"], type: ActivityType.Watching }], }); 
 console.log('SORUNSUZ - '+ client.user.tag +' ismiyle API\'ye bağlanıldı ve bot hazır durumda.');

const commands = new Array();
 commands.push({
    name: 'gizlilik-politikasi',
    description: "Botun Gizlilik Politikasını gösterir.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
commands.push({
    name: 'davet',
    description: "Botu sunucuya davet etmeninizi sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});

commands.push({
    name: 'oy',
    description: "Bota oy vermeninizi sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
commands.push({
    name: 'cezakaldır',
    description: "Ceza alan üyenin cezasını kaldırmayı sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
          type: ApplicationCommandOptionType.User,
          name: "üye",
          description: "Bir üye belirtmelisin.",
          required: true
          }],
});
commands.push({
    name: 'info',
    description: "Botun değerlerini incelemeni sağlar. (Geliştirici Özel)",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
commands.push({
    name: 'komutlar',
    description: "Botun komutlarını listeler.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
commands.push({
    name: 'sunucudurumu',
    description: "Sunucunun Chat ayarlarını listeler.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
commands.push({
    name: 'yardım',
    description: "Botun doğru kullanım şeklini gösterir.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
commands.push({
    name: 'logkanalı',
    description: "Logların atılacağı kanalı ayarlamanı sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [{
          type: ApplicationCommandOptionType.Channel,
          name: "channel",
          description: "Bir kanal belirtmelisin.",
          required: true
  }],
});
commands.push({
    name: 'mutesüre',
    description: "Mute süresini belirtmeni sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [{
          type: ApplicationCommandOptionType.Number,
          name: "süre",
          description: "Dakika cinsinden bir süre belirtmelisin.",
          required: true
  }],
});
commands.push({
    name: 'filtre',
    description: "Filtreye Kelime eklemeyi sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
        name: "secim",
        type: ApplicationCommandOptionType.String,
        choices: [ { name: 'ekle', value: 'ekle' }, { name: 'kaldır', value: 'kaldır' } ],
        description: "Bir seçenek seçmelisin.",
        required: true
        },
        {
          type: ApplicationCommandOptionType.String,
          name: "word",
          description: "Bir kelime belirtmelisin.",
          required: true
          }],
});
commands.push({
    name: 'beyazliste',
    description: "Kullanıcıları Beyazlisteye alıp chat-guard engelini kaldırır.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
        name: "secim",
        type: ApplicationCommandOptionType.String,
        choices: [ { name: 'ekle', value: 'ekle' }, { name: 'kaldır', value: 'kaldır' } ],
        description: "Bir seçenek seçmelisin.",
        required: true
        },
        {
          type: ApplicationCommandOptionType.String,
          name: "id",
          description: "Bir id Belirtmelisin.",
          required: true
          }],
});
commands.push({
    name: 'karakterlimit',
    description: "Karakter limitinizi ayarlamanızı sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "secim",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'aç', value: 'aç' }, { name: 'kapat', value: 'kapat' } ],
            description: "Bir seçenek seçmelisin.",
            required: true
        }],
});
commands.push({
    name: 'davetkoruma',
    description: "Davet korumayı ayarlamanızı sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "secim",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'aç', value: 'aç' }, { name: 'kapat', value: 'kapat' } ],
            description: "Bir seçenek seçmelisin.",
            required: true
        }],
});
commands.push({
    name: 'linkkoruma',
    description: "Link korumayı ayarlamanızı sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "secim",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'aç', value: 'aç' }, { name: 'kapat', value: 'kapat' } ],
            description: "Bir seçenek seçmelisin.",
            required: true
        }],
});
commands.push({
    name: 'çokluetiket',
    description: "Çoklu Etiket korumayı ayarlamanızı sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "secim",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'aç', value: 'aç' }, { name: 'kapat', value: 'kapat' } ],
            description: "Bir seçenek seçmelisin.",
            required: true
        }],
});
commands.push({
    name: 'küfürkoruma',
    description: "Küfür korumayı ayarlamanızı sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "secim",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'aç', value: 'aç' }, { name: 'kapat', value: 'kapat' } ],
            description: "Bir seçenek seçmelisin.",
            required: true
        }],
});
commands.push({
    name: 'spamkoruma',
    description: "Spam korumayı ayarlamanızı sağlar.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "secim",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'aç', value: 'aç' }, { name: 'kapat', value: 'kapat' } ],
            description: "Bir seçenek seçmelisin.",
            required: true
        }],
});

const rest = new REST({ version: '10' }).setToken(client.token);
(async () => {
    try {
        await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
        } catch (error) { console.log(error); }
    })();




}); 

