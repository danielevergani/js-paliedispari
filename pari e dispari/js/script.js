// // inizializzo variabili

// var scelta = prompt("pari o dispari ?");
// var numero;
// do {
//     numero = parseInt( prompt("scrivi un numero tra 1 e 5" ) );
// } while ((numero < 1) || (numero > 5));

// function pariOdispari(previsione, num){
    
//     var numRandom = Math.floor(Math.random() * 5) + 1;
//     var totale = numRandom + num;
    
//     // condizione da verificare

//     if ( ( (totale % 2 == 0) && previsione == "pari" ) || ( (totale % 2 != 0) && previsione == "dispari" ) ){
//         return "hai vinto con il numero " + totale
//     }
//     else{
//         return "hai perso con il numero " + totale
//     }
// }


// var risultato = pariOdispari(scelta, numero);
// console.log(risultato);


// inizializzo variabili

var scelta = document.getElementById("pd");
var numero;
do {
    numero = parseInt( prompt("scrivi un numero tra 1 e 5" ) );
} while ((numero < 1) || (numero > 5));
var bottone = document.getElementById("btn");




function pariOdispari(previsione, num){
    
    var numRandom = Math.floor(Math.random() * 5) + 1;
    var totale = numRandom + num;
    
    // condizione da verificare

    if ( ( (totale % 2 == 0) && previsione.value == "pari" ) || ( (totale % 2 != 0) && previsione.value == "dispari" ) ){
        return "hai vinto con il numero " + totale
    }
    else{
        return "hai perso con il numero " + totale
    }
}


bottone.addEventListener ("click",pariOdispari);

function pariOdispari(scelta, numero)

