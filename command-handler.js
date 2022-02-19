/* eslint-disable import/no-dynamic-require */
const getFiles = require("./getfiles");

/**
 *
 * @typedef {import("discord.js").Client} Client
 * @param {Client} client
 */
module.exports = (client) => {
  const commands = {};
  const suffix = ".js";
  const commandFiles = getFiles("./commands", suffix);

  commandFiles.forEach((command) => {
    let commandFile = require(command);
    if (commandFile.default) commandFile = commandFile.default;

    const split = command.replace(/\\/g, "/").split("/");
    const commandName = split[split.length - 1].replace(suffix, "");

    commands[commandName.toLowerCase()] = commandFile;
  });
  console.log(commands);

  client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;

    if (!commands[commandName]) {
      return;
    }

    try {
      commands[commandName].callback(interaction);
    } catch (err) {
      console.log(err);
    }
  });
};
