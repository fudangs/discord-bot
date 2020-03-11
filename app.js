const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const fetch = require('node-fetch');
var nosImite = false;
var fs = require("fs");
client.once('ready', () =>{
    console.log(`Bot ONLINE \nBot tag: ${client.user.tag}`)
})
client.on('message', async message => {
  if(message.author.bot) return;
  var mutados = "";
  fs.readFile("mutados.txt", function(err, buf) {
    mutados = buf.toString();
    if(mutados != undefined){
      if(mutados.indexOf(""+message.member) != -1){
        message.delete(1);
      }
    }
  });
  fs.readFile("palavrasBanidas.txt", function(err, buf) {
    var banned;
    banned = buf.toString().split('\n');
    for(var i in banned){
      if(((message.content.trim().indexOf(banned[i].trim()) != -1) && banned[i].trim() != "") && (!(message.content.substring(0,3) == "!uw") || (message.content.substring(0,10) == "!unbanword") || (message.content.substring(0,3) == "!dp") || (message.content.substring(0,15) == "!desbanirpalavra")) && (!(message.content.substring(0,3) == "!bw") || (message.content.substring(0,8) == "!banword") || (message.content.substring(0,3) == "!bp") || (message.content.substring(0,13) == "!banirpalavra"))){
        message.delete(1);
        message.channel.send("Que coisa feia "+message.author+".\nVocê disse uma palavra feia e sobrou pra mim apagar");
        break;
        return 0;
      }
    }
  });
  if(message.content === "meme"){
    fetch("https://meme-api.herokuapp.com/gimme", {
          method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
          if (response) {
            const embeddd = {
              color: 0xff4500,
              title: response.title,
              url: response.postLink,
              image: {
                url: response.url,
              },
            }
              message.channel.send({ embed: embeddd });
          }
      });
  }
  if(nosImite){
    message.channel.send(message.content);
  }
  if(message.content.indexOf("palhaço") != -1 || message.content.indexOf("palhaco") != -1 || message.content.indexOf("clown") != -1){
    message.channel.bulkDelete(1);
    message.channel.send(":clown:ÅŤÅQŮĘ ĐØ§ PÅĽHÅÇØ§ ĽØĶØ:clown:    AGORA É NOIS QUE MANDA NESSA PORRA\n:biohazard::biohazard::biohazard::imp:\n:clown:SAIAM DO GRUPO :clown:\n\nCOMEÇOU O ATAQUE :clown::clown::clown:\n\nHÁ! HÁ! HÁ! HÁ! HÁ!\n\n:clown::clown::clown::clown::clown::clown:\n\n ̿̿ ̿̿ ̿'̿'̵͇̿з= :clown: =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿\n           (   .  )\n      // :eggplant:\\nTa-Em-CHoK kk:question::zap:\n\nVØÇË§ FØŘÅM ÅŤÅČÅĐØ§ PËĽØ§ PÅĽHÅÇØ§ ĽØĶØ§\n\nØ§ ČØMËĐØŘË§ ĐË ÄĐMÎÑÎ§ŤŘÅĐØ :clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown::clown:\n\n▕▇▇▇◤▔▔▔▔▔▔▔◥▇▇▇\n▕▇▇▇▏◥▇◣┊◢▇◤▕▇▇▇\n▕▇▇▇▏▃▆▅▎▅▆▃▕▇▇▇\n▕▇▇▇▏╱▔▕▎▔▔╲▕▇▇▇\n▕▇▇▇◣◣▃▅▎▅▃◢◢▇▇▇\n▕▇▇▇▇◣◥▅▅▅◤◢▇▇▇▇\n▕▇▇▇▇▇◣╲▇╱◢▇▇▇▇▇\n▕▇▇▇▇▇▇◣▇◢▇▇▇▇▇▇\n\n:clown:PÅĽHÅÇØ§ ĽØĶØ:clown:\n\n    ̿̿ ̿̿ ̿̿ ̿'̿'̵͇̿з= :clown: =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿\n               (   .  )\n          / / :eggplant:\\ \\ \nTa-Em-CHoK kk:question::zap:");
  }
  if(message.content.toLowerCase().indexOf("adilson") != -1){

    message.channel.send(message.author +", **O QUE VOCÊ QUER MENCIONANDO O NOME DO MEU SENPAI EM VÃO??** :face_with_symbols_over_mouth:");
  }
  if (!message.content.startsWith("!")) return;
  if((message.content.substring(0, 6) == "!clear" && message.content[6] === " ") || (message.content.substring(0, 2) == "!c"  && message.content[2] === " ") || (message.content.substring(0, 4) == "!cls" && message.content[4] === " ")){
    var a = message.content.split(" ")[1];
    var corno = message.author;
    if(a=="" || a==null || a== undefined){
      message.channel.send(corno+", seu corninho, usa o comando passando **quantas msg** tu quer apagar");
    }else{
      try{
        a = Number(a);
        console.log(Number.isInteger(a))
        if(!Number.isInteger(a)){
          message.channel.send(corno+", não consigo apagar partes de uma mensagem, portanto nem tente colocar um **.** que eu não vou deixar :triumph: ");
          return 0;
        }else if(a > 100) {
          message.channel.send(corno+", não consigo apagar mais do que 100 mensagens, desculpe :pensive: ");
          return 0;
        }
        try{
          message.channel.bulkDelete(a);
          message.channel.bulkDelete(1);
        }catch(e){
          message.channel.send(message.author+", um passarinho me contou que "+a+" não é um número válido pra isso :angry: ")
        }
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
    var ping = Date.now() - message.createdTimestamp
    var corzinha = 0;
    if(ping < 100){
      corzinha = 0x00ff00;
    }else if(ping >= 100 && ping < 180){
      corzinha = 0xffff00;
    }else if(ping >= 180){
      corzinha = 0xff0000;
    }
    const embeddd = {
      color: corzinha,
      title: "Pong!   :ping_pong:",
      description: ping+"ms"
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
    //message.delete(1);
    //message.channel.send("Deletado");
    if((message.content.substring(0,3) == "!bw" && message.content[3] === " ") || (message.content.substring(0,8) == "!banword" && message.content[8] === " ") || (message.content.substring(0,3) == "!bp" && message.content[3] === " ") || (message.content.substring(0,13) == "!banirpalavra" && message.content[13] === " ")){
      if(!message.member.roles.has("687275105134575618")){
          message.delete(1);
          message.channel.send(message.author+", tu tem que ser muito pica das galáxia pra usar esse comando, mané :triumph: ")
          return 0;
      }
      var pal = message.content.split(" ")[1];
      if(pal == "" || pal == null || pal == undefined){
        message.channel.send(message.author+" coloca a palavra que vc quer que seja banida né lindo")
      }else{
        fs.readFile("palavrasBanidas.txt", function(err, buf) {
          // var newP = buf.toString() + "\n" + pal
          var newP = buf.toString().split('\n');
          var novinho = "";
          var cantos = 0;
          for(var i in newP){
            if(pal==newP[i]){
              message.channel.send(message.author+", olha aqui fofo, a palavra **"+pal+"** já é proibida viu.");
              return 0;
            }else{
              novinho += "\n"+newP[i];
              cantos++;
            }
          }
          if(cantos > 0){
            novinho += "\n"+pal
          }
          fs.writeFile("palavrasBanidas.txt", novinho, (err) => {
            if (err){
              console.log(err);
            }else{
              message.channel.send('A palavra **'+pal+'** foi adicionada a lista de banidos com sucesso');
              console.log("Nova palavra banida adicionada com sucesso!\nAdicionado "+pal);
            }
          });
        });
      }
    }
    if((message.content.substring(0,3) == "!uw" && message.content[3] === " ") || (message.content.substring(0,10) == "!unbanword" && message.content[10] === " ") || (message.content.substring(0,3) == "!dp" && message.content[3] === " ") || (message.content.substring(0,15) == "!desbanirpalavra" && message.content[15] === " ")){
      if(!message.member.roles.has("687275105134575618")){
          message.delete(1);
          message.channel.send(message.author+", tu tem que ser muito pica das galáxia pra usar esse comando, mané :triumph: ")
          return 0;
      }
      var pal = message.content.split(" ")[1];
      if(pal == "" || pal == null || pal == undefined){
        message.channel.send(message.author+" coloca a palavra que vc quer que seja desbanida né lindo")
      }else{
        fs.readFile("palavrasBanidas.txt", function(err, buf) {
          var newP = buf.toString().split("\n");
          var doid = "";
          var cont = 0;
          for(var i in newP){
            if(newP[i] != pal){
              doid += "\n"+newP[i];
            }else{
              cont++;
            }
          }
          if(cont == 0){
            message.channel.send(message.author+", essa palavra não existe aqui não fofo");
          }
          fs.writeFile("palavrasBanidas.txt", doid, (err) => {
            if (err){
              console.log(err);
            }else{
              message.channel.send('A palavra **'+pal+'** foi removida da lista de banidos com sucesso :partying_face:');
              message.channel.send('Vá **'+pal+'** seja livre :hugging: ');
              console.log("Nova palavra banida removida com sucesso!\nRemovido "+pal);
            }
          });
        });
      }
    }
    if(message.content === "!pbanidas"){
      fs.readFile("palavrasBanidas.txt", function(err, buf) {
        var newP = buf.toString();
        const embeddd = {
          color: 0xff0000,
          title: "Palavras banidas",
          description: newP
        }
          message.channel.send({ embed: embeddd });
      });
    }
    if(message.content === "!nosimite"){
      nosImite = !nosImite;
      if(nosImite){
        message.channel.send("Beleza, agora vô imitar geral nessa poha.");
      }else{
        message.channel.send("Tá bom, parei. Vô ficar na minha :c")
      }
    }
    if(message.content === "!meImite"){
      // message.channel.send("Beleza, agora vô imitar imitar você, "+message.author+" senpai "+uwu);
      // message.channel.send("De-de-desculpa senpai, vou parar de te imitar "+uwu)
    }
    if(message.content === "!desculpa" || message.content === "!desculpas"){
      var cb = client.emojis.get("687292403278676128").toString();
      message.channel.send("O "+message.author+" pede desculpas :sob::sob::wilted_rose::wilted_rose::wilted_rose::wilted_rose:por ser **homem** "+cb+cb+cb+" e nojento :weary::weary::weary::leaves::leaves::pray::pray::sob::wilted_rose::sob::wilted_rose:")
    }
    if(message.content.substring(0,5) == "!mute" && message.content[4] != " "){
      if(!message.member.roles.has("687275105134575618")){
          message.delete(1);
          message.channel.send(message.author+", tu tem que ser muito pica das galáxia pra usar esse comando, mané :triumph: ")
          return 0;
      }
      if(message.content.split(" ")[1] == "" || message.content === "!mute"){
        message.channel.send(message.author+" tu tem que falar quem eu tenho que mutar né maluco");
      }else{
        var pramutar = message.content.split(" ");
        pramutar.shift();
        var maisqum = false;
        (pramutar.length > 1)?maisqum=true:maisqum=false;
        var jaMutado = new Array();
        var novinho = "";
        fs.readFile("mutados.txt", function(err, buf) {
          var vamo;
          console.log(buf.toString());
          console.log(buf.toString().split("\n"));
          vamo = buf.toString();
          if(vamo != undefined && vamo != ""){
            console.log('pramutar');
            console.log(pramutar);
            for(var i in pramutar[i]){
              console.log('vamo.indexOf(pramutar[i] ' + vamo.indexOf(pramutar[i]));
              if(vamo.indexOf(pramutar[i]) != -1){
                jaMutado.push(pramutar[i]);
              }else{
                console.log('pramutar[i]');
                console.log(pramutar[i]);
                novinho += '\n'+pramutar[i];
              }
            }
          }else{
            for(var i in pramutar){
              novinho += '\n'+pramutar[i];
            }
          }
          console.log('novinho');
          console.log(novinho);
          fs.writeFile("mutados.txt", novinho, (err) => {
            if (err){
              message.channel.send('Houve um erro ao mutar os usuários!\nContate o meu senpai Fudangs#0007');
              console.log('Erro ao mutar usuários: '+err);
            }else{
              console.log("Novos usuários mutados: "+novinho);
              var s ="";
              if(maisqum){
                message.channel.send('Os usuários **'+pramutar+'** foram mutados com sucesso')
              }else{
                message.channel.send('O usuário  **'+pramutar[0]+'** foi mutado com sucesso!');
              }
            }
          });
        });
      }
    }
    if(message.content.substring(0,7) == "!unmute" && message.content[7] != " "){
      if(!message.member.roles.has("687275105134575618")){
          message.delete(1);
          message.channel.send(message.author+", tu tem que ser muito pica das galáxia pra usar esse comando, mané :triumph: ")
          return 0;
      }
      if(message.content.split(" ")[1] == ""){
        message.channel.send(message.author+" tu tem que falar quem eu tenho que desmutar né maluco");
      }
    }
    if(message.content === "!mutados"){
      if(!message.member.roles.has("687275105134575618")){
          message.delete(1);
          message.channel.send(message.author+", tu tem que ser muito pica das galáxia pra usar esse comando, mané :triumph: ")
          return 0;
      }

    }
    if(message.content === "!wtf"){
      message.delete(1);
      message.channel.send({files: ['https://i.kym-cdn.com/entries/icons/mobile/000/026/913/excuse.jpg']})
    }
    if(message.content === "!charada"){
      fetch("https://us-central1-kivson.cloudfunctions.net/charada-aleatoria", {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
        })
        .then(response => response.json())
        .then(response => {
            if (response) {
              const embeddd = {
                color: 0x0000ff,
                title: "Charada",
                description: response.pergunta+"\n\n||"+response.resposta+"||"
              }
                message.channel.send({ embed: embeddd });
            }
        });
    }
    if(message.content === "!chuck"){
      fetch("https://api.chucknorris.io/jokes/random", {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            if (response) {
              const embeddd = {
                color: 0xff0000,
                title: "Chuck Norris Facts",
                description: response.value
              }
                message.channel.send({ embed: embeddd });
            }
        });
    }
    if(message.content === "!sam"){
      fetch("", {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            if (response) {
              const embeddd = {
                color: 0xff0000,
                title: "Chuck Norris Facts",
                description: response.value
              }
                message.channel.send({ embed: embeddd });
            }
        });
    }
})
client.login('Njg2OTQ1NTkzMzM5MTUwNDgw.XmemxA.Ca_c4i67SLROgmcRqXDqq6qqpt0');
