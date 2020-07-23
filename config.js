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
	"Alexander Hamilton",
	  "Andrew Jackson",
	  "Benjamin Franklin",
	  "Charles Darwin",
	  "Christopher Columbus",
	  "Cleopatra",
	  "Eleanor Roosevelt",
	  "Franklin D. Roosevelt",
	  "Frederick Douglass",
	  "Frida Kahlo",
	  "Galileo Galilei",
	  "George Washington",
	  "Grace Hopper",
	  "Helen Keller",
	  "Henry Hudson",
	  "Homer",
	  "Isaac Newton",
	  "Jack London",
	  "Jackie Robinson",
	  "James Madison",
	  "Jane Goodall",
	  "John Adams",
	  "Judy Blume",
	  "Leonardo da Vinci",
	  "Louis Armstrong",
	  "Ludwig Van Beethoven",
	  "Mahatma Gandhi",
	  "Malala",
	  "Malcolm X",
	  "Marco Polo",
	  "Mark Twain",
	  "Martin Luther King Jr",
	  "Michalangelo Buonarroti",
	  "Muhammad Ali",
	  "Napoleon Bonaparte",
	  "Nikola Tesla",
	  "Pele",
	  "Queen Elizabeth",
	  "Ronald Reagan",
	  "Simon Bolivar",
	  "Thomas Edison",
	  "William Shakespeare",
	  "Wolfgang Amadeus Mozart",
	  "Wright"
	  
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
       "<:Albert:735895333275697223>",
       "<:Andrew:735895333787140126>",
       "<:Benjamin:735895333267177512>",
       "<:Charles:735895333099405313>",
	"<:Christopher:735895333405720596>",
	  "<:Cleopatra:735895333384486963>",
	  "<:Eleanor:735895333531418654>",
	  "<:Franklin:735895333048942704>",
	  "<:Fredrick:735895333363777658>",
	  "<:Frdia:735895333279760395>",
	  "<:Galileo:735895333393006624>",
	  "<:George:735895333434818631>",
	  "<:Grace:735895333489606697>",
	  "<:Helen:735895333401526313>",
	  "<:Henry:735895333766168586>",
	  "<:Homer:735895333451858001>",
	  "<:Isaac:735895333363515495>",
	  "<:Jack:735895333627887687>",
	  "<:Jackie:735895333468504074>",
	  "<:James:735895333816500314>",
	  "<:JaneGoodall:735895333430886492>",
	  "<:John:735895333229297686>",
	  "<:Judy:735895333405589635>",
	  "<:Leonardo:735895333522898964>",
	  "<:Louis:735895333715837098>",
	  "<:Ludwig:735895333426692097>",
	  "<:Mahatma:735895333602852937>",
	  "<:Malala:735895333749653604>",
	  "<:Malcolm:735895333187485717>",
	  "<:Marco:735895333799854120>",
	  "<:Mark:735895333300600943>",
	  "<:Martin:735895333636145295>",
	  "<:Michelangelo:735895333573230654>",
	  "<:Muhammad:735895333279760507>",
	  "<:Napoleon:735895333711642644>",
	  "<:Nikola:735895333518704801>",
	  "<:Pele:735895333661442148>",
	  "<:QueenElizabeth:735895333556715622>",
	  "<:Ronald:735895333795790958>",
	  "<:Simon:735895333959237732>",
	  "<:Thomas:735895333766168619>",
	  "<:William:735895333367709729>",
	  "<:Wolfgang:735895333644795927>",
	  "<:Wright:735895333334417461>"
	  

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

