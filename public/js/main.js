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
let on = true
do {
    prénom = prompt("Entrez votre prénom (Entre 3 et 10 lettres)")
} while ( prénom == null||prénom.length < 3 || prénom.length > 10);

let sectionPrénom = document.querySelector('#prénomEtScore')
sectionPrénom.innerHTML ='<p>Bienvenue</p>'+'<div><h2>'+prénom+'</h2>'+'<h2 id="score">Ton score: '+score+'</h2></div>'
let sectionQuestion = document.querySelector('#questions')

for (let index = 0; index < 5; index++) {
    let nombreQuestion = questionAléatoire()
    newDiv = document.createElement('div') 
    newDiv.classList.add('toggleDiv')
    newDiv.innerHTML = '<div><h3>'+(index+1)+'.'+questions[nombreQuestion]+'</h3></div><div class="réponses"></div>'
    sectionQuestion.appendChild(newDiv)
    let h3 = sectionQuestion.querySelectorAll('h3')
    let divRéponses = sectionQuestion.querySelectorAll('.réponses')
    listeABCD = []
    for (let index2 = 0; index2 < 4; index2++) {
        let choixRéponseAléatoire = réponseAléatoire()
        if (choixRéponseAléatoire === 0) {
            bouton1 = document.createElement('button')
            bouton1.textContent = réponsesA[nombreQuestion]
            divRéponses[index].appendChild(bouton1)
        } else if (choixRéponseAléatoire === 1) {
            bouton2 = document.createElement('button')
            bouton2.textContent = réponsesB[nombreQuestion]
            divRéponses[index].appendChild(bouton2)
        } else if (choixRéponseAléatoire === 2) {
            bouton3 = document.createElement('button')
            bouton3.textContent = réponsesC[nombreQuestion]
            divRéponses[index].appendChild(bouton3)
        } else if (choixRéponseAléatoire === 3) {
            bouton4 = document.createElement('button')
            bouton4.textContent = réponsesD[nombreQuestion]
            divRéponses[index].appendChild(bouton4)
        }
    }
    let boutons = divRéponses[index].querySelectorAll('button')
    boutons.forEach(bouton => {
        bouton.addEventListener('click', () => {
            if (! (h3[index].innerText === 'FAUX!' || h3[index].innerText === 'Bravo')) {
                if (réponsesA.includes(bouton.innerText)) {
                    score += 1
                    sectionPrénom.innerHTML ='<p>Bienvenue</p>'+'<div><h2>'+prénom+'</h2>'+'<h2 id="score">Ton score: '+score+'</h2></div>'
                    h3[index].innerText = 'Bravo'
                    h3[index].classList.toggle('bonneRéponse')
                } else {
                    h3[index].innerText = 'FAUX!'
                    h3[index].classList.toggle('mauvaiseRéponse')
                }
            }
            let toutLesToggleDiv = sectionQuestion.querySelectorAll('.toggleDiv')
            if (toutLesToggleDiv.length > 0) {
                toutLesToggleDiv[0].classList.remove('toggleDiv')    
            }
            
            if ((h3[4].innerText === 'FAUX!' || h3[4].innerText === 'Bravo') && on) { 
                on = false
                boutonFinale = document.createElement('button')
                boutonFinale.textContent = 'Afficher résultat'
                sectionQuestion.appendChild(boutonFinale)
                boutonFinale.addEventListener('click', () => {
                    if (5/score == 1) {
                        sectionQuestion.innerHTML = '<h2>'+score+'/5<h3>Excellent</h3>'
                    }else if (5/score >= 0.5 ) {
                        sectionQuestion.innerHTML = '<h2>'+score+'/5<h3>Peut mieux faire</h3>'
                    }else if (5/score < 0.5) {
                        sectionQuestion.innerHTML = '<h2>'+score+'/5<h3>Presque la moitié, vous pouvez le faire</h3>'
                    }else if (5/score == 0) {
                        sectionQuestion.innerHTML = '<h2>'+score+'/5</h2><h3>Nul!!!</h3>'
                    }
                })
            }
        })
    }) 
}
let premierToggleDiv = sectionQuestion.querySelector('.toggleDiv')
premierToggleDiv.classList.remove('toggleDiv')
