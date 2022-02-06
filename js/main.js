

function game(playerSelection, roundNumber, playerScore) {
    const gameOptions = ['ROCK', 'PAPER', 'SCISSORS'];
    let  playerRound;

    const computerSelection = computerPlay();
    playerSelection = playerSelection.toUpperCase();

    const checkPlayerSelectionExists = gameOptions.indexOf(playerSelection) > -1;
    if (checkPlayerSelectionExists) {
        playerRound = playRound(playerSelection, computerSelection);

        if (playerRound === 1) {
            
            showResults(`Round ${roundNumber}: You WIN! ${playerSelection} beats ${computerSelection}`);
            return 1;
        } else {
            showResults(`Round ${roundNumber}: You Lose! Player: ${playerSelection} Computer: ${computerSelection}`);
            return 0;
        }

    } else {
        showResults(`Round ${roundNumber}: Try again, ${playerSelection} is not a valid option.`);
    }


    function computerPlay() {

        const chooseRandomOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];
        return chooseRandomOption;
    }

    function playRound(playerSelection, computerSelection) {
        let winner = 0;
        //Rock beats Scissors
        if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
            winner++;
        }
        //Paper beats Rock
        else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
            winner++;
        }
        //Scissors beat Paper
        else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
            winner++;
        }

        return winner;
    }


}



let roundNumber = 1, playerScore = 0;
function showResults(result) {
    const resulltBoard = document.querySelector('#resultBoard');
    resulltBoard.textContent = result;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {       
        playerScore += game(e.target.id, roundNumber, playerScore);
        console.log(playerScore);
        if (roundNumber === 5) {
            showResults(`Final Score: \n Player:${playerScore} \n Computer: ${roundNumber - playerScore}`);
            roundNumber = 1;
            playerScore = 0;
        }else{
        
        roundNumber++;}
       

    });
});