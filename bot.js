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
if(msg.content === `<@${441584713799303183}>`){
bot.users.get(441584713799303183).send(`
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
  }, 2000);
});













var roles = {};
client.on('guildMemberRemove', member => {
 roles[member.id] = {roles: member.roles.array()};
});
client.on('guildMemberAdd', member => {
if(!roles[member.user.id]) return;
console.log(roles[member.user.id].roles.length);
for(let i = 0; i < roles[member.user.id].roles.length; i++) {
member.addRole(roles[member.user.id].roles);
roles[member.user.id].shift();
}
});









client.on('message', message => {
    if(message.content === "!bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});








client.on('message', msg => {
var prefix = "!";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'channels')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let eyadandr3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`                            📝ان كنت تريد انشاء روم صوتي اظغط علي الايموجي🎤                                                                                                                                                                                     الان كنت تريد انشاء مستند اضغط علي الايموجي                                                                                                                                                                                                                                                      
 ✏ان كنت تريد انشاء شات كتابي اظغط علي الايموجي `)
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(eyadandr3d).then(message => {
   
   
 message.react('✏').then(r=>{
 message.react('🎤').then(r=>{
           
 message.react('📝').then(r=>{
                                   
                             
   
let Category = (reaction, user) => reaction.emoji.name === '📝' && user.id === msg.author.id;
let Text = (reaction, user) => reaction.emoji.name === '✏' && user.id === msg.author.id;
 let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;
 
let cy = message.createReactionCollector(Category, { time: 60000 });
let tt = message.createReactionCollector(Text, { time: 60000 });
 let ve  = message.createReactionCollector(Voice, { time: 60000 });
 
ve.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice');
    msg.channel.send(`☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
    msg.delete();
})
tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text');
    msg.channel.send(`☑ تم انشاء شات كتابي بنجاح : \`${args}\``)
    msg.delete();
})
cy.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'category');
    msg.channel.send(`☑ تم انشاء المستند بنجاح : \`${args}\``)
    msg.delete();
})
})
})
})
})
}
});







client.on('message', function(msg) {
if(msg.content.startsWith (prefix  + 'serverinfo')) {
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(msg.guild.iconURL)
 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
 .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
 .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
 .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
 .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
 .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
 .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
 .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
 .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
 .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
 msg.channel.send({embed:embed});
}
});









client.reply = JSON.parse(fs.readFileSync('./replys.json' , 'utf8'));
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setReply")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| من فضلك اكتب الرساله الان... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| من فضلك اكتب الرد الان... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **| تم الاعداد بنجاح...  **').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Autoreply Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Reply:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    reply[message.guild.id] = {
        msg: thisMessage,
        reply: boi,
        onoff: 'On'
    }
    fs.writeFile("./replys.json", JSON.stringify(reply), (err) => {
    if (err) console.error(err)
  })
   }
            )
        })
    })
})
    })
}})            
client.on('message', async message => {
            if(!reply[message.guild.id]) reply[message.guild.id] = {
          onoff: 'Off'
        }
          if(reply[message.guild.id].onoff === 'Off') return;
   if(message.content === reply[message.guild.id].msg) {
       message.channel.send(reply[message.guild.id].reply)
   }}
)







client.say = JSON.parse(fs.readFileSync('./say.json' , 'utf8'));
//Perfect Say Code
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setSay")) {
    let filter = m => m.author.id === message.author.id;
    let role;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| Please Type The Role Required To Type The Say Command ... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
   
        .then(collected => {
            collected.first().delete();
            role = collected.first().content;
            let replymsg;
            msg.edit(':scroll: **| Now Please Type The Answer If He Dont Have The Required Role ... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    replymsg = collected.first().content;
                    msg.edit('✅ **| Successfully Setup !...  **').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                   
      let embed = new Discord.RichEmbed()
      .setTitle('**Done The Say Code Has Been Setup**')
      .addField('Say Role:', `${role}`)
      .addField('Say Role Reply:', `${replymsg}`)
      .addField('Requested By:', `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`)
      .setColor('RANDOM')
      say[message.guild.id] = {
      onoff: 'On',
      sayembed: 'On',
      reply: replymsg,
      sayrole: role
      },
      message.channel.sendEmbed(embed)
      fs.writeFile("./say.json", JSON.stringify(say), (err) => {
      if (err) console.error(err)
    })
      })
    })
   })
 })
})
   }})
   
   client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if(message.content.startsWith(prefix + 'embedsay')) {
    if(say[message.guild.id].onoff === 'Off') return;
    if(say[message.guild.id].sayembed === 'Off') return;
    let staff = message.guild.member(message.author).roles.find('name' , `${say[message.guild.id].sayrole}`);
    if(!staff) return message.channel.send(`${say[message.guild.id].replymsg}`)    
let embed = new Discord.RichEmbed()
.setDescription(args)
message.channel.sendEmbed(embed)
}})
 
     
client.on('message', message => {
 
  if(message.content.startsWith(prefix + "toggleSay")) {
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!say[message.guild.id]) say[message.guild.id] = {
        onoff: 'Off'
      }
        if(say[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Say Is __𝐎𝐍__ !**`), say[message.guild.id].onoff = 'On']
        if(say[message.guild.id].onoff === 'On') return [message.channel.send(`**The Say Is __𝐎𝐅𝐅__ !**`), say[message.guild.id].onoff = 'Off']
        fs.writeFile("./say.json", JSON.stringify(say), (err) => {
          if (err) console.error(err)
          .catch(err => {
            console.error(err);
        });
          });
        }
       
      })
     
      client.on('message', message => {
 
        if(message.content.startsWith(prefix + "toggleEmbed")) {
            if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
            if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
            if(!say[message.guild.id]) say[message.guild.id] = {
              embed: 'Off'
            }
              if(say[message.guild.id].sayembed === 'Off') return [message.channel.send(`**The Say Embed Is __𝐎𝐍__ !**`), say[message.guild.id].sayembed = 'On']
              if(say[message.guild.id].sayembed === 'On') return [message.channel.send(`**The Say Embed Is __𝐎𝐅𝐅__ !**`), say[message.guild.id].sayembed = 'Off']
              fs.writeFile("./say.json", JSON.stringify(say), (err) => {
                if (err) console.error(err)
                .catch(err => {
                  console.error(err);
              });
                })
              }
             
            })
 
 
            client.on('message', message => {
 
        if (message.author.bot) return;
     
        if (!message.content.startsWith(prefix)) return;
     
     
        let command = message.content.split(" ")[0];
     
        command = command.slice(prefix.length);
     
     
        let args = message.content.split(" ").slice(1);
let embed = new Discord.RichEmbed()
.setTitle(args)
     
     
        if (command === "say") {
         
          if(say[message.guild.id].onoff === 'Off') return;
          let staff = message.guild.member(message.author).roles.find('name' , `${say[message.guild.id].sayrole}`);
          if(!staff) return message.channel.send(`${say[message.guild.id].replymsg}`)      
                message.delete()
                if(!say[message.guild.id].sayembed === 'On') return message.sendEmbed(say)
                message.channel.sendMessage(args)
        }})
     
client.on('message', message => {
  if(message.content.startsWith(prefix + "infoSay")) {
let embed = new Discord.RichEmbed()
.addField('Say Status', `${say[message.guild.id].onoff}`)
.addField('Say Role:', `${say[message.guild.id].sayrole}`)
.addField('Say Embed Status:', `${say[message.guild.id].embed}`)
.addField('Requested By', `${message.author}`)
.setThumbnail('https://a.top4top.net/p_10555ubbl1.png')
.setImage(message.author.avatarURL)
.setFooter(`${client.user.username}`)
.setColor('RANDOM')
message.channel.sendEmbed(embed)
  }})








client.on("message", function(message) {
    var prefix = ".";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})
 
    })
}





























































client.login(process.env.TOKEN); 
