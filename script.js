let compScore = 0;
let playerScore = 0;
let drawScore = 0;

// DOM SHIZZLE //
const msgBoard = document.querySelector("#scoreboard");
const scoreCounter = document.querySelector("#scoreCounter");

let playerMsg = document.createElement("h3");
playerMsg.textContent = "> Scoreboard";
msgBoard.appendChild(playerMsg);

let compMsg = document.createElement("h3");
compMsg.textContent = "> ";
msgBoard.appendChild(compMsg);

let resultMsg = document.createElement("h3");
resultMsg.textContent = "> ";
msgBoard.appendChild(resultMsg);

let playerWins = document.createElement("h3");
playerWins.textContent = `Player score: ${playerScore}`;
scoreCounter.appendChild(playerWins);

let compWins = document.createElement("h3");
compWins.textContent = `Comp score: ${compScore}`;
scoreCounter.appendChild(compWins);

let noWins = document.createElement("h3");
noWins.textContent = `Draws: ${drawScore}`;
scoreCounter.appendChild(noWins);

// ROCK PAPER SCISSORS BUTTONS //
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playerMsg.textContent = "> Player picked rock"
    playerSelection = "rock"
    fuknPlay(playerSelection, computerPlay())
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playerMsg.textContent = "> Player picked paper";
    playerSelection = "paper"
    fuknPlay(playerSelection, computerPlay())
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playerMsg.textContent = "> Player picked scissors";
    playerSelection = "scissors"
    fuknPlay(playerSelection, computerPlay())
});

// COMPUTER PLAY UPON PLAYER SELECTION //
function computerPlay() {
    console.log("Executing computerPlay()")
    let options = ["rock", "paper", "scissors"];
    let compSelect = options[Math.floor(Math.random() * options.length)]
    compMsg.textContent = `> Computer picked ${compSelect}`;
    return compSelect;
};

// GAME LOGIC - WHO WINS AND SCORE UPDATE //
function fuknPlay(a, b) {
    console.log("Executing fuknPlay()")
    if(a == b) {
        console.log("fuknPlay() -> if a == b")
        resultMsg.textContent = "> Draw";
        drawScore += 1;
        noWins.textContent = `Draws: ${drawScore}`
    } else if (a == "rock") {
        if(b == "paper") {
            resultMsg.textContent = "> Computer wins.";
            compScore += 1;
            compWins.textContent = `Comp score: ${compScore}`;
        } else {
            resultMsg.textContent = "> Player wins";
            playerScore += 1;
            playerWins.textContent =`Player score: ${playerScore}`;
        }
    } else if(a == "paper") {
        if(b == "scissors") {
            resultMsg.textContent = "> Computer wins.";
            compScore += 1
            compWins.textContent = `Comp score: ${compScore}`
        } else {
            resultMsg.textContent = "> Player wins";
            playerScore += 1
            playerWins.textContent =`Player score: ${playerScore}`;
        }
    } else if(a == "scissors") {
        if(b == "rock") {
            resultMsg.textContent = "> Computer wins.";
            compScore += 1
            compWins.textContent = `Comp score: ${compScore}`
        } else {
            resultMsg.textContent = "> Player wins";
            playerScore += 1
            playerWins.textContent =`Player score: ${playerScore}`;
        }
    } else {
        console.log("....wtf did you input?");
    }
    if (playerScore >= 5) {
        alert("Player wins!");
        playerScore = 0;
        compScore = 0;
        drawScore = 0;
        playerWins.textContent =`Player score: ${playerScore}`;
        compWins.textContent = `Comp score: ${compScore}`;
        noWins.textContent = `Draws: ${drawScore}`
    }
    if (compScore >= 5) {
        alert("Computer wins!");
        playerScore = 0;
        compScore = 0;
        drawScore = 0;
        playerWins.textContent =`Player score: ${playerScore}`;
        compWins.textContent = `Comp score: ${compScore}`;
        noWins.textContent = `Draws: ${drawScore}`
    }
}