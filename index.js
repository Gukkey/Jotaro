const dotenv = require("dotenv");
const { Client, Intents } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { commands } = require("./commands");

dotenv.config();
const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const nodeEnv = process.env.NODE_ENV;

const rest = new REST({ version: "9" }).setToken(token);

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); // Client and REST are classes, while client and rest are objects

// if (nodeEnv === "production") {
//   rest
//     .put(Routes.applicationCommands(clientId), { body: commands })
//     .then(() => console.log("Successfully registered application commands."))
//     .catch((err) => console.error(err));
// } else if (nodeEnv === "development") {
//   rest
//     .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
//     .then(() => console.log("Successfully registered application commands."))
//     .catch((err) => console.log(err));
// }

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch((err) => console.log(err));

client.once("ready", () => {
  console.log("Welcome Gukkey and Shiyaam 👋");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  switch (commandName) {
    case "ping": {
      await interaction.reply("Pong!");
      break;
    }

    case "donate": {
      await interaction.reply("[](https://www.buymeacoffee.com/jotarobot)");
      break;
    }

    case "source": {
      await interaction.reply("[](https://github.com/Gukkey/Jotaro)");
      break;
    }

    case "kick": {
      const member = interaction.options.getMember("user");
      const reason = interaction.options.getString("reason");
      member.kick();
      await interaction.reply(
        `${member.displayName} has been kicked${reason ? `due to ${reason}` : "."}`
      );
      break;
    }

    case "ban": {
      const member = interaction.options.getMember("user");
      const reason = interaction.options.getString("reason");
      member.ban();
      await interaction.reply(`${member.displayName} has been banned due to ${reason}`);
      break;
    }

    case "warn": {
      const member = interaction.options.getMentionable("user");
      const reason = interaction.options.getString("reason");
      await interaction.reply(`${member.displayName} has been warned due to ${reason}`);
      break;
    }

    default:
      break;
  }
});

client.login(token);
