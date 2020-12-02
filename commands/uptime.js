const Discord = require("discord.js");
const ms = require("ms");


module.exports.run = async (bot, message, args) => {
    const log = bot.guilds.cache.get('725691740538929225').channels.cache.get('725691977311453214')

    console.log(`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando 'Uptime' no server '${message.guild.name}'`)
    log.send(`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Uptime \` no server \` ${message.guild.name} \`\n`)
    
    let up = ms(bot.uptime, {long: true})

    const m = await message.channel.send(`I've been working for \`${up}\` without accidents!`);
    console.log(`↳ Uptime: '${up}'`)

}


module.exports.config = {
    name: "uptime",
    description: "Shows up how long i've been online!",
    usage: "+uptime",
    accessableby: "Members",
    aliases: ["up"]
}