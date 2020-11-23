const board = document.querySelector('.game-board');
let game;

const startGame = players => {
  !players ? game = new Game() : game = new Game(players);
  setupGameOnDOM();
}

const startAllGames = () => startGame();

const setupGameOnDOM = () => {
  game.setupGame();
  displayMsg();
  displayWinCounts();
  displayPlayerIcons();
}

const selectSpace = event => placePiece(event.target.id, event);

const placePiece = (id, event) => {
  event.target.id && event.target.id === id ? (
    game.fillSquare(id),
    handlePlacePieceEffects(event)
  ) : event;

  game.winningPlayer || game.result === 'This game is a draw!' ? (
    resetGame(),
    resetWithTimer()
  ) : event;
}

const handlePlacePieceEffects = event => {
  displayPieces(event);
  displayMsg(game.result);
  disableFilledSpace(event);
}

function displayPieces(event) {
  var gameBoard = game.gameBoard;
  var boardSlot = event.target.id;
  populateSpace(boardSlot, gameBoard[boardSlot]);
}

function displayMsg(result) {
  var msg = document.querySelector('.win-msg');
  if (result) {
    msg.innerText = result;
  } else {
    msg.innerText = `It's Player ${game.turnPlayer.playerNumber}'s turn!`;
  }
}

function disableFilledSpace(event) {
  event.target.className = `${event.target.className} filled`;
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
  window.setTimeout(clearAll, 2500);
}

function clearAll() {
  clearSpaces();
  setupGameOnDOM();
}

function clearSpaces() {
  for (var boardSlot in game.gameBoard) {
    var slot = document.querySelector(`#${boardSlot}`);
      slot.innerHTML = '';
  }

  resetSpaces('cardinal');
  resetSpaces('ordinal');
}

function resetSpaces(className) {
  var filledSpaces = document.querySelectorAll(`.${className}`);
  for (var i = 0; i < filledSpaces.length; i++) {
    filledSpaces[i].className = className;
  }
}

window.onload = startAllGames;
board.addEventListener('click', selectSpace);