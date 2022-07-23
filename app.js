const { Client, GatewayIntentBits } = require('discord.js');

const client = global.client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.MessageContent,
      ],
});

require('./src/login');

setTimeout(() => {
 require('./src/events');
 require('./src/commands');
}, 3000);
