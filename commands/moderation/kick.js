const { MessageEmbed } = require("discord.js");

module.exports = {
  /**
   *
   * @typedef {import("discord.js").Interaction} Interaction
   * @param {Interaction} interaction
   */
  callback: (interaction) => {
    const member = interaction.options.getMember("user");
    const reason = interaction.options.getString("reason");
    // member.kick();

    const kickEmbed = new MessageEmbed()
      .setTitle("Kick Action")
      .setColor("YELLOW")
      .setThumbnail(member.displayAvatarURL())
      .setDescription(`**${member.user.tag}** has been kicked${reason ? ` due to ${reason}` : "."}`)
      .setTimestamp(Date.now());
    interaction.reply({ embeds: [kickEmbed] });
  },
};
