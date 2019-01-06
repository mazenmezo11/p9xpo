const Discord = require('discord.js');
const client = new Discord.Client();








 client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط **")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 5**`)


    }
});



client.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //هنا حط الصوره الي تبيها
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
    .addField('``تاق العضو``', Sal.user.discriminator, true)
    .addField('``تم الانشاء في``', Sal.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', ' (we̪̖͙l̷̨͞c̙o̙me̝̜͔-❤)') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });
    
    
       
    
    
    var prefix = '!';
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', ${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \${moment(heg.createdTimestamp).fromNow()}`,true) 
    .addField(': انضمامك لسيرفر قبل',${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n `${moment(h.joinedAt).fromNow()}`, true)               
    .setFooter(OverBot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif%27')
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}
});




  var prefix = "#";
if (message.author.x5bz) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "ban") {
             if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("You Don't Have BAN_MEMBERS Permission");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I Don't Have BAN_MEMBERS Permission");
let user = message.mentions.users.first();
let reason = message.content.split(" ").slice(2).join(" ");
//TOXIC CODES


if (message.mentions.users.size < 1) return message.channel.send(https://cdn.pg.sa/fjxlms81nk.png);
if(!reason) return message.channel.send(https://cdn.pg.sa/fjxlms81nk.png);
if (!message.guild.member(user)
.bannable) return message.reply(This User Is Have High Role !);

message.guild.member(user).ban(7, user);

const banembed = new Discord.RichEmbed()
.setAuthor(BANNED!, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("User:",  '[ ' + ${user.tag} + ' ]')
.addField("By:", '[ ' + ${message.author.tag} + ' ]')
.addField("Reason:", '[ ' + ${reason} + ' ]')
message.channel.send({
  embed : banembed
})
}
});




client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(**شكراً لك لإضافه البوت الى سيرفرك**)
      guild.owner.send(embed)
});


client.login('NTMxMzQ0NTczNDY5ODE4ODkx.DxP76g.MR_i32SKYw1pBrF2_w3i3L0rgZM');
