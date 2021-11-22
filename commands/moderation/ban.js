module.exports = {
	name: "ban",
	description: "Ban the user",
	category: "moderation",
	usage: "ban <Ping user>",
	guildOnly: true,
	/**
	 * @description Executes when the command is called by command handler.
	 * @author Vachan MN
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
		// Check if the user has the permission to ban.
		if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `${message.author} You don't have permission to ban members.`
      );
    }
		// Ban the user mentioned
		if (message.mentions.users.size) {
      const user = message.mentions.users.first();
      message.guild.member(user).ban();
      message.channel.send(`${message.author} Banned ${user}`);
    } else {
			message.channel.send(`${message.author} You need to mention a user to ban.`);
		}

	},
};
