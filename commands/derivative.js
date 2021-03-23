const Discord = require("discord.js")
const mathjs = require("mathjs")


module.exports.run = async (bot, message, args) => {
    const log = bot.guilds.cache.get('725691740538929225').channels.cache.get('725691977311453214')

    console.log(`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando 'Derivative' no server '${message.guild.name}'`)
    log.send(`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Derivative \` no server \` ${message.guild.name} \`\n`)

    let variavel = args[0]
    let conta = args.slice(1).join(" ")
    if(!conta || conta.search("parse","evaluate") != -1){
        console.log(`↳ ⚠️  Usuário '${message.author.username}' não enviou uma conta.`)
        log.send(`↳ \\⚠️  Usuário \` ${message.author.username} \` não enviou uma conta.`)
        return message.channel.send("`❌` Enter an expression for me to perform\n> For more information type ` +help derivative `")
    }


    let resultado
    try {
        resultado = mathjs.derivative(conta,variavel)
    } catch (error) {
        console.log(`↳ ⚠️  Erro ao calcular '${conta}'`)
        log.send(`↳ \\⚠️  Erro ao calcular \` ${conta} \``)
        return message.channel.send("`❌` Error when calculating.")
    }
    
    

    message.channel.send(`\`\`\`\nf(${variavel}) = ${conta}\nf'(${variavel}) = ${resultado}\n\`\`\``)
    console.log(`↳ ✅ Operação finalizada!`)
    log.send(`↳ \\✅ Operação finalizada!`)
}


module.exports.config = {
    name: "derivative",
    description: "Perform the specified derivate from a variable!",
    usage: "+derivative [variable] [expression]\n+derivative x 3x + 12",
    accessableby: "Members",
    aliases: ["derivada", "derive", "d"]
}