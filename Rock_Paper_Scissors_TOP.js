console.log("Rock, Paper, Scissors Game");
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. For now, just assume the user will always enter a valid choice.
// Test what your function returns by using console.log.
function getHumanChoice() {
    const choice = prompt("Enter Rock, Paper, or Scissors: ");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}
console.log(getHumanChoice());