const Discord = require("discord.js");
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});
const mySecret = process.env['DISCORD_BOT_TOKEN']
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
client.setMaxListeners(0);

client.on("debug", (e) => console.log(e));
client.on("ready", () => {
  console.log("Log In Successful!!");
  client.user.setActivity('I\'m Stubborn', { type: ActivityType.Listening });
})

client.on("messageCreate", (msg) => {
  const group = [
    'i am your mom maxine',
    'I\'m your mom maxine',
    'maxine i am your mom',
    'maxine i\'m your mom',
    'i am your mom max',
    'I\'m your mom max',
    'max i am your mom',
    'max i\'m your mom',
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply("HEY! Let's get off moms....i just got off yours");
  }
})


client.on("messageCreate", (msg) => {
  const group = [
    'max chad',
    'maxine is chad',
    'chad maxine',
    'max is chad',
    'maxine chad'
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply("Ah! Stop.. I'm Blushing")
  }
})


client.on("messageCreate", (msg) => {
  const group = [
    "maxine what's your onlyfans",
    "maxine do you have onlyfans?",
    "max what's your onlyfans",
    "max do you have onlyfans?",
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply("Welp! Here you go! <https://bit.ly/3HaUSTJ>");
  }
})

client.on("messageCreate", (msg) => {
  const dead_chat = [
    "What do you guys love the most? Like your hobbies et cetera",
    "Your favourite thing to do when you're alone?",
    "Perhaps!!",
    "Is Amogus imposter sus or No U?",
  ]
  const group = [
    'ded chat',
    'chat ded',
    'chat dead',
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply("It's **Show-Time**");
    var ded_chat = dead_chat[Math.floor(Math.random() * dead_chat.length)];
    msg.reply(ded_chat)
  }
})

client.on("messageCreate", (msg) => {
  const wishes = [
    "Happy Birthday!!",
    "Bud, Happy Birthday ",
    "Happy Birthday Bud!",
    "Ayee! Happy Birthday!! ",
  ]
  const group = [
    'Its my birthday today',
    'It\'s my birthday today',
    'it\'s my birthday!',
    'it\'s my birthday',
    'Today is my birthday',
    'Today\'s My birthday',
    'My birthday is today',
    'happy birthday',
    'happy birthday!!',
    'happy birthday!',
  ]
  if (group.includes(msg.content.toLowerCase())) {
    var wish = wishes[Math.floor(Math.random() * wishes.length)];
    msg.reply(wish)
  }
})

client.on("messageCreate", (msg) => {
  const group = [
    'who is your creator maxine',
    'who created you maxine',
    'maxine who created you',
    "maxine who is your creator",
    "maxine who's your creator",
    'who is your creator max',
    'who created you max',
    'max who created you',
    "max who is your creator",
    "max who's your creator",
    "maxine who made you",
    "max who made you",

  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply("Welp, I was programmed By Arti, The Genius!");
  }
})



client.on("messageCreate", (msg) => {
  const group = [
    'tell me a joke maxine',
    'maxine can you tell me a joke',
    "maxine tell me a joke",
    'maxine say a joke',
    'tell me a joke max',
    'max can you tell me a joke',
    "max tell me a joke",
    'max say a joke'
  ]
  const jokes = [
    "Dyslexic man walks into a bra.",
    "When Does a Joke Become a Dad Joke? \n*When it leaves and never comes back*",
    "What is even worse than waking up after a party and finding a penis was drawn on your face? \n*Finding out it was traced.*",
    "What’s the difference between a book and a teacher? \n*You can shut a book up but you can’t shut a teacher up.*",
    "Secretary: Doctor, the invisible man has come. He says he has an appointment. \nDoctor: “Tell him I can’t see him.",
    "Ever tried to eat a clock? \n*It’s time-consuming.*",
    "I’m not a big fan of stairs. \nThey are always up to something",
    "Why aren’t Koalas actual bears?\nThey don’t meet the **KOALifications.**",
    "What type of candy is always late? \nA choco**late.**",
    "What sound does a nut make when it sneezes? \n**Ca-shew!**",
    "What did one hat say to the other? \n*You wait here. I’ll go on a-head.*",
    "A man tells his doctor \nDoc, help me, I’m addicted to Instagram. \nThe doctor replies, Sorry, I don’t follow you …",
    "Teacher: Which is the best month for studies?\nStudent: Octembruary…\nTeacher: There is no such month…\nStudent: Exactly.",
    "How do you make holy water? \nYou boil **the hell** out of it.",
    "What do you call a fake noodle? \nAn **impasta.**",
    "A wife once told her Husband that He's the cheapest person she has ever met in her life.\n Her Husband: **I’m not buying it!**",
    "Babies are those adorable little creatures on whom you can blame your farts.",
  ]

  if (group.includes(msg.content.toLowerCase())) {
    var joke = jokes[Math.floor(Math.random() * jokes.length)];
    msg.reply(joke)
  }
})


client.on("messageCreate", (msg) => {
  const group = [
    'who is this maxine',
    'ayo who is this maxine',
    "who's this maxine",
    "ayo who'd this maxine",
    'who is this max',
    'ayo who is this max',
    "who's this max",
    "ayo who'd this max",
    'introduce yourself maxine',
    'maxine introduce yourself',
    'introduce yourself max',
    'max introduce yourself',
    'who are you maxine',
    'who are you max',
    'max who are you?',
    'max who are you',
    'maxine who are you?',
    'maxine who are you',
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply("Allow me to introduce myself, I'm Maxine, People call me Max aswell..");

  }
})


client.on("messageCreate", (msg) => {
  const group = [
    'maxine do you love me',
    'do you love me maxine',
    'max do you love me',
    'do you love me max',
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply("I-");
    msg.reply("I Love Everyone.. \nI'm just as alone as my creator.. cri")
  }
})

client.on("messageCreate", (msg) => {
  const group = [
    'hello max',
    'hello maxine',
    'hey maxine',
    'hey max',
    'max hello',
    'maxine hello',
    'maxine hey',
    'max hey',
    'max hi',
    'maxine hi',
    'hi max',
    'hi maxine'
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply('Hello There!!');
  }
})

client.on("messageCreate", (msg) => {
  const group = [
    'Max',
    "maxine"
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply('Yea?');
  }
})

client.on("messageCreate", (msg) => {
  const group = [
    'bye maxine',
    'bye max',
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply('Byee!! Cya Later Bud!');
  }
})

client.on("messageCreate", msg => {
  const group = [
    'roast me',
    'maxine roast me',
    'roast me maxine',
    'max roast me',
    'roast me max',
  ]
  if (group.includes(msg.content.toLowerCase())) {
    var roast_me = ["Were you born on the highway? That is where most accidents happen.", "If ignorance is bliss, you must be the happiest person on the planet.", "May I ask you to stop talking. It smells really bad.", "Your ass must be pretty jealous of all the shit that comes out of your mouth.", "Here’s a tissue, you have some shit on your lips", "Roses are red; violets are blue. I have five fingers, and the third one is for you.", "Being a dick won't make yours bigger.", "Imma beat your ass like a cherioke drum.", "Your Birth certificate is an Apology Letter from the condom factory.", "I thought of you today. It reminded me to take out the trash.", "You are so full of shit, the toilet’s jealous.", "You’re like the end pieces of a loaf of bread. Everyone touches you, but nobody wants you.", "Your face makes onions cry.", "I’d slap you but I don’t want to make your face look any better.", " You are the human version of period cramps.", "If your brain was dynamite, there wouldn’t be enough to blow your hat off.", "You are proof that evolution can go in reverse.", "I'd like to roast you, but it looks like God already did.",
      "You look like someone set your face on fire and then put it out with a hammer.",
      "The only thing attracted to you is gravity",
      "You’re not good looking enough to be a model, but you’re not smart enough to be anything else",
      "If you’d like to know what sexual position produces the ugliest babies, you should ask your mother.",
      "Can you speak a little louder? I can’t hear you over the sound of how stupid you are.",
      "Why are you even talking to me? So your self esteem can match your IQ?",
      "I’m not insulting you, I’m describing you.",
      "If you hide your big nose and shut your big mouth, people will think you are attractive and well-spoken.",
      "I guess God’s just making anybody these days.",
      "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
      "Some babies were dropped on their heads but you were clearly thrown at a wall.",
      "They say opposites attract. If that's so, you will meet someone who is good-looking, intelligent, and cultured.",
      "I didn’t hear you. I’m busy ignoring an annoying person.",
      "I don't know what your problem is, but I'll bet it's hard to pronounce.",
      "Please excuse me while I transfer you to someone who speaks Fucktard.",
      "It must take a lot of flexibility to fit your foot in your mouth and your head up your ass at the same time.",
      "I don’t have the time nor the crayons to explain things to you",
      "I’d love to keep chatting with you, but I’d rather have AIDS",
      "I bet you swim with a t shirt on",
      "You have all the charm and charisma of a burning orphanage",
      "Your face is so oily that I’m surprised America hasn’t invaded yet.",
      "If you were any dumber, someone would need to water you twice a week",
      "If you were on fire and I had a cup of my own piss, I’d drink it",
      "Do you still love nature, despite what it did to you?",
      "The thing I dislike most about your face is that I can see it.",
      "If B.S. was music, you’d be an orchestra.",
      "You look like a before picture.",
      "I’ve heard farts more intelligent than you.",
      "You have a perfect face for radio.",
      "They say that a million monkeys on a million typewriters will eventually produce the collected works of Shakespeare. If that theory is correct, I believe you will one day say something intelligent.",
      "If you want to lose ten pounds of ugly fat, may I suggest you start with cutting off your head.",
      "You look like somebody stepped on a goldfish.",
      "I thought the trash got picked up last night, what are you still doing here?",
      "Looking the way you do must save a lot of money on halloween.",
      "I’d love to continue talking with you but my favorite commercial is on tv",
      "I'd love to keep chatting with you, but right now I have to do literally anything else.",
      "Did you get a bowl of soup with that haircut?",
      "If you don’t like what I say about you, it would be a good idea to improve yourself.",
      "Does being that ugly require a license?",
      "You could throw a rock at the ground and miss",
      "There’s no one in this world like you. Or at least I hope so.",
      "You look like a man, and you need to lose some weight.",
      "Did you cancel your barbecue?  Because your grill is messed up",
      "Some people make millions.  You make memes.",
      "Did you forget to wipe or is that your natural scent?",
      "I missed you this week, but my aim is improving.",
      "I'm surprised you've made it this far without being eaten.",
      "Your body looks like your head is inflating a water balloon.",
      "Your mother was a hamster.",
      "How do you make an idiot wait?",
      "If balls were dynamite, you wouldn't have enough to kill a fish.",
      "I'd like to roast you, but I'm too busy judging your choices.",
      "You are the worst part of everybody's day.",
      "If your face were scrambled it would improve your looks.",
      "I hope you don't feel the way you look.",
      "In the book of Who's Who, you are listed as What's That?",
      "It's surprising to me that a pig's bladder on a stick has gotten so far in life.",
      "Sorry.  I'm on the toilet and I can only deal with one shit at a time.",
      "If you fell into a river it would be unfortunate, but if anyone pulled you out it would be a disaster.",
      "You are the discount version of whatever celebrity you look like.",
      "When you go to the dentist, he needs anaesthetic.",
      "You suck dick for bus fare and then walk home.",
      "The fact that you are still alive is evidence that natural disasters are poorly distributed.",
      "You are so dumb you can't fart and chew gum at the same time.",
      "I was going to give you a nasty look, but I see you already have one.",
      "Me think'st thou are a general offence and every man should beat thee.",
      "I don't try to explain myself to idiots like you.  I'm not the Fucktard Whisperer.",
      "Your mom circulates like a public key, servicing more requests than HTTP.",
      "Your mom is so fat and dumb, the only reason she opened her email is because she heard it contained spam.",
      "Your mom is so fat, she has to iron her pants in the driveway.",
      "Your face invites a slap.",
      "The only way you could get laid is if you crawled up a chicken's ass and waited.", "Yo mama so fat she bends the spacetime fabric"]
    var roast = roast_me[Math.floor(Math.random() * roast_me.length)];
    msg.reply(roast)
  }
})


client.on("messageCreate", (msg) => {
  const group = [
    'i am going to take a break from discord',
    "i'm going to take a break from discord",
    'i\'m taking a break from discord',
    'i am taking a break from discord',
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply("Aww Man!! Hope to see you Soon <33 \nLove Ya'");
  }
})

client.on("messageCreate", (msg) => {
  const group = [
    "Good night",
  ]
  if (group.includes(msg.content.toLowerCase())) {
    msg.reply("Good Night <33");
  }
})

client.on("messageCreate", (msg) => {
  const group = [
    'tell me a fun fact maxine',
    'tell me a fun fact max',
    'maxine can you tell me a fun fact',
    "maxine tell me a fun fact",
    'maxine say a fun fact',
    'tell me a fun fact max',
    'max can you tell me a fun fact',
    "max tell me a fun fact",
    'max say a fun fact'
  ]
  const fun_facts = [
    "Fun Fact: Condoms are made: By humans, for humans, on humans, in humans – against more humans.",
    "Fun Fact: Nothing is really lost…until mom can’t find it.",
    "Fun Fact: There is a technical name for the fear of long words.\nThe name is **hippopotomonstrosesquippedaliophobia**!!",
    "Fun Fact: Hot water will turn into ice faster than cold water.",
    "Fun Fact:  When the moon is directly overhead, you will weigh slightly less.",
    "Fun Fact: An Inheritance is just your relatives dropping their loot when they die.",
  ]

  if (group.includes(msg.content.toLowerCase())) {
    var fun_fact = fun_facts[Math.floor(Math.random() * fun_facts.length)];
    msg.reply(fun_fact)
  }
})

client.on("messageCreate", (msg) => {
  const replies = ["Awwwh No", '-', "!!", "Shoot", "Please No, Don't do this to me", "UWU, please don't", "You think I care? That's the funninest thing I've heard in a while", "IDGAF?", "Aww, Hear that?\nNotice that you can't hear anything? 'Cuz That's the sound of me caring"]
  const group = [
    'max i hate you',
    'maxine i hate you',
    'i hate you maxine',
    'i hate you max'
  ]
  if (group.includes(msg.content.toLowerCase())) {
    var reply = replies[Math.floor(Math.random() * replies.length)];
    msg.reply(reply)
  }
})


client.login(process.env.DISCORD_BOT_TOKEN);
