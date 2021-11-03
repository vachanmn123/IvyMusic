module.exports = {
	name: "filters",
    description: "Add filters to the playing song",
    usage: "filters <filter>",
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
        if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
        if (args[0] === "off" && queue.filters?.length) queue.setFilter(false)
        else if (Object.keys(message.client.distube.filters).includes(args[0])) queue.setFilter(args[0])
        else if (args[0]) return message.channel.send(`Not a valid filter`)
        message.channel.send(`Current Queue Filter: \`${queue.filters.join(", ") || "Off"}\``)
	},
};
