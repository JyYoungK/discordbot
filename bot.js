const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("botconfig.json");
const fs = require("fs");
const PREFIX = "askbot: ";
bot.commands = new Discord.Collection();
//let cooldown = new Set();
//let cdseconds = 5;

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
  bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "welcome").send(" Welcome to League Discord Channel "+ member.toString()
   + ". Your role has been automatically set to unranked. Type: `askbot: info` to seek help!")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if (message.content == "Hello" || message.content == "hi" || message.content == "hello" || message.content == "Hi") {
    message.channel.send("Hi there! I am a bot! :)")};

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  var args2 = message.content.substring(PREFIX.length).split(" ");

    switch (args2[0].toLowerCase()) {
      case "help":
          message.channel.send("Hi! How can I help you?");
          break;

      case "roles":
           message.channel.send('Go to "demand-new-title" and type your Rank position after `!`. For example if you are in Silver, type `!Silver`' );
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

      case "noticeme":
          message.channel.send(message.author.toString() + " Sorry! I missed you!");
          break;

      default:
          message.channel.send("Invalide Command");
      }

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
});

client.login(process.env.BOT_TOKEN);
