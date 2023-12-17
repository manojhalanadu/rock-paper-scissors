let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let totalRounds = 5;




function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]; 
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore += 1;
        console.log(`Computer's choice was ${computerSelection}.`);
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore += 1;
        console.log(`Computer's choice was ${computerSelection}.`);
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        console.log(`Computer's choice was ${computerSelection}.`);
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore += 1;
        console.log(`Computer's choice was ${computerSelection}.`);
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore += 1;
        console.log(`Computer's choice was ${computerSelection}.`);
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    } else {
        playerScore += 1;
        console.log(`Computer's choice was ${computerSelection}.`);
        return `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    }
}

function checkWhetherValid(playerSelection){
    return playerSelection ? true : false;
}

function handleInvalidChoice() {
    console.log("Invalid Choice.");
    totalRounds += 1;
}

function game() {
    for (let i = 0; i < totalRounds; i++) {
        playerSelection = prompt("What is your choice?", "Rock");
        computerSelection = getComputerChoice();
        if (checkWhetherValid(playerSelection)) {
            playerSelection = playerSelection.toLowerCase();
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
            if (choices.includes(playerSelection)) {
                console.log(playRound(playerSelection, computerSelection));
            } else {
                handleInvalidChoice();
            }
        } else {
            handleInvalidChoice();
        }
    }
    
    if (playerScore > computerScore) {
        console.log(`You Won! Your total score is ${playerScore}/5.`);
    } else {
        console.log(`You Lose. Your total score is ${playerScore}/5.`);
    }
    resetScores();
    
}

