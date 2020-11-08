var game;
var board = document.querySelector('.game-board');

window.onload = setGame;
board.addEventListener('click', stuff);

function startGame() {
  var newGame = new Game();
  return newGame;
}

function setGame() {
  game = startGame();
}

function stuff(event) {
  displayID(event.target.id);
}

function displayID(id) {
  if (event.target.id && event.target.id === id) {
    console.log(event.target.id);
  }
}
