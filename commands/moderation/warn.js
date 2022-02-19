module.exports = {
  /**
   *
   * @typedef {import("discord.js").Interaction} Interaction
   * @param {Interaction} interaction
   */
  callback: (interaction) => {
    const member = interaction.options.getMentionable("user");
    const reason = interaction.options.getString("reason");
    interaction.reply(`${member.displayName} has been warned due to ${reason}`);
  },
};
