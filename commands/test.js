const { Interaction } = require("discord.js");

module.exports = {
  /**
   *
   * @param {Interaction} interaction
   * @param  {...string} args
   */
  callback: (interaction, ...args) => {
    console.log(args);
    interaction.reply("Test success");
  },
};
