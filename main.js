const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const { google } = require('googleapis');
const nodeEnv = process.env.NODE_ENV;

const code ='AIzaSyAbUtcXhgQqWL4wfnClWHJfE9WLO9-X95g'

let dispatcher = null;

const images = [
'Mondher-Kbaeir.jpg',
'zouhairdhaouadi.png'


  // Add more image URLs here
];




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.login('MTA1MTE4NTcwMDIxODg4NDIxNw.GaxW8D.iXiNaCAD-KMjE8I-fbswdY58Y0IN-d98p0eSd8');

client.on('message', async message => {

  if (message.content.startsWith('!play')) {

    if (!message.member.voice.channel) {
      // If not, send an error message
      message.channel.send('od5el lchannel ye bhim');
      return;
    }
    else {

    
    // Get the YouTube link from the command
    const url = message.content.split(' ')[1];
    if (!url) {
      // Write error message
      message.channel.send("7ot lien ye bhim");
    } else {

    // Play the YouTube video
    const stream = ytdl(url, { filter: 'audioonly' });
    const dispatcher = message.member.voice.channel.join().then(connection => {
      connection.play(stream);
    });
  }
  }
  }

  /* // Check if the message starts with "!play"
   if (message.content.startsWith('!play')) {
    // Get the search query from the message
    const query = message.content.replace('!play', '').trim();

    // Set up the YouTube API client
    const youtube = google.youtube({
      version: 'v3',
      auth: process.env.code
    });

    // Search for videos based on the query
    const results = await youtube.search.list({
      part: 'id',
      type: 'video',
      q: query
    });

    // Get the first video from the search results
    const videoId = results.data.items[0].id.videoId;

    // Play the video in the voice channel
    const connection = await message.member.voice.channel.join();
    connection.play(`https://www.youtube.com/watch?v=${videoId}`);
  }

}*/
  if (message.content.startsWith('Mahdewi')) {
    
    // Play the YouTube video
    const stream = ytdl('https://www.youtube.com/watch?v=l2zxmC7-e4U', { filter: 'audioonly' });
    const dispatcher = message.member.voice.channel.join().then(connection => {
      connection.play(stream);
    });
  }

  
  if (message.content.startsWith('!leave')) {
    // Leave the voice channel
    message.member.voice.channel.leave();
  }
    
    

  
      

  if (message.content === 'disconnect') {
    // Disconnect the user who sent the message from the voice channel
    message.member.voice.channel.leave();
  }


      if (message.content === '!aziz') {
        message.channel.send('checki checki mala maaft');
        message.channel.send({
          files: ['aziz.png']
        });
      }

      if (message.content === 'CA') {
        message.channel.send('checki checki ');
        message.channel.send({
          files: ['1.png','2.png','3.png','4.png','5.jpg']
         

        });
      }

      if (message.content === '!random') {
        const index = Math.floor(Math.random() * images.length);
        const image = images[index];
        message.channel.send({
          files: [image]
        });
      }
  });


  
let compteur=0;

client.on('message', message => {
  const phrase = message.content;
  const text = 'letoile';

  const result = phrase.includes(text);

  if (result) {
    
    const stream = ytdl('https://www.youtube.com/watch?v=hyUqlXcLN24 ', { filter: 'audioonly' });
    const dispatcher = message.member.voice.channel.join().then(connection => {
      connection.play(stream);
    });

  } 
});

client.on('message', message => {
  const phrase = message.content;
  const text = 'mostawe';

  const result = phrase.includes(text);

  if (result) {
   
    if (!message.member.voice.channel) {
      // If not, send an error message
      message.channel.send('Mostawe 3o..!');
      return;
    }
    else {
    compteur++;
    if (compteur==1)
    { 
    message.channel.send(`sry sry`);
       const stream = ytdl('https://www.youtube.com/shorts/BvL3ChY0Ha0', { filter: 'audioonly' });
    const dispatcher = message.member.voice.channel.join().then(connection => {
      connection.play(stream);
    });
  compteur=0;}
  }
  } 
});

client.on('message', message => {
  const phrase = message.content;
  const text = 'sfax';

  const result = phrase.includes(text);

  if (result) {
   
    if (!message.member.voice.channel) {
      // If not, send an error message
      message.channel.send('layn khasara layn');
      return;
    }
    else {
    compteur++;
    if (compteur==1)
    { 
    message.channel.send(`sry sry`);
       const stream = ytdl('https://www.youtube.com/shorts/UVpp_M7OGxg', { filter: 'audioonly' });
    const dispatcher = message.member.voice.channel.join().then(connection => {
      connection.play(stream);
      
    });
  compteur=0;}
  }
  } 
});


//client.login(process.log.env.DISCORD_TOKEN);
