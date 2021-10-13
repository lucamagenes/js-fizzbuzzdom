//Scrivi un programma che esegua un ciclo da 1 a 100



/*

-seleziono la classe della lista non ordinata

-creo loop di elementi da 1 a 100

-assegnazione di uno stile di base agli elementi

*/

let list = document.querySelector(".list")

let element;



for (let i = 1; i <= 100; i++) {

    if (i % 15 == 0) {
        element = `<li class="box fizzbuzz"> fizzbuzz </li>`;

    } else if (i % 3 == 0) {
        element = `<li class="box fizz"> fizz </li>`;

    } else if (i % 5 == 0) {
        element = `<li class="box buzz"> buzz </li>`;

    } else {
        element = `<li class="box"> ${i} </li>`;

    }

    list.innerHTML += element;
}


//stile differente per i valori multipli di 3

/*

-seleziono solo i multipli di 3

-assegno a questi elementi uno stile differente

*/




//stile differente per i valori multipli di 5

/*

-seleziono solo i multipli di 5

-assegno a questi elementi uno stile differente

*/



//stile differente per i valori multipli di 3 e di 5

/*

-seleziono i valori che sono allo stesso tempo multipli di 3 e 5

-assegno a questi elementi uno stile differente

*/