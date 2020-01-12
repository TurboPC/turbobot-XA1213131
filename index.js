require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');

} else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`Chciałeś kopnąć: ${taggedUser.username}`);
    } else {
        msg.reply('Proszę otagować poprawnego użytkownika!');
    }
}
});

bot.login(TOKEN);

