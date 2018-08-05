const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "askbot: ";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.login(process.env.BOT_TOKEN);
