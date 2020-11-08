class Game {
  constructor(players) {
    this.id = Date.now();
    this.gameBoard = {
      first : '',
      second : '',
      third : '',
      fourth : '',
      fifth : '',
      sixth : '',
      seventh : '',
      eighth : '',
      ninth : ''
    }    

    this.players = players || [];
    this.turnPlayer;
    this.nonTurnPlayer;
    this.result;
    this.winningPlayer;
    this.tokens = ['token1', 'token2']; // these I need to get from assets
  }

  generatePlayers() {
    var player1 = new Player(1, 'token1');
    var player2 = new Player(2, 'token2');
    player2.id += 1;
    this.addPlayers(player1, player2);
  }

  addPlayers(player1, player2) {
    this.players.push(player1, player2);
  }

  setupGame() {
    if (this.players.length === 0) {
      this.generatePlayers();
    }

    this.startFirstTurn();
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
    if (this.players[0].turn) {
      this.turnPlayer = this.players[0];
      this.nonTurnPlayer = this.players[1];
    } else {
      this.turnPlayer = this.players[1];
      this.nonTurnPlayer = this.players[0];
    }

    // iterate over players
    // whichever player's turn is set to true
      // assign as turn player
      // assign other as non-turn player
  }

  checkForGameEnd() {
    this.checkForDraw();
    this.checkForVerticalWin();
    this.checkForHorizontalWin();
    this.checkForDiagonalWin();
    if (this.result) {
      // this.timeOut();
      return this.startNewGame();
    }
  }

  timeOut() {
    var self = this;    
    console.log('timeout running');
    window.setTimeout(self.endGame, 1000);
  }

  checkForVerticalWin() {
    var board = this.gameBoard;
    if (board.first !== '' && board.first === board.fourth && board.first === board.seventh) {
      this.decideWinner();
    } else if (board.second !== '' && board.second === board.fifth && board.second === board.eighth) {
      this.decideWinner();
    } else if (board.third !== '' && board.third === board.sixth && board.third === board.ninth) {
      this.decideWinner();
    }
  }

  checkForHorizontalWin() {
    var board = this.gameBoard;
    if (board.first !== '' && board.first === board.second && board.first === board.third) {
      this.decideWinner();
    } else if (board.fourth !== '' && board.fourth === board.fifth && board.fourth === board.sixth) {
      this.decideWinner();
    } else if (board.seventh !== '' && board.seventh === board.eighth && board.seventh === board.ninth) {
      this.decideWinner();
    }
  }

  checkForDiagonalWin() {
    var board = this.gameBoard;
    if (board.first !== '' && board.first === board.fifth && board.first === board.ninth) {
      this.decideWinner();
    } else if (board.third !== '' && board.third === board.fifth && board.third === board.seventh) {
      this.decideWinner();
    }
  }

  checkForDraw() {    
    if (!Object.values(this.gameBoard).includes('') && !this.winningPlayer) {
      this.result = 'This game is a draw!'
      console.log(this.result);
    }
  }

  decideWinner() {
    this.winningPlayer = this.turnPlayer;
    this.result = `Player ${this.winningPlayer.playerNumber} has won!`;    
    this.saveWinningGameBoard(this.winningPlayer);
    console.log(this.result);
  }

  fillSquare(boardSlot) {
    this.gameBoard[boardSlot] = this.turnPlayer.token;
    this.checkForGameEnd();
    this.alternateTurns();
  }

  saveWinningGameBoard(player) {
    player.wins.push(this.gameBoard);
    player.winCount++;
  }

  startFirstTurn() {
    this.players[0].turn = true;
    this.assignTurnPlayer();
  }

  endGame() {
    // make sure no more tokens can be added to the board
    // tell players to save current states to local storage?
    // players (with new saved totals and boards) needs to be used to create a new instance of Game on timeout
    var newGame = new Game(this.players);
    return newGame;
  }

}
