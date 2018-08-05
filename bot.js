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

var fortunes = [
  "Yes",
  "No",
  "Maybe"
]

var bot = new Discord.Client();

bot.on("ready", function() {
   console.log("Ready");
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "lets-talk").send(" Welcome to League Discord Channel "+ member.toString())
 + '. Your role has been automatically set to unranked. Type: "askbot: info" to seek help!'
//  member.addRole(member.guild.roles.find("name", "Unranked"));
});

bot.on("message", function(message){

  if (message.author.equals(bot.user)) return;

  if (message.content.startsWith('!Bronze') || message.content.startsWith('!bronze')) {
  message.channel.send(message.author.toString() + " You have successfully changed your rank to Bronze!");
  message.member.addRole(message.member.guild.roles.find("name", "Bronze"));﻿}

  if (message.content.startsWith('!Silver') || message.content.startsWith('!silver')) {
  message.channel.send(message.author.toString() + " You have successfully changed your rank to Silver!");
  message.member.addRole(message.member.guild.roles.find("name", "Silver"));﻿}

  if (message.content.startsWith('!Gold') || message.content.startsWith('!gold')) {
  message.channel.send(message.author.toString() + " You have successfully changed your rank to Gold!");
  message.member.addRole(message.member.guild.roles.find("name", "Gold"));﻿}

  if (message.content.startsWith('!Platinum') || message.content.startsWith('!platinum')) {
  message.channel.send(message.author.toString() + " You have successfully changed your rank to Platinum!");
  message.member.addRole(message.member.guild.roles.find("name", "Platinum"));﻿}

  if (message.content.startsWith('!Diamond') || message.content.startsWith('!diamond')) {
  message.channel.send(message.author.toString() + " You have successfully changed your rank to Diamond!");
  message.member.addRole(message.member.guild.roles.find("name", "Diamond"));﻿}

  if (message.content.startsWith('!Master') || message.content.startsWith('!master')) {
  message.channel.send(message.author.toString() + " Sorry, you may not change your rank to this position. Contact admin for more info.");
  ﻿}

  if (message.content.startsWith('!Challenger') || message.content.startsWith('!challenger')) {
  message.channel.send(message.author.toString() + " Sorry, you may not change your rank to this position. Contact admin for more info.");
  ;﻿}

  if (message.content == "Hello" || message.content == "hi" || message.content == "hello" || message.content == "Hi") {
    message.channel.send("Hi there! I am a bot! :)")};

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "help":
        message.channel.send("Hi! How can I help you?");
        break;

    case "roles":
         message.channel.send('Go to "demand-new-title" and type your Rank position after "!". For example if you are in Silver, type "!Silver"' );
         break

    case "ask":
        if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.send("Sorry I can't read that.");
        break;

    case "info":
          message.channel.send("Hi! I'm a programmed bot by Chocolate Rose");
          message.channel.send("Here are useful functions you can ask me");
          var embed = new Discord.RichEmbed()
            .addField("askbot: info", "Shows all the functions I can do!", true)
            .addField("askbot: noticeme", "I will give you attention!", true)
            .addField("askbot: roles", "I will tell you how to change your role!", true)
            //.addField("askbot: ", "Test Description", true)
            //.setColor(0x00FFFF)
            .setColor(0x00FFFF)
            .setFooter("This message was pretty cool right?")
            .setThumbnail(message.author.avatarURL)
          //  .setDesciption("Hello, this is an awesome embed");
          message.channel.sendEmbed(embed);
          break;

    /*case "accept":
            message.member.addRole(message.member.guild.roles.find("name", "Silver"));﻿
            break;*/

    case "noticeme":
        message.channel.send(message.author.toString() + " Sorry! I missed you!");
        break;

    default:
        message.channel.send("Invalide Command");
    }

});

client.login(process.env.BOT_TOKEN);
