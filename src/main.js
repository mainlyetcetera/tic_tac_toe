var game;
var board = document.querySelector('.game-board');

window.onload = startFirstGame;
board.addEventListener('click', selectSpace);

function startGame(players) {
  if (!players) {
    game = new Game();
  } else {
    game = new Game(players);
  }

  game.setupGame();
}

function startFirstGame() {
  startGame();
}

function selectSpace(event) {
  placePiece(event.target.id);
}

function placePiece(id) {
  if (event.target.id && event.target.id === id) {
    var result = game.fillSquare(id);
    console.log(game.players);
  }

  if (result) {
    var players = game.players;
    startGame(players);
  }
}

function displayPieces() {
  // this displays the pieces in the spaces
  // wherease placePiece uses the data model to fill the spot in the data model
}
