const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
	const log = bot.guilds.cache
		.get("725691740538929225")
		.channels.cache.get("725691977311453214")

	console.log(
		`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando 'Ping' no server '${message.guild.name}'`
	)
	log.send(
		`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Ping \` no server \` ${message.guild.name} \`\n`
	)

	let loading = "<a:loading:722456385098481735>"
	let check = "<a:check:722456384301563966>"

	const ping = new Discord.MessageEmbed()
		.setTitle(`${loading} Ping?`)
		.setColor("#FFC83D")

	var msg = await message.channel.send(ping)

	const pong = new Discord.MessageEmbed()
		.setTitle(`${check} Pong!`)
		.setColor("#5E8A60")
		.setDescription(
			`Latency is **${
				msg.createdTimestamp - message.createdTimestamp
			}ms**. \nAPI latency is **${Math.round(bot.ws.ping)}ms**.`
		)
		.setTimestamp()

	msg.edit(pong)

	console.log(
		`↳ Ping! Pong! Latencia: ${
			m.createdTimestamp - message.createdTimestamp
		}ms , API: ${Math.round(bot.ws.ping)}ms`
	)
	log.send(
		`↳ Ping! Pong! Latencia: ${
			m.createdTimestamp - message.createdTimestamp
		}ms , API: ${Math.round(bot.ws.ping)}ms`
	)
}

module.exports.config = {
	name: "ping",
	description: "Reports the current latency of the bot-server connection!",
	usage: "+ping",
	accessableby: "Members",
	aliases: ["latencia", "ms"],
}
