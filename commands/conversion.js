const Discord = require("discord.js")
const colours = require("../colours.json")
const mathjs = require("mathjs")

module.exports.run = async (bot, message, args) => {
	const log = bot.guilds.cache
		.get("725691740538929225")
		.channels.cache.get("725691977311453214")

	console.log(
		`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando 'Conversion'`
	)
	log.send(
		`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Conversion \` no server \` ${message.guild.name} \`\n`
	)

	if (args[0] == "unit" || args[0] == "units") {
		const embed = new Discord.MessageEmbed()
			.setColor("#5E8A60")
			.setTitle("Units for Conversion")
			.setDescription("Example: 5 km to mile")
			.addFields(
				{
					name: "Volume",
					value: "`Liters`,`Milliliters`,`Gallons`,`Cups`",
					inline: false,
				},
				{
					name: "Length",
					value: "`Nanometers`,`Milimeters`,`Centimeters`,`Meters`,`Kilometers`,`Inches`,`Feet`,`Yards`,`Miles`",
					inline: false,
				},
				{
					name: "Weight and Mass",
					value: "`Grams`,`Milligrams`,`Centigrams`,`Decigrams`,`Grams`,`Hectograms`,`Kilograms`,`Ounces`,`Stone`,`Tons`",
					inline: false,
				},
				{
					name: "Temperature",
					value: "`Celsius`,`Fahrenheit`,`Kelvin`",
					inline: false,
				},
				{ name: "Area", value: "`Hectares`,`Acres`", inline: false },
				{
					name: "Speed",
					value: "`Centimeters/Speed`,`Meters/Seconds`,`Kilometers/Hour`,`Feet/Second`,`Miles/Hour`",
					inline: false,
				},
				{
					name: "Time",
					value: "`Microseconds`,`Milliseconds`,`Seconds`,`Minutes`,`Hours`,`Days`,`Weeks`,`Months`,`Years`",
					inline: false,
				},
				{
					name: "Power",
					value: "`Watts`,`Kilowatts`,`Horsepower`,`BTUs/minute`",
					inline: false,
				},
				{
					name: "Data",
					value: "`Bits`,`Bytes`,`Kilobits`,`Kibibits`,`Kilobytes`,`Megabytes`,`Gigabits`,`Gigabytes`,`Terabits`,`Terabytes`,`Petabits`,`Petabytes`,`Yottabytes`",
					inline: false,
				},
				{
					name: "Angles",
					value: "`Degrees`,`Radians`,`Gradians`",
					inline: false,
				}
			)

		message.channel.send(embed)
		return
	}

	let conta = args.join(" ")
	if (!conta || conta.search("parse", "evaluate") != -1) {
		console.log(
			`↳ ⚠️  Usuário '${message.author.username}' não enviou uma expressão.`
		)
		log.send(
			`↳ \\⚠️  Usuário \` ${message.author.username} \` não enviou uma expressão.`
		)
		return message.channel.send(
			"`❌` Enter an expression for me to perform\n> For more information type ` +help conversion `"
		)
	}

	let resultado
	try {
		resultado = mathjs.evaluate(conta)
	} catch (error) {
		console.log(`↳ ⚠️  Erro ao calcular '${conta}'`, error)
		log.send(`↳ \\⚠️  Erro ao calcular \` ${conta} \``)
		return message.channel.send("`❌` Error when converting.")
	}

	message.channel.send(`\`\`\`\n${args[0]} ${args[1]} = ${resultado}\n\`\`\``)
	console.log(`↳ ✅ Operação finalizada!`)
	log.send(`↳ \\✅ Operação finalizada!`)
}

module.exports.config = {
	name: "conversion",
	description: "Converts the indicated value to the requested unit!",
	usage: "+conversion [value] [unit] to [unit]\n+conversion 5 km to mile\n\nYou can use `+conversion unit` to see all suported units!",
	accessableby: "Members",
	aliases: ["conv", "converter", "conversao"],
}
