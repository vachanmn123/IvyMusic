const { MessageEmbed } = require('discord.js');

/**
 * @file disTube error event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "error",

	/**
	 * @description Executes the block of code when an error occurs in distube
     * @param {object} channel Channel Object
     * @param {object} error Error Object
	 * @param {Object} client Main Application Client
	 */
	execute(channel, error, client) {
        const errEmb = new MessageEmbed()
            .setTitle("Error Ocurred")
            .setDescription(`${error.message}`)
            .setColor("#ff0000")
            .setFooter(`Contact <@!${client.owner}>`)
            .setTimestamp();
        channel.send({ embeds: [errEmb] });
	},
};
