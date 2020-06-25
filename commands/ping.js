const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando Ping no server "${message.guild.name}"`)
    
    let loading = "<a:loading:722456385098481735>"
    let check = "<a:check:722456384301563966>"
    
    const m = await message.channel.send(`${loading} Ping?`);
    m.edit(`${check} Pong!\nLatency is ${m.createdTimestamp - message.createdTimestamp}ms.\nAPI latency is ${Math.round(bot.ws.ping)}ms`);
    console.log(`↳ Ping! Pong! Latencia: ${m.createdTimestamp - message.createdTimestamp}ms , API: ${Math.round(bot.ws.ping)}ms`)

}


module.exports.config = {
    name: "ping",
    description: "Reports the current latency of the bot-server connection!",
    usage: "+ping",
    accessableby: "Members",
    aliases: ["latencia", "ms"]
}