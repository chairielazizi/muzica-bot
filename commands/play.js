const distube = require('distube');

module.exports.run = async (client,message,args) => {
    // distube.play(message,args.join(" "));
    const music = args.join(" ");

    client.distube.play(message,music);
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}