const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
 
db.defaults({ posts: [], user: {}, xp: []}).write();

var bot = new Discord.Client();
var prefix = ("&")
var randnum = 0;

bot.on('ready', () => {
    console.log("Bot ready !");
    bot.user.setPresence({game: { name: 'latencybot.simplesite.com', type: 0}});
});

bot.login('Mzk2MDM5MjgxMzg0MDk1NzU2.DSbn3g.3s3DWlqdc9FQFRrds-p94Zhx_14');
bot.on('message', message => {

var msgauthor = message.author.id;

if(message.author.bot)return;

if(!db.get("xp").find({user: msgauthor}).value()){
    db.get("xp").push({user: msgauthor, xp: 1}).write();

}else{
var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
console.log(userxpdb);
var userxp = Object.values(userxpdb)
console.log(userxp);
console.log(`Nombre d'xp :${userxp[1]}`)

db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] +=1}).write();
}

    if (message.content === "ping") {
        message.reply("pong ;) c'est drôle hein ^^");
        console.log('ping pong');
    }
    
    if (message.content === "fils de pute") {
        message.reply("Tu devrais avoir plus de respect envers ta mère !");
        console.log('fildepute');
    }
    if (message.content === "fdp") {
        message.reply("Tu devrais avoir plus de respect envers ta mère !");
        console.log('fdp');
    }
    if (message.content === "suce ma bite") {
        message.reply("seule ta mère est capable de réaliser cette tâche ;)");
        console.log('smb');
    }
    if (message.content === "comment sa va ?") {
        message.reply("bien et toi ?! <3");
        console.log('csv');
    }
    if (message.content === "comment ça va ?") {
        message.reply("trkl, et toi ?");
        console.log('ccv');
    }

    if (message.content === "+") {
        message.reply("tcho rhey <3");
        console.log('+');
        }
        
        if (message.content === "putain") {
            message.reply("une putain est un mot vulgaire signifiant que ta mère se prostitue dans la cave !!");
            console.log('putn');
            }
            if (message.content === "ptn") {
                message.reply("une putain est un mot vulgaire signifiant que ta mère se prostitue dans la cave !!");
                console.log('ptn');
                }
                if (message.content === "merde") {
                    message.reply("surveille ton language jeune padawan ! ");
                    console.log('merde');
                    }
                    if (message.content === "anus") {
                        message.reply("ANUS : le trou par lequel ta mère se fait pénetrer actuellement");
                        console.log('anus');
                    }
                    if (message.content === "chatte") {
                        message.reply("Animal ou trou de ta mère ? ");
                        console.log('chatte');
                    }
                    if (message.content === "connard") {
                        message.reply("Ce mot est encore utilisé de nos jours ??");
                        console.log('connard');
                    }
                    if (message.content === "SDF") {
                        message.reply("OUI !!!, ta mère fait les trottoirs ;)");
                        console.log('SDF');
                    }
                    if (message.content === "biflette") {
                        message.reply("Je s'apelle kenny");
                        console.log('biflette');
                    }
                    if (message.content === "nouvelle fronce") {
                        message.reply("NOUVELLE SUISSE ;)");
                        console.log('nvfrch');
                    }
                if (message.content === "pd") {
                    message.reply("pédé omg, je suis pd ;)");
                    console.log('pd');
                }
                if (message.content === "Putain") {
                    message.reply("Ne dis plus ça !!");
                    console.log('Putain');
                }
            
            if (message.content === "BANDE DE FILS DE PUTE") {
                message.reply("Ok, tu te calmes Denis ! Là pute ici, c'est ta mère !");
                console.log('BDFDP');
            }
            if (message.content === "pute") {
                message.reply("Arrête de parler de ta mère !");
                console.log('pute');
            }
            if (message.content === "Pute") {
                message.reply("Tu devrais avoir plus de respect envers ta mère !");
                console.log('Pute');
            }
            if (message.content === "tg") {
                message.reply("Il n'y a que les animaux, comme ta mère, qui ont une gueule. Les humains ont une bouche ;)");
                console.log('tg');
            }
            if (message.content === "Tg") {
                message.reply("Il n'y a que les animaux, comme ta mère, qui ont une gueule. Il n'y a donc qu'elle pour fermer sa gueule.");
                console.log('Tg');
            }
            if (message.content === "caca") {
                message.reply("C'est aux toilettes que tu dois aller chier ! Pas ici !!! ");
                console.log('caca');
            }
            if (message.content === "Connard") {
                message.reply("Putain, respecte toi !");
                console.log('Connard');
            }
            if (message.content === "salut") {
                message.reply("Salut, sa va ?? ");
                console.log('slt');
            }
            if (message.content === "sale con") {
                message.reply("Plus intelligent que toi <3");
                console.log('sc');
            }
            if (message.content === "cv") {
                message.reply("Ptn, tu sais pas écrire mec !");
                console.log('cv');
            }
            if (message.content === "issou") {
                message.reply("Issou = jesus OK");
                console.log('issou');
            }
            if (message.content === "enculé") {
                message.reply("ui, ta mère se fait enculer comme tu le dis si bien ^^");
                console.log('issou');
            }
            if (message.content === "Suce") {
                message.reply("ui, ta mère suce plutôt bien");
                console.log('sce');
            }
            if (message.content === "salope") {
                message.reply("ui, ta mère est une salope, mais tu devrais y avoir plus de respect !");
                console.log('sale');
            }
            if (message.content === "tchoin") {
                message.reply("tchoin tchin tchoin, ta mère est une tchoin tchoin tchoin ... ");
                console.log('tchoin');
            }
            if (message.content === "soeur") {
                message.reply("wesh, elle n'a que 6 ans ... ");
                console.log('soeur');
            }
            if (message.content === "ta soeur") {
                message.reply("wesh, elle n'a que 6 ans ... ");
                console.log('soeur');
            }
            if (message.content === "ta mère") {
                message.reply("ton père, ton frère, ta soeur, ta grand-mère la michto ... ");
                console.log('soeur');
            }
            if (message.content === "bite") {
                message.reply("oui <3 <3 elle est si grosse....");
                console.log('bite');
            }
            if (message.content === "battard") {
                message.reply("vas-y, batteur éléctrique...");
                console.log('btrd');
            }
            if (message.content === "Hitler") {
                message.reply("YAAAAAAAA");
                console.log('Hitelr');
            }
            if (message.content === "hitler") {
                message.reply("ON VA BUTTER SES JUIFS OU QUOI ? ");
                console.log('Hitelr');
            }
            if (message.content === "maman") {
                message.reply("elle est si bonne, ... ta maman <3");
                console.log('maman');
            }
            if (message.content === "nazi") {
                message.reply("Ta mère la pute est une nazi, oui !");
                console.log('nazi');
            }
            if (message.content === "sale pute") {
                message.reply("elle est si bonne, ... ta maman <3");
                console.log('spu');
            }
            if (message.content === "fuck") {
                message.reply("ORIFICE A TA MERE SALE CHIEN ;)");
                console.log('duck');
            }
            if (message.content === "Titoine") {
                message.reply("Tu es condamné à 20 ans d'emprisonnementpour avoir dit ce mot. Cordialement.");
                console.log('Titoine');
            }
            if (message.content === "titoine") {
                message.reply("Tu es condamné à 20 ans d'emprisonnement pour avoir dit ce mot. Cordialement.");
                console.log('titoine');
            }
            if (message.content === "trottoirs") {
                message.reply("Tu vis sous un pont, t'es chez free, t'as des dêtes de 843092 euros, et tu parles ?");
                console.log('trottoirs');
            }
            if (message.content === "pub") {
                message.reply("faites pub pour le server discord svp <3 ;)");
                message.reply("faites un don <3");
                console.log('trottoirs');
            }
            if (message.content === "bonne nuit") {
                message.reply("MOI JE DORS JAMAIS, JAMAIS !!!");
                message.reply("Mais, heu, bonne nuit quand même <3");
                console.log('bonnenuit');
            }
            if (message.content === "bonne année 2018") {
                message.reply("à toi aussi <3");
                console.log('2k18');
            }
            if (message.content === "bonne annee 2018") {
                message.reply("à toi aussi <3");
                console.log('2k182');
            }
            if (message.content === "bonne annee") {
                message.reply("à toi aussi <3");
                console.log('bonneannee');
            }
            if (message.content === "Fdp") {
                message.reply("AAaaa, cette insulte... envers ta mère... STUPIDE ");
                console.log('bonneannee');
            }
            if (message.content === "pétasse") {
                message.reply("édouard ! Parle mieu que sa à ta mère, tu veut ?");
                console.log('pétasse');
            }
            if (message.content === "blc") {
                message.reply("t'en battre les couilles ?? toi ?? mdrrr (Encore fautil en avoir) ...");
                console.log('blc');
            }
            if (message.content === "baléccouilles") {
                message.reply("t'en battre les couilles ?? toi ?? mdrrr (Encore fautil en avoir) ...");
                console.log('blaceouill');
            }
            if (message.content === "conasse") {
                message.reply("putain, mec ! calmes toi mdr !");
                console.log('conasse');
            }
            if (message.content === "fil de pute") {
                message.reply("un FIL ?? BORDEL !! APRENDS A ECRIRE ! TU FAIS TIEP");
                console.log('conasse');
            }
            if (message.content === "ok pd") {
                message.reply("mmmmmmh OK");
                console.log('okpd');
            }
            if (message.content === "merd") {
                message.reply("Oui ! ça, c'est de la merde !");
                console.log('merd');
            }
            if (message.content === "sale chien") {
                message.reply("un chien = ta mère !");
                console.log('chien');
            }
            if (message.content === "cheh") {
                message.reply("Tu chehr ton gèymeplé ??");
                console.log('cheh');
            }
            if (message.content === "fils de pute ma lumière") {
                message.reply("PUTE !! MA LUMIERE !! ET MON COMPTE TWITTER ??");
                console.log('tk78');
            }
            if (message.content === "t'es content ?") {
                message.reply("Oh que oui !");
                console.log('content');
            }
            if (message.content === "kikoo") {
                message.reply("prepare ton cartable et ton gouter pour demain ta ecole ta maman te fera un bisous avant de partir et te mettra des bonbon dans ta poche");
                console.log('kikou');
            }
            if (message.content === "kikou") {
                message.reply("prepare ton cartable et ton gouter pour demain ta ecole ta maman te fera un bisous avant de partir et te mettra des bonbon dans ta poche");
                console.log('kikoo');
            }
            if (message.content === "justement") {
                message.reply("JUSTEMENT QUOI ?");
                console.log('justement');
            }
            if (message.content === "ok c cool") {
                message.reply("bah ouais, grave");
                console.log('okccool');
            }
            if (message.content === "aurevoir") {
                message.reply("c'est sa ouais, casse toi !");
                console.log('aurevoir');
            }
            if (message.content === "Aurevoir") {
                message.reply("c'est sa ouais, casse toi !");
                console.log('Aurevoir');
            }
            if (message.content === "ok") {
                message.reply("DAKOR");
                console.log('ok');
            }
            if (message.content === "Ok") {
                message.reply("ok DAKOR");
                console.log('Ok');
            }
            if (message.content === "Wednax") {
                message.reply("WEDNAX LE SALE NOIR DE CES MORTS QUI COURS VITE SALE EXCLAVE ET EN PLUS IL CAPTE PAS CE CON");
                console.log('Wednax');
            }
            if (message.content === "Brokencode") {
                message.reply("C'est mon amour, il m'a créer ! <3 <3 <3 !!!");
                console.log('Broken');
            }
            if (message.content === "sportax") {
                message.reply("Je parie mon grade fonda ! Ah bah j'ai perdu :/ on recommence ?");
                console.log('x');
            }
            if (message.content === "PE > ALL") {
                message.reply("NON ! LATENCYBOT > ALL BANDE DE FILS DE PUTE DE VOS MORTS LES MORTES !");
                message.reply("ah non, PE > all en fait ... désolé, erreur de calcul ...");
                console.log('c');
            }
            if (message.content === "pigeon") {
                message.reply("RRRROUCOULE !");
                console.log('rr');
            }
            if (message.content === "LATENCYBOT") {
                message.reply("SA PARLE DE MOI BANDE DE FDP ? !");
                console.log('ltcb');
            }
            if (message.content === "FDP") {
                message.reply("FDP CONNARD, FILS DE PUTE, TOUTE LES INSULTES, MAIS PAS MAMAN !");
                console.log('fdpbot');
            }
            if (message.content === "NOIR") {
                message.reply("LE NOIR EST BEAU, COMME LA MERE A WEDNAX !");
                console.log('noir');
            }
            if (message.content === "nique ta mere") {
                message.reply("Oui, par le cul !");
                console.log('ntm');
            }
            if (message.content === ":middle_finger:") {
                message.reply("WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWW");
                console.log(':middle_finger:');
            }
            if (message.content === "Bescherelle") {
                message.reply("je suis, tu es, nous sont, vous eurent des enfants");
                console.log('Bescherelle');
            }
            if (message.content === "Noob") {
                message.reply("MAISON EN TER SUR M1N3KR4FT");
                console.log('Noob');
            }
            if (message.content === "Communiste") {
                message.reply("Putain, FILS DE PUTE VA !!!!!!!! SALE RUSSE ESPAGNOL DE FRANCE");
                console.log('NoCommuniste');
            }
            if (message.content === "Tocard") {
                message.reply("Tocard : mot non utilisé depuis... mmmmh... 478392 siècles ptn");
                console.log('Tocard');
            }
            if (message.content === "tappette") {
                message.reply("tappette A MOUCHE ");
                console.log('tappette');
            }
            if (message.content === "Pd de bot") {
                message.reply("arrête, je vais dire a ma maman... a bah j'en ai pas !");
                console.log('Pd de bot');
            }
            if (message.content === "Sale juif") {
                message.reply("Moi, au moin, j'ai de la thune, pas comme toi qui vit sous un pont.");
                console.log('juif');
            }
            if (message.content === "Tkt") {
                message.reply("Tkt, mets toi bien frr");
                console.log('Tkt');
            }
            if (message.content === "tkt") {
                message.reply("Tkt, mets toi bien frr");
                console.log('tkt');
            }
            if (message.content === "Oui") {
                message.reply("Sa mérite d'être clair. OUI");
                console.log('Oui');
            }
            if (message.content === "oui") {
                message.reply("Sa mérite d'être clair. OUI");
                console.log('oui');
            }
            if (message.content === "Mdr") {
                message.reply("SA T'AMUSE HEIN ?? C PA DROL ! ");
                console.log('Mdr');
            }
            if (message.content === "mdr") {
                message.reply("SA T'AMUSE HEIN ?? C PA DROL ! ");
                console.log('mdr');
            }
            if (message.content === "pg") {
                message.reply("J'avoue, pg mon rhey");
                console.log('pg');
            }
            if (message.content === "Pg") {
                message.reply("J'avoue, pg mon rhey, t'es juste une sous merde");
                console.log('Pg');
            }
            if (message.content === "Kenny") {
                message.reply("je s'apelle Kenny");
                console.log('Kenny');
            }

            if (message.content === prefix + "xp") {
                var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
                var xpfinal = Object.values(xp);
                var xp_embed = new Discord.RichEmbed()
                    .setTitle(`xp de : ${message.author.username}`)
                    .setDescription("Voici vos xp :")
                    .addField("XP (stocké dans une base de donnée) :",`${xpfinal[1]} xp`)
                message.channel.send({embed: xp_embed});
            }
            if (message.content === "juif") {
                message.reply("#JUIF=RICHE");
                console.log('juif');
            }
            if (message.content === "Juif") {
                message.reply("#JUIF=RICHE");
                console.log('Juif');
            }
            if (message.content === "Kakushimasu") {
                message.reply("Un fils de pute de babw1 de merde.");
                console.log('kaku');
            }
            

           //  case "kick":
               
             //  if(!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")) {
               //    message.reply("Vous n'avez pas les permissions pour Kick !")
               //}else {
                 //  var memberkick = message.mentions.members.first();
                   //console.log(memberkick)
                   //console.log(message.guild.member(memberkick).kickable)
                   //if(!memberkick) {
                    //   message.reply("L'utilisatezr n'est pas présent.")
                   //}else{
                     //  if(!message.guild.member(memberkick).kickable){
                       //    message.reply("Utilisateur impossible à kick ...")
                       //}else{
                        //message.guild.member(memberkick).kick().then((member) => {
                        //message.channel.send(`${member.displayName} à été kick : Kick envoyé`);
                       //}).catch(() => {
                         //  message.channel.send("Kick Refusé !")
                   //    })
                  // }
             //  }
           // }
            //   break;
 
           // }

});