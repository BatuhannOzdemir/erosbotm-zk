module.exports = {
  name: "ping",
  cooldown: 10,
  description: "Botun Ping'ini Gösterir.",
  execute(message) {
    message.reply(`📈 Ping: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
