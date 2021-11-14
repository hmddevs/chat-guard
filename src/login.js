const { connect } = require('mongoose');
const { MongoDB_ConnectURL, Client_Token, Custom_Status, Custom_Status_Text, Custom_Status_Type} = require('./config');
const client = global.client;

connect(MongoDB_ConnectURL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false })
    .catch(() => console.log('HATA - Database\'e bağlanılamadı.'));

client.login(Client_Token)
    .catch(() => console.log('HATA - API\'ye bağlanılamadı.'));

client.on('ready', async () => { 

    client.user.setPresence({ activity: { name: Custom_Status_Text }, type: Custom_Status_Type, status: Custom_Status })
        .then(console.log('SORUNSUZ - '+ client.user.tag +' ismiyle API\'ye bağlanıldı ve bot hazır durumda.'))
        .catch(() => console.log('UYARI - Belirsiz bir hata ile karşılaşıldı.'));

}); 

