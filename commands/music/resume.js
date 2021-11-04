const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "resume",
    description: "Resume the paused song",
    usage: "resume",
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
        queue.resume()
		const emb = new MessageEmbed()
		  .setColor("#00ff00")
      .setTitle("Resumed")
      .setDescription(`Resumed the paused song`)
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
		message.channel.send({embeds: [emb]})
	},
};
