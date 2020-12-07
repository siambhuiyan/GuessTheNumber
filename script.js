'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//printing message for user depend on their guess.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //get the user guess value.
  const guess = Number(document.querySelector('.guess').value);
  //check the guess and print value based on the result.
  if (!guess) {
    //when there is no number.
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    //showing the secret number.(when user win the match.)
    document.querySelector('.number').textContent = secretNumber;
    //changing the background color when user guess it correctly.
    document.querySelector('body').style.backgroundColor = '#60b347';
    //changing the width of the secret number board.
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      //If user able to score higher than the previous then we will store it in highscore.
      highScore = score;
      //saving and storing the high score in screen.
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong.
  else if (guess !== secretNumber) {
    if (score > 1) {
      //if user guess it higher than the secret number.
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//now whenver player press the again button game will reset.
document.querySelector('.again').addEventListener('click', function () {
  score = 20; //reseting the score.
  secretNumber = Math.trunc(Math.random() * 20) + 1; //generating new random number.
  //calling the displayMessage to reset the message into Start guessin message.

  displayMessage('Start Guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //reset the backgroun back to the first.
  document.querySelector('body').style.backgroundColor = '#222';
  //changing the width of the secret number back to it was.
  document.querySelector('.number').style.width = '15rem';
});
