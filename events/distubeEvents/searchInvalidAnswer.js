const { MessageEmbed } = require('discord.js');

/**
 * @file disTube Search Invalid response event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "searchInvalidAnswer",

	/**
	 * @description Executes the block of code when the voice channel is empty
     * @param {object} message original message Object
     * @param {object} answer user answer message object
	 * @param {Object} client Main Application Client
	 */
	execute(message, answer, client) {
        const embed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Invalid answer')
            .setDescription('Please select a valid answer.')
            .setFooter('Please try again.');
        message.channel.send({ embeds: [embed] });
	},
};
