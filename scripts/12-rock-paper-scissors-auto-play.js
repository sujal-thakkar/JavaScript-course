const resultPara = document.body.querySelector('.js-result');
const movesPara = document.body.querySelector('.js-moves');
const scorePara = document.body.querySelector('.js-score');
const resetPara = document.querySelector('.js-reset-para');
const autoPlay = document.querySelector('.js-autoplay');

const moves = ['rock', 'paper', 'scissors'];

let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    loses: 0,
    ties: 0
};

scorePara.innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;

function pickMove(moves) {
    let randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function result(myMove, computerMove) {
    if (
        myMove === 'rock' && computerMove === 'rock' ||
        myMove === 'paper' && computerMove === 'paper' ||
        myMove === 'scissors' && computerMove === 'scissors'
    ) {
        score.ties++;
        localStorage.setItem('score', JSON.stringify(score));
        return 'Tie!';
    }
    else if (
        myMove === 'rock' && computerMove === 'scissors' ||
        myMove === 'paper' && computerMove === 'rock' ||
        myMove === 'scissors' && computerMove === 'paper'
    ) {
        score.wins++;
        localStorage.setItem('score', JSON.stringify(score));
        return 'You win!';
    }
    else {
        score.loses++;
        localStorage.setItem('score', JSON.stringify(score));
        return 'You Lose mf !';
    }
}

function printScore(myMove, computerMove, score) {
    resultPara.innerHTML = `${result(myMove, computerMove)}`;
    movesPara.innerHTML = `
            You
            <img src="images/${myMove}.png" class="move-icon" alt="">
            <img src="images/${computerMove}.png" class="move-icon" alt="">
            Computer`;
    scorePara.innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function displayResetPara() {
    resetPara.style.display = 'block';
    setTimeout(function() {
        resetPara.style.display = 'none';
    }, 2000);
}
function resetScore(score) {
    displayResetPara();
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    resultPara.innerHTML = '';
    movesPara.innerHTML = '';
    scorePara.innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

let intervalId;
function autoplay() {
    if(autoPlay.innerText === 'Auto Play') {
        intervalId = setInterval(function() {
            const myMove = pickMove(moves);
            const computerMove = pickMove(moves);
            printScore(myMove, computerMove, score);
        }, 1000)
        autoPlay.innerText = 'Stop Play';
    }
    else {
        clearInterval(intervalId);
        autoPlay.innerText = 'Auto Play';
    }
}

function rock() {
    let computerMove = pickMove(moves);
    printScore('rock', computerMove, score);
}

function paper() {
    let computerMove = pickMove(moves);
    printScore('paper', computerMove, score);
}

function scissors() {
    let computerMove = pickMove(moves);
    printScore('scissors', computerMove, score);
}