let playerSelection = []

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    console.log("Player picked rock");
    playerSelection = "rock"
    fuknPlay(playerSelection, computerPlay())
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    console.log("Player picked paper");
    playerSelection = "paper"
    fuknPlay(playerSelection, computerPlay())
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    console.log("Player picked scissors");
    playerSelection = "scissors"
    fuknPlay(playerSelection, computerPlay())
});

let compScore = 0
let playerScore = 0

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let compSelect = options[Math.floor(Math.random() * options.length)]
    console.log(`Computer picked ${compSelect}`);
    return compSelect;
};

// function playRound() {

//     console.log("Select rock, paper, or scissors.")
//     return playerSelection;
// };

function fuknPlay(a, b) {
    if(a == b) {
        console.log("draw");
    } else if (a == "rock") {
        if(b == "paper") {
            console.log("Computer wins.");
            compScore += 1
        } else {
            console.log("Player wins");
            playerScore += 1
        }
    } else if(a == "paper") {
        if(b == "scissors") {
            console.log("Computer wins");
            compScore += 1
        } else {
            console.log("Player wins");
            playerScore += 1
        }
    } else if(a == "scissors") {
        if(b == "rock") {
            console.log("Computer wins")
            compScore += 1
        } else {
            console.log("Player wins");
            playerScore += 1
        }
    } else {
        console.log("....wtf did you input?");
    }
}

// function game() {
//     let computerSelection = computerPlay();
//     let playerSelection = playRound();
//     fuknPlay(playerSelection, computerSelection);
// }

// for (let i = 1; i <= 5; i++){
//     console.log(`Round ${i}`)
//     console.log(`Player score is ${playerScore}, computer score is ${compScore}.`)
//     game();
// }

// if (compScore > playerScore){
//     alert("comp wins");
// } else if (playerScore > compScore){
//     alert("player wins")
// } else {
//     console.log("draw")
// }

// game();