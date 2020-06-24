const Discord = require("discord.js")

const pi = '3.14159265359'

module.exports.run = async (bot, message, args) => {
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando Calculo`)
    
    let conta = args.toString().replace(/pi|π/gm, pi).replace(/,/gm, "")

    if(!conta){
        console.log(`↳ ⚠️  Usuário não enviou uma conta`)
        return message.channel.send("`❌` Informe alguma conta para eu realizar\n> Para mais informações digite `+help calculo`")
    }
    if(conta.search(/[a-z]|[A-Z]/gm) > -1){
        console.log(`↳ ⚠️  Usuário digitou caracteres`)
        return message.channel.send("`❌` Ainda não posso fazer cálculos avançados")
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
        return message.channel.send("`❌` Error when calculating.")
    }
    

    message.channel.send(`\`\`\`\n${conta} = ${resultado}\n\`\`\``)
    console.log(`↳ ✅ Operação finalizada!`)
}


module.exports.config = {
    name: "calculate",
    description: "Perform the specified calculation!",
    usage: "+calculate [calculation]",
    accessableby: "Members",
    aliases: ["calc", "c"]
}