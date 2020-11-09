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

  setupGameOnDOM();
}

function startFirstGame() {
  startGame();
}

function setupGameOnDOM() {
  game.setupGame();
  displayMsg();
}

function selectSpace(event) {
  placePiece(event.target.id);
}

function placePiece(id) {
  if (event.target.id && event.target.id === id) {
    var result = game.fillSquare(id);
    handlePlacePieceEffects(event);
  }

  if (game.winningPlayer || game.result === 'This game is a draw!') {
    endEverything();
    emptyEverything();
  }
}

function handlePlacePieceEffects(event) {
  displayPieces(event);
  displayMsg(game.result);
}

function displayPieces(event) {
  var gameBoard = game.gameBoard;
  var boardSlot = event.target.id;
  populateSpace(boardSlot, gameBoard[event.target.id]);
}

function displayMsg(result) {
  var msg = document.querySelector('.win-msg');
  if (result) {
    msg.innerText = result;
  } else {
    msg.innerText = `It's Player ${game.turnPlayer.playerNumber}'s turn!`
  }
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
}

function emptyEverything() {
  window.setTimeout(clearAll, 1000)
}

function clearAll() {
  clearStuff();
  setupGameOnDOM();
  // other things to remove
}

function clearStuff() {
  for (var key in game.gameBoard) {
    var slot = document.querySelector(`#${key}`);
      slot.innerHTML = '';
  }
}
