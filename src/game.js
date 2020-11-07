class Game {
  constructor() {
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

    this.players = [];
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
    this.generatePlayers();
    this.players[0].turn = true;
    this.assignTurnPlayer();
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
    this.result = `Player ${this.winningPlayer.playerNumber} has won!}`;    
    this.saveWinningGameBoard(this.winningPlayer);
    console.log(this.winningPlayer, this.result);
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

}

/* win conditions
    1 2 3
    4 5 6
    7 8 9

    across:
    123
    456
    789

    vertically:
    147
    258
    369

    diagonally:
    159
    357

    game board class?
    the actual boards seen as wins
*/
