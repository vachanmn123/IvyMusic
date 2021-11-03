const { MessageEmbed } = require('discord.js');

/**
 * @file disTube empty event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "empty",

	/**
	 * @description Executes the block of code when the voice channel is empty
     * @param {object} channel Channel Object
	 * @param {Object} client Main Application Client
	 */
	execute(channel, client) {
        const emb = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('🔇 Voice Channel Empty')
            .setDescription('The Voice channel is empty. Leaving the channel..')
            .setFooter("Hope you enjoyed your time.")
            .setTimestamp();
        channel.textChannel.send({ embeds: [emb] });
	},
};
