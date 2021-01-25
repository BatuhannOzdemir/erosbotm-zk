const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("ErosBot✨")
.setTitle("<a:emoji_5:735919434140745728> ErosBot Müzik Menüsü <a:emoji_5:735919434140745728>")
 .setTimestamp()
.setDescription("**e!pruning** = Ne işe yaradığını bilmiyorum :p \n **e!play** = Müzik Oynatır. \n **e!stop** = Müziği Kapatır. \n  **e!loop** = Müziği Tekrar Moduna Alır. \n **e!lyrics** = Müziğin Sözlerini Gösterir. \n  **e!np** = Şu Anda Oynatılan Müziği Gösterir. \n  **e!pause** = Müziği Duraklatır. \n  **e!queue** = Müzik Sırasını Gösterir. \n  **e!shuffle** = Müzik Sırasını Karıştırır. \n **e!resume** = Durdurduğunuz Şarkıyı Devam Ettirir. \n **e!volume** = Ses Seviyesini Belirler. \n **e!skip** = Şarkıyı Atlar.")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["müzik-yardım","müzikyardım"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'müzik'
}