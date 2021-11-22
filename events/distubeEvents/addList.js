const { MessageEmbed } = require('discord.js');

/**
 * @file disTube add playlist event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "addList",

	/**
	 * @description Executes the block of code when a playlist is added to the queue
     * @param {object} queue queue Object
     * @param {object} playlist playlist object
	 * @param {Object} client Main Application Client
	 */
	execute(queue, playlist, client) {
	let playlistLength = null
	try{
		playlistLength = playlist.tracks.length;
	}
	catch(e) {
		playlistLength = "a few"
	}
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Added playlist [${playlist.name}](${playlist.url})`)
            .setDescription(`${playlistLength} tracks added`)
            .setFooter(`Added by ${playlist.owner}`)
            .setTimestamp();
        queue.textChannel.send({ embeds: [embed] });
	},
};
