const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const fetch = require('node-fetch');
client.once('ready', () =>{
    console.log(`Bot ONLINE \nBot tag: ${client.user.tag}`)
})
client.on('message', async message => {
  if(message.author.bot) return;
  if (!message.content.startsWith("!")) return;
  if(message.content.indexOf("palhaço") != -1 || message.content.indexOf("palhaco") != -1 || message.content.indexOf("clown") != -1){
    message.channel.bulkDelete(1);
    message.channel.send(":clown:ÅŤÅQŮĘ ĐØ§ PÅĽHÅÇØ§ ĽØĶØ:clown:    AGORA É NOIS QUE MANDA NESSA PORRA\n:biohazard::biohazard::biohazard::imp:\n:clown:SAIAM DO GRUPO :clown:\n\nCOMEÇOU O ATAQUE :clown::clown::clown:\n\nHÁ! HÁ! HÁ! HÁ! HÁ!\n\n:clown::clown::clown::clown::clown::clown:\n\n ̿̿ ̿̿ ̿'̿'̵͇̿з= :clown: =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿\n           (   .  )\n      // :eggplant:\\nTa-Em-CHoK kk:question::zap:\n\nVØÇË§ FØŘÅM ÅŤÅČÅĐØ§ PËĽØ§ PÅĽHÅÇØ§ ĽØĶØ§\n\nØ§ ČØMËĐØŘË§ ĐË ÄĐMÎÑÎ§ŤŘÅĐØ :clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown:\n\n▕▇▇▇◤▔▔▔▔▔▔▔◥▇▇▇\n▕▇▇▇▏◥▇◣┊◢▇◤▕▇▇▇\n▕▇▇▇▏▃▆▅▎▅▆▃▕▇▇▇\n▕▇▇▇▏╱▔▕▎▔▔╲▕▇▇▇\n▕▇▇▇◣◣▃▅▎▅▃◢◢▇▇▇\n▕▇▇▇▇◣◥▅▅▅◤◢▇▇▇▇\n▕▇▇▇▇▇◣╲▇╱◢▇▇▇▇▇\n▕▇▇▇▇▇▇◣▇◢▇▇▇▇▇▇\n\n:clown:PÅĽHÅÇØ§ ĽØĶØ:clown:\n\n    ̿̿ ̿̿ ̿̿ ̿'̿'̵͇̿з= :clown: =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿\n               (   .  )\n          // :eggplant:\\nTa-Em-CHoK kk:question::zap:");
  }
  if((message.content.substring(0, 6) == "!clear" && message.content[6] === " ") || (message.content.substring(0, 2) == "!c"  && message.content[2] === " ") || (message.content.substring(0, 4) == "!cls" && message.content[4] === " ")){
    var a = message.content.split(" ")[1];
    var corno = message.author;
    if(a=="" || a==null || a== undefined){
      message.channel.send(corno+", seu corninho, usa o comando passando **quantas msg** tu quer apagar");
    }else{
      try{
        a = Number(a);
        message.channel.bulkDelete(a);
        message.channel.bulkDelete(1);
        if(a > 1){
          message.channel.send("O corno do "+corno+" me pediu pra apagar as ultimas **"+a+" mensagens** :c");
        }else{
          message.channel.send("O corno do "+corno+" me pediu pra apagar a **ultima mensagem** :c");
        }
      }catch(e){
        message.channel.send(corno+", **passa um número seu animal**");
      }
    }
  }
  if(message.content === "!dolar"){
    fetch("https://api.hgbrasil.com/finance?key=096dfabc", {
          method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
          if (response.results) {
            message.channel.send("A cotação atual do **Dólar** é **R$"+response.results.currencies.USD.buy.toFixed(2).toString().replace('.', ',')+"**");
          }
      });
  }
  if(message.content === "!euro"){
    fetch("https://api.hgbrasil.com/finance?key=096dfabc", {
          method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
          if (response.results) {
            message.channel.send("A cotação atual do **Euro** é **R$"+response.results.currencies.EUR.buy.toFixed(2).toString().replace('.', ',')+"**");
          }
      });
  }
  if(message.content === "!cot" || message.content === "!cotacao" || message.content === "!cotação" || message.content === "!cotaçao" || message.content === "!cotacão"){
    fetch("https://api.hgbrasil.com/finance?key=096dfabc", {
          method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
          if (response.results) {
            message.channel.send("A cotação atual do **Dólar** é **R$"+response.results.currencies.USD.buy.toFixed(2).toString().replace('.', ',')+"**");
            message.channel.send("A cotação atual do **Euro** é **R$"+response.results.currencies.EUR.buy.toFixed(2).toString().replace('.', ',')+"**");
          }
      });
  }
  if(message.content.substring(0, 7) === "!avatar"){
    if(message.content.split(" ")[1] != null && message.content.split(" ")[1] != undefined){
      for (var value of message.mentions.users.values()) {
        if(value.avatar != null){
          if(value.avatar.substring(0, 2) == "a_"){
            message.channel.send("Avatar de **"+value.username+"**", {files: ['https://cdn.discordapp.com/avatars/'+value.id+'/'+value.avatar+'.gif']});
          }else{
            message.channel.send("Avatar de **"+value.username+"**", {files: ['https://cdn.discordapp.com/avatars/'+value.id+'/'+value.avatar+'.jpg']});
          }
        }else{
          const embeddd = {
            color: 0xff0000,
            title: "Erro!",
            description: "Esse usuário não está usando uma imagem/gif de perfil :pensive: "
          }
            message.channel.send({ embed: embeddd });
        }
      }
    }else{
      var ext = "";
      if(message.author.avatar.substring(0, 2) == "a_"){
        var ext = ".gif";
      }else{
        var ext = ".jpg";
      }
      message.channel.send("Como você não mencionou ninguem "+message.author+", eu to mandando aqui seu avatar feioso pra todo mundo ver", {files: ['https://cdn.discordapp.com/avatars/'+message.author.id+'/'+message.author.avatar+ext]});
    }
  }
  if(message.content === "!ping"){
    const embeddd = {
      color: 0x00ff00,
      title: "Ping",
      description: "Pong!   :ping_pong:"
    }
      message.channel.send({ embed: embeddd });
  }
  if(message.content === "!prev" || message.content === "!previsao" || message.content === "!clima"){
    fetch("https://api.hgbrasil.com/weather?woeid=455934&key=096dfabc", {
          method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
          if (response.results) {
                var temp = response.results.temp + "ºC";
                var diaHora = response.results.date + " ás "+response.results.time;
                var cond = response.results.description;
                var cidade = response.results.city_name;
                var humidade = response.results.humidity+"%";
                var velocidadeVento = response.results.wind_speedy;
                var nascerDoSol = response.results.sunrise;
                var porDoSol = response.results.sunset;
                var iurl = "";
                if(response.results.currently == "dia"){
                  iurl = "https://biofort.com.br/wp-content/uploads/2015/09/sol-icone-1.png";
                }else if(response.results.currently == "noite"){
                  iurl = "http://54.233.78.173:8080/adilson-discord-bot/lua-icone.png";
                }
                const exampleEmbed = {
                color: 0xebb134,
                title: 'Previsão do tempo para a cidade de '+cidade,
                description: 'Atualizado '+diaHora,
                fields: [
                    {
                        name: 'Temperatura',
                        value: temp,
                        inline: true,
                    },
                    {
                        name: 'Clima',
                        value: cond,
                        inline: true,
                    },
                    {
                        name: 'Humidade',
                        value: humidade,
                        inline: true,
                    },
                    {
                        name: 'Velocidade do vento             ',
                        value: velocidadeVento,
                        inline: true,
                    },
                    {
                        name: 'Nascer do sol',
                        value: nascerDoSol,
                        inline: true,
                    },
                    {
                        name: 'Por do sol',
                        value: porDoSol,
                        inline: true,
                    },
                ],
                // image: {
                //     url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                    text: cidade,
                    icon_url: iurl
                },
            };

            message.channel.send({ embed: exampleEmbed });
          }
      });
  }
})
client.login('Njg2OTQ1NTkzMzM5MTUwNDgw.XmemxA.Ca_c4i67SLROgmcRqXDqq6qqpt0');
