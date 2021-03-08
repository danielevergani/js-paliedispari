var parola = prompt("inserisci una parola, ti dirò se è una parola palindroma");
// creo funzione

function palindroma(x){
    // inizialirro array vuoto
    var lista = [];

    // inserisco parola in array
    for ( var i=0; i<x.length; i++){
        lista.push(x[i]);
    } 
    console.log(lista);

    // condizione per palindromia 
    if (lista.toString() == lista.reverse().toString()){
        return "la parola è palindroma"
    }
    else{
        return "la parola non è palindroma"
    }
    

}

var risultato = palindroma(parola);
alert(risultato);