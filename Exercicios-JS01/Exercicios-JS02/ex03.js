
const randomNumber = Math.random () * (10 - 1) + 1 
const winnerNumber = Math.random () * (10 - 1) + 1 
 
if(randomNumber===winnerNumber){ 
    console.log("Você ganhou")
} else { 
    console.log ("Vocë perdeu")
}