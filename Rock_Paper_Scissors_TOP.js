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
    // console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
    RoundText.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}. Scores - You: ${humanScore}, Computer: ${computerScore}`;
}
// function playGame() {
//     humanScore = 0;
//     computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
//     if (humanScore > computerScore) {
//         console.log("Congratulations! You win the game!");
//     } else if (computerScore > humanScore) {
//         console.log("Sorry! The computer wins the game.");
//     } else {
//         console.log("It's a tie overall!");
//     }
// }
// playGame();



// In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
function createButton(id, text) {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = text;
    return button;
}
const rockButton = createButton("rock", "Rock");
const paperButton = createButton("paper", "Paper");
const scissorsButton = createButton("scissors", "Scissors");
document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

const resultDiv = document.createElement("div");
resultDiv.id = "result";
document.body.appendChild(resultDiv);
const RoundText = document.createElement("p");
RoundText.id = "roundText";
resultDiv.appendChild(RoundText);

let humanScore = 0;
let computerScore = 0;

const buttonsListen = document.querySelectorAll("button");
buttonsListen.forEach(button =>
    button.addEventListener("click", () => {
        const humanSelection = button.textContent;
        const computerSelection = getComputerChoice();
        RoundText.textContent = `Hello`;
        playRound(humanSelection, computerSelection);
        if (humanScore === 5) {
            RoundText.textContent = "Congratulations! You win the game!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            RoundText.textContent = "Sorry! The computer wins the game.";
            humanScore = 0;
            computerScore = 0;
        }
    }));