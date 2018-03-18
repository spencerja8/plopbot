// Import the discord.js module
const discord = require('discord.js')

// Create an instance of Discord that we will use to control the bot
const bot = new discord.Client();

// Token for your bot, located in the Discord application console - https://discordapp.com/developers/applications/me/
const token = 'NDI0NzUwMDM1NzUwNjE3MDg5.DY9b3Q.F-pF0BYCIE-ql7De9cANANAQAmw'

// Gets called when our bot is successfully logged in and connected
bot.on('ready', () => {
    console.log('Plopbot is running');
});

// Event to listen to messages sent to the server where the bot is located
bot.on('message', message => {
    // So the bot doesn't reply to iteself
    if (message.author.bot) return;
    
    // Check if the message starts with the `!` trigger
    if (message.content.indexOf('!') === 0) {
        // Get the user's message excluding the `!`
        var text = message.content.substring(1);
        
        // Reverse the message
        var reversed = '';
        var i = text.length;
        
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        
        // Reply to the user's message
        message.reply(reversed);
    }

    if (message.content.includes('meme')) {
    	message.reply('Did someone say meme?');
    }
});

bot.login(token);