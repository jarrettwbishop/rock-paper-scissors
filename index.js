function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    return num === 0 ? "Rock" : num === 1 ? "Paper" : "Scissors"
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        switch(computerSelection) {
            case "Rock":
                console.log("It's a tie!");
                return "tie"
            case "Paper":
                console.log("You lose! Paper beats rock.");
                return "lose"

            case "Scissors":
                console.log("You win! Rock beats scissors.");
                return "win"

        }   
    }

    if (playerSelection.toLowerCase() === "paper") {
        switch(computerSelection) {
            case "Rock":
                console.log("You win! Paper beats rock.");
                return "win"

            case "Paper":
                console.log("It's a tie!");
                return "tie"

            case "Scissors":
                console.log("You lose! Scissors beats paper.");
                return "lose"

        }   
    }

    if (playerSelection.toLowerCase() === "scissors") {
        switch(computerSelection) {
            case "Rock":
                console.log("You lose! Rock beats scissors.");
                return "lose"

            case "Paper":
                console.log("You win! Scissors beats paper.");
                return "win"

            case "Scissors":
                console.log("It's a tie!");
                return "tie"

        }   
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, Paper, or Scissors?");
        let result = playRound(playerChoice,getComputerChoice())
        result === "lose" ? computerScore++ : result === "win" ? playerScore++ : playerScore = playerScore
    }
    return playerScore > computerScore ? "You won best of 5!" : playerScore < computerScore ? "You lost best of 5!" : "You tied best of 5!"
}