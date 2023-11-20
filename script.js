//Generazione numero random
var randomNumber = function () {
    return Math.floor((Math.random() * 100 + 1));
};
var extractedNum = randomNumber();
console.log("Il numero estratto è: ", extractedNum);
//Numero random giocatore1
var player1 = function () {
    return Math.floor((Math.random() * 100 + 1));
};
var numPlayer1 = player1();
console.log("Giocatore1: ", numPlayer1);
//Numero random giocatore2
var player2 = function () {
    return Math.floor((Math.random() * 100 + 1));
};
var numPlayer2 = player2();
console.log("Giocatore2: ", numPlayer2);
//Verifica
var p1Diff = Math.abs(extractedNum - numPlayer1);
var p2Diff = Math.abs(extractedNum - numPlayer2);
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
