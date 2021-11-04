const {MessageEmbed} = require('discord.js');

module.exports = {
	name: "volume",
    description: "Set the volume of the player",
    usage: "volume <volume>",
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
        const volume = parseInt(args[0])
        if (isNaN(volume)) return message.channel.send(`Please enter a valid number!`)
        queue.setVolume(volume)
		const emb = new MessageEmbed()
		  .setColor('#0099ff')
		  .setTitle('Volume')
		  .setDescription(`Volume set to ${volume}`)
		  .setFooter(`Requested by ${message.author.username}`)
		  .setTimestamp()
		message.channel.send({embeds: [emb]})
	},
};
