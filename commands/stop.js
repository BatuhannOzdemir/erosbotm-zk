const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "stop",
  description: "Müziği Durdurur.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("Bu Komutu Kullanmak İçin Müzik Açman Gerek.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ Müzik Durduruldu!`).catch(console.error);
  }
};