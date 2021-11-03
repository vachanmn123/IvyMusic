const { MessageEmbed } = require('discord.js');

/**
 * @file disTube add Song event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "addSong",

	/**
	 * @description Executes the block of code when a song is added to queue!
	 * @param {Object} queue queue Object
	 * @param {Object} song Song Object
	 * @param {Object} client Main Application Client
	 */
	execute(queue, song, client) {
        const emb = new MessageEmbed()
            .setTitle("Added Song to queue")
            .setColor("#BFFF00")
            .setDescription(`Song: [${song.name}](${song.url})`)
			.addField("Duration", song.formattedDuration, true)
			.setImage(song.thumbnail)
			.setFooter(`Requested by ${song.user.username}#${song.user.discriminator}`);
        queue.textChannel.send({ embeds: [emb] });
	},
};
