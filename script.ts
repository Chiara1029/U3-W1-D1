//Generazione numero random
let randomNumber = ():number =>{
    return Math.floor((Math.random()*100+1))
}
let extractedNum = randomNumber()
console.log("Il numero estratto è: ", extractedNum)

//Numero random giocatore1
let player1 = ():number => {
    return Math.floor((Math.random()*100+1))
}
let numPlayer1 = player1()
console.log("Giocatore1: ", numPlayer1)

//Numero random giocatore2
let player2 = ():number => {
    return Math.floor((Math.random()*100+1))
}
let numPlayer2 = player2()
console.log("Giocatore2: ", numPlayer2)


//Verifica
let p1Diff = Math.abs(extractedNum - numPlayer1)
let p2Diff = Math.abs(extractedNum - numPlayer2)

if (numPlayer1 === extractedNum) {
    console.log("Giocatore1 ha indovinato!")
} else if (numPlayer2 === extractedNum) {
    console.log("Giocatore2 ha indovinato!")
} else if (numPlayer1 < numPlayer2) {
    console.log("Nessuno ha indovinato, ma Giocatore1 si è avvicinato di più.")
} else if (numPlayer1 > numPlayer2){
    console.log("Nessuno ha indovinato, ma Giocatore2 si è avvicinato di più.")
} else {
    console.log("Nessuno ha indovinato, ma entrambi si sono avvicinati.")
}