const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzIxNjY1NjQyMzQ3ODg4Njg5.XuYvDA.60S98Z0Z4f11i3SS7KccYt08eos';

const PREFIX = "!";

var version = "1.0.1";

bot.on("ready"), () =>{
    console.log('This bot is online');
    bot.user.setActivity('Watching Server');

})

bot.login(token);
bot.login(process.env.token)
