// Creare un programma che in base ai kilometri da percorrere e all'età calcoli il prezzo del bigietto.
// Il prezzo del biglietto è di 0.21 € per km.
// Va applicato uno sconto del 20% per i minorenni ed uno sconto del 40% per gli over 65.
console.log('Ciao, questo è il costo del tuo biglietto:');

// OTTEENRE il costo in base ai kilometri
// Chiedere all'utente quanti kilometri vuole percorrere e qual'è la sua età
const km = parseInt (prompt ('Quanti kilometri vuoi percorrere?')); //number
const age = parseInt (prompt ('Quanti anni hai?')); //number

// calcolare il valore inserito moltiplicandolo per 0.21
let km_value = (km * 0.21); //number

// Modificare il risultato in base all'età dell'utente
// SE l'età è sotto i 18 togliere il 20% dal risultato
if(age <= 17){
    let under_18 = (km_value * 80 / 100); //number
    let ticket = Math.floor (under_18 * 100) / 100; //number
    console.log(ticket + ' €'); //number
    console.log('I giovani di oggi non hanno una lira e neanche voglia di lavorare, eccoti uno sconto del 20%!')


// ALTRIMENTI SE è superiore a 18 ma inferiore a 65 non modificare la cifra
} else if(age > 17 && age < 65){
    let standard = (km_value); //number
    let ticket = Math.floor (standard * 100) / 100; //number
    console.log(ticket + ' €'); //number
    console.log("Troppo vecchio per l'under 18, troppo giovane per l'over 65. Sai solo lo sconto che non avrai.")

    
// ALTRIMENTI oltre il 65 togliere il 40% dal risultato
} else{
    let over_65 = (km_value * 60 /100); //numbers
    let ticket = Math.floor (over_65 * 100) / 100; //number
    console.log(ticket + ' €'); //number
    console.log('Complimenti per essere sopravvissuto fino ad oggi boomer! Eccoti uno sconto del 40% per il treno che decrepito come sei a piedi non vai sicuramente da nessuna parte.' )
}