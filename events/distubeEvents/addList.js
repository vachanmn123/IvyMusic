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
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Added playlist [${playlist.name}](${playlist.url})`)
            .setDescription(`${playlist.tracks.length} tracks added`)
            .addField('Number of songs in queue:', `queue.songs.length`)
            .setFooter(`Added by ${playlist.owner}`)
            .setTimestamp();
        queue.textChannel.send({ embeds: [embed] });
	},
};
