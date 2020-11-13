const Discord = require("discord.js")
const colours = require("../colours.json")

const cDB = require('../conversion.json')


module.exports.run = async (bot, message, args) => {
    const log = bot.guilds.cache.get('725691740538929225').channels.cache.get('725691977311453214')
    
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando "Conversion"`)
    log.send(`\\▶ [LOGS] ⇥ Usuário \` ${message.author.username} \` usou o comando \` Conversion \` no server \` ${message.guild.name} \`\n`)

    return message.channel.send("Soon...")

    let valor = args[0]
    if(valor == "unit" || valor == "units"){
        let embed = new Discord.MessageEmbed()
            .setColor(colours.aqua)
            .setAuthor(bot.user.username, message.guild.iconURL())
        let units = 0;
        let geral = [];
        for(let tipo in cDB){
            if(tipo == "aliases") continue
            let obj = {}
            let obj2 = {}
            for(let a in cDB[tipo]){
                let aliases = [];
                for(let alias of cDB.aliases[a]){
                    aliases.push(alias)
                }
                obj2[a] = aliases
                obj[tipo] = obj2
                units++;
            }
            geral.push(obj)
            
        }
        console.log(geral)
        /*
        embed.setDescription(`**${tipo}:**`)
            .addField(`:`, alias, true)
            .setFooter(`${bot.user.username} | Total units: ${units}`)
        
        message.channel.send(embed)
        */

        return 
    }
    if(!valor){
        console.log(`↳ ⚠️ Usuário não informou um valor `)
        log.send(`↳ ⚠️ Usuário não informou um valor `)
        return message.channel.send("`❌` Enter some value for me to perform the conversion.\n> For more information, type ` +help conversion `")
    }else{
        valor = valor.toString()
    }

    let char = valor.search(/\D+/)
    let from;
    if(char != -1){
        from = valor.slice(char)
        valor = eval(valor.slice(0, char))
    }
    let to = args[1]

    if(!from){
        console.log(`↳ ⚠️ Usuário não digitou a unidade inicial`)
        log.send(`↳ ⚠️ Usuário não digitou a unidade inicial`)
        return message.channel.send("`❌` Enter the unit.")
    }
    if(isNaN(valor)){
        console.log(`↳ ⚠️ Usuário digitou algum carácter`)
        log.send(`↳ ⚠️ Usuário digitou algum carácter`)
        return message.channel.send("`❌` Enter numbers only.")
    }   

    let result = new Discord.MessageEmbed()
        .setColor(colours.aqua)
        .setAuthor(bot.user.username, message.guild.iconURL())

    if(!to){
        let achou = false
        for(let unit in cDB.aliases){
            for(let alias of cDB.aliases[unit]){
                console.log(alias+" | "+ unit)
                if(alias == from){
                    from = unit
                    achou = true
                    result.setDescription(`**${valor} ${from} to:**`)
                    break;
                }
            }
        }

        if(achou){
            if(from == "meter"||from == "kilometer"||from == "centimeter"||from == "millimeter"||from == "micrometer"||from == "nanometer"||from == "mile"||from == "yard"||from == "foot"||from == "inch"||from == "light_year"){
                for(let unit in cDB.length[from]){
                    result.addField(`${unit}:`, `${valor*cDB.length[from][unit]}`, true)
                }
            }else if(from == "celsius"||from == "kelvin"||from == "fahrenheit"){
                for(let unit in cDB.temperature[from]){
                    let r;
                    if(from == "celsius"){
                        if(unit == "kelvin"){
                            r = valor + 273.15
                        }else if(unit == "fahrenheit"){
                            r = (valor * 9/5) + 32
                        }
                    }else if(from == "kelvin"){
                        if(unit == "celsius"){
                            r = valor - 273.15
                        }else if(unit == "fahrenheit"){
                            r = (valor - 273.15) * 9/5 + 32
                        }
                    }else if(from == "fahrenheit"){
                        if(unit == "celsius"){
                            r = (valor - 32) * 5/9
                        }else if(unit == "kelvin"){
                            r = (valor - 32) * 5/9 + 273.15
                        }
                    }
                    result.addField(`${unit}:`, r, true)
                }
            }
            
        }else{
            return message.channel.send(`❌ Unit \` ${from} \` not found.`)
        }
        
    }

    await message.channel.send(result)
}


module.exports.config = {
    name: "conversion",
    description: "Converts the indicated value to the requested unit!",
    usage: "+conversion [value][unit] [to]\n+conversion 5km mile\n\nYou can use '+conversion unit' to see all units I support!",
    accessableby: "Members",
    aliases: ["conv", "conversao"]
}