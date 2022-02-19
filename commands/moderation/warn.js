const { Interaction, MessageEmbed } = require("discord.js");

module.exports = {
  /**
   *
   * @param {Interaction} interaction
   * @param  {...string} args
   */
  callback: (interaction, ...args) => {
    const member = interaction.options.getMentionable("user");
    const reason = interaction.options.getString("reason");
    interaction.reply(`${member.displayName} has been warned due to ${reason}`);
  },
};
