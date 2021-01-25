const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const config = require("./config.json");
const { loadCommands } = require("./files/command");

const DisTube = require("distube");

client.distube = new DisTube(client, {
  searchSongs: false,
  emitNewSongOnly: true,
});
client.distube
  .on(
    "playSong",
    (message, song) =>
      message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
      )
    // console.log(song.name.toString())
  )
  .on("addSong", (message, queue, song) =>
    message.channel.send(
      `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    )
  )
  .on("error", (message, e) => {
    console.error(e);
    message.channel.send("An error encountered: " + e + " Please try again");
  });

// for reading the events happen
require("./files/event")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// for reading the commands
loadCommands(client);

client.login(config.token);
