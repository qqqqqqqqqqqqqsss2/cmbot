const Discord = require("discord.js")
const Bot = new Discord.Client()


Bot.on("ready", () => {
    Bot.user.setActivity("over codermans.", { type: "WATCHING" })
});

Bot.on("message", (Message) => {
    if (Message.author == Bot.user) {
        return;
    } else {
        if (Message.content.charAt(0) == "!") {
            /* Admin Commands */

            if (Message.member.roles.has("550355916822675483")) {
                const Args = Message.content.slice(1, Message.content.length).split(" ");

                if (Args[0] == "clear") {
                    Message.delete();

                    let Amount = Number(Args[1]);

                    if (Amount > 50) {
                        Amount = 50
                    }

                    Message.channel.bulkDelete(Amount);

                    Message.channel.send("Deleted " + Amount + " messages.");
                }

                if (Args[0] == "role") {

                }
            }
        }     
    }
});

Bot.login("NTUwMDI0Njg5NTk0OTI1MDcx.D1caDQ.ouUsxwNPGS-sTu5Ind7FFChDakQ");
