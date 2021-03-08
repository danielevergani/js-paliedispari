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

    // inverto array e assegno a un'altra variabile
    var revLista = lista.reverse();
    console.log(revLista);
}

palindroma(parola);