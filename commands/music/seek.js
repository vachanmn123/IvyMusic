const {MessageEmbed} = require('discord.js');

module.exports = {
	name: "seek",
    description: "seek to a position in the playing song",
    usage: "seek <position>",
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
        if (!args[0]) return message.channel.send(`Please provide position (in seconds) to seek!`)
        const time = Number(args[0])
        if (isNaN(time)) return message.channel.send(`Please enter a valid number!`)
        queue.seek(time)
		const emb = new MessageEmbed()
		  .setColor("0x009910")
		  .setTitle("Seeked to position!")
		  .setDescription(`Seeked to position ${time} seconds!`)
		  .setFooter(`Requested by ${message.author.tag}`)
		  .setTimestamp();
		message.channel.send({embeds: [emb]});
	},
};
