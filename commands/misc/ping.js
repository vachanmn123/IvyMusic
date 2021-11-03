const {MessageEmbed} = require('discord.js');

/**
 * @file Sample ping command
 * @author Naman Vrati
 * @since 1.0.0
 */

module.exports = {
	name: "ping",
	description: "Pong!",
	category: "misc",

	/** You need to uncomment below properties if you need them. */
	//description: 'Ping!',
	//usage: 'put usage here',
	//permissions: 'SEND_MESSAGES',
	//guildOnly: true,

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Naman Vrati
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
		embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Pong!')
			.setDescription(`🏓Latency is ${Date.now() - message.createdTimestamp}ms.`)
			.addField("API Latency", `${message.client.ws.ping}ms`, true)
			.setTimestamp();
		message.channel.send({ embeds: [embed] });
	},
};
