/**
 * @file Dynamic help command
 * @author Naman Vrati
 * @since 1.0.0
 */

// Deconstructing prefix from config file to use in help command
const { prefix } = require("./../../config.json");

// Deconstructing MessageEmbed to create embeds within this command
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	description: "List all commands of bot or info about a specific command.",
	aliases: ["commands"],
	usage: "help <category/command>",
	cooldown: 5,
	category: "misc",

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Naman Vrati
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	async execute(message, args) {
		// Get a lost of all commands
        const commands = message.client.commands;
        const commands_json = JSON.parse(JSON.stringify(commands));
        const categories = [];
        for(const command of commands_json) {
            if(!categories.includes(command["category"])) {
                categories.push(command["category"]);
            }
        }
        if (String(message.author.id) !== message.client.ownerID) {
            categories.splice(categories.indexOf('owner'), 1);
        }
        // If no args then send categories list
        if (args.length === 0) {
        const embed = new MessageEmbed()
            .setColor(0x00ffff)
            .setTitle(`${message.client.user?.tag} Help`)
            .setDescription(`Use \`${prefix}help <command/category>\` for more info on a command.`)
            .setFooter(`${message.client.user?.tag} ${message.client.version}`);
        for(const category of categories) {
            embed.addField(category, commands.filter(command => command["category"] == category).map(command => `\`${command["name"]}\``).join(", "));
        }
        message.channel.send({ embeds: [embed]});
        // If category name is arg then send commands in that category
        } else if(categories.includes(args[0])) {
            const embed = new MessageEmbed()
                .setColor(0x00ffff)
                .setTitle(`${message.client.user?.tag} Help`)
                .setDescription(`Use \`${prefix}help <command>\` for more info on a command.`)
                .setFooter(`${message.client.user?.tag} v${message.client.version}`);
            for(const command of commands_json) {
                if(command["category"] == args[0]) {
                    embed.addField(command["name"], command["description"]);
                }
            }
            message.channel.send({ embeds: [embed]});
            // If command name is arg then send command info
        } else if(commands.find(commands => commands["name"] == args[0])) {
            try {
                const embed = new MessageEmbed()
                    .setColor(0x00ffff)
                    .setTitle(`${message.client.user?.tag} Help`)
                    .setDescription(`Use \`${prefix}help <command>\` for more info on a command.`)
                    .setFooter(`${message.client.user?.tag} v${message.client.version}`);
                const command = commands.find(command => command["name"] == args[0]);
                embed.addField("Description", command["description"]);
                embed.addField("Usage", command["usage"]);
				if(command["aliases"]) embed.addField("Aliases", command["aliases"].join(", "));
                message.channel.send({ embeds: [embed]});
            } catch(e) {
				console.log(e);
                // Error occurs send an error message
                message.channel.send(`\`${args[0]}\` is not a valid command or category`);
            }
        }
        // If args is present but its neither command or category, send error message
        else {
            message.channel.send(`\`${args[0]}\` is not a valid command or category`);
        }
	},
};
