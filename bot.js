const prefix ="!";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("Bot Online"); 
console.log("log");
});















 const devs = ["441584713799303183"];
const adminprefix = ["!"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
 









client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
}
 }
});










client.on('message', async message => {
if(message.content.startsWith(prefix + "bcall")) {
  let i = client.users.size;
  if(message.author.id !== '441584713799303183') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
  var args = message.content.split(' ').slice(1).join(' ');
  if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
  setTimeout(() => {
    message.channel.send(`تم الارسال لـ ${i} شخص`)
  }, client.users.size * 500);
  client.users.forEach(s => {
    s.send(args).catch(e => i--);
  });
}
});











client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
}
});










client.on("guildMemberAdd", (member) => {
client.channels.get('506457510954401794').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
})
client.on("guildMemberRemove", (member) => {
client.channels.get('540148653134708747').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
})











client.on("message", msg => {
let ownerid = '441584713799303183'
if(msg.content === `<@${ownerid}>`){
bot.users.get(ownerid).send(`
في واحد منشنك

In server: :arrow_down:
\`${msg.guild.name}\`
 
By: :arrow_down:
***${msg.author}***`);
}
})












client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '538373508959436800').setName("W");
client.channels.find('id', '538373508959436800').setName("We");
client.channels.find('id', '538373508959436800').setName("Wel");
client.channels.find('id', '538373508959436800').setName("Welc");
client.channels.find('id', '538373508959436800').setName("Welco");
client.channels.find('id', '538373508959436800').setName("Welcom");
client.channels.find('id', '538373508959436800').setName("Welcome");
client.channels.find('id', '538373508959436800').setName("Welcome T");
client.channels.find('id', '538373508959436800').setName("Welcome To");
client.channels.find('id', '538373508959436800').setName("Welcome To C");
client.channels.find('id', '538373508959436800').setName("Welcome To Co");
client.channels.find('id', '538373508959436800').setName("Welcome To Cod");
client.channels.find('id', '538373508959436800').setName("Welcome To Code");
client.channels.find('id', '538373508959436800').setName("Welcome To Codes");
  }, 60000);
});
























client.login(process.env.TOKEN); 
