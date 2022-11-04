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

    }, 31000)

}

// Funzione per cronometrare i 30 secondi di tempo
function remaningTime(){

    let timerCore = setInterval(function(){

        if(timeToEnd > 0){

            for (let i = 30; i > 0 ; i--) {
            
                timerText.innerHTML = `Rimangono ${timeToEnd} secondi!`
                timeToEnd--;
                return;
            }

        }else{
            timerText.innerHTML = `Tempo scaduto!`
        }

    }, 1000)

    setTimeout(function(){
        clearInterval(timerCore); 
    }, 32000);

}

// Funzione per chiedere inserimento numeri all'utente
function userInput(){

    setTimeout(function(){
        if(timeToEnd <= 0){
            
            for (let i = 0; i < rndNumbers.length; i++) {
                
                userChoice = Number(prompt("Inserisci i numeri di Simon uno alla volta!"));
                userNumbers.push(userChoice);
                console.log(userNumbers);

            }

            if(JSON.stringify(userNumbers) === JSON.stringify(rndNumbers)){ 

                timerText.innerHTML = `Complimenti hai indovinato tutti i numeri! <br> ${rndNumbers}`;

                setTimeout(function(){
                    alert("Premi OK e mettiti alla prova con altri numeri!");
                    window.location.reload();
                }, 500);

            }else{

                timerText.innerHTML = `Che peccato, i numeri di Simon erano: <br> ${rndNumbers}. <br> I numeri inseriti da te invece sono: <br> ${userNumbers}`;

                setTimeout(function(){
                    alert("Premi OK per riprovare!");
                    window.location.reload();
                }, 500);
            }

        }
    }, 33000);

}

// Funzione per definire il ciclo di vita del gioco
function gameLifeCicle(){

    setGameTable(rndNumbers);

    memoryTimer();

    remaningTime();

    userInput()
}

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

// Dichiarazione del testo del timer
const timerText = document.querySelector(".timer");

// Contatore timer
let timeToEnd = 30;

// Contenitore per input progressivo utente
let userChoice;

// Array numeri scelti dall'utente
let userNumbers = [];

gameLifeCicle();