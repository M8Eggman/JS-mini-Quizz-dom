function questionAléatoire() {
    //cherche un nombre jusqu'a qu'il ne soit pas dans la liste
    do {
        question = Math.floor(Math.random()*questions.length)
    } while (listeNombre.includes(question))
    listeNombre.push(question)
    return question
}
function réponseAléatoire() {
    //cherche un nombre jusqu'a qu'il ne soit pas dans la liste
    do {
        réponseABCD = Math.floor(Math.random()*4)
    } while (listeABCD.includes(réponseABCD))
    listeABCD.push(réponseABCD)
    return réponseABCD
}
let questions = [
    'Quel est le personnage principal de "Naruto" ?',
    'Quel est le nom du robot géant dans "Neon Genesis Evangelion" ?',
    'Qui est le créateur de "One Piece" ?',
    'Quel est le nom du chat magique dans "Sailor Moon" ?',
    'Quel est le sport pratiqué dans "Haikyuu!!" ?',
    'Quel est le nom du héros de "My Hero Academia" ?',
    'Qui est le rival de Light Yagami dans "Death Note" ?',
    'Quel est le nom du héros de "Attack on Titan" ?',
    'Quel est le nom du personnage principal de "Demon Slayer" ?',
    "Quel est l'anime qui suit les aventures d'un alchimiste ?",
    'Quel est le nom du héros de "Dragon Ball Z" ?',
    'Quel est le nom du personnage principal de "Tokyo Revengers" ?',
    "Quel est l'anime qui met en scène des joueurs de basket-ball ?",
    'Quel est le nom du personnage principal de "Cowboy Bebop" ?'
]
let réponsesA = [
    'Naruto Uzumaki',
    'Evangelion',
    'Eiichiro Oda',
    'Luna',
    'Volley-ball',
    'Izuku Midoriya',
    'L',
    'Eren Yeager',
    'Tanjiro Kamado',
    'Fullmetal Alchemist',
    'Son Goku',
    'Takemichi Hanagaki',
    'Kuruko no Basket',
    'Spike Spiegel'
]
let réponsesB = [
    'Sasuke Uchiha',
    'Gundam',
    'Masashi Kishimoto',
    'Artemis',
    'Football',
    'Katsuki Bakugo',
    'Near',
    'Levi Ackerman',
    'Zenitsu Agatsuma',
    'Dragon Ball',
    'Vegeta',
    'Mikey',
    'Slam Dunk',
    'Jet Black'
]
let réponsesC = [
    'Sakura Haruno',
    'Megazord',
    'Hirohiko Araki',
    'Diana',
    'Basketball',
    'Shoto Todoroki',
    'Mello',
    'Mikasa Ackerman',
    'Inosuke Hashibira',
    'Naruto',
    'Piccolo',
    'Draken',
    'Haikyuu!!',
    'Faye Valentine'
]
let réponsesD = [
    'Kakashi Hatake',
    'Optimus Prime',
    'Tite Kubo',
    'Sailor Venus',
    'Tennis',
    'All Might',
    'Ryuk',
    'Armin Arlert',
    'Nezuko Kamado',
    'Bleach',
    'Gohan',
    'Chifuyu',
    'Kuroko no Basuke',
    'Ein'
]
let listeNombre = []
let listeABCD = []
let score = 0
do {
    prénom = prompt("Entrez votre prénom (Entre 3 et 10 lettres)")
} while ( prénom == null||prénom.length < 3 || prénom.length > 10);

let sectionPrénom = document.querySelector('#prénomEtScore')
sectionPrénom.innerHTML ='<p>Bienvenue</p>'+'<div><h2>'+prénom+'</h2>'+'<h2 id="score">Ton score: '+score+'</h2></div>'

nombreQuestion = questionAléatoire()

let sectionQuestion = document.querySelector('#questions')
sectionQuestion.innerHTML = '<h3>'+questions[nombreQuestion]+'</h3>'
choixRéponseAléatoire = réponseAléatoire()
for (let index = 0; index < 4; index++) {
    if (choixRéponseAléatoire === 0) {
        réponsesA[nombreQuestion]
    } else if (choixRéponseAléatoire === 1) {
        réponsesB[nombreQuestion]
    } else if (choixRéponseAléatoire === 2) {
        réponsesC[nombreQuestion]
    } else if (choixRéponseAléatoire === 3) {
        réponsesD[nombreQuestion]
    }
}