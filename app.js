const { Client } = require('discord.js');

const client = global.client = new Client({ disableEveryone: true});
const process = global.process;


const { MessageEmbed } = require("discord.js") 
const moment = require("moment") 
const embed = new MessageEmbed().setColor("BLUE").setAuthor("Yeni Sunucuya Eklendi.") 
client.on('guildCreate', (guild) => {
const kurucu = guild.owner.id
client.users.cache.get("387675598044135436").send(embed.setDescription(`Sunucu İsmi: ${guild.name}\nSunucu Linki: ${guild.invite.create}\nSunucunun Kişi Sayısı: ${guild.memberCount}\n Sunucu Sahibi Id: ${kurucu}\nSunucu Sahibi: <@${kurucu}>\nYaklaşık Ekleme Tarihi: ${moment(Date.now()).locale("tr").format("LLL")}`).setFooter("Bot Sunucu Log"))
});

require('./src/login');
require('./src/events');
require('./src/commands');

 
