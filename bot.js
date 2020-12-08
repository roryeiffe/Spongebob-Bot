require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

function has_caps(word){
    for (let i = 0; i < word.length; i ++){
        if (word[i] == word[i].toUpperCase) return true;
    }
    return true;
}

function changeWord(word) {
    // no linkes:
    if (word.substr(0,4) == "http") return;
    console.log(word)
    let message;
    while (true){
        message = ""
        for (var i = 0; i < word.length; i ++){
            let x = Math.floor(Math.random() * 2);
            if(x == 1) {
                bool = true;
                message += word.charAt(i).toUpperCase()
            }
            else {
                bool = false;
                message += word[i]
            }
        }
        if (has_caps(message)) break;
    }
    
    return message;
}

client.on('ready', () => {
    console.log("Our bot is ready to go!!!")
})

client.on('message', (msg) => {
    if (msg.author.username != client.user.username && msg.content.length > 6) {
        let response = changeWord(msg.content);
        msg.reply(response);
    }
})

client.login(process.env.BOT_TOKEN);