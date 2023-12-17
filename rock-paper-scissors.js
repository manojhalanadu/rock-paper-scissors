let choices = ["Rock", "Paper", "Scissors"];






function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]; 
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        computerSelection = getComputerChoice();
    }
}