const {MessageEmbed} = require('discord.js');

module.exports = {
	name: "repeat",
    description: "Select the repeat pattern",
    usage: "repeat <off/song/queue>",
    guildOnly: true,
    aliases: ["loop"],
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
        if (!queue) return message.channel.send(`There is nothing playing!`)
        let mode = null
        switch (args[0]) {
            case "off":
                mode = 0
                break
            case "song":
                mode = 1
                break
            case "queue":
                mode = 2
                break
        }
        mode = queue.setRepeatMode(mode)
        mode = mode ? mode === 2 ? "Repeat queue" : "Repeat song" : "Off"
		const emb = new MessageEmbed()
		  .setColor("0x009910")
		  .setTitle("Repeat")
		  .setDescription(`Repeat mode is set to ${mode}`)
		  .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
		  .setTimestamp()
		message.channel.send({ embeds: [emb] })
	},
};
