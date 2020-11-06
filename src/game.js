class Game {
  constructor() {
    this.id = Date.now();
    this.gameBoard = {
      1 : '',
      2 : '',
      3 : '',
      4 : '',
      5 : '',
      6 : '',
      7 : '',
      8 : '',
      9 : ''
    }

    var board = this.gameBoard;    
    this.players = [];
    this.turnPlayer = player1.turn || player2.turn;
    this.result;
    this.winningPlayer;
    this.tokens = [token1, token2]; // these I need to get from assets
  }

  generatePlayers() {
    var player1 = new Player(1, token1);
    var player2 = new Player(2, token2);
    this.addPlayers(player1, player2);
  }

  addPlayers(player1, player2) {
    this.players.push(player1, player2);
  }

  startGame() {
    this.generatePlayers();
    player1.turn = true;
  }

  alternateTurns(turnPlayer, nonTurnPlayer) {
    turnPlayer.turn = false;
    nonTurnPlayer.turn = true;
  }

  checkForGameEnd() {
    this.checkForDraw();
    this.checkForVerticalWin();
    this.checkForHorizontalWin();
    this.checkForDiagonalWin();    
  }

  checkForVerticalWin() {
    // check the numbers to be filled with the same token
    // if they are
      // set this.result = turnPlayer wins
    // var firstColumn = board.1 !== '' && board.1 === board.4 && board.1 === board.7;
    // var secondColumn = board.2 !== '' && board.2 === board.5 && board.2 === board.8;
    // var thirdColumn = board.3 !== '' && board.3 === board.6 && board.3 === board.9;
    
    if (board.1 !== '' && board.1 === board.4 && board.1 === board.7) {
      this.decideWinner(board.1);
    } else if (board.2 !== '' && board.2 === board.5 && board.2 === board.8) {
      this.decideWinner(board.2);
    } else if (board.3 !== '' && board.3 === board.6 && board.3 === board.9) {
      this.decideWinner(board.3);
    }
  }

  checkForHorizontalWin() {
    if (board.1 !== '' && board.1 === board.2 && board.1 === board.3) {
      this.decideWinner(board.1);
    } else if (board.4 !== '' && board.4 === board.5 && board.4 === board.6) {
      this.decideWinner(board.4);
    } else if (board.7 !== '' && board.7 === board.8 && board.7 === board.9) {
      this.decideWinner(board.7);
    }
  }

  checkForDiagonalWin() {    
    if (board.1 !== '' && board.1 === board.5 && board.1 === board.9) {
      this.decideWinner(board.1);
    } else if (board.3 !== '' && board.3 === board.5 && board.3 === board.7) {
      this.decideWinner(board.3);
    }
  }

  checkForDraw() {
    // if all 9 spots are filled AND neither player has won
    // set this.result = draw
  }

  checkColumn(boardSlot) {
    // make column check
    // return column 
  }

  decideWinner(boardSlot) {
    // boardSlot is the value of the selected slot, which will be one of the tokens
    if (boardSlot === player1.token) {
      this.winningPlayer = player1;
      this.result = 'Player 1 Wins!';
    } else {
      this.winningPlayer = player2;
      this.result = 'Player 2 Wins!';
    }
  }

  fillSquare(square, turnPlayer) {
    // fill clicked square with player's token, player being turn player
    this.gameBoard.square = turnPlayer.token;
    this.checkForGameEnd();
  }

  saveWinningGameBoard(player) {
    player.wins.push(this.gameBoard);
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
*/