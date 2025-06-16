console.log("Rock, Paper, Scissors Game");
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice() {
    const choice = prompt("Enter Rock, Paper, or Scissors: ");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
}
function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer wins the game.");
    } else {
        console.log("It's a tie overall!");
    }
}
playGame();