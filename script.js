let compScore = 0
let playerScore = 0

function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    console.log("computerPlay() is executing.")
    return options[Math.floor(Math.random() * options.length)];
}

function playRound() {
    console.log("playRound() is executing.")
    return prompt("Type rock, paper, or scissors.").toLowerCase();
}

// let computerSelection = computerPlay();
// let playerSelection = playRound();


function fuknPlay(a, b) {
    if(a == b) {
        console.log("draw")
        // game()
    } else if (a == "rock") {
        if(b == "paper") {
            console.log("Computer wins.")
            compScore += 1
            // game()
        } else {
            console.log("Player wins")
            playerScore += 1
            // game()
        }
    } else if(a == "paper") {
        if(b == "scissors") {
            console.log("Computer wins")
            compScore += 1
            // game()
        } else {
            console.log("Player wins")
            playerScore += 1
            // game()
        }
    } else if(a == "scissors") {
        if(b == "rock") {
            console.log("Computer wins")
            compScore += 1
            // game()
        } else {
            console.log("Player wins")
            playerScore += 1
        }
    } else {
        console.log("....wtf did you input?")
        // game()
    }
}

function quitIt() {
    console.log("Game Over");
    return false;
}

// function checkWin() {
//     if(playerScore == 5) {
//         console.log("You win!")
//         quitIt();
//     } else if(compScore == 5) {
//         console.log("Computer wins")
//         quitIt();
//     }
// }

function game() {
    // checkWin()
    console.log(`Welcome. Player score is ${playerScore}, computer score is ${compScore}.`)
    let computerSelection = computerPlay();
    let playerSelection = playRound();
    fuknPlay(playerSelection, computerSelection);
}

while(playerScore != 5 | compScore == 5){
    console.log("were ih the whiiiile loop inspectah!")
    game();
}