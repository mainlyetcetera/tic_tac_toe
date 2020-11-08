var game;
var board = document.querySelector('.game-board');

window.onload = startGame;
board.addEventListener('click', selectSpace);

function startGame() {
  game = new Game();
  game.setupGame();
}

function selectSpace(event) {
  placePiece(event.target.id);
}

function placePiece(id) {
  if (event.target.id && event.target.id === id) {
    game.fillSquare(id);
  }
}

function displayPieces() {
  // this displays the pieces in the spaces
  // wherease placePiece uses the data model to fill the spot in the data model
}
