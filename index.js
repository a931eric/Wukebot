const data=require("./data.json");
const Discord=require("discord.js");
const bot=new Discord.Client({disableEveryone:true});
bot.on("ready",async()=>{
  console.log(`${bot.user.username}is on line!`)
  bot.user.setActivity("皮卡丘打排球",{type:"PLAYING"});
})
bot.on("message",async message=>{
  let prefix="";
  let messageArray=message.content.split(" ");
  let cmd=messageArray[0];
  let args=messageArray.slice(1);


  //message.channel.send("recived!");

  if(cmd===`${prefix}set`){
   data.data1=args[0];
   return;
  }

  if(cmd===`${prefix}output`){
    return message.channel.send(data.data1);
  }

  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total members",message.guild.memberCount);
    return message.channel.send(serverembed);


  }
})

bot.login(process.env.BOT_TOKEN);
