/**
 * @file Add a song to the queue
 * @author Vachan MN
 * @since 3.0.0
 */

// Deconstructed the constants we need in this file.

const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	// The data needed to register slash commands to Discord.
	data: new SlashCommandBuilder()
		.setName("add")
		.setDescription(
			"Add a song"
		)
		.addStringOption((option) =>
			option
				.setName("songsearch")
				.setDescription("Enter the song's URL or name")
				.setRequired(true)
		),

	/**
	 * @description Executes when the interaction is called by interaction handler.
	 * @author Vachan MN
	 * @param {*} interaction The interaction object of the command.
	 */

	async execute(interaction) {
		/**
		 * @type {Object[]}
		 * @description Array of all slash commands objects earlier registered.
		 */

		const { guild, author, channel, args } = interaction;
		const client = interaction.client;
		const searchString = args.join(" ");
		if (!author.voice.channel) return interaction.reply('YOU ARENT IN A VC!');
		if (!searchString) return interaction.reply("Please provide a search query!");
		try {
			await interaction.channel.sendTyping();
			await client.distube.play(interaction.message, args.join(' '), {unshift: true});
		} catch (e) {
			return interaction.reply(e);
		}

	},
};
