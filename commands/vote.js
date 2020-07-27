const Discord = require("discord.js")
const colours = require("../colours.json")


module.exports.run = async (bot, message, args) => {
    const log = bot.guilds.cache.get('725691740538929225').channels.cache.get('725691977311453214')

    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando "Vote" no server "${message.guild.name}"`)
    log.send(`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Vote \` no server \` ${message.guild.name} \`\n`)

    let link = "https://top.gg/bot/725319850808967198/vote"
    
    let embed = new Discord.MessageEmbed()
        .setColor(colours.green_light)
        .setAuthor("VOTE", message.guild.iconURL())
        .setTitle(bot.user.username)
        .setDescription("Help me by voting!")
        .addField("**Link:**", link)
        .setFooter(`${bot.user.username} | Currently on ${bot.guilds.cache.size} servers!`)

    await message.channel.send(embed)
}


module.exports.config = {
    name: "vote",
    description: "Send you the link to vote for me!",
    usage: "+vote",
    accessableby: "Members",
    aliases: ["votar"]
}