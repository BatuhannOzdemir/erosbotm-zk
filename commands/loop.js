const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "loop",
  aliases: ["l"],
  description: "Müzik Tekrarını Açar/Kapatır",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Bu Komutu Kullanmak İçin Müzik Açman Gerek.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel.send(`Müzik Tekrarı: ${queue.loop ? "**on**" : "**off**"}`).catch(console.error);
  }
};
