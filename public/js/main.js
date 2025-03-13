score = 0
prénom = prompt("Entrez votre prénom")
let divPrénom = document.querySelector('#prénomEtScore')
divPrénom.innerHTML = '<h2>'+prénom+'</h2>'+'<h2>'+score+'</h2>'