const distube = require("distube");

module.exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) {
    return message.channel.send(
      "You must have to be connected to a voice channel first!"
    );
  }

  // distube.play(message,args.join(" "));
  // join all arguments when have space
  const music = args.join(" ");

  client.distube.playSkip(message, music);
};

module.exports.config = {
  name: "playskip",
  aliases: ["ps"],
};
