var parola = prompt("inserisci una parola, ti dirò se è una parola palindroma");
// creo funzione

function palindroma(x){
    
    var nuovaParola = x.split("").reverse().join("");

    // condizione per palindromia 

    if (nuovaParola == x){
        return "la parola è palindroma"
    }
    else{
        return "la parola non è palindroma"
    }
}

var risultato = palindroma(parola);
alert(risultato);