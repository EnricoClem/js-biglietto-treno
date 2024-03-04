// Creare un programma che in base ai kilometri da percorrere e all'età calcoli il prezzo del bigietto.
// Il prezzo del biglietto è di 0.21 € per km.
// Va applicato uno sconto del 20% per i minorenni ed uno sconto del 40% per gli over 65.
console.log('Ciao mondo');

// OTTEENRE il costo in base ai kilometri
// Chiedere all'utente quanti kilometri vuole percorrere e qual'è la sua età
const km = prompt ('Quanti kilometri vuoi percorrere?')
const age = prompt ('Quanti anni hai?')

// calcolare il valore inserito moltiplicandolo per 0.21

// Modificare il risultato in base all'età dell'utente
// SE l'età è sotto i 18 togliere il 20% dal risultato
// ALTRIMENTI SE è superiore a 18 ma inferiore a 65 non modificare la cifra
// ALTRIMENTI oltre il 65 togliere il 40% dal risultato

// Pulire il risultato assicurando che i centesimi non siano mostrati con non oltre due decimali e applicare il valore €