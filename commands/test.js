module.exports = {
  /**
   *
   * @typedef {import("discord.js").Interaction} Interaction
   * @param {Interaction} interaction
   */
  callback: (interaction) => {
    interaction.reply("Test success");
  },
};
