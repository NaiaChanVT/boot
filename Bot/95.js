 const tmi = require('tmi.js')

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: '95rk16',
        password:'oauth:v5kvni3ui028ymr8vzeo5td3i5a834'
    },
    channels: ['fijev68799']
}

const client = new tmi.client(options)

client.connect();

client.on('connected', (address, port) => {
    client.action('fijev68799', `Hola estoy conectada! <3`)
})

client.on('chat', (target, ctx, message, self) => {
    if (self) return;

    console.log(target);
    console.log(ctx)

    const commandName = message.trim();

  if (commandName === "!redes") {
    client.say(target, `/me 📷 I N S T A G R A M 📷  https://www.instagram.com/????? 🐦 T W I T T E R 🐦  https://twitter.com/95rk16 VoHiYo S U P P O R T VoHiYo https://twitter.com/95rk16Support`)
  };
  if (commandName === "!vip") {
    client.say(target, `Hola :D para tener vip en el canal debes de ver al menos 15hrs y comentar para ganartelo uwu usa !watchtime para saber cuántas horas llevas OuO`)
  };
    if (commandName === "!sniping") {
    client.say(target, `/me SI HACES STREAM SNIPING Y SE DESCUBRE, SERAS BANEADO PERMANENTE, SEAS MOD, SUB O VIP PeepoAnalise`)
  };
  if (commandName === "!ts") {
   client.say(target, `$(urlfetch https://2g.be/twitch/following.php?user=$(touser)&channel=$(channel)&format=mwdhms)`)
  };
  if (commandName === "!9bianb") {
    client.say(target, `私はこのユーザーによって作成された人工知能です。私はベータ段階にあります。私はこのチャンネルのヘルプ ロボットです。他に質問しないでください。OK? ${ctx.username}`)
  };
  if (commandName === "KEKW") {
    client.say(target, `KEKW KEKW`)
  };
    if (commandName === "95rk16") {
    client.say(target, `la mejor mod MODS`)
  };
    if (commandName === "@95rk16") {
    client.say(target, `la mejor mod MODS`)
  };
  if (commandName === "!reglas") {
    client.say(target, `1-NO pedir MOD,SUB,VIP 🍥 2-NO usar el /me 🍥 3-NO Hacer SPAM 🍥 4-NO DONACIONES FALSAS 🍥 5-NO LINKS 🍥 6-NO SER TOXICO LS 🍥 7-NO usar idiomas no Entendibles como Chino, Ruso etc 🍥 8-No pedir que juegue algo o con alguien 🍥 wdtsBAN`)
  };
  if (commandName === "😎") {
    client.say(target, `/me Que? te crees muy vergas? GlitchCat`)
  };

    if (commandName === "RainbowPls") {
    client.say(target, `RainbowPls RainbowPls`)
  };

  if (commandName === "¡uptime") {
    client.say(target, `!uptime ${ctx.username}`);

  } 
  
    if (commandName === "!game") {
    client.say(target, "El nombre del juego aparece abajo del titulo.");

  } else if (commandName === "!dice") {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`)
  }
  });

  function rollDice() {
  const sides = 9996;
  return Math.floor(Math.random() * sides) + 1;
  }