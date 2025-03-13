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

let sectionQuestion = document.querySelector('#questions')
let nombreQuestion = questionAléatoire()
sectionQuestion.innerHTML = '<div><h3>'+questions[nombreQuestion]+'</h3></div><div class="réponses"></div>'
let h3 = sectionQuestion.querySelectorAll('h3')
let divRéponses = sectionQuestion.querySelector('.réponses')
for (let index = 0; index < 4; index++) {
    let choixRéponseAléatoire = réponseAléatoire()
    if (choixRéponseAléatoire === 0) {
        bouton1 = document.createElement('button')
        bouton1.textContent = réponsesA[nombreQuestion]
        divRéponses.appendChild(bouton1)
    } else if (choixRéponseAléatoire === 1) {
        bouton2 = document.createElement('button')
        bouton2.textContent = réponsesB[nombreQuestion]
        divRéponses.appendChild(bouton2)
    } else if (choixRéponseAléatoire === 2) {
        bouton3 = document.createElement('button')
        bouton3.textContent = réponsesC[nombreQuestion]
        divRéponses.appendChild(bouton3)
    } else if (choixRéponseAléatoire === 3) {
        bouton4 = document.createElement('button')
        bouton4.textContent = réponsesD[nombreQuestion]
        divRéponses.appendChild(bouton4)
    }
}
let boutons = sectionQuestion.querySelectorAll('button')
boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        if (! (h3[0].innerText === 'FAUX!' || h3[0].innerText === 'Bravo')) {
            if (réponsesA.includes(bouton.innerText)) {
                score += 1
                sectionPrénom.innerHTML ='<p>Bienvenue</p>'+'<div><h2>'+prénom+'</h2>'+'<h2 id="score">Ton score: '+score+'</h2></div>'
                h3[0].innerText = 'Bravo'
                h3[0].classList.toggle('bonneRéponse')
            } else {
                h3[0].innerText = 'FAUX!'
                h3[0].classList.toggle('mauvaiseRéponse')
            }
        } 
    })
})