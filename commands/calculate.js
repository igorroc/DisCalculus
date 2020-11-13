const Discord = require("discord.js")

const pi = '3.14159265359'


module.exports.run = async (bot, message, args) => {
    const log = bot.guilds.cache.get('725691740538929225').channels.cache.get('725691977311453214')

    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando "Calculate" no server "${message.guild.name}"`)
    log.send(`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Calculo \` no server \` ${message.guild.name} \`\n`)

    let conta = args.toString().replace(/pi|π/gm, pi).replace(/,/gm, "")

    if(!conta){
        console.log(`↳ ⚠️  Usuário "${message.author.username}" não enviou uma conta.`)
        log.send(`↳ \\⚠️  Usuário \` ${message.author.username} \` não enviou uma conta.`)
        return message.channel.send("`❌` Enter an calculation for me to perform\n> For more information type ` +help calculus `")
    }
    if(conta.search(/[a-z]|[A-Z]/gm) > -1){
        console.log(`↳ ⚠️  Usuário "${message.author.username}" digitou caracteres: "${conta}"`)
        log.send(`↳ \\⚠️  Usuário \` ${message.author.username} \` digitou caracteres.`)
        return message.channel.send("`❌` I can't do advanced calculations yet.")
    }


    let resultado
    try {
        if (conta.indexOf("^") > -1) {
            var base = conta.slice(0, conta.indexOf("^"));
            var exponent = conta.slice(conta.indexOf("^") + 1);
            resultado = eval("Math.pow(" + base + "," + exponent + ")");
        }else{
            resultado = eval(conta)
        }
    } catch (error) {
        console.log(`↳ ⚠️  Erro ao calcular "${conta}"`)
        log.send(`↳ \\⚠️  Erro ao calcular \` ${conta} \``)
        return message.channel.send("`❌` Error when calculating.")
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