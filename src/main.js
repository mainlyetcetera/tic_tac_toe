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
    console.log(game.gameBoard);
  }

  if (result) {
    var players = game.players;
    startGame(players);
  }
}
