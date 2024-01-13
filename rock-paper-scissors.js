const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

const buttonsContainer = document.querySelector('#buttonsContainer');
const result = document.querySelector('#result');
const scores = document.querySelector('#scores');
const computerChoiceDisplayElem = document.querySelector('#computerChoiceDisplay');
const buttons = document.querySelectorAll('#buttonsContainer button');


buttonsContainer.addEventListener('click', (e) => {
    const targetButtonId = e.target.id;

    switch (targetButtonId) {
        case 'rockButton':
            playRound(rockButton.textContent);
            break;
        case 'paperButton':
            playRound(paperButton.textContent);
            break;
        case 'scissorsButton':
            playRound(scissorsButton.textContent);
            break;
        
    }
});

let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let computerSelection;

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]; 
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function isAWin() {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    }
    return false;
}

function toggleSelectionButtons() {
    for (const button of buttons) {
        if (button.disabled) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
}
function createPlayAgainButton() {
    const playAgainButton = document.createElement('button');
    playAgainButton.id = 'playAgain';
    playAgainButton.textContent = "Play Again";
    result.after(playAgainButton);
    toggleSelectionButtons();

    playAgainButton.addEventListener('click', handleClickEvent);
}

function handleClickEvent(e){
    result.textContent = '';
    scores.textContent = '';
    computerChoiceDisplayElem.textContent = '';
    toggleSelectionButtons();
    this.remove();
}

function announceWin() {
    if (playerScore === 5) {
        result.textContent = "You won!";
    }
    else {
        result.textContent = `You Lose. Your total score is ${playerScore}/5.`;
    }
    resetScores();
    createPlayAgainButton();
}

function displayScore() {
    scores.textContent = `Your score: ${playerScore}, Computer Score: ${computerScore}`;
    if (isAWin()) {
        return announceWin();
    }
}

function displayComputerSelection(computerSelection) {
    computerChoiceDisplayElem.textContent = `Computer's choice was ${computerSelection}.`;
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return playRound(playerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore += 1;
        displayComputerSelection(computerSelection);
        return displayScore();
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore += 1;
        displayComputerSelection(computerSelection);
        return displayScore();
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        displayComputerSelection(computerSelection);
        return displayScore();
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore += 1;
        displayComputerSelection(computerSelection);
        return displayScore();
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore += 1;
        displayComputerSelection(computerSelection);
        return displayScore();
    } else {
        playerScore += 1;
        displayComputerSelection(computerSelection);
        return displayScore();
    }
}

function checkWhetherValid(playerSelection){
    return playerSelection ? true : false;
}

function handleInvalidChoice() {
    console.log("Invalid Choice.");
    totalRounds += 1;
}