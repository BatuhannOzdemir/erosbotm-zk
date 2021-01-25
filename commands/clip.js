const { PREFIX } = require("../util/EvobotUtil");

module.exports = {
  name: "clip",
  description: "Şarkının Klibini Oynatır.",
  async execute(message, args) {
    const { channel } = message.member.voice;
    const queue = message.client.queue.get(message.guild.id);

    if (!args.length) return message.reply(`Kullanım: ${PREFIX}clip <name>`).catch(console.error);
    if (queue) return message.reply("Can't play clip because there is an active queue.");
    if (!channel) return message.reply("Bu Komutu Kullanmak İçin Ses Kanalına Katılmış Olman Gerek!").catch(console.error);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    message.client.queue.set(message.guild.id, queueConstruct);

    try {
      queueConstruct.connection = await channel.join();
      const dispatcher = queueConstruct.connection
        .play(`./sounds/${args[0]}.mp3`)
        .on("finish", () => {
          message.client.queue.delete(message.guild.id);
          channel.leave();
        })
        .on("error", err => {
          message.client.queue.delete(message.guild.id);
          channel.leave();
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  }
};
