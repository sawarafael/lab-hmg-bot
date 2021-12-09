const Discord = require("discord.js");
const config = require("./config.json");

const prefix = "?";

const client = new Discord.Client({
  intents: ["DIRECT_MESSAGES"],
});

client.on("message", (message) => {
  if (message.content === `${prefix}ping`) {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.channel.send(
      `Bot está funcionando e está retornando uma latência de ${timeTaken}ms`
    );
  }
});

client
  .login(config.BOT_TOKEN)
  .then((sucess) => {
    console.log("\n" + "Deu bom, o bot está rodando" + "\n");
  })
  .catch((error) => {
    console.log(error);
  });
