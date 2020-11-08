var game;
var board = document.querySelector('.game-board');

window.onload = startGame;
board.addEventListener('click', stuff);

function startGame() {
  game = new Game();
}

function stuff(event) {
  displayID(event.target.id);
}

function displayID(id) {
  if (event.target.id && event.target.id === id) {
    console.log(event.target.id);
  }
}
