const distube = require("distube");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel) {
    return message.channel.send(
      "You must have to be connected to a voice channel first!"
    );
  }

  var queue = await bot.distube.getQueue(message);

  if (queue) {
    bot.distube
      .jump(message, parseInt(args[0]))
      .catch((err) => message.channel.send("Invalid song number."));

    // message.channel.send("Music is stopped!");
  } else if (!queue) {
    return;
  }
};

module.exports.config = {
  name: "jump",
  aliases: ["jp"],
};
