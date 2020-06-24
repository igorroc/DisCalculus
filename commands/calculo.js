const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando Calculo`)
    
    let conta = args.toString()
    if(!conta){
        return message.channel.send("Informe alguma conta para eu realizar\n> Para mais informações digite `+help calculo`")
    }
    if(conta.search(/[a-z]|[A-Z]/gm) > -1){
        return message.channel.send("Ainda não posso fazer cálculo com variáveis")
    }


    //message.channel.send(args)

}


module.exports.config = {
    name: "calculo",
    description: "Realiza o calculo especificado!",
    usage: "+calculo [(5+1)^2]",
    accessableby: "Membros",
    aliases: ["calc", "c"]
}