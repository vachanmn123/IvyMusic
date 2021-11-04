const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "nowplaying",
	description: "Find out which song is currently playing",
	category: "music",
	usage: "nowplaying",
	guildOnly: true,
	aliases: ["np"],
	/**
	 * @description Executes when the command is called by command handler.
	 * @author Vachan MN
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	async execute(message, args) {
		const serverQueue = message.client.distube.getQueue(message)
    if (!serverQueue) return message.channel.send("There is nothing playing.");
		await message.channel.sendTyping();
		const progressProportion = (serverQueue.currentTime / serverQueue.songs[0].duration)*10;
		const progressBar = "▰".repeat(Number(progressProportion.toFixed(0))) + "▱".repeat(10-Number(progressProportion.toFixed(0)));
		const volume = (serverQueue.volume > 100)? 100 : serverQueue.volume;
		const volumeProportion = (volume/100)*10;
		const volumeBar = "▰".repeat(Number(volumeProportion.toFixed(0))) + "▱".repeat(10-volumeProportion.toFixed(0));
    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`Now Playing(${serverQueue.songs.indexOf(serverQueue.songs[0]) + 1}/${serverQueue.songs.length})`)
      .setDescription(`[**${serverQueue.songs[0].name}**](${serverQueue.songs[0].url})`)
			.addField("Duration:", `${serverQueue.formattedCurrentTime}/${serverQueue.songs[0].formattedDuration} \n${progressBar}`, true)
			.addField("volume:", `${serverQueue.volume}/100 \n${volumeBar}`, true)
      .setThumbnail(serverQueue.songs[0].thumbnail)
      .setFooter(`Requested by ${serverQueue.songs[0].user.username}#${serverQueue.songs[0].user.discriminator}`);
		if(serverQueue.filters.length > 0) embed.addField("Filters", `${serverQueue.filters}`, true);
		switch(serverQueue.repeatMode) {
			case 0:
				break;
			case 1:
				embed.addField("Repeat Mode:", "Repeating the current song", true);
				break;
			case 2:
				embed.addField("Repeat Mode:", "Repeating all songs in the queue", true);
        break;
		}
		if (serverQueue.paused) embed.addField("Paused:", "Yes", true);
		if (serverQueue.voiceChannel && args[0]==="dev") embed.addField("Voice Channel Name:", serverQueue.voiceChannel.name, true);
		if (serverQueue.voiceChannel && args[0]==="dev") embed.addField("Current Channel Bitrate:", `${serverQueue.voiceChannel.bitrate/1000}kbps`, true);
    message.channel.send({embeds: [embed]});
  },
};
