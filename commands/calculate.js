const Discord = require("discord.js")
const mathjs = require("mathjs")


module.exports.run = async (bot, message, args) => {
    const log = bot.guilds.cache.get('725691740538929225').channels.cache.get('725691977311453214')

    console.log(`\n■▶ [LOGS] ⇥ Usuário '${message.author.username}' usou o comando 'Calculate' no server '${message.guild.name}'`)
    log.send(`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Calculo \` no server \` ${message.guild.name} \`\n`)

    let conta = args.join(" ")
    if(!conta || conta.search("parse","evaluate") != -1){
        console.log(`↳ ⚠️  Usuário '${message.author.username}' não enviou uma conta.`)
        log.send(`↳ \\⚠️  Usuário \` ${message.author.username} \` não enviou uma conta.`)
        return message.channel.send("`❌` Enter an calculation for me to perform\n> For more information type ` +help calculus `")
    }


    let resultado
    try {
        resultado = mathjs.fraction(conta)
    } catch (error) {
        try {
            resultado = mathjs.evaluate(conta)
        } catch (error) {
            try {
                resultado = mathjs.simplify(conta)
            } catch (error) {
                console.log(`↳ ⚠️  Erro ao calcular '${conta}'`)
                log.send(`↳ \\⚠️  Erro ao calcular \` ${conta} \``)
                return message.channel.send("`❌` Error when calculating.")
            }
        }
    }
    
    

    message.channel.send(`\`\`\`\n${conta} = ${resultado}\n\`\`\``)
    console.log(`↳ ✅ Operação finalizada!`)
    log.send(`↳ \\✅ Operação finalizada!`)
}


module.exports.config = {
    name: "calculate",
    description: "Perform the specified calculation!",
    usage: "+calculate [calculation]\n+calculate ((((1-2)+3)*4)/5)^6",
    accessableby: "Members",
    aliases: ["calc", "c"]
}