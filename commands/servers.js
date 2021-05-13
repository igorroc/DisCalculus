const Discord = require("discord.js")
const colours = require("../colours.json")
const config = require("../config.json")


module.exports.run = async (bot, message, args) => {
    const log = bot.guilds.cache.get('725691740538929225').channels.cache.get('725691977311453214')
    
    console.log(`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando 'Servers' no server '${message.guild.name}'`)
    log.send(`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Servers \` no server \` ${message.guild.name} \`\n`)

    if(!message.member.hasPermission("ADMINISTRATOR")){
        message.channel.send("`❌` You don't have the power!")
        console.log(`↳ ❌ Operação cancelada!`)
        log.send(`↳ \\❌ Operação cancelada!`)
        return
    }

    var SHembed = new Discord.MessageEmbed()
            .setColor(colours.yellow)
            .setAuthor(bot.user.username, message.guild.iconURL())
            .setDescription(`> Bot prefix is: \` ${config.prefix} \``)
            .addField(`**Servers:**`, bot.guilds.cache.size)
    
    await message.channel.send(SHembed);

    let servers = bot.guilds.cache.get('725691740538929225').channels.cache.get('842346193787027496')
    servers.setName(`🤖▏ Servers: ${bot.guilds.cache.size}`)
    
    console.log(`↳ ✅ Operação finalizada!`)
    log.send(`↳ \\✅ Operação finalizada!`)
}


module.exports.config = {
    name: "servers",
    description: "Shows all servers i'm in!",
    usage: "+servers",
    accessableby: "Mod",
    aliases: ["server"]
}