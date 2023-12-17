let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;





function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]; 
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {

    }
}