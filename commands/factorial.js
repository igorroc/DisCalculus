const Discord = require("discord.js")

function factorial(value) {
    if(value == 1){
        return 1
    }else{
        return value*factorial(value-1)
    }
}

module.exports.run = async (bot, message, args) => {
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando Factorial`)
    
    if(!args){
        console.log(`↳ ⚠️ Usuário não informou um valor `)
        return message.channel.send("`❌` Informe algum valor para eu realizar o fatorial\n> Para mais informações digite `+help factorial`")
    }
    if(args[1]){
        console.log("↳ ⚠️ Usuário indicou mais de 1 valor")
        return message.channel.send("`❌` Indique apenas um valor\n> Para mais informações digite ` +help fatorial `")
    }

    let valor = args
    if(isNaN(valor)){
        console.log("↳ ⚠️ Valor indicado não é um número")
        return message.channel.send("`❌` O valor não é um número")
    }
    
    let resposta = factorial(valor)
    if(resposta){
        console.log(`↳ ✅ Operação finalizada`)
        return message.channel.send(`\`\`\`\n${valor}! = ${resposta}\`\`\``)
    }else{
        console.log(`↳ ⚠️ Não foi possível calcular o fatorial de ${valor}`)
        return message.channel.send(`\`❌\` Não foi possível calcular o fatorial de ${valor}`)
    }
}


module.exports.config = {
    name: "factorial",
    description: "Calcula o fatorial do valor!",
    usage: "+factorial [valor]",
    accessableby: "Membros",
    aliases: ["fac", "fat", "!"]
}