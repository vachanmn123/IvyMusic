const { MessageEmbed } = require('discord.js');

/**
 * @file disTube searchNoResult event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "searchNoResult",

	/**
	 * @description Executes the block of code when an there are no results for a search
     * @param {object} message message Object
	 * @param {Object} client Main Application Client
	 */
	execute(message, client) {
        const emb = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('No Results Found')
            .setDescription('No results found for your search. Please try again.')
            .setTimestamp();
        message.channel.send({ embeds: [emb] });
	},
};
