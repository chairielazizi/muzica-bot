// const distube = require("distube");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpArray = message.content.split(" ");
  let helpArgs = helpArray.slice(1);

  //   if (helpArgs[0]) {
  var embed = new Discord.MessageEmbed()
    .setAuthor(
      "Muzica Bot",
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b123901-SE2GQngZ22fy.png"
    )
    .setTitle("Muzica Bot Help Command")
    .setDescription(
      "`A music bot made using Distube npm package and discord.js API. Sorry if there are any errors. （っ＾▿＾）`\n The prefix for this bot: `<`"
    )
    .setColor("#0ccfc2")
    .setThumbnail(
      "https://ih1.redbubble.net/image.1700776000.4758/ur,pin_large_front,square,600x600.jpg"
    )
    .setFooter(
      "Coded using Distube discord.js",
      "https://avatars2.githubusercontent.com/u/76640873?s=400&v=4"
    )
    .setTimestamp()
    .addFields(
      { name: "<play or <p", value: "To search and play music" },
      { name: "<stop or <st", value: "To stop the current playing song" },
      { name: "<skip or <sk", value: "To skip the current song" },
      {
        name: "<playskip or <ps",
        value: "To skip the current song and play the requested song",
      },
      { name: "<queue or < q", value: "To see the queue of the playlist" },
      {
        name: "<jump or <jp",
        value:
          "Specify the number of song in the queue.Have to minus 1 the value of song in the queue. `Eg:For song number 4, <jump 3`",
      },
      {
        name: "<loop or <lp",
        value: "Loop mode. The value is `0:off,1:repeat song,2:repeat queue`",
      },
      { name: "<help or <h", value: "To get this help embed :)" }
    );

  message.channel.send(embed);
  //   }
};

module.exports.config = {
  name: "help",
  aliases: ["h"],
};
