"use strict";
//Generazione numero random
let randomNumber = () => {
    return Math.floor((Math.random() * 100 + 1));
};
let extractedNum = randomNumber();
console.log("Il numero estratto è: ", extractedNum);
//Numero random giocatore1
let player1 = () => {
    return Math.floor((Math.random() * 100 + 1));
};
let numPlayer1 = player1();
console.log("Giocatore1: ", numPlayer1);
//Numero random giocatore2
let player2 = () => {
    return Math.floor((Math.random() * 100 + 1));
};
let numPlayer2 = player2();
console.log("Giocatore2: ", numPlayer2);
//Verifica
let p1Diff = Math.abs(extractedNum - numPlayer1);
let p2Diff = Math.abs(extractedNum - numPlayer2);
if (numPlayer1 === extractedNum) {
    console.log("Giocatore1 ha indovinato!");
}
else if (numPlayer2 === extractedNum) {
    console.log("Giocatore2 ha indovinato!");
}
else if (numPlayer1 < numPlayer2) {
    console.log("Nessuno ha indovinato, ma Giocatore1 si è avvicinato di più.");
}
else if (numPlayer1 > numPlayer2) {
    console.log("Nessuno ha indovinato, ma Giocatore2 si è avvicinato di più.");
}
else {
    console.log("Nessuno ha indovinato, ma entrambi si sono avvicinati.");
}
//Compilazione DOM debrief
let btnVerifica = document.getElementById("verifica");
let btnCancella = document.getElementById("cancella");
let risultato = document.getElementById("risultato"); //perché quando si carica il documento l'elemento indicato è null
let estratto;
let giocatore1 = document.getElementById("giocatore1");
let giocatore2 = document.getElementById("giocatore2");
btnCancella.setAttribute("disabled", "true");
btnVerifica.addEventListener("click", verifica);
function verifica() {
    let numero1 = Number(giocatore1.value); //value restituisce stringa, quindi serve il costruttore Number per convertire
    let numero2 = Number(giocatore2.value);
    if (!numero1 || !numero2 || numero1 === 0 || numero2 === 0) {
        risultato.innerHTML = "Entrambi i giocatori devono inserire un valore superiore a 0";
        return;
    }
    generazione();
    confronto(numero1, numero2);
}
const generazione = () => {
    estratto = Math.floor(Math.random() * 100 + 1);
    document.querySelector("#estratto").innerHTML = `Numero estratto ${estratto}`;
};
function confronto(valore1, valore2) {
    btnVerifica.setAttribute("disabled", "true");
    btnCancella.removeAttribute("disabled");
    switch (true) {
        case valore1 === estratto:
            risultato.innerHTML = "Il giocatore 1 ha indovinato";
            break;
        case valore2 === estratto:
            risultato.innerHTML = "Il giocatore 2 ha indovinato";
            break;
        case Math.abs(estratto - valore1) < Math.abs(estratto - valore2):
            risultato.innerHTML = "Il gocatore 1 si è avvicinato di più";
            break;
        default:
            risultato.innerHTML = "Il giocatore 2 si è avvicinato di più";
            break;
    }
}
const cancella = () => {
    risultato.innerHTML = "";
    document.querySelector("#estratto").innerHTML = "";
    giocatore1.value = "";
    giocatore2.value = "";
    btnVerifica.removeAttribute("disabled");
    btnCancella.setAttribute("disabled", "true");
};
btnCancella.addEventListener("click", cancella);
