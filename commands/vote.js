const Discord = require("discord.js")
const colours = require("../colours.json")
const DBL = require("dblapi.js")

module.exports.run = async (bot, message, args) => {
	const dbl = new DBL(
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyNTMxOTg1MDgwODk2NzE5OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk1ODE4NzY1fQ.jgrFRj0rlpazJt2f7-t3zZbFkJ81bzoe58mQMls50Ow",
		bot
	)

	const log = bot.guilds.cache
		.get("725691740538929225")
		.channels.cache.get("725691977311453214")

	console.log(
		`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando 'Vote' no server '${message.guild.name}'`
	)
	log.send(
		`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Vote \` no server \` ${message.guild.name} \`\n`
	)

	let jaVotou = dbl.hasVoted(message.author.id).then((voted) => {
		return voted ? true : false
	})

	let link = "https://top.gg/bot/725319850808967198/vote"

	let votos = await dbl.getVotes().then((votes) => {
		return votes.length
	})

	let embed = new Discord.MessageEmbed()
		.setColor(colours.green_light)
		.setAuthor(bot.user.username, message.guild.iconURL())
		.addField("**Link:**", link)
		.setFooter(`${bot.user.username} | Today I've ${votos} new upvotes!`)

	if (!jaVotou) {
		embed.setDescription(
			`**Thank you, ${message.author.username}!**\nYou've already voted today!\nCome back tomorrow to vote again!`
		)
	} else {
		embed.setDescription("Help me by voting!")
	}

	await message.channel.send(embed)
}

module.exports.config = {
	name: "vote",
	description: "Send you the link to vote for me!",
	usage: "+vote",
	accessableby: "Members",
	aliases: ["votar"],
}
