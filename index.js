const dotenv = require('dotenv')
const { Client, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { commands } = require('./commands.js')
dotenv.config()
const token = process.env.TOKEN
const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID
//main branch
const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Welcome Gukkey and Shiyaam 👋'); 
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'donate') {
		await interaction.reply('[](https://www.buymeacoffee.com/jotarobot)');
	} else if (commandName === 'source') {
		await interaction.reply('[](https://github.com/Gukkey/Jotaro)');
	}
});

// Login to Discord with your client's token
client.login(token);