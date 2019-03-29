//سوي ملف وسميه
//suggestions.json
//وحط داخله {}
//الكوماندات
//$suggest يمديك تقترح بواسطة الكوماند هذا
//$dsug لو في اقتراح م عجبك وتبي تحذفه وتحذف كل شي متعلق فيه تحط الكوماند هذا بعدين تحط الأي دي الي انرسل في شات الأقتراحات بتلاقيه تحت مره بخط صغير
//$allsuggestions لرؤية جميع الأقتراحات
//والقادم افضل
//Made By Azoqz Or Known as Vampire From Codes =)
const Discord = require("discord.js");
const client = new Discord.Client();
const sug = require("./suggestions.json")
const fs = require("fs")
var prefix = "$" //يمديك تغير البريفكس لو تبي
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
    let message = msg;
    let messageArray = msg.content.split(" ");
    let args = messageArray.slice(1);
            let caseid = Date.now() + msg.author.discriminator
    if (msg.content.startsWith(prefix + "suggest" || msg.content.startsWith(prefix + "sug"))){
            let suggestionchat = msg.guild.channels.find(channel => channel.name === "الاقتراحات")
                                                                                  // ^^^^^^^^^وأكيد يمديك تعدل اسم الروم لو تبي
            let suggestion =  args.join(' '); // بتلاقون تعريف الأرقز حقي فوق
            if(!suggestion) return message.channel.send('الرجاء وضع اقتراحك بعد الأمر');
            if(!suggestionchat) return message.channel.send('لا يمكنني ايجاد الشات');
            let suggestionembed = new Discord.RichEmbed()
                .setAuthor('New Suggestion!')
                .addField('الأقتراح من قبل', `${message.author.tag} **|** ${message.author.id}`, true)
                .addField('اسم السيرفر المرسل منه الأقتراح', `${message.guild.name} **|** ${message.guild.id}`)
                .addField('الأقتراح', `${suggestion}`)
                .setColor('#ffffff')
                .setFooter(`ID: ${Date.now() + msg.author.discriminator}`)
                .setThumbnail(message.author.avatarURL)
                .setTimestamp();
            suggestionchat.send(suggestionembed).then(send =>{
            sug[caseid] = {
                message: suggestion,
                by: msg.author.id,
                Time: message.createdAt,
                thisisimportant: send.id
               }
               fs.writeFile("./suggestions.json", JSON.stringify(sug, null , 4), err =>{
                console.log(err);
                })
              })
            message.channel.send("**تم أرسال اقتراحك**")
              }
 
  if (msg.content.startsWith(prefix + "allsuggestions")){
    let data = undefined;
  for(i in sug){
      if (data === undefined) {
        data = "";
      }
      let data1 = sug[i].message
      let data2 = sug[i].by
      const stuff = `${data1} **By** <@${data2}>`;
      data += (stuff) + "\n\n";
    }
    if (data !== undefined) {
      const richEmbed = new Discord.RichEmbed();
      richEmbed.addField("Messages", data)
      msg.channel.send(richEmbed)
    }else if(data === undefined) return message.channel.send("Couldn't find any suggestion")
  }
  if (msg.content.startsWith(prefix + "dsug")){
        let that = args.join(' ')
        if(!that) return message.channel.send("Hmmm please put an id")
        if(sug[that] === undefined) return message.channel.send("Couldn't find that suggestion id!")
            message.channel.send("Deleted!")
            message.guild.channels.find(ch => ch.name === "الاقتراحات").fetchMessage(sug[that].thisisimportant).then(msg => msg.delete());
            delete sug[that];
            fs.writeFile("./suggestions.json", JSON.stringify(sug, null , 4), err =>{
                console.log(err)
              })
            }
       
})
client.login(process.env.TOKEN); 
