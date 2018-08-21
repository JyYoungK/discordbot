const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("./botconfig.json");
const fs = require("fs");
const PREFIX = "askbot: ";
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("tutorials on how to become a better bot", {type: "WATCHING"});
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

bot.on("guildMemberAdd", async member => {
  await member.send(" Welcome to Rose Garden "+ member.toString() +  " :heart_eyes:"
   + ". First of all, there are a lot of things going on here. It's like vines and roses! :rose: " +
   "In this channel you can witness people earning EXP, changing roles, playing custom games" +
   ", becoming a VIP and you can do it too! PHEW :laughing: Well, I can answer all these questions for you! All you have to do is " +
   "Type: `askbot: info` to seek help" + " in the 'lets-talk' channel. If you have any " +
 "other questions :thinking: , feel free to ask anyone or Admin! Okay enough talking, go ahead and invite your friends over and start gaming! " +
 "Don't forget to say hi and add me on League if you do play :) - `Chocolate Rose` See you around in the channel, have fun!!! :stuck_out_tongue_closed_eyes: ");

  member.guild.channels.find("name", "welcome").send(" Hey everyone please welcome "+ member.toString()
   + " for joining our channel! It's nice to see you here. Have a good time! :) ")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if (message.content == "Hello".toLowerCase() || message.content == "Hi".toLowerCase()) {
    message.channel.send("Hi there! I am a bot! :)")};
  if (message.content == "How are you".toLowerCase() || message.content == "how are u".toLowerCase()) {
    message.channel.send("Well I am a bot, so I am always happy! :)")};

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  var args2 = message.content.substring(PREFIX.length).split(" ");

    switch (args2[0].toLowerCase()) {

      case "roles":
           message.channel.send('Go to "demand-new-title" and type your Rank position after `!title`. For example if you are in Silver, type `!title Silver`' ).then(msg => {msg.delete(60000)});
           break;

      case "ask":
          if (args2[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
          else message.channel.send("Sorry I can't read that.");
          break;

      case "info":
            message.channel.send("Hi! I'm a programmed bot by Chocolate Rose");
            message.channel.send("Here are useful functions you can ask me");
            var embed = new Discord.RichEmbed()
              .addField("askbot: info", "Shows all the functions I can do!", true)
              .addField("askbot: noticeme", "I will give you attention!!", true)
              .addField("askbot: roles", "Explains you how to change your role!", true)
              //.addField("askbot: EXP", "Explains you how to earn EXP", true)
              //.addField("askbot: VIP", "Explains you on how to become a VIP member", true)
              .addField("askbot: reports", "Explains you about the report system", true)
              .setColor(0xff5700)
              .setFooter("This message will be deleted in 1 minute")
              .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed).then(msg => {msg.delete(60000)});
            break;

      case "noticeme":
          message.channel.send(message.author.toString() + " Sorry! I missed you!");
          break;
    }

     // default:
         // message.channel.send("Invalide Command");
   
});

bot.login(process.env.BOT_TOKEN);
