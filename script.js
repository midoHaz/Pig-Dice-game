'use strict';
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const ImgDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentsc1 = document.querySelector('#current--0');
const currentsc2 = document.querySelector('#current--1');
score1.textContent = 0;
score2.textContent = 0;
const scores = [0, 0];
let currentScore = 0;
let totalScore = 0;
let activePlayer = 0;
let playing=true;
ImgDice.classList.add('hidden');
// Roll Button logic
btnRoll.addEventListener('click', function () {
    if(playing){
  const dice = Math.trunc(Math.random() * 6) + 1;

  ImgDice.classList.remove('hidden');
  ImgDice.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
}
});

// Hold button logic
btnHold.addEventListener('click', function () {
    if(playing){
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    playing=false;
    ImgDice.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
}
});

btnNew.addEventListener(
    'click',function(){
        ImgDice.classList.add('hidden');
        score1.textContent=0;
        score2.textContent=0;
        currentsc1.textContent=0;
        currentsc2.textContent=0;
        player1.classList.remove('player--winner');
        player2.classList.remove('player--winner');
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
        currentScore=0;
        scores=[0,0];
        activePlayer=0;
        playing=true;
    }
)
