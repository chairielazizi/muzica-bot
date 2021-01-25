const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const config = require("./config.json");
const { loadCommands } = require("./files/command");

const DisTube = require("distube");

client.distube = new DisTube(client, {
  // searchSongs: false,
  searchSongs: true,
  emitNewSongOnly: true,
});

// const status = (queue) =>
//   `Volume: \`${queue.volume}%\` | Loop: \`${
//     queue.repeatMode
//       ? queue.repeatMode == 2
//         ? "Server Queue"
//         : "This Song"
//       : "Off"
//   }\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

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
  // DisTubeOptions.searchSongs = true
  .on("searchResult", (message, result) => {
    let i = 0;
    message.channel.send(
      `**Choose an option from below**\n${result
        .map(
          (song) => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``
        )
        .join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`
    );
  })
  // DisTubeOptions.searchSongs = true
  .on("searchCancel", (message) => message.channel.send(`Searching canceled`))

  .on("empty", (message) =>
    message.channel.send("Channel is empty. Leaving the channel")
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
