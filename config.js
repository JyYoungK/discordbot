module.exports = {
  /**
   * Instructions on how to get this: https://redd.it/40zgse
   */
  //yourID: "@374418803397754881",

  setupCMD: "createrole",
  /**
   * Delete the 'setupCMD' command after it is ran. Set to 'true' for the command message to be deleted
   */
  deleteSetupCMD: false,

  initialMessage: `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`,

  embedMessage: `
	Pick your favorite historical figure. Pick one only.

	If you would like to remove or change the role, simply remove your reaction!
	`,

  /**
   * Must set this if "embed" is set to true
   */
  embedFooter: "Role Reactions",

  roles: [
	"Abraham Lincoln",
	"Ada Lovelace",
	"Adam Smith",
	"Adolf Hitler",
	"Albert Einstein",
	"Alexander Hamilton"
//     "Rosa 'Juliet'",
//     "Rosa 'Queen Elizabeth'",
//     "Rosa 'Veilchenblau'",
//     "Rosa 'Blue Moon'",
//     "Rosa 'Viridiflora'",
//     "Rosa 'Sunsprite'",
//     "Rosa 'Early Grey'",
//     "Rosa 'Macchiato'",
//     "Rosa 'Halfeti'"
  ],

  /**
   * For custom emojis, provide the name of the emoji
   */
  reactions: [
       "<:Abraham:735895333288017933>",
       "<:Ada:735895333455790092>",
       "<:Adam:735895333288280164>",
       "<:Adolf:735895333460246528>",
       "<:Alexander:735895333631950898>",
       "<:Albert:735895333275697223>"

//     "<:Challenger:657740931587375105>",
//     "<:Grandmaster:657740930664890371>",
//     "<:Master:657740931088384038>",
//     "<:Diamond:657740931562340353>",
//     "<:Platinum:657740930866217016>",
//     "<:Gold:657740931453419540>",
//     "<:Silver:657740930723610660>",
//     "<:Bronze:657740931499294730>",
//     "<:Iron:657740931159556116>"
  ],

  /**
   * Set to "true" if you want all roles to be in a single embed
   */
  embed: true,

  /**
   * Set the embed color if the "embed" variable is et to "true"
   * Format:
   *
   * #dd9323
   */
  embedColor: "#dd9323",

  /**
   * Set to "true" if you want to set a thumbnail in the embed
   */
  embedThumbnail: false,

  /**
   * The link for the embed thumbnail if "embedThumbnail" is set to true
   */
  embedThumbnailLink: "",
};

