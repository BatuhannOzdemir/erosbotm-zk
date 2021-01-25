const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Durdurduğunuz Müziği Devam Ettirir.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Bu Komutu Kullanmak İçin Müzik Açman Gerek.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ Müziğe Devam Ediliyor!`).catch(console.error);
    }

    return message.reply("Sıra Durdurulmadı!").catch(console.error);
  }
};
