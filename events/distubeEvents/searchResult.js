const { MessageEmbed } = require('discord.js');

/**
 * @file disTube searchResult event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "searchResult",

	/**
	 * @description Executes the block of code when a search result is received.
     * @param {object} message message Object
     * @param {object} result results Object
	 * @param {Object} client Main Application Client
	 */
	execute(message, result, client) {
        let i = 0
        //message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`)
		message.channel.sendTyping();
		const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Search Results')
            .setDescription(`${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`)
            .setFooter('Enter anything else or wait 60 seconds to cancel')
            .setTimestamp()
        message.channel.send({ embeds: [embed] })
	},
};
