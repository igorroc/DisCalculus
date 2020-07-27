const Discord = require("discord.js")
const config = require("../config.json")
const colours = require("../colours.json")


module.exports.run = async (bot, message, args) => {
    const log = bot.guilds.cache.get('725691740538929225').channels.cache.get('725691977311453214')

    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando "Invite" no server "${message.guild.name}"`)
    log.send(`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Invite \` no server \` ${message.guild.name} \`\n`)

    let embed = new Discord.MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor("INVITE", message.guild.iconURL())
    .setTitle(bot.user.username)
    .setDescription("Add me to your server!\nI can help you with ` calculation `, ` conversion `, and more")
    .addField("**Link:**", config.invite)
    .setFooter(`${bot.user.username} | Currently on ${bot.guilds.cache.size} servers!`)

    await message.channel.send(embed)

}


module.exports.config = {
    name: "invite",
    description: "Send DisCalculus's invitation link!",
    usage: "+invite",
    accessableby: "Members",
    aliases: ["convite", "link"]
}