class Game {
  constructor(players) {
    this.id = Date.now();
    this.gameBoard = {
      s1 : '',
      s2 : '',
      s3 : '',
      s4 : '',
      s5 : '',
      s6 : '',
      s7 : '',
      s8 : '',
      s9 : ''
    };

    this.players = players || [];
    this.tokens = ['./assets/Dragon_Red_Eye_Tattoo.svg', './assets/Gat3.svg'];
    this.turnPlayer;
    this.nonTurnPlayer;
    this.result;
    this.winningPlayer;    
  }

  generatePlayers() {
    const player1 = new Player(1, this.tokens[0]);
    const player2 = new Player(2, this.tokens[1]);
    player2.id += 1;
    this.addPlayers(player1, player2);
  }

  addPlayers(player1, player2) {
    this.players.push(player1, player2);
  }

  setupGame() {    
    this.players.length === 0 ? this.generatePlayers() : this;
    this.retrieveWins();
    this.startFirstTurn();
  }

  retrieveWins() {
    this.players.length > 0 ? this.players.forEach(player => {
      player.retrieveWinsFromStorage();
    }) : this.players;
  }

  alternateTurns() {
    this.adjustTurnData();
    this.assignTurnPlayer();
  }

  adjustTurnData() {
    this.turnPlayer.takeTurn();
    this.nonTurnPlayer.takeTurn();
  }

  assignTurnPlayer() {
    this.players.forEach(player => player.turn ? this.turnPlayer = player : this.nonTurnPlayer = player);
  }

  checkForGameEnd() {
    this.checkForDraw();
    this.checkForVerticalWin();
    this.checkForHorizontalWin();
    this.checkForDiagonalWin();
  }

  checkForVerticalWin() {
    const board = this.gameBoard;
    board.s1 !== '' && board.s1 === board.s4 && board.s1 === board.s7 ? this.decideWinner()
      : board.s2 !== '' && board.s2 === board.s5 && board.s2 === board.s8 ? this.decideWinner()
      : board.s3 !== '' && board.s3 === board.s6 && board.s3 === board.s9 ? this.decideWinner()
      : board;
  }

  checkForHorizontalWin() {
    const board = this.gameBoard;
    board.s1 !== '' && board.s1 === board.s2 && board.s1 === board.s3 ? this.decideWinner()
      : board.s4 !== '' && board.s4 === board.s5 & board.s4 === board.s6 ? this.decideWinner()
      : board.s7 !== '' && board.s7 === board.s8 && board.s7 === board.s9 ? this.decideWinner()
      : board;
  }

  checkForDiagonalWin() {
    const board = this.gameBoard;
    board.s1 !== '' && board.s1 === board.s5 && board.s1 === board.s9 ? this.decideWinner()
      : board.s3 !== '' && board.s3 === board.s5 && board.s3 === board.s7 ? this.decideWinner()
      : board;
  }

  checkForDraw() {
    !Object.values(this.gameBoard).includes('') && !this.winningPlayer ? this.result = 'This game is a draw!' : this.result;
  }

  decideWinner() {
    this.winningPlayer = this.turnPlayer;
    this.result = `Player ${this.winningPlayer.playerNumber} has won!`;
    this.saveWinningGameBoard(this.winningPlayer);
  }

  fillSquare(boardSlot) {    
    this.gameBoard[boardSlot] === '' ? (
      this.gameBoard[boardSlot] = this.turnPlayer.token,
      this.checkForGameEnd(),
      this.alternateTurns()
    ) : boardSlot;
  }

  saveWinningGameBoard(player) {
    player.wins.push(this.gameBoard);
    player.winCount++;
    player.saveWinsToStorage();
  }

  startFirstTurn() {
    if (this.players[0].turn === false && this.players[1].turn === false) {
      this.players[0].turn = true;
    }

    this.assignTurnPlayer();
  }

  endGame() {
    const players = this.players;
    const newGame = new Game(players);
    return newGame;
  }
  
}
