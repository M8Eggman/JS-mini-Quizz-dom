score = 0
do {
    prénom = prompt("Entrez votre prénom (Entre 3 et 10 lettres)")
} while ( prénom == null||prénom.length < 3 || prénom.length > 10);

let sectionPrénom = document.querySelector('#prénomEtScore')
sectionPrénom.innerHTML ='<p>Bienvenue</p>'+'<div><h2>'+prénom+'</h2>'+'<h2 id="score">Ton score: '+score+'</h2></div>'