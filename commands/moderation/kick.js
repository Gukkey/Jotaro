const { Interaction, MessageEmbed } = require("discord.js");

module.exports = {
  /**
   *
   * @param {Interaction} interaction
   * @param  {...string} args
   */
  callback: (interaction, ...args) => {
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
