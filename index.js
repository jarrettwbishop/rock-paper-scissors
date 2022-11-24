let compScore = 0;
let playerScore = 0;
let results = document.querySelector("#results");

const compScoreEl = document.querySelector('#comp-score');
const playerScoreEl = document.querySelector('#player-score');
const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const btnNewGame = document.querySelector('#new-game');

compScoreEl.textContent = "Computer Score: " + compScore
playerScoreEl.textContent = "Player Score: " + playerScore

btnRock.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
})
btnPaper.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
})
btnScissors.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice());
})
btnNewGame.addEventListener('click', () => {
    newGame();
} )

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    return num === 0 ? "Rock" : num === 1 ? "Paper" : "Scissors"
}

function disableBtn() {
    btnRock.disabled = true
    btnPaper.disabled = true
    btnScissors.disabled = true
}

function enableBtn() {
    btnRock.disabled = false
    btnPaper.disabled = false
    btnScissors.disabled = false
}

function updateScore() {
    compScoreEl.textContent = "Computer Score: " + compScore
    playerScoreEl.textContent = "Player Score: " + playerScore

    if (playerScore === 5) {
        results.textContent = "Congratulations, you won the game!"
        disableBtn();
        
    }
    if (compScore === 5) {
        results.textContent = "You lost the game! Better luck next time."
        disableBtn();
    }
    if (playerScore === 0 && compScore === 0) {
        results.textContent = "Choose your weapon!"
        enableBtn();
    }
}

function newGame() {
    playerScore = 0;
    compScore = 0;
    updateScore();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        switch(computerSelection) {
            case "Rock":
                results.textContent = "It's a tie!";
                break;
            case "Paper":
                results.textContent = "You lose! Paper beats rock.";
                compScore++;
                updateScore();
                break;

            case "Scissors":
                results.textContent = "You win! Rock beats scissors.";
                playerScore++;
                updateScore();
                break;

        }   
    }

    if (playerSelection.toLowerCase() === "paper") {
        switch(computerSelection) {
            case "Rock":
                results.textContent = "You win! Paper beats rock.";
                playerScore++;
                updateScore();
                break;

            case "Paper":
                results.textContent = "It's a tie!";
                break;

            case "Scissors":
                results.textContent = "You lose! Scissors beats paper.";
                compScore++;
                updateScore();
                break;

        }   
    }

    if (playerSelection.toLowerCase() === "scissors") {
        switch(computerSelection) {
            case "Rock":
                results.textContent = "You lose! Rock beats scissors.";
                compScore++;
                updateScore();
                break;

            case "Paper":
                results.textContent = "You win! Scissors beats paper.";
                playerScore++;
                updateScore();
                break;

            case "Scissors":
                results.textContent = "It's a tie!";
                break;

        }   
    }
}
