const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    client.on("message", message => {
        if (message.content.toLowerCase() == "shutdown") { // Note that this is an example and anyone can use this command.
            message.channel.send("Shutting down...").then(() => {
                client.destroy();
            })
        }
    })

}

module.exports.help = {
    name: "shutdown",
    description: "yeet",
    category: "yeet"
}