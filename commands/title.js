const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let target = message.member || message.guild.members.get(args[0]);
  let inputRole = (args.join()).toLowerCase();
  if(!inputRole) return message.reply("You must enter your rank");
  let role = message.guild.roles.find(`name`, inputRole);
  if(!role) return message.reply("Sorry, couldn't find that rank");

  if(target.roles.has(role.id)) return message.reply(`Your title is already ${role.name}`);
  if(target.roles.size>0){
    await(target.removeRoles(target.roles.map(role=>role.id)))
    }
  await(target.addRole(role))
  message.channel.send(`Congratulations to ` + target + `! You have successfully changed your rank to ${role.name}!`)
}



module.exports.help = {
  name: "title"
}
