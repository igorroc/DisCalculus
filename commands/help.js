const Discord = require("discord.js")
const colours = require("../colours.json")
const botconfig = require('../config.json')
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
    console.log(`\n■▶ [LOGS] ⇥ Usuário "${message.author.username}" usou o comando Help`)

    if(args[0] == "help") return message.channel.send(`Use this instead \`${prefix}help\` `)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command) || bot.aliases.has(command)) {
            command = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command))
            
            var SHembed = new Discord.MessageEmbed()
            .setColor(colours.yellow)
            .setAuthor(bot.user.username, message.guild.iconURL())
            .setThumbnail(bot.user.avatarURL())
            .setDescription(`> Bot prefix is: \` ${prefix} \`\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No description"}\n**Usage:** ${command.config.usage || "No usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases.join(", ")}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        let comandosSimples = Array.from(bot.commands.filter(c => c.config.accessableby === 'Members' )).toString()
        comandosSimples = comandosSimples.replace(/(,\[object Object\])+/g, "")
        comandosSimples = comandosSimples.replace(/[,]+/g, " ` | ` ")
        

        let comandosAdmin = Array.from(bot.commands.filter(c => c.config.accessableby === 'Mod' )).join(" `|` ")
        comandosAdmin = comandosAdmin.replace(/(,\[object Object\])+/g, "")
        comandosAdmin = comandosAdmin.replace(/[,]+/g, " ` | ` ")
        
        let Sembed = new Discord.MessageEmbed()
        .setColor(colours.yellow)
        .setAuthor(bot.user.username, message.guild.iconURL())
        .setThumbnail(bot.user.avatarURL())
        .setDescription(`These are the commands available to the ${bot.user.username}!\n> Bot prefix is: \` ${prefix} \``)
        .addField(`Commands:`, "` " + comandosSimples + " `")
        
        if(message.member.hasPermission("ADMINISTRATOR")){
            if(comandosAdmin){
                Sembed.addField("Special Commands:", "` " + comandosAdmin + " `")
            }else{
                Sembed.addField("Special Commands:", "None")
            }
        }
        Sembed.addField("---------------", `For more information type \` ${prefix}help [command] \``)
        .setFooter(`${bot.user.username} | Comands: ${bot.commands.size}`, bot.user.avatarURL())
        message.channel.send(Sembed)
    }

    console.log(`↳ ✅ Operação finalizada!`)
}


module.exports.config = {
    name: "help",
    description: "Summary of server commands!",
    usage: "+help",
    accessableby: "Members",
    aliases: ["h", "commands", "comando", "comandos", "ajuda"]
}