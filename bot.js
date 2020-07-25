// Import constructors, configuration and login the client
const { Emoji, MessageReaction, RichEmbed} = require("discord.js");
const Discord = require('discord.js');
const bot = new Discord.Client();
const yourID = "374418803397754881";
const CONFIG = require("./config");
const fs = require("fs");
const PREFIX = "askbot: ";

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("askbot: info", {type: "WATCHING"});
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

bot.on("guildMemberAdd", async member => {
  await member.send(" Welcome to Rose Garden :rose: "+ member.toString() +  " :heart_eyes:"
   + ". First thing you should do is to go to `https://discord.gg/MvMQP7` to claim your role! It will be very simple to do it. " + "If you have any questions, ask 'Chocolate Rose'! " +
 " See you around in the channel, have fun!!! :stuck_out_tongue_closed_eyes: ");
  
  member.addRole(member.guild.roles.find(role => role.name === "Citizen"));
  member.addRole(member.guild.roles.find(role => role.name === "Member Since 2020"));
  member.guild.channels.find("name", "welcome").send(" Hey everyone! Please welcome "+ member.toString()
   + " for joining our channel! It's nice to see you here. Have a good time! :) ")
});

// If there isn't a reaction for every role, alert the user
if (CONFIG.roles.length !== CONFIG.reactions.length)
  throw "Roles list and reactions list are not the same length! Please double check this in the config.js file";

// Function to generate the embed fields, based on your settings and if you set "const embed = true;"
function generateEmbedFields() {
  return CONFIG.roles.map((r, e) => {
    return {
      emoji: CONFIG.reactions[e],
      role: r
    };
  });
}
// Client events to let you know if the bot is online and to handle any Discord.js errors
bot.on("error", console.error);

bot.on("message", message => {
  if(message.author.bot) return;
  if (!message.guild) return;
  if(message.channel.type === "dm") return;
  if (message.content == "Hello".toLowerCase() || message.content == "Hi".toLowerCase()) {
    message.channel.send("Hi there! I am a bot! :)")};
  if (message.content == "How are you".toLowerCase() || message.content == "how are u".toLowerCase()) {
    message.channel.send("Well I am a bot, so I am always happy! :)")};

  // We don't want the bot to do anything further if it can't send messages in the channel
  if (message.guild && !message.channel.permissionsFor(message.guild.me).missing("SEND_MESSAGES"))
    return;

  if (CONFIG.deleteSetupCMD) {
    const missing = message.channel
      .permissionsFor(message.guild.me)
      .missing("MANAGE_MESSAGES");
    // Here we check if the bot can actually delete messages in the channel the command is being ran in
    if (missing.includes("MANAGE_MESSAGES"))
      throw new Error(
        "I need permission to delete your command message! Please assign the 'Manage Messages' permission to me in this channel!"
      );
    message.delete().catch(O_o => {});
  }

  if (message.author.id == yourID && message.content.toLowerCase() == CONFIG.setupCMD){
    const missing = message.channel
      .permissionsFor(message.guild.me)
      .missing("MANAGE_MESSAGES");
    // Here we check if the bot can actually add recations in the channel the command is being ran in
    if (missing.includes("ADD_REACTIONS"))
      throw new Error(
        "I need permission to add reactions to these messages! Please assign the 'Add Reactions' permission to me in this channel!"
      );

    if (!CONFIG.embed) {
      if (!CONFIG.initialMessage || CONFIG.initialMessage === "")
        throw "The 'initialMessage' property is not set in the config.js file. Please do this!";

      message.channel.send(CONFIG.initialMessage);
    } else {
      if (!CONFIG.embedMessage || CONFIG.embedMessage === "")
        throw "The 'embedMessage' property is not set in the config.js file. Please do this!";
      if (!CONFIG.embedFooter || CONFIG.embedMessage === "")
        throw "The 'embedFooter' property is not set in the config.js file. Please do this!";

      const roleEmbed = new RichEmbed()
        .setDescription(CONFIG.embedMessage)
        .setFooter(CONFIG.embedFooter);

      if (CONFIG.embedColor) roleEmbed.setColor(CONFIG.embedColor);

      if (CONFIG.embedThumbnail && CONFIG.embedThumbnailLink !== "")
        roleEmbed.setThumbnail(CONFIG.embedThumbnailLink);
      else if (CONFIG.embedThumbnail && message.guild.icon)
        roleEmbed.setThumbnail(message.guild.iconURL);

      const fields = generateEmbedFields();
      if (fields.length > 25)
        throw "That maximum roles that can be set for an embed is 25!";

      for (const { emoji, role } of fields) {
        if (!message.guild.roles.find(r => r.name === role))
          throw `The role '${role}' does not exist!`;

        const customEmote = bot.emojis.find(e => e.name === emoji);

        if (!customEmote) roleEmbed.addField(emoji, role, true);
        else roleEmbed.addField(customEmote, role, true);
      }

      message.channel.send(roleEmbed).then(async m => {
        for (const emoji of CONFIG.reactions) {
          const customCheck = bot.emojis.find(e => e.name === emoji);

          if (!customCheck)
            await m.react(bot.emojis.find(e => emoji.includes(e.id))); // this uses custom emojis
        }
      });
    }
  }

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  var args2 = message.content.substring(PREFIX.length).split(" ");

  switch (args2[0].toLowerCase()) {

    case "roles":
      message.channel
        .send(
          'Go to "service" channel and go to `claim-your-s9-rank` to claim your season 9 rank, go to `claim-your-position` to claim your role'
        )
        .then(msg => {
          msg.delete(60000);
        });
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

const events = {
  MESSAGE_REACTION_ADD: "messageReactionAdd",
  MESSAGE_REACTION_REMOVE: "messageReactionRemove"
};

// This event handles adding/removing users from the role(s) they chose based on message reactions
bot.on("raw", async event => {
  if (!events.hasOwnProperty(event.t)) return;

  const { d: data } = event;
  const user = bot.users.get(data.user_id);
  const channel = bot.channels.get(data.channel_id);

  const message = await channel.fetchMessage(data.message_id);
  const member = message.guild.members.get(user.id);

  const emojiKey = data.emoji.id
    ? `${data.emoji.name}:${data.emoji.id}`
    : data.emoji.name;
  let reaction = message.reactions.get(emojiKey);

  if (!reaction) {
    // Create an object that can be passed through the event like normal
    const emoji = new Emoji(bot.guilds.get(data.guild_id), data.emoji);
    reaction = new MessageReaction(
      message,
      emoji,
      1,
      data.user_id === bot.user.id
    );
  }

  let embedFooterText;
  if (message.embeds[0]) embedFooterText = message.embeds[0].footer.text;

  if (
    message.author.id === bot.user.id &&
    (message.content !== CONFIG.initialMessage ||
      (message.embeds[0] && embedFooterText !== CONFIG.embedFooter))
  ) {
    if (!CONFIG.embed && message.embeds.length < 1) {
      const re = `\\*\\*"(.+)?(?="\\*\\*)`;
      const role = message.content.match(re)[1];

      if (member.id !== bot.user.id) {
        const guildRole = message.guild.roles.find(r => r.name === role);
        if (event.t === "MESSAGE_REACTION_ADD") {
          member.removeRole(member.guild.roles.find(role => role.name === "Citizen"));
          member.addRole(member.guild.roles.find(role => role.name === "Talented Individual"));
          member.addRole(guildRole.id);
        }
        else if (event.t === "MESSAGE_REACTION_REMOVE")
          member.removeRole(guildRole.id);
      }
    } else if (CONFIG.embed && message.embeds.length >= 1) {
      const fields = message.embeds[0].fields;

      for (const { name, value } of fields) {
        if (member.id !== bot.user.id) {
          const guildRole = message.guild.roles.find(r => r.name === value);
          if (
            name === reaction.emoji.name ||
            name === reaction.emoji.toString()
          ) {
            if (event.t === "MESSAGE_REACTION_ADD"){
              member.removeRole(member.guild.roles.find(role => role.name === "Citizen"));
              member.addRole(member.guild.roles.find(role => role.name === "Talented Individual"));
              member.addRole(guildRole.id);
            }
            else if (event.t === "MESSAGE_REACTION_REMOVE")
              member.removeRole(guildRole.id);
          }
        }
      }
    }
  }
});

process.on("unhandledRejection", err => {
  const msg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
  console.error("Unhandled Rejection", msg);
});

bot.login(CONFIG.botToken);


bot.login(process.env.BOT_TOKEN);
