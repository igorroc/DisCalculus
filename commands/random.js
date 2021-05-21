const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
	const log = bot.guilds.cache
		.get("725691740538929225")
		.channels.cache.get("725691977311453214")

	console.log(
		`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando 'Random' no server '${message.guild.name}'`
	)
	log.send(
		`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Random \` no server \` ${message.guild.name} \`\n`
	)

	let min = parseInt(args[0])
	let max = parseInt(args[1])
	let random

	const embed = new Discord.MessageEmbed()
		.setColor("#5E8A60")
		.setTitle("\\🎲 Random Number")

	if (!min || !Number.isInteger(min)) {
		random = Math.random()
        embed.setDescription(`\`0 < x < 1\` = \`${random}\``)
	} else if (!max || !Number.isInteger(max)) {
		random = Math.floor(Math.random() * (min + 1))
        embed.setDescription(`\`0 < x < ${min}\` = \`${random}\``)
	} else {
		random = Math.floor(Math.random() * (max - min + 1) + min)
        embed.setDescription(`\`${min} < x < ${max}\` = \`${random}\``)
	}

	message.reply(embed)

	console.log(`↳ Random: ${random}`)
	log.send(`↳ Random: ${random}`)
}

module.exports.config = {
	name: "random",
	description: "Returns a random number, either in between a range, or not!",
	usage: "+random\n+random [max]\n+random [min] [max]",
	accessableby: "Members",
	aliases: ["r"],
}
