const Discord = require('discord.js');
const bot = new Discord.Client();
const yourID = "374418803397754881"; 
const botconfig = require("./botconfig.json");
const fs = require("fs");
const PREFIX = "askbot: ";
const setupCMD = "!roles"
const roles = ["Testing", "S9 Iron", "S9 Bronze", "S9 Silver", "S9 Gold", "S9 Platinum", "S9 Diamond"];
const reactions = ["💻"];
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

  member.guild.channels.find("name", "welcome").send(" Hey everyone! Please welcome "+ member.toString()
   + " for joining our channel! It's nice to see you here. Have a good time! :) ")
});

let initialMessage = `**React to the messages below to receive the new associated role for S9. If you would like to remove the role, simply remove your reaction!**`;

function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    return messages;
}

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

  if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
      var toSend = generateMessages();
      let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
      for (let mapObj of mappedArray){
          message.channel.send(mapObj[0]).then( sent => {
              if (mapObj[1]){
                sent.react(mapObj[1]);
              }
          });
      }
  }

  var args2 = message.content.substring(PREFIX.length).split(" ");

    switch (args2[0].toLowerCase()) {

      case "roles":
           message.channel.send('Go to "service" and type your Rank position after `!title`. For example if you are in Silver, type `!title Silver`' ).then(msg => {msg.delete(60000)});
           break;

      case "ask":
          if (args2[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
          else message.channel.send("Sorry I can't read that.");
          break;

      case "info":
            message.channel.send("Hi! I'm a programmed bot by Chocolate Rose").then(msg => {msg.delete(60000)});
            message.channel.send("Here are useful functions you can ask me").then(msg => {msg.delete(60000)});
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
            message.channel.send(embed).then(msg => {msg.delete(60000)});
            break;

      case "noticeme":
          message.channel.send(message.author.toString() + " Sorry! I missed you!");
          break;
    }
});

bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){

        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);

        if (msg.author.id == bot.user.id && msg.content != initialMessage){

            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];

            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);

                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
    }
});

bot.login(process.env.BOT_TOKEN);
