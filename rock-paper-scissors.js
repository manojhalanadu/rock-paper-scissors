let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;




function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]; 
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore += 1;
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore += 1;
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore += 1;
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore += 1;
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else {
        playerScore += 1;
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    }
}
function checkWhetherValid(playerSelection){
    return playerSelection ? true : false;
}
function game() {
    playerSelection = prompt("What is your choice?", "Rock");
    if (checkWhetherValid(playerSelection)) {
        computerSelection = getComputerChoice();
        playerSelection = playerSelection.toLowerCase();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        console.log(playRound(playerSelection, computerSelection));
    } else {
        console.log("Invalid Choice");
    }
    
}

