const { MessageEmbed } = require('discord.js');

/**
 * @file disTube searchCancel event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "searchCancel",

	/**
	 * @description Executes the block of code when a search gets canceled.
     * @param {object} message message Object
	 * @param {Object} client Main Application Client
	 */
	execute(message, client) {
        const emb = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Search Canceled')
            .setDescription('Search has been canceled.')
            .setTimestamp();
        message.channel.send({ embeds: [emb] });
	},
};
