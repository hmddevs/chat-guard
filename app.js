const { Client } = require('discord.js');

const client = global.client = new Client({ disableEveryone: true});
const process = global.process;


client.on('guildCreate', async guild => { client.channels.get('898935076207870012').send(`${guild}, isimli sunucuya eklendim!`)})
// atıldım
client.on('guildDelete', async guild => { client.channels.get('898935076207870012').send(`${guild}, isimli sunucudan atıldım.. :(`)})
 

require('./src/login');
require('./src/events');
require('./src/commands');

 
