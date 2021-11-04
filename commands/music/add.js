module.exports = {
	name: "add",
	description: "Add a song to the queue",
	category: "music",
	usage: "add <search query>",
	guildOnly: true,
	/**
	 * @description Executes when the command is called by command handler.
	 * @author Vachan MN
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
		const searchString = args.join(" ");
		if (!message.member.voice.channel) return message.reply('YOU ARENT IN A VC!');
		if (!searchString) return message.reply("Please provide a search query!");
		try {
			message.channel.sendTyping();
			message.client.distube.play(message, args.join(' '), {unshift: true});
		} catch (e) {
			return message.reply(e);
		}
	},
};
