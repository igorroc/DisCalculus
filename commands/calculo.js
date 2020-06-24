const Discord = require("discord.js")

const pi = '3.14159265359'

module.exports.run = async (bot, message, args) => {
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando Calculo`)
    
    let conta = args.toString().replace(/pi|π/gm, pi).replace(/,/gm, "")

    if(!conta){
        return message.channel.send("Informe alguma conta para eu realizar\n> Para mais informações digite `+help calculo`")
    }
    if(conta.search(/[a-z]|[A-Z]/gm) > -1){
        return message.channel.send("Ainda não posso fazer cálculos avançados")
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
        console.log(`↳ Erro ao calcular: "${conta}"`)
        return message.channel.send("Erro ao calcular")
    }
    
    console.log(`↳ Conta: ${conta} | Resultado: ${resultado}`)

    message.channel.send(`\`\`\`\n${conta} = ${resultado}\n\`\`\``)

}


module.exports.config = {
    name: "calculo",
    description: "Realiza o calculo especificado!",
    usage: "+calculo [conta]",
    accessableby: "Membros",
    aliases: ["calc", "c"]
}