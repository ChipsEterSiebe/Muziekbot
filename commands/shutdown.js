const Discord = require('discord.js');
 const client = new Discord.Client();

client.login(process.env.token);



client.on('message', message => {

    if (message.content.startsWith('/shutdown')) {

        if (!message.author.id == 365099695992864788) return;

        process.exit();

    }
 });