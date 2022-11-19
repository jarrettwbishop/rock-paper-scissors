function getComputerChoice() {
    let num = Math.floor(math.random(3))
    return num === 0 ? "Rock" : num === 1 ? "Paper" : "Scissors"
}

console.log(getComputerChoice);