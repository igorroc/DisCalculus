const Discord = require("discord.js")
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {
	const log = bot.guilds.cache
		.get("725691740538929225")
		.channels.cache.get("725691977311453214")
	const reports = bot.guilds.cache
		.get("725691740538929225")
		.channels.cache.get("737129693760847975")

	console.log(
		`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando 'Report' no server '${message.guild.name}'`
	)
	log.send(
		`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Report \` no server \` ${message.guild.name} \`\n`
	)

	if (args[0]) {
		let msg = args.toString().replace(/,/gm, " ")
		var embed = new Discord.MessageEmbed()
			.setColor(colours.green_dark)
			.setAuthor(bot.user.username, message.guild.iconURL())
			.setDescription(
				`\`\`\`md\n# Thank you for sending your report!\n\`\`\`\n\`\`\`md\n# You can enter on the official server, if you want more help!\n\`\`\``
			)
			.addField("**Server Link:**", "https://discord.gg/QdqB5sR")
			.setFooter(
				`DisCalculus | Currently on ${bot.guilds.cache.size} servers!`
			)

		message.channel.send(embed)

		console.log(`↳ ✅ Report enviado!`)
		log.send(`↳ \\✅ Report enviado!`)
		reports.send(
			`🔔 Report feito por ${message.author.username}#${message.author.discriminator}:\`\`\`md\n${msg}\n\`\`\``
		)
	} else {
		var embed = new Discord.MessageEmbed()
			.setColor(colours.red_light)
			.setAuthor(bot.user.username, message.guild.iconURL())
			.setDescription(
				`\`\`\`md\n<\nType a message you want to send to my owner!\n>\n\`\`\`\n\`\`\`md\nExample:\n<+report I'm having trouble with the calculation command. Can you help me?>\n\`\`\`\n\`\`\`md\n<Disclaimer: By sending this message, my owner will be able to get your User Tag and then send you a direct message to help you!>\n\`\`\`\n\`\`\`md\n# You can enter on the official server, if you want more help!\n\`\`\``
			)
			.addField("**Server Link:**", "https://discord.gg/QdqB5sR")
			.setFooter(
				`DisCalculus | Currently on ${bot.guilds.cache.size} servers!`
			)

		message.channel.send(embed)
	}
}

module.exports.config = {
	name: "report",
	description:
		"If you have some problems with me, send a message to my owner!",
	usage: "+report (message)",
	accessableby: "Members",
	aliases: ["bh", "bothelp"],
}
