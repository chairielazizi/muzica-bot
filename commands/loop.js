const distube = require("distube");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel) {
    return message.channel.send(
      "You must have to be connected to a voice channel first!"
    );
  }

  var queue = await bot.distube.getQueue(message);

  if (queue) {
    let mode = bot.distube.setRepeatMode(message, parseInt(args[0]));
    mode = mode ? (mode == 2 ? "Repeat queue" : "Repeat song") : "Off";
    message.channel.send(
      "Set repeat mode to `" +
        mode +
        "`\n `0:Off, 1:Repeat current song, 2:Repeat queue`"
    );
  } else if (!queue) {
    return;
  }
};

module.exports.config = {
  name: "loop",
  aliases: ["lp"],
};
