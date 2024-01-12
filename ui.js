const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

const buttonsContainer = document.querySelector('#buttonsContainer');
const result = document.querySelector('#result');

buttonsContainer.addEventListener('click', (e) => {
    const targetButtonId = e.target.id;

    switch (targetButtonId) {
        case 'rockButton':
            playRound
    }

})