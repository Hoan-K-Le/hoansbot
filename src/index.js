require("dotenv").config();
const { IntentsBitField, Client } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    // Include GuildMembers only if you need it
  ],
});

client.on("ready", c => {
  console.log(`${c.user.tag} is online.`);
});

client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content === "hello") {
    message.reply("Hello N word!");
  }
});

client.login(process.env.TOKEN);
