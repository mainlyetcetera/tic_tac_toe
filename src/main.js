var game;
var board = document.querySelector('.game-board');

window.onload = startAllGames;
board.addEventListener('click', selectSpace);

function startGame(players) {
  if (!players) {
    game = new Game();
  } else {
    game = new Game(players);
  }

  setupGameOnDOM();
}

function startAllGames() {
  startGame();
}

function setupGameOnDOM() {
  game.setupGame();
  displayMsg();
  displayWinCounts();
  displayPlayerIcons();
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
    resetGame();
    resetWithTimer();
  }
}

function handlePlacePieceEffects(event) {
  displayPieces(event);
  displayMsg(game.result);
  disableFilledSpace(event);
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

function disableFilledSpace(event) {
  event.target.className = `${event.target.className}-filled`;
}

function displayWinCounts() {
  var players = game.players;
  var player1Wins = document.querySelector('.player-1-wins');
  var player2Wins = document.querySelector('.player-2-wins');
  player1Wins.innerText = `Wins: ${players[0].winCount}`;
  player2Wins.innerText = `Wins: ${players[1].winCount}`;
}

function displayPlayerIcons() {
  var player1Icon = document.querySelector('.player-1-icon');
  var player2Icon = document.querySelector('.player-2-icon');
  player1Icon.src = game.tokens[0];
  player2Icon.src = game.tokens[1];
}

function populateSpace(boardSlot, piece) {
  var slot = document.querySelector(`#${boardSlot}`);
  slot.innerHTML = `
    <img src=${piece}>
  `;
}

function resetGame() {
  var newGame = game.endGame();
  game = newGame;
}

function resetWithTimer() {
  window.setTimeout(clearAll, 4000)
}

function clearAll() {
  clearSpaces();
  setupGameOnDOM();
  // other things to remove
}

function clearSpaces() {
  for (var key in game.gameBoard) {
    var slot = document.querySelector(`#${key}`);
      slot.innerHTML = '';
  }

  resetSpaces();
}

function resetSpaces() {
  var filledCardinalSpaces = document.querySelectorAll('.cardinal-filled');
  var filledOrdinalSpaces = document.querySelectorAll('.ordinal-filled');
  for (var i = 0; i < filledCardinalSpaces.length; i++) {
    filledCardinalSpaces[i].className = 'cardinal';
  }

  for (var j = 0; j < filledOrdinalSpaces.length; j++) {
    filledOrdinalSpaces[j].className = 'ordinal';
  }
}
