let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

let savedScore = JSON.parse(localStorage.getItem('score'));
if(savedScore){
    score = savedScore;
}
updateScore();

function pickComputerMove() {
    let value = Math.random();
    let computerMove;
    if (value < 1/3) {
        computerMove = 'rock';
    } else if (value < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    return computerMove;
}

function myMove(playerMove) {
    let computerMove = pickComputerMove();
    let resultElement = document.querySelector('.js-result');
    
    if (playerMove === computerMove) {
        resultElement.innerHTML = `Tie.`;
        score.ties++;
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        resultElement.innerHTML = `You Win.`;
        score.wins++;
    } else {
        resultElement.innerHTML = `You Lose.`;
        score.losses++;
    }
    let movesElement = document.querySelector('.js-move-choosen');
    movesElement.innerHTML =`You Chosse: <img src = "images/${playerMove}-emoji.png" class ="images-icon"> computer chosse:
    <img src = "images/${computerMove}-emoji.png" class ="images-icon">`;
    updateScore();
    localStorage.setItem('score',JSON.stringify(score));
   // resultElement.innerHTML += `<br>Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function updateScore(){
    document.querySelector('.js-score').innerHTML = 
    `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}`;
}

function resetScore() {
    updateScore();
    localStorage.removeItem('score');
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector('.js-result').innerHTML = '';
}