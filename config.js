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
	"Adolf Hitler",
	"Albert Einstein",
	"Alexander Hamilton",
	  "Andrew Jackson",
	  "Benjamin Franklin",
	  "Charles Darwin",
	  "Christopher Columbus",
	  "Cleopatra",
	  "Frederick Douglass",
	  "Galileo Galilei",
	  "George Washington",
	  "Helen Keller",
	  "Isaac Newton",
	  "John Adams",
	  "Leonardo da Vinci",
	  "Louis Armstrong",
	  "Ludwig Van Beethoven",
	  "Mahatma Gandhi",
	  "Marco Polo",
	  "Martin Luther King Jr",
	  "Napoleon Bonaparte",
	  "Queen Elizabeth",
	  "Thomas Edison",
	  "William Shakespeare",
	  
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
       "<:Adolf:735895333460246528>",
       "<:Alexander:735895333631950898>",
       "<:Albert:735895333275697223>",
       "<:Andrew:735895333787140126>",
       "<:Benjamin:735895333267177512>",
       "<:Charles:735895333099405313>",
	"<:Christopher:735895333405720596>",
	  "<:Cleopatra:735895333384486963>",
	  "<:Fredrick:735895333363777658>",
	  "<:Galileo:735895333393006624>",
	  "<:George:735895333434818631>",
	  "<:Helen:735895333401526313>",
	  "<:Isaac:735895333363515495>",
	  "<:John:735895333229297686>",
	  "<:Leonardo:735895333522898964>",
	  "<:Louis:735895333715837098>",
	  "<:Ludwig:735895333426692097>",
	  "<:Mahatma:735895333602852937>",
	  "<:Marco:735895333799854120>",
	  "<:Martin:735895333636145295>",
	  "<:Napoleon:735895333711642644>",
	  "<:QueenElizabeth:735895333556715622>",
	  "<:Thomas:735895333766168619>",
	  "<:William:735895333367709729>",
	  

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

