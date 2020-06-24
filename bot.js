const Discord = require("discord.js")
const bot = new Discord.Client()

const config = require("./config.json")

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const falouRecentemente = new Set()

let loading = "<a:loading:722456385098481735>"


fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") // Pega todos os nomes dos comandos da pasta "./commands/" e remove o '.js'
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Não foi possivel encontrar comandos!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`); // Importa cada arquivo
        bot.commands.set(pull.config.name, pull); // Coloca o nome dele na Collection
        console.log(`\n■▶ [LOGS] ⇥ Comando "${pull.config.name}" inicializado com sucesso`)
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name) // Coloca a variação dele na Collection
            console.log(`↳ Variação '${alias}' adicionada para "${pull.config.name}"`)
        });
    });
});

bot.once("ready", () => {
    console.log("\n■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    console.log(`■ Bot foi iniciado em ${bot.guilds.cache.size} servidor(es) ■`);
    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■\n\n")
    bot.user.setActivity(`${config.prefix}help | Created by Igor Rocha`, {type: 'WATCHING'})

})

bot.on("message", async message => {
    
    if(message.author.bot) return;// Se o autor foi um bot, faz nada
    if(message.channel.type == "dm") return message.channel.send("I don't answer here..."); // Se a mensagem foi enviada por dm, não continua o código

    let prefix = config.prefix; 
    let messageArray = message.content.split(" ")
    let comando = messageArray[0].slice(prefix.length);
    let args = messageArray.slice(1);
    
    if(!message.content.startsWith(prefix)) return; // Valida o prefix do comando

    let m = await message.channel.send(loading)
    if (falouRecentemente.has(message.author.id)) {
        await m.edit("Wait 5 seconds until sending another command.").then(async n => {
            await n.delete( {timeout: 3000} ).catch( () => console.log(`↳ ⚠️ Erro ao deletar a mensagem`) )
        })
    }else{
        await m.delete()

        let commandfile = bot.commands.get(comando) || bot.commands.get(bot.aliases.get(comando)) // Pega o comando escrito no arquivo de comandos
        if(commandfile) commandfile.run(bot,message,args) // Verifica se o comando existe
        else{
            message.channel.send('`❌` Command not found.')
            console.log(`↳ Comando "${comando}" não encontrado`)
        }

        falouRecentemente.add(message.author.id);
        setTimeout(() => {
            falouRecentemente.delete(message.author.id);
        }, 5000);
    }

    

})

bot.login(config.token)