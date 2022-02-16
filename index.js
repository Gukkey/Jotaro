const dotenv = require("dotenv");
const { Client, Intents } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { commands } = require("./commands.js");

dotenv.config();
const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const rest = new REST({ version: "9" }).setToken(token);

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// let commandNames = commands.reduce(
//   (acc, curr) => ({ [curr.name]: curr.name }, {})
// );

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);

// Create a new client instance

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Welcome Gukkey and Shiyaam 👋");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  	switch (commandName) {
		case "ping":{
			await interaction.reply("Pong!");
			break;}

		case "donate":{
			await interaction.reply("[](https://www.buymeacoffee.com/jotarobot)");
			break;}

		case "source":{
			await interaction.reply("[](https://github.com/Gukkey/Jotaro)");
			break;}

		case "kick":{
			const member = interaction.options.getMember("user");
    		member.kick();
    		const reason = "Dummy reason";
    		await interaction.reply(
      		`@${member.displayName} has been kicked due to ${reason}`);
			break;}

		case "ban":{
			const member = interaction.options.getMember("user");
    		member.ban();
    		const reason = "Dummy reason";
    		await interaction.reply(
      		`@${member.displayName} has been banned due to ${reason}`);
			break;}
	  }
  // switch(commandName){
  // 	case "ping":
  // 		break;
  // }
});

// Login to Discord with your client's token
client.login(token);
