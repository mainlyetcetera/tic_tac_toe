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
    displayPieces(event);
    console.log(game.gameBoard);
  }

  if (game.winningPlayer) {
    endEverything();
    emptyEverything();
  }
}

function displayPieces(event) {
  // this displays the pieces in the spaces
  // wherease placePiece uses the data model to fill the spot in the data model
  // board.innerHTML = '';
  var gameBoard = game.gameBoard;
  var boardSlot = event.target.id; // key
  // for (var boardSlot in gameBoard) {
  populateSpace(boardSlot, gameBoard[event.target.id]); // < value
  // }
}

function populateSpace(boardSlot, piece) {
  var slot = document.querySelector(`#${boardSlot}`);
  slot.innerHTML = `
    <img src=${piece}>
  `;
}

function endEverything() {
  var newGame = game.endGame();
  game = newGame;
  console.log(game);
  // call timeout with clear
}

function emptyEverything() {
  window.setTimeout(clearAll, 1000)
}

function clearAll() {
  clearStuff();
  // other things to remove
}

function clearStuff() {
  for (var key in game.gameBoard) {
    var slot = document.querySelector(`#${key}`);
      slot.innerHTML = '';
  }
}
