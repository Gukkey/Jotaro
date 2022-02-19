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
  let handler = require("./command-handler");
  if (handler.default) handler = handler.default;
  handler(client);
  console.log("💻 Loaded all commands");
});

client.login(token);
