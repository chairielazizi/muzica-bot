const distube = require("distube");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel) {
    return message.channel.send(
      "You must have to be connected to a voice channel first!"
    );
  }

  let queue = await bot.distube.getQueue(message);

  if (queue) {
    message.channel.send(
      "Current queue:\n" +
        queue.songs
          .map(
            (song, id) =>
              `**${id + 1}**. [${song.name}](${song.url}) - \`${
                song.formattedDuration
              }\``
          )
          .join("\n")
    );
  } else if (!queue) {
    return;
  }
};

module.exports.config = {
  name: "queue",
  aliases: ["q"],
};
