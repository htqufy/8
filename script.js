const result = document.getElementById('result');
const playerNameContainer = document.getElementById('playerName');
const playerResult = document.getElementById('playerResult');
const playerScoreContainer = document.getElementById('playerScore');
const computerNameContainer = document.getElementById('computerName');
const computerResult = document.getElementById('computerResult');
const computerScoreContainer = document.getElementById('computerScore');
const generateNumbersBtn = document.getElementById('generateNumbers');

let playerName;
let player1Score = 0;
let player2Score = 0;
let gameRounds = 0;

getPlayerName();

generateNumbersBtn.onclick = generateNumbers;

function getPlayerName() {
  playerName = prompt('Enter your name');
  playerNameContainer.textContent = playerName || 'Player';
  computerNameContainer.textContent = 'Computer';
}

function generateNumbers() {
  let player1Number = Math.floor(Math.random() * 11);
  let player2Number = Math.floor(Math.random() * 11);
  if (player1Number > player2Number) {
    player1Score++;
  } else if (player1Number < player2Number) {
    player2Score++;
  }

  gameRounds++;

  playerResult.textContent = player1Number;
  computerResult.textContent = player2Number;
  playerScoreContainer.textContent = `Wins: ${player1Score}`;
  computerScoreContainer.textContent = `Wins: ${player2Score}`;
  if (player1Score === 3 || player2Score === 3) {
    if (player1Score > player2Score) {
      alert(`${playerName} wins!`);
    } else {
      alert(`Computer wins!`);
    }
  }
}
