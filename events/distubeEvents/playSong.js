const { MessageEmbed } = require('discord.js');

/**
 * @file disTube play Song event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "playSong",

	/**
	 * @description Executes the block of code when a song is played!
	 * @param {Object} queue queue Object
	 * @param {Object} song Song Object
	 * @param {Object} client Main Application Client
	 */
	execute(queue, song, client) {
        const emb = new MessageEmbed()
            .setTitle("Playing Song")
            .setColor("#BFFF00")
            .setDescription(`Now Playing: [${song.name}](${song.url})`)
			.addField("Duration", song.formattedDuration, true)
			.setImage(song.thumbnail)
			.setFooter(`Requested by ${song.user.username}#${song.user.discriminator}`);
        queue.textChannel.send({ embeds: [emb] });
		console.log(`Song Played: ${song.name} | ${song.url}`);
	},
};
