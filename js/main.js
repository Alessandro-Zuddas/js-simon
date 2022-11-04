"use strict";

/*--------------------------------------------------------------------------------
                                 FUNCTIONS 
--------------------------------------------------------------------------------*/

// Funzione generatrice di numeri random univoci
function rndNumbersGenerator(){
    while(rndNumbers.length <= 4){

        currentNumber = Math.floor(Math.random() * 100) + 1;
        
        if(!rndNumbers.includes(currentNumber)){

            rndNumbers.push(currentNumber);
            console.log(rndNumbers);

        }
    }
}

// Funzione per generare dinamicamente i numeri estratti
function setGameTable(array){

    rndNumbersGenerator();

    for (let i = 0; i < rndNumbers.length; i++) {
        
        finalNumber = document.createElement("div");
        finalNumber.classList.add("number");
        finalNumber.innerHTML = rndNumbers[i];
        gameTable.append(finalNumber);
        
    }

}

// Funzione per cronometrare il tempo di memorizzazione numeri
function memoryTimer(){

    setTimeout(function(){

        for (let i = 0; i < rndNumbers.length; i++) {
        
            gameTable.remove(finalNumber);
            
        }

    }, 30000)

}

// Funzione per cronometrare i 30 secondi di tempo


/*--------------------------------------------------------------------------------
                                 /FUNCTIONS 
--------------------------------------------------------------------------------*/
// Dichiarazione tavola di gioco
const gameTable = document.querySelector(".numbers-container");

// Dichiarazione array per contenere estrazione numeri random
let rndNumbers = [];

// Contenitore per contenere uno per uno i numeri estratti
let currentNumber;

// Contenitore per numeri da creare dinamicamente
let finalNumber;

setGameTable(rndNumbers);
memoryTimer();

// Descrizione:
// Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.