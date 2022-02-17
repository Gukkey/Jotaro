const dotenv = require("dotenv").config();
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { commands } = require("./commands");

const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.TOKEN;

const rest = new REST({ version: "9" }).setToken(token);

const initializeApp = () => {
  if (process.env.NODE_ENV === "production") {
    console.log("PRODUCTION");
    return rest.put(Routes.applicationCommands(clientId), { body: commands });
  } else if (process.env.NODE_ENV === "development") {
    console.log("DEVELOPMENT");
    return rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
  }
};

module.exports = { initializeApp, token };
