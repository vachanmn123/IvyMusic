const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "pause",
    description: "pause the playing song",
    usage: "pause",
    guildOnly: true,
    category: "music",
	/**
	 * @description Executes when the command is called by command handler.
	 * @author Vachan MN
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
        const client = message.client;
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
        queue.pause()
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Music Paused')
			.setDescription(`${message.author} has paused the music!`)
			.setTimestamp();
        message.channel.send({ embeds: [embed] })
	},
};
