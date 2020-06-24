const Discord = require("discord.js")

const pi = '3.14159265359'

module.exports.run = async (bot, message, args) => {
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando Square`)
    
    
    let valor = args.toString().replace(/pi|π/gm, pi).replace(/,/gm, "")
    
    if(!valor){
        return message.channel.send("Informe algum valor para eu realizar a raiz\n> Para mais informações digite `+help square`")
    }
    if(valor.search(/[^0-9]/gm) > -1){
        if(valor.match(/[.]/g)||[].length > 1){
            return message.channel.send("Digite apenas um ` . `")
        }else if(valor.match(/[.]/gm)||[].length == 1){
            // ok apenas um "."
        }else{
            return message.channel.send("Digite apenas números")
        }
    }

    let resultado
    try {
        resultado = Math.sqrt(valor)
    } catch (error) {
        console.log(`↳ Erro ao calcular: "${valor}"`)
        return message.channel.send("Erro ao calcular")
    }

    console.log(`↳ Valor: ${valor} | Resultado: ${resultado}`)

    message.channel.send(`\`\`\`\n√(${valor}) = ${resultado}\n\`\`\``)
}


module.exports.config = {
    name: "square",
    description: "Informa a raiz quadrada do valor!",
    usage: "+square [valor]",
    accessableby: "Membros",
    aliases: ["sq", "raiz", "√"]
}