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





client.on('message', message => {
    var prefix = "$";
     if(message.content === prefix + "mc") {
     if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
                    
    }).then(() => {
             message.reply("**__تم تقفيل الشات__ ✅ **")
       });
    }
    if(message.content === prefix + "uc") {
    if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
        message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
                    
         }).then(() => {
          message.reply("**__تم فتح الشات__✅**")
      });
  }
                           
});






client.on('message', message => {
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  if(!message.content.toLowerCase().startsWith(prefix)) return;
  if(command == "sugg") {
    if(!args.join(" ")) return message.channel.send(`**يرجي كتابة الاقتراح **`);
    let channel = message.guild.channels.find(c => c.name == "suggestions");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(``)
    .setFooter(`Select a reaction below to vote on suggestion`)
    .setDescription(args.join(" "));
    channel.send(embed).then(msg => {
      msg.react("✅").then(() => msg.react("❌"));
      message.delete()
      message.channel.send(`**شكرا علي كتابة اقتراح تم الارسال في  روم الاقتراحات  ✅ **`);
    });
  }
});









client.on('message', message => {
if(message.author.bot) return;
              if(!message.channel.guild) return;
    var prefix = "$";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**الأمر بالسيرفرات بس**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ماعندك الصلاحية المطلوبة**' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**ترسل برودكاست فاضي؟**');message.channel.send(`**متأكد؟** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❎'))
    .then(() =>msg.react('✅'))
 
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('#00ff47')
       .setTitle('**:incoming_envelope:رسالة:incoming_envelope:')
       .addField('**:diamond_shape_with_a_dot_inside:السيرفر:diamond_shape_with_a_dot_inside:**', message.guild.name)
       .addField(':page_facing_up:الرسالة:page_facing_up:', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**كنسل يا مدير**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
let cooldown = new Set();
let cdseconds = 5;
if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
  return  message.reply("الصبر يا أخي")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }
setTimeout(() => {
  cooldown.delete(message.author.id)
}, cdseconds * 1000)
    });










client.on("message", msg => { //Narox Dev
    if(msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
  let prefix = '!'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}warn`){//الامر
    
    
  
    let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!rUser) return msg.channel.send("Couldn't find users.");
      let reason = args.join(" ").slice(22);
  
      let reportembed = new Discord.RichEmbed()
      .setDescription("Warn")
      .setColor("BLACK")
      .addField("Warn User", `${rUser} with ID: ${rUser.id}`)
      .addField("Warn By", `${msg.author} with ID: ${msg.author.id}`)
      .addField("Channel", msg.channel)
      .addField("Time", msg.createdAt)
      .addField("Reason",`${reason}`)
      
      
      let reportchannel = msg.guild.channels.find(`name`,"warn-log"); //حط هنا اسم الروم الي يوريك بعض المعلومات
      if(!reportchannel) return msg.channel.send("Couldn't find `warn-log` channel. "); //ط هنا اسم الروم الي يوريك بعض المعلومات
      
      msg.delete().catch(O_o=>{});
      reportchannel.send(reportembed);
      let role = msg.guild.roles.find(`name`, 'Warn'); 
      if(!role) return msg.guild.channel.send("Could't find `Warn` role."); 
      rUser.addRole(role);
      
          return;
      }
      });







var guilds = {};
client.on('message',async message => {
 var prefix2 = '#';//البرفكس
  if(message.content.startsWith(prefix2 + "تقديم")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`name`, "اسم روم الي يحطلك معلومات الي قدم");
 
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| من فضلك اكتب عمرك  الأن... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| من فضلك اكتب من اي بلد انت الأن... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**
 
[**اسم المقدم**]:
${thisMessage}
 
[**عمره**]:
${boi}
 
[**من بلد**]:
${boi2}
 
[**تم التقديم بواسطة**]:
${message.author}
 
[**ايدي المقدم**]:
${message.author.id}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});


























































client.login(process.env.TOKEN); 
