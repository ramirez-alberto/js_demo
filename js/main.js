const gameOptions = ['ROCK', 'PAPER', 'SCISSORS'];
/* 
function game() {
    let playerScore = 0, computerScore = 0, playerWin;


    for (let i = 1; i < 6; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Choose ROCK,PAPER or SCISSORS:", '').toUpperCase();
        if (gameOptions.indexOf(playerSelection) > -1) {
            playerWin = playRound(playerSelection, computerSelection);

            if (playerWin === 1) {
                playerScore++;
                console.log(`Round ${i}: You WIN! ${playerSelection} beats ${computerSelection}`);
            } else {
                computerScore++;
                console.log(`Round ${i}: You Lose! Player: ${playerSelection} Computer: ${computerSelection}`);
            }

        } else {
            console.log(`Round ${i}: Try again, ${playerSelection} is not a valid option.`);
        }
    }
    console.log(`Final Score: \n Player:${playerScore} \n Computer: ${computerScore}`);
}
 */

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