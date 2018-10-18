const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = ("!");
bot.login(process.env.TOKEN);

bot.on("message", message => {

    if(message.content === prefix + "nsfw") {
        var nsfwmsg = message.channel.send("Cet accès peut choquer ou toucher la sensibilité des plus jeunes \nVous êtes responsable de ce que vous allez voir.\nÊtes vous sûr d'avoir accès au NSFW ?").then(mess => {
            mess.react('✅')
            mess.react('❌')
            const track = mess.createReactionCollector((r, u) => u.id === message.author.id)
            track.on('collect', r => {
                if (r.emoji.name === "✅") { 
                mess.delete()
                message.delete()
                    var role = message.guild.roles.find('name', '⚠️ NSFW');
                    message.member.addRole(role)
                    message.reply("Vous avez bien reçu l'accès au NSFW")}
                if (r.emoji.name === "❌") {
                    //message.channel.bulkDelete(1)
                    mess.delete()
		    message.delete()
                    message.channel.send("Demande d'accès au NSFW annulée !")}


                    
                }
                     
                     
)})}})

client.on('guildMemberAdd', member => {
	member.addRole(member.guild.roles.find('name', 'Membre').id);
	member.guild.channels.get('405485337993936927').send(`**Bienvenue ${member.user.username}** sur **__AzerWorld__** ! 🎉🤗`);
});
