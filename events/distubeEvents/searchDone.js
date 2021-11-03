const { MessageEmbed } = require('discord.js');

/**
 * @file disTube search done event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "searchDone",

	/**
	 * @description Executes the block of code when the Search is completed
     * @param {Object} message The users search response message
	 * @param {Object} answer The answered message of user
	 */
	execute(message, answer, client) {
        console.log("SEARCH COMPLETED")
	},
};
