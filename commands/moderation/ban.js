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
    // member.ban();
    const banEmbed = new MessageEmbed()
      .setTitle("Ban Action")
      .setColor("RED")
      .setThumbnail(member.displayAvatarURL())
      .setDescription(`**${member.user.tag}** has been banned${reason ? ` due to ${reason}` : "."}`)
      .setTimestamp(Date.now());
    interaction.reply({ embeds: [banEmbed] });
  },
};
