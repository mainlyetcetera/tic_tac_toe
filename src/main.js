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

const displayPieces = event => {
  const board = game.gameBoard;
  const slot = event.target.id;
  populateSpace(slot, board[slot]); 
}

const displayMsg = result => {
  const msg = document.querySelector('.win-msg');
  const num = game.turnPlayer.playerNumber;
  result ? msg.innerText = result : msg.innerText = `It's Player ${num}'s turn!`;
}

const disableFilledSpace = event => {
  event.target.className = `${event.target.className} filled`;
}

const displayWinCounts = () => {
  const players = game.players;
  const player1Wins = document.querySelector('.player-1-wins');
  const player2Wins = document.querySelector('.player-2-wins');
  player1Wins.innerText = `Wins: ${players[0].winCount}`;
  player2Wins.innerText = `Wins: ${players[1].winCount}`;
}

const displayPlayerIcons = () => {
  const player1Icon = document.querySelector('.player-1-icon');
  const player2Icon = document.querySelector('.player-2-icon');
  player1Icon.src = game.tokens[0];
  player2Icon.src = game.tokens[1];
}

const populateSpace = (boardSlot, piece) => {
  const slot = document.querySelector(`#${boardSlot}`);
  slot.innerHTML = `
    <img src=${piece}>
    `;
}

const resetGame = () => {
  const newGame = game.endGame();
  game = newGame;
}

const resetWithTimer = () => {
  window.setTimeout(clearAll, 2500);
}

const clearAll = () => {
  clearSpaces();
  setupGameOnDOM();
}

const clearSpaces = () => {
  const spaces = Object.keys(game.gameBoard);
  spaces.forEach(space => {
    let slot = document.querySelector(`#${space}`);
    slot.innerHTML = '';
  });

  resetSpaces('cardinal');
  resetSpaces('ordinal');
}

const resetSpaces = className => {
  const filledSpaces = document.querySelectorAll(`.${className}`);
  filledSpaces.forEach(space => space.className = className);
}

window.onload = startAllGames;
board.addEventListener('click', selectSpace);