const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "queue",
    description: "show the queue",
    usage: "queue",
    guildOnly: true,
    category: "music",
	/**
	 * @description Executes when the command is called by command handler.
	 * @author Vachan MN
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
        const queue = message.client.distube.getQueue(message)
        if (!queue) return message.channel.send(`There is nothing playing!`)
        let q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        if (q.length >= 1020) q = `${q.slice(0, 1020)}...`
		const embed = new MessageEmbed()
			.setColor("#101010")
			.setTitle("Queue")
			.setDescription(q)
			.setFooter(`${queue.songs.length} songs in queue`)
			.setTimestamp();
        message.channel.send({ embeds: [embed] })
	},
};
