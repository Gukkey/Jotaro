const { Client, Intents } = require("discord.js");
const { initializeApp, token } = require("./init");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); // Client and REST are classes, while client and rest are objects

initializeApp()
  .then(() => console.log("🚀 Successfully registered commands"))
  .catch(() => console.log("Error Occured"));

client.once("ready", () => {
  console.log("💻 Client Ready");
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
        `${member.displayName} has been kicked ${reason ? `due to ${reason}` : "."}`
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
