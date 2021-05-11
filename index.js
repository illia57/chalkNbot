// console.log("Hello world")

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const PREFIX = "?";

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else {
    let args = msg.content.substring(PREFIX.length).split(" ");
    console.log(args)

    switch(args[0])
    {
        case 'website':
            msg.channel.send("http://www.youtube.com/user/kir10s");
            break;
        case 'avatar':
            msg.reply(msg.author.displayAvatarURL());
            break;
        case 'clear':
            if(!args[1]) {
                return msg.reply("Error please define a second parameter")
            }
            else{
                // ?clear 5
                msg.channel.bulkDelete(args[1]);
                break;
            }
    }
  }


  
});


client.login('ODM5OTEzMTU3MjU4MTE3MTQw.YJQkFQ._9CMxAz7n4rFL4pQASQw_E_1Jcg');