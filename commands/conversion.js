const Discord = require("discord.js")

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('conversion.json')
const conversion = low(adapter)

const cDB = require('../conversion.json')


module.exports.run = async (bot, message, args) => {
    const log = bot.guilds.cache.get('725691740538929225').channels.cache.get('725691977311453214')
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando "Conversion"`)
    log.send(`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Conversion \` no server \` ${message.guild.name} \`\n|| ↳ ID: \` ${message.guild.id} \`||`)

    return message.channel.send("Soon")

    
    
    let valor = args[0].toString()
    let char = valor.search(/\D+/)
    let from = valor.slice(char)
    valor = valor.slice(0, char)
    let to = args[1].toString()

    console.log(valor + " | " + char + " | " + from + " | " + to)

    if(!valor){
        console.log(`↳ ⚠️ Usuário não informou um valor `)
        return message.channel.send("`❌` Enter some value for me to perform the conversion.\n> For more information, type ` +help conversion `")
    }
    if(isNaN(valor)){
        console.log(`↳ ⚠️ Usuário digitou algum caractere`)
        return message.channel.send("`❌` Enter numbers only.")
    }   
    console.log(cDB.aliases.forEach( x => {
        x
    }))
    //console.log(conversion.get('aliases'). )
    
    

}


module.exports.config = {
    name: "conversion",
    description: "Converts the indicated value to the requested unit!",
    usage: "+conversion [value][unit] [to]\n+conversion 5km mile",
    accessableby: "Members",
    aliases: ["conv", "conversao"]
}