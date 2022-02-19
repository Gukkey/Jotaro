const { Client, Intents, MessageEmbed } = require("discord.js");
const { initializeApp, token } = require("./init");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
}); // Client and REST are classes, while client and rest are objects

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
      const embed = new MessageEmbed().setTitle("Pong").setDescription("Pong!!");
      await interaction.reply({ embeds: [embed] });
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

      const kickEmbed = new MessageEmbed()
        .setTitle("Kick Action")
        .setColor("YELLOW")
        .setThumbnail(member.displayAvatarURL())
        .setDescription(
          `**${member.user.tag}** has been kicked${reason ? ` due to ${reason}` : "."}`
        )
        .setTimestamp(Date.now());
      await interaction.reply({ embeds: [kickEmbed] });
      break;
    }

    case "ban": {
      const member = interaction.options.getMember("user");
      const reason = interaction.options.getString("reason");
      member.ban();
      const banEmbed = new MessageEmbed()
        .setTitle("Ban Action")
        .setColor("RED")
        .setThumbnail(member.displayAvatarURL())
        .setDescription(
          `**${member.user.tag}** has been banned${reason ? ` due to ${reason}` : "."}`
        )
        .setTimestamp(Date.now());
      await interaction.reply({ embeds: [banEmbed] });
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
