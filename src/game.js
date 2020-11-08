class Game {
  constructor(players) {
    this.id = Date.now();
    this.gameBoard = {
      's1' : '',
      's2' : '',
      's3' : '',
      's4' : '',
      's5' : '',
      's6' : '',
      's7' : '',
      's8' : '',
      's9' : ''
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
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].turn) {
        this.turnPlayer = this.players[i];
        this.nonTurnPlayer = this.players[i + 1] || this.players[i - 1];
      }
    }
  }

  checkForGameEnd() {
    this.checkForDraw();
    this.checkForVerticalWin();
    this.checkForHorizontalWin();
    this.checkForDiagonalWin();
    if (this.result) {
      // this.timeOut();
      return this.endGame();
    }
  }

  timeOut() {
    var self = this;
    console.log('timeout running');
    window.setTimeout(self.endGame, 1000);
  }

  checkForVerticalWin() {
    var board = this.gameBoard;
    if (board.s1 !== '' && board.s1 === board.s4 && board.s1 === board.s7) {
      console.log("vert");
      this.decideWinner();
    } else if (board.s2 !== '' && board.s2 === board.s5 && board.s2 === board.s8) {
      console.log("vert");
      this.decideWinner();
    } else if (board.s3 !== '' && board.s3 === board.s6 && board.s3 === board.s9) {
      console.log("vert");
      this.decideWinner();
    }
  }

  checkForHorizontalWin() {
    var board = this.gameBoard;
    if (board.s1 !== '' && board.s1 === board.s2 && board.s1 === board.s3) {
      console.log("horiz");
      this.decideWinner();
    } else if (board.s4 !== '' && board.s4 === board.s5 && board.s4 === board.s6) {
      console.log("horiz");
      this.decideWinner();
    } else if (board.s7 !== '' && board.s7 === board.s8 && board.s7 === board.s9) {
      console.log("horiz");
      this.decideWinner();
    }
  }

  checkForDiagonalWin() {
    var board = this.gameBoard;
    if (board.s1 !== '' && board.s1 === board.s5 && board.s1 === board.s9) {
      console.log("diagonal");
      this.decideWinner();
    } else if (board.s3 !== '' && board.s3 === board.s5 && board.s3 === board.s7) {
      console.log("diagonal");
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
    if (this.checkForGameEnd()) {
      return this.checkForGameEnd();
    }

    this.alternateTurns();
  }

  saveWinningGameBoard(player) {
    player.wins.push(this.gameBoard);
    player.winCount++;
  }

  startFirstTurn() {
    if (this.players[0].turn === false && this.players[1].turn === false) {
      this.players[0].turn = true;
    }

    this.assignTurnPlayer();
  }

  endGame() {
    // make sure no more tokens can be added to the board
    // tell players to save current states to local storage?
    // players (with new saved totals and boards) needs to be used to create a new instance of Game on timeout
    var newGame = new Game(this.players);
    return newGame;
  }

  // returnIfDefined(function) {
  //   if (function) {
  //     return function;
  //   }
  // }

}
