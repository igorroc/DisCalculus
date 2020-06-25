const Discord = require("discord.js")

function factorial(value) {
    if(value == 1){
        return 1
    }else{
        return value*factorial(value-1)
    }
}

module.exports.run = async (bot, message, args) => {
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando Factorial no server "${message.guild.name}"`)
    
    if(!args){
        console.log(`↳ ⚠️  Usuário não informou um valor `)
        return message.channel.send("`❌` Enter some value for me to perform the factorial.\n> For more information, type ` +help factorial `")
    }
    if(args[1]){
        console.log("↳ ⚠️  Usuário indicou mais de 1 valor")
        return message.channel.send("`❌` Enter only one value.\n> For more information, type ` +help factorial `")
    }

    let valor = args
    if(isNaN(valor)){
        console.log("↳ ⚠️  Valor indicado não é um número")
        return message.channel.send("`❌` The value entered is not a number.")
    }
    
    let resposta = factorial(valor)
    if(resposta){
        console.log(`↳ ✅ Operação finalizada!`)
        return message.channel.send(`\`\`\`\n${valor}! = ${resposta}\`\`\``)
    }else{
        console.log(`↳ ⚠️  Não foi possível calcular o fatorial de ${valor}`)
        return message.channel.send(`\`❌\` It was not possible to calculate the factorial of "${valor}"`)
    }
}


module.exports.config = {
    name: "factorial",
    description: "Calculates the factorial of the value!",
    usage: "+factorial [value]",
    accessableby: "Members",
    aliases: ["fac", "fat", "!", "fatorial"]
}