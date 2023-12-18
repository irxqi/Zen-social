const { Client, GatewayIntentBits, ButtonBuilder, ActionRowBuilder, EmbedBuilder, SlashCommandBuilder, ButtonStyle, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ActivityType, Collection} = require('discord.js');
const fs = require('fs');


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const prefix = '-'

require('dotenv').config();

client.setMaxListeners(50);

const token = process.env.TOKEN

function loadConfig() {
  try {
    const configData = fs.readFileSync('config.json', 'utf8');
    return JSON.parse(configData);
  } catch (err) {
    // Handle errors, e.g., if the file doesn't exist or is empty
    console.error('Error loading/parsing config.json:', err);
    return {}; // Initialize with an empty object
  }
}



let config = loadConfig();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}`);



});

client.on('messageCreate', async (message) => {
  if (message.author.bot) {
    return; // Ignore messages from bots
  }

    // Check if the message starts with 'profile' and mentions a user
    if ((message.content.startsWith(`${prefix}profile`) || message.content.startsWith('profile')) && message.mentions.users.size > 0) {
      
        // Extract the first mentioned user from the message
        const mentionedUser = message.mentions.users.first();
        const accnameM = mentionedUser.displayName;
        const accageM = mentionedUser.createdTimestamp;
        const currentDateM = new Date();
        const timeDifferenceM = currentDateM - accageM;
        const joinDateM = message.guild.members.cache.get(mentionedUser.id)?.joinedAt;
    
        const formattedJoinDateM = joinDateM?.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        });
    
        // Calculate the number of years
        const yearsM = Math.floor(timeDifferenceM / (365 * 24 * 60 * 60 * 1000));
    
        // Format the account age
        const accountAgeM = `${yearsM} ${yearsM === 1 ? 'year' : 'years'}`;
    
        // ... (other profile-related logic)
        const pfpM =  mentionedUser.displayAvatarURL({ format: 'png', dynamic: true });
        const avatarURLM =  mentionedUser.displayAvatarURL({ dynamic: true })
        const avatarProfileLinkM = `Avatar Download [⬇](<${avatarURLM}>)`;

        const socialembed = new EmbedBuilder()
        .setColor(0x9be2f4)
        .setTitle(`Hi ${accnameM}!`)

        .setAuthor({ name: 'Zen', iconURL: 'https://i.imgur.com/l1geXPC.png' })
        .setDescription('Here is your profile info')
        .setThumbnail(pfpM) // Set the user's avatar as the thumbnail
        .addFields(
          { name: 'Accont info :', value: `Account Age : ${accountAgeM}` },
          { name: ` `, value: `Server Join Date : ${formattedJoinDateM}`, inline: true },
          { name: ` `, value: `${avatarProfileLinkM}`},
          
        )




    
          const valueyt = config[ mentionedUser.id] ? config[ mentionedUser.id].Youtube_link : '';
          const isURLyt = isValidURL(valueyt); // Returns true
          const valuelinkyt = isURLyt && valueyt ? `${valueyt}` : 'https://www.example.com';
          const resultyt = isURLyt && valueyt;
      
          const valuereplit = config[ mentionedUser.id] ? config[ mentionedUser.id].replit_link : '';
          const isURLreplit = isValidURL(valuereplit); // Returns true
          const valuelinkreplit = isURLreplit && valuereplit ? `${valuereplit}` : 'https://www.example.com';
          const resultreplit = isURLreplit && valuereplit;
      
          const valuefacebook = config[ mentionedUser.id] ? config[ mentionedUser.id].facebook_link : '';
          const isURLfacebook = isValidURL(valuefacebook); // Returns true
          const valuelinkfacebook = isURLfacebook && valuefacebook ? `${valuefacebook}` : 'https://www.example.com';
          const resultfacebook = isURLfacebook && valuefacebook;
      
          const valuegaystation = config[ mentionedUser.id] ? config[ mentionedUser.id].gaystation_link : '';
          const isURLgaystation = isValidURL(valuegaystation); // Returns true
          const valuelinkgaystation = isURLgaystation && valuegaystation ? `${valuegaystation}` : 'https://www.example.com';
          const resultgaystation = isURLgaystation && valuegaystation;
      
          const valuetwitter = config[ mentionedUser.id] ? config[ mentionedUser.id].twitter_link : '';
          const isURLtwitter = isValidURL(valuetwitter); // Returns true
          const valuelinktwitter = isURLtwitter && valuetwitter ? `${valuetwitter}` : 'https://www.example.com';
          const resulttwitter = isURLtwitter && valuetwitter;
      
          const valueSteam = config[ mentionedUser.id] ? config[ mentionedUser.id].Steam_link : '';
          const isURLSteam = isValidURL(valueSteam); // Returns true
          const valuelinkSteam = isURLSteam && valueSteam ? `${valueSteam}` : 'https://www.example.com';
          const resultSteam = isURLSteam && valueSteam;
      
          const valuenoobgames = config[ mentionedUser.id] ? config[ mentionedUser.id].noobgames_link : '';
          const isURLnoobgames = isValidURL(valuenoobgames); // Returns true
          const valuelinknoobgames = isURLnoobgames && valuenoobgames ? `${valuenoobgames}` : 'https://www.example.com';
          const resultnoobgames = isURLnoobgames && valuenoobgames;
      
          const valuetwitch = config[ mentionedUser.id] ? config[ mentionedUser.id].twitch_link : '';
          const isURLtwitch = isValidURL(valuetwitch); // Returns true
          const valuelinktwitch = isURLtwitch && valuetwitch ? `${valuetwitch}` : 'https://www.example.com';
          const resulttwitch = isURLtwitch && valuetwitch;
      
          const youtube = new ButtonBuilder()
          .setLabel('Youtube')
          .setEmoji('<:yt:1156177397276758086>')
          .setStyle(ButtonStyle.Link)
          .setURL(`${valuelinkyt}`)
          .setDisabled(!resultyt); // Set disabled if there's no value
      
        
          const replit = new ButtonBuilder()
          .setLabel('Replit')
          .setEmoji('<:replit:1156177808326918144>')
          .setStyle(ButtonStyle.Link)
          .setURL(`${valuelinkreplit}`)
          .setDisabled(!resultreplit); // Set disabled if there's no value
      
      
          const facebook = new ButtonBuilder()
          .setLabel('FaceBook')
          .setEmoji('<:facebook2:1156498976523178034>')
          .setStyle(ButtonStyle.Link)
          .setURL(`${valuelinkfacebook}`)
          .setDisabled(!resultfacebook); // Set disabled if there's no value
      
          const Gaystation = new ButtonBuilder()
          .setLabel('PlayStation')
          .setEmoji('<:Gaystation:1156502237896507432>')
          .setStyle(ButtonStyle.Link)
          .setURL(`${valuelinkgaystation}`)
          .setDisabled(!resultgaystation); // Set disabled if there's no value
      
      
          const Twiitter = new ButtonBuilder()
          .setLabel('Twitter')
          .setEmoji('<:twiitter:1156498285591281735>')
          .setStyle(ButtonStyle.Link)
          .setURL(`${valuelinktwitter}`)
          .setDisabled(!resulttwitter); // Set disabled if there's no value
      
      
          const Steam = new ButtonBuilder()
          .setLabel('Steam')
          .setEmoji('<:steam:1156503931753599036>')
          .setStyle(ButtonStyle.Link)
          .setURL(`${valuelinkSteam}`)
          .setDisabled(!resultSteam); // Set disabled if there's no value
      
          const noobagames = new ButtonBuilder()
          .setLabel('Epic Games')
          .setEmoji('<:noobgames:1156502878958145537>')
          .setStyle(ButtonStyle.Link)
          .setURL(`${valuelinknoobgames}`)
          .setDisabled(!resultnoobgames); // Set disabled if there's no value
      
          const twitch = new ButtonBuilder()
          .setLabel('Twitch')
          .setEmoji('<:twitch:1156502164496203816>')
          .setStyle(ButtonStyle.Link)
          .setURL(`${valuelinktwitch}`)
          .setDisabled(!resulttwitch); // Set disabled if there's no value
        

        const socialRow1 = new ActionRowBuilder()
        .addComponents(youtube, replit, facebook, twitch, noobagames);
          
      
      
        const socialRow2 = new ActionRowBuilder()
        .addComponents(Steam, Twiitter, Gaystation);
        await message.reply({
          embeds: [socialembed],
          components: [socialRow1, socialRow2],
        });
    }
  
  const accname = message.author.displayName;
  const accage = message.author.createdTimestamp;
  const currentDate = new Date();
  const timeDifference = currentDate - accage;
  const userID = message.guild.members.cache.get(message.author.id); // Get the member object for the message author.
  const joinDate = userID.joinedAt;

 


  const formattedJoinDate = joinDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
});


  

  // Calculate the number of years
  const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
  
  // Format the account age
  const accountAge = `${years} ${years === 1 ? 'year' : 'years'}`;
  
  // Now, 'accountAge' contains the user's account age in the format "X years"
 
  function isValidURL(str) {
    // Regular expression pattern for a URL
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlPattern.test(str);
  }


  if (message.content.startsWith(`${prefix}profile`) || message.content.includes(`profile`) ) {
    if (message.mentions.users.size > 0) {
        return; // Exit early if there are mentions in the message
      }
    const valueyt = config[message.author.id] ? config[message.author.id].Youtube_link : '';
    const isURLyt = isValidURL(valueyt); // Returns true
    const valuelinkyt = isURLyt && valueyt ? `${valueyt}` : 'https://www.example.com';
    const resultyt = isURLyt && valueyt;

    const valuereplit = config[message.author.id] ? config[message.author.id].replit_link : '';
    const isURLreplit = isValidURL(valuereplit); // Returns true
    const valuelinkreplit = isURLreplit && valuereplit ? `${valuereplit}` : 'https://www.example.com';
    const resultreplit = isURLreplit && valuereplit;

    const valuefacebook = config[message.author.id] ? config[message.author.id].facebook_link : '';
    const isURLfacebook = isValidURL(valuefacebook); // Returns true
    const valuelinkfacebook = isURLfacebook && valuefacebook ? `${valuefacebook}` : 'https://www.example.com';
    const resultfacebook = isURLfacebook && valuefacebook;

    const valuegaystation = config[message.author.id] ? config[message.author.id].gaystation_link : '';
    const isURLgaystation = isValidURL(valuegaystation); // Returns true
    const valuelinkgaystation = isURLgaystation && valuegaystation ? `${valuegaystation}` : 'https://www.example.com';
    const resultgaystation = isURLgaystation && valuegaystation;

    const valuetwitter = config[message.author.id] ? config[message.author.id].twitter_link : '';
    const isURLtwitter = isValidURL(valuetwitter); // Returns true
    const valuelinktwitter = isURLtwitter && valuetwitter ? `${valuetwitter}` : 'https://www.example.com';
    const resulttwitter = isURLtwitter && valuetwitter;

    const valueSteam = config[message.author.id] ? config[message.author.id].Steam_link : '';
    const isURLSteam = isValidURL(valueSteam); // Returns true
    const valuelinkSteam = isURLSteam && valueSteam ? `${valueSteam}` : 'https://www.example.com';
    const resultSteam = isURLSteam && valueSteam;

    const valuenoobgames = config[message.author.id] ? config[message.author.id].noobgames_link : '';
    const isURLnoobgames = isValidURL(valuenoobgames); // Returns true
    const valuelinknoobgames = isURLnoobgames && valuenoobgames ? `${valuenoobgames}` : 'https://www.example.com';
    const resultnoobgames = isURLnoobgames && valuenoobgames;

    const valuetwitch = config[message.author.id] ? config[message.author.id].twitch_link : '';
    const isURLtwitch = isValidURL(valuetwitch); // Returns true
    const valuelinktwitch = isURLtwitch && valuetwitch ? `${valuetwitch}` : 'https://www.example.com';
    const resulttwitch = isURLtwitch && valuetwitch;

    const youtube = new ButtonBuilder()
    .setLabel('Youtube')
    .setEmoji('<:yt:1156177397276758086>')
    .setStyle(ButtonStyle.Link)
    .setURL(`${valuelinkyt}`)
    .setDisabled(!resultyt); // Set disabled if there's no value

  
    const replit = new ButtonBuilder()
    .setLabel('Replit')
    .setEmoji('<:replit:1156177808326918144>')
    .setStyle(ButtonStyle.Link)
    .setURL(`${valuelinkreplit}`)
    .setDisabled(!resultreplit); // Set disabled if there's no value


    const facebook = new ButtonBuilder()
    .setLabel('FaceBook')
    .setEmoji('<:facebook2:1156498976523178034>')
    .setStyle(ButtonStyle.Link)
    .setURL(`${valuelinkfacebook}`)
    .setDisabled(!resultfacebook); // Set disabled if there's no value

    const Gaystation = new ButtonBuilder()
    .setLabel('PlayStation')
    .setEmoji('<:Gaystation:1156502237896507432>')
    .setStyle(ButtonStyle.Link)
    .setURL(`${valuelinkgaystation}`)
    .setDisabled(!resultgaystation); // Set disabled if there's no value


    const Twiitter = new ButtonBuilder()
    .setLabel('Twitter')
    .setEmoji('<:twiitter:1156498285591281735>')
    .setStyle(ButtonStyle.Link)
    .setURL(`${valuelinktwitter}`)
    .setDisabled(!resulttwitter); // Set disabled if there's no value


    const Steam = new ButtonBuilder()
    .setLabel('Steam')
    .setEmoji('<:steam:1156503931753599036>')
    .setStyle(ButtonStyle.Link)
    .setURL(`${valuelinkSteam}`)
    .setDisabled(!resultSteam); // Set disabled if there's no value

    const noobagames = new ButtonBuilder()
    .setLabel('Epic Games')
    .setEmoji('<:noobgames:1156502878958145537>')
    .setStyle(ButtonStyle.Link)
    .setURL(`${valuelinknoobgames}`)
    .setDisabled(!resultnoobgames); // Set disabled if there's no value

    const twitch = new ButtonBuilder()
    .setLabel('Twitch')
    .setEmoji('<:twitch:1156502164496203816>')
    .setStyle(ButtonStyle.Link)
    .setURL(`${valuelinktwitch}`)
    .setDisabled(!resulttwitch); // Set disabled if there's no value




    const pfp = message.author.displayAvatarURL({ format: 'png', dynamic: true });
    const avatarURL = message.author.displayAvatarURL({ dynamic: true })
    const avatarProfileLink = `Avatar Download [⬇](<${avatarURL}>)`;


      // ... (rest of your code)
  
      const socialembed = new EmbedBuilder()
        .setColor(0x9be2f4)
        .setTitle(`Hi ${accname}!`)

        .setAuthor({ name: 'Zen', iconURL: 'https://i.imgur.com/l1geXPC.png' })
        .setDescription('Here is your profile info')
        .setThumbnail(pfp) // Set the user's avatar as the thumbnail
        .addFields(
          { name: 'Accont info :', value: `Account Age : ${accountAge}` },
          { name: ` `, value: `Server Join Date : ${formattedJoinDate}`, inline: true },
          { name: ` `, value: `${avatarProfileLink}`},
          
        )



        const socialRow1 = new ActionRowBuilder()
        .addComponents(youtube, replit, facebook, twitch, noobagames);
        
    
    
         const socialRow2 = new ActionRowBuilder()
        .addComponents(Steam, Twiitter, Gaystation);
        

      await message.reply({
        embeds: [socialembed],
        components: [socialRow1, socialRow2],
      });
    }
  });
  

  const youtubelink = new ButtonBuilder()
  .setCustomId('youtubelinkID')
  .setLabel('Youtube')
  .setEmoji('<:yt:1156177397276758086>')
  .setStyle(ButtonStyle.Success)


  const replitlink = new ButtonBuilder()
  .setCustomId('replitlinkID')
  .setLabel('Replit')
  .setEmoji('<:replit:1156177808326918144>')
  .setStyle(ButtonStyle.Success)

  const facebooklink = new ButtonBuilder()
  .setCustomId('facebooklinkID')
  .setLabel('facebook')
  .setEmoji('<:facebook2:1156498976523178034>')
  .setStyle(ButtonStyle.Success)

  const Gaystationlink = new ButtonBuilder()
  .setCustomId('GaystationlinkID')
  .setLabel('Playstation')
  .setEmoji('<:Gaystation:1156502237896507432>')
  .setStyle(ButtonStyle.Success)

  const Twitterlink = new ButtonBuilder()
  .setCustomId('TwitterlinkID')
  .setLabel('Twitter')
  .setEmoji('<:twiitter:1156498285591281735>')
  .setStyle(ButtonStyle.Success)

  const Steamlink = new ButtonBuilder()
  .setCustomId('SteamlinkID')
  .setLabel('Steam')
  .setEmoji('<:steam:1156503931753599036>')
  .setStyle(ButtonStyle.Success)

  const noobagameslink = new ButtonBuilder()
  .setCustomId('noobagameslinkID')
  .setLabel('Epic games')
  .setEmoji('<:noobgames:1156502878958145537>')
  .setStyle(ButtonStyle.Success)

  const twitchlink = new ButtonBuilder()
  .setCustomId('twitchlinkID')
  .setLabel('Twitch')
  .setEmoji('<:twitch:1156502164496203816>')
  .setStyle(ButtonStyle.Success)



  client.on('messageCreate', async (message) => {
      if (message.content.startsWith(`${prefix}edit profile`) || message.content.startsWith(`edit profile`)) {
        if (message.author.bot) {
          return; // Ignore messages from bots
        }


          const socaladd = new ActionRowBuilder()
              .addComponents(Twitterlink, Gaystationlink, facebooklink, replitlink, youtubelink);

          const socaladd2 = new ActionRowBuilder()
              .addComponents(twitchlink, noobagameslink, Steamlink);
  
          await message.reply({
              content: 'Click Here to edit your profile',
              components: [socaladd, socaladd2],
          });
      }
  });
  
  client.on('interactionCreate', async (interaction) => {
      if (!interaction.isButton()) return;
  
      if (interaction.customId === 'youtubelinkID') {
        const youtubeLink = config[interaction.user.id] ? config[interaction.user.id].Youtube_link : '';
        const youtubemsg = youtubeLink ? `Your old Link (${youtubeLink}) ` : 'You don\'t have old youtube link';
        const setprofilemodalyoutube = new ModalBuilder()
		      	.setCustomId('setprofileyoutube')
			      .setTitle('Add connections');

            const Youtubeconnection = new TextInputBuilder()
            .setCustomId('Youtubeconnection')
              // The label is the prompt the user sees for this input
            .setLabel("Youtube")
              // Short means only a single line of text
            .setStyle(TextInputStyle.Short)
            .setPlaceholder(`${youtubemsg}`);

            




const Youtubeactionrow = new ActionRowBuilder().addComponents(Youtubeconnection);



  setprofilemodalyoutube.addComponents(Youtubeactionrow);


              await interaction.showModal(setprofilemodalyoutube);

          }
      });




      client.on('interactionCreate', async (interaction) => {
        if (!interaction.isButton()) return;
    
        if (interaction.customId === 'replitlinkID') {
          const replitLink = config[interaction.user.id] ? config[interaction.user.id].replit_link : '';
          const replitmsg = replitLink ? `Your old Link (${replitLink}) ` : 'You don\'t have an old Replit link';
    
            const setprofilemodalreplit = new ModalBuilder()
                .setCustomId('setprofilereplit')
                .setTitle('Add connections');
    
            const replitconnection = new TextInputBuilder()
                .setCustomId('replitconnection')
                // The label is the prompt the user sees for this input
                .setLabel("Replit")
                // Short means only a single line of text
                .setPlaceholder(`${replitmsg}`)

                .setStyle(TextInputStyle.Short);
          
    
    
    
    
            const replitactionrow = new ActionRowBuilder().addComponents(replitconnection);
    
    
    
            setprofilemodalreplit.addComponents(replitactionrow);
    
    
            await interaction.showModal(setprofilemodalreplit);
    
        }
    });

    client.on('interactionCreate', async (interaction) => {
      if (!interaction.isButton()) return;
  
      if (interaction.customId === 'facebooklinkID') {
        const facebookLink = config[interaction.user.id] ? config[interaction.user.id].facebook_link : '';
        const facebookMsg = facebookLink ? `Your old link (${facebookLink}) ` : 'You don\'t have an old Facebook link';
  
          const setprofilemodalfacebook = new ModalBuilder()
              .setCustomId('setprofilefacebook')
              .setTitle('Add connections');
  
          const facebookconnection = new TextInputBuilder()
              .setCustomId('facebookconnection')
              .setLabel("Facebook")
              .setPlaceholder(`${facebookMsg}`)
              .setStyle(TextInputStyle.Short);
  
          const facebookactionrow = new ActionRowBuilder().addComponents(facebookconnection);
  
          setprofilemodalfacebook.addComponents(facebookactionrow);
  
          await interaction.showModal(setprofilemodalfacebook);
  
      }
  });


  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'GaystationlinkID') {
      const gaystationLink = config[interaction.user.id] ? config[interaction.user.id].gaystation_link : '';
    const gaystationMsg = gaystationLink ? `Your old link (${gaystationLink}) ` : 'You don\'t have an old Playstation link';

        const setprofilemodalGaystation = new ModalBuilder()
            .setCustomId('setprofileGaystation')
            .setTitle('Add connections');

        const Gaystationconnection = new TextInputBuilder()
            .setCustomId('Gaystationconnection')
            .setLabel("Playstation")
            .setStyle(TextInputStyle.Short)
            .setPlaceholder(`${gaystationMsg}`);


        const Gaystationactionrow = new ActionRowBuilder().addComponents(Gaystationconnection);

        setprofilemodalGaystation.addComponents(Gaystationactionrow);

        await interaction.showModal(setprofilemodalGaystation);

    }
});


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'TwitterlinkID') {

    const twitterLink = config[interaction.user.id] ? config[interaction.user.id].twitter_link : '';
    const twitterMsg = twitterLink ? `Your old link (${twitterLink}) ` : 'You don\'t have an old Twitter link';

      const setprofilemodalTwitter = new ModalBuilder()
          .setCustomId('setprofileTwitter')
          .setTitle('Add connections');

      const Twitterconnection = new TextInputBuilder()
          .setCustomId('Twitterconnection')
          .setLabel("Twitter")
          .setStyle(TextInputStyle.Short)
          .setPlaceholder(`${twitterMsg}`);
      const Twitteractionrow = new ActionRowBuilder().addComponents(Twitterconnection);

      setprofilemodalTwitter.addComponents(Twitteractionrow);

      await interaction.showModal(setprofilemodalTwitter);

  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'SteamlinkID') {
    const steamLink = config[interaction.user.id] ? config[interaction.user.id].steam_link : '';
  const steamMsg = steamLink ? `Your old link (${steamLink}) ` : 'You don\'t have an old Steam link';

      const setprofilemodalSteam = new ModalBuilder()
          .setCustomId('setprofileSteam')
          .setTitle('Add connections');

      const Steamconnection = new TextInputBuilder()
          .setCustomId('Steamconnection')
          .setLabel("Steam")
          .setStyle(TextInputStyle.Short)
          .setPlaceholder(`${steamMsg}`);

      const Steamactionrow = new ActionRowBuilder().addComponents(Steamconnection);

      setprofilemodalSteam.addComponents(Steamactionrow);

      await interaction.showModal(setprofilemodalSteam);

  }
});


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'noobagameslinkID') {
    const noobagamesLink = config[interaction.user.id] ? config[interaction.user.id].noobagames_link : '';
    const noobagamesMsg = noobagamesLink ? `Your old link (${noobagamesLink}) ` : 'You don\'t have an old Noobagames link';

      const setprofilenoobagames = new ModalBuilder()
          .setCustomId('setprofilenoobagames')
          .setTitle('Add connections');

      const noobagamesconnection = new TextInputBuilder()
          .setCustomId('noobagamesconnection')
          .setLabel("Noobagames")
          .setStyle(TextInputStyle.Short)
          .setPlaceholder(`${noobagamesMsg}`);


      const noobagamesactionrow = new ActionRowBuilder().addComponents(noobagamesconnection);

      setprofilenoobagames.addComponents(noobagamesactionrow);

      await interaction.showModal(setprofilenoobagames);

  }
});


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'twitchlinkID') {
    const twitchLink = config[interaction.user.id] ? config[interaction.user.id].twitch_link : '';
    const twitchMsg = twitchLink ? `Your old link ${twitchLink} ` : 'You don\'t have an old Twitch link';

      const setprofilemodaltwitch = new ModalBuilder()
          .setCustomId('setprofiletwitch')
          .setTitle('Add connections');

      const twitchconnection = new TextInputBuilder()
          .setCustomId('twitchconnection')
          .setLabel("Twitch")
          .setStyle(TextInputStyle.Short)
          .setPlaceholder(`${twitchMsg}`);


      const twitchactionrow = new ActionRowBuilder().addComponents(twitchconnection);

      setprofilemodaltwitch.addComponents(twitchactionrow);

      await interaction.showModal(setprofilemodaltwitch);

  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'setprofileyoutube') {
    try {
      const Youtube_link = interaction.fields.getTextInputValue('Youtubeconnection');
      
      // Ensure that the user's configuration object exists
      if (!config[interaction.user.id]) {
        config[interaction.user.id] = {};
      }
  
      // Store the Youtube_link in the user's configuration
      config[interaction.user.id].Youtube_link = Youtube_link;
      console.log('Updated config:', config);
      
      // Save the updated config to the 'config.json' file
      fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
  
       
      await interaction.reply({ content: 'Your submission was received successfully!' });
    } catch (err) {
      console.error('Error saving data to config.json:', err);
      await interaction.reply({ content: 'An error occurred while saving your submission.' });
    }
  }
});




client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'setprofilereplit') {
    const replit_link = interaction.fields.getTextInputValue('replitconnection');
    // Ensure that the user's configuration object exists
    if (!config[interaction.user.id]) {
      config[interaction.user.id] = {};
    }

    // Store the replit_link in the user's configuration
    config[interaction.user.id].replit_link = replit_link;

    // Save the updated config to the 'config.json' file
    fs.writeFileSync('config.json', JSON.stringify(config, null, 2));

    await interaction.reply({ content: 'Your submission was received successfully!' });
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'setprofilefacebook') { // Changed 'setprofileyoutube' to 'setprofilefacebook'
    try {
      const facebook_link = interaction.fields.getTextInputValue('facebookconnection'); // Changed 'Youtube_link' to 'facebook_link'
      
      // Ensure that the user's configuration object exists
      if (!config[interaction.user.id]) {
        config[interaction.user.id] = {};
      }
  
      // Store the facebook_link in the user's configuration // Changed 'Youtube_link' to 'facebook_link'
      config[interaction.user.id].facebook_link = facebook_link; // Changed 'Youtube_link' to 'facebook_link'
      console.log('Updated config:', config);
      
      // Save the updated config to the 'config.json' file
      fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
  
       
      await interaction.reply({ content: 'Your submission was received successfully!' });
    } catch (err) {
      console.error('Error saving data to config.json:', err);
      await interaction.reply({ content: 'An error occurred while saving your submission.' });
    }
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'setprofileGaystation') {
    try {
      const gaystation_link = interaction.fields.getTextInputValue('Gaystationconnection');
      
      // Ensure that the user's configuration object exists
      if (!config[interaction.user.id]) {
        config[interaction.user.id] = {};
      }
  
      // Store the gaystation_link in the user's configuration
      config[interaction.user.id].gaystation_link = gaystation_link;
      console.log('Updated config:', config);
      
      // Save the updated config to the 'config.json' file
      fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
  
       
      await interaction.reply({ content: 'Your submission was received successfully!' });
    } catch (err) {
      console.error('Error saving data to config.json:', err);
      await interaction.reply({ content: 'An error occurred while saving your submission.' });
    }
  }
});


client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'setprofileTwitter') {
    try {
      const twitter_link = interaction.fields.getTextInputValue('Twitterconnection');
      
      // Ensure that the user's configuration object exists
      if (!config[interaction.user.id]) {
        config[interaction.user.id] = {};
      }
  
      // Store the gaystation_link in the user's configuration
      config[interaction.user.id].twitter_link = twitter_link;
      console.log('Updated config:', config);
      
      // Save the updated config to the 'config.json' file
      fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
  
       
      await interaction.reply({ content: 'Your submission was received successfully!' });
    } catch (err) {
      console.error('Error saving data to config.json:', err);
      await interaction.reply({ content: 'An error occurred while saving your submission.' });
    }
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'setprofileSteam') {
    try {
      const steam_link = interaction.fields.getTextInputValue('Steamconnection');
      
      // Ensure that the user's configuration object exists
      if (!config[interaction.user.id]) {
        config[interaction.user.id] = {};
      }
  
      // Store the gaystation_link in the user's configuration
      config[interaction.user.id].steam_link = steam_link;
      console.log('Updated config:', config);
      
      // Save the updated config to the 'config.json' file
      fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
  
       
      await interaction.reply({ content: 'Your submission was received successfully!' });
    } catch (err) {
      console.error('Error saving data to config.json:', err);
      await interaction.reply({ content: 'An error occurred while saving your submission.' });
    }
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'setprofilenoobagames') {
    try {
      const noobagames_link = interaction.fields.getTextInputValue('noobagamesconnection');
      
      // Ensure that the user's configuration object exists
      if (!config[interaction.user.id]) {
        config[interaction.user.id] = {};
      }
  
      // Store the gaystation_link in the user's configuration
      config[interaction.user.id].noobagames_link = noobagames_link;

      
      // Save the updated config to the 'config.json' file
      fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
  

      await interaction.reply({ content: 'Your submission was received successfully!' });
    } catch (err) {
      console.error('Error saving data to config.json:', err);
      await interaction.reply({ content: 'An error occurred while saving your submission.' });
    }
  }
});


client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'setprofiletwitch') {
    try {
      const twitch_link = interaction.fields.getTextInputValue('twitchconnection');
      
      // Ensure that the user's configuration object exists
      if (!config[interaction.user.id]) {
        config[interaction.user.id] = {};
      }
  
      // Store the gaystation_link in the user's configuration
      config[interaction.user.id].twitch_link = twitch_link;

      
      // Save the updated config to the 'config.json' file
      fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
  

      await interaction.reply({ content: 'Your submission was received successfully!' });
    } catch (err) {
      console.error('Error saving data to config.json:', err);
      await interaction.reply({ content: 'An error occurred while saving your submission.' });
    }
  }
});






client.login(token);