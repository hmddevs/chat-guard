const {  ActivityType, ApplicationCommandType, ApplicationCommandOptionType, Routes  } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { connect } = require('mongoose');
const config = require('./config');
const client = global.client;

connect(config["MongoDB_ConnectURL"], { useNewUrlParser: true, useUnifiedTopology: true,})
.catch(() => console.log('ERROR - Connecting to MongoDB.'));

client.login(config["Client_Token"])
.catch(() => console.log('ERROR - Connecting to Discord API.'));

client.on('ready', async () => { 
 client.user.setPresence({ status: "idle", activities: [{ name: config["BotStatus"], type: ActivityType.Watching }], }); 
 console.log('PASS - Connected to Discord API as '+ client.user.tag +'.');

const commands = new Array();
// commands command
commands.push({
    name: 'commands',
    description: "Shows the bot's command list.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
// privacy command
commands.push({
    name: 'privacy',
    description: "Shows the bot's privacy policy.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
// invite command
commands.push({
    name: 'invite',
    description: "Shows the bot's repository and documentation links.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
// info command
commands.push({
    name: 'info',
    description: "Allows you to view the bot's information.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});

// settings command
commands.push({
    name: 'settings',
    description: "Allows you to view the server's Chat Guard settings.",
    type:  ApplicationCommandType.ChatInput,
    options: null,
});
// logchannel command
commands.push({
    name: 'logchannel',
    description: "Allows you to set the channel where logs will be sent.",
    type:  ApplicationCommandType.ChatInput,
    options: [{
          type: ApplicationCommandOptionType.Channel,
          name: "channel",
        description: "You must specify a channel.",
          required: true
  }],
});
// muteduration command
commands.push({
    name: 'muteduration',
    description: "Allows you to set the mute duration.",
    type:  ApplicationCommandType.ChatInput,
    options: [{
          type: ApplicationCommandOptionType.Number,
          name: "time",
        description: "You must specify a time in minutes.",
          required: true
  }],
});
// filter command
commands.push({
    name: 'filter',
    description: "Allows you to set the filter settings.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
        name: "options",
        type: ApplicationCommandOptionType.String,
        choices: [ { name: 'add', value: 'add' }, { name: 'remove', value: 'remove' } ],
        description: "You must specify an option.",
        required: true
        },
        {
          type: ApplicationCommandOptionType.String,
          name: "word",
        description: "You must specify a word.",
          required: true
          }],
});
// whitelist command
commands.push({
    name: 'whitelist',
    description: "Allows you to whitelist users, roles or channels.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
        name: "options",
        type: ApplicationCommandOptionType.String,
        choices: [ { name: 'add', value: 'add' }, { name: 'remove', value: 'remove' } ],
        description: "You must specify an option.",
        required: true
        },
        {
          type: ApplicationCommandOptionType.String,
          name: "id",
        description: "You must specify an user, role or channel ID.",
          required: true
          }],
});
// characterlist command
commands.push({
    name: 'characterlimit',
    description: "Allows you to set the character limit.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "options",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'enable', value: 'enable' }, { name: 'disable', value: 'disable' } ],
            description: "You must specify an option.",
            required: true
        }],
});

// inviteblock command
commands.push({
    name: 'inviteblock',
    description: "Allows you to set the invite block settings.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "options",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'enable', value: 'enable' }, { name: 'disable', value: 'disable' } ],
            description: "Bir seçenek seçmelisin.",
            required: true
        }],
});
// linkblock command
commands.push({
    name: 'linkblock',
    description: "Allows you to set the link block settings.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "options",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'enable', value: 'enable' }, { name: 'disable', value: 'disable' } ],
            description: "You must specify an option.",
            required: true
        }],
});
// mentionblock command
commands.push({
    name: 'massmentionblock',
    description: "Allows you to set the mass-mention block settings.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "options",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'enable', value: 'enable' }, { name: 'disable', value: 'disable' } ],
            description: "You must specify an option.",
            required: true
        }],
});
// badwordblock command
commands.push({
    name: 'badwordblock',
    description: "Allows you to set the badword block settings.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "options",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'enable', value: 'enable' }, { name: 'disable', value: 'disable' } ],
            description: "You must specify an option.",
            required: true
        }],
});
// spamblock command
commands.push({
    name: 'spamblock',
    description: "Allows you to set the spam block settings.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
            name: "options",
            type: ApplicationCommandOptionType.String,
            choices: [ { name: 'enable', value: 'enable' }, { name: 'disable', value: 'disable' } ],
            description: "You must specify an option.",
            required: true
        }],
});
// unmute command
commands.push({
    name: 'unmute',
    description: "Allows you to unmute a member.",
    type:  ApplicationCommandType.ChatInput,
    options: [
        {
          type: ApplicationCommandOptionType.User,
          name: "member",
          description: "You must specify a member.",
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

