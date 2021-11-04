const { MessageEmbed } = require('discord.js');

/**
 * @file disTube finish event.
 * @author Vachan MN
 * @since 1.0.0
 */

 module.exports = {
	name: "finish",

	/**
	 * @description Executes the block of code when the queue finishes
     * @param {object} queue queue Object
	 * @param {Object} client Main Application Client
	 */
	execute(queue, client) {
        const emb = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Finished')
            .setDescription(`Finished playing ${queue.songs[0].title}`)
            .setThumbnail(queue.songs[0].thumbnail)
            .setTimestamp();
        queue.textChannel.send({embeds: [emb]});
	},
};
