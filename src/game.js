class Game {
  constructor(test) {
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

    var board = this.gameBoard;
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
    // this.turnPlayer = this.players[0];
    // this.nonTurnPlayer = this.players[1];  
  }

  alternateTurns() {
    this.adjustTurnData();
    this.assignTurnPlayer();
  }

  adjustTurnData() {
    this.turnPlayer.turn = false;
    this.nonTurnPlayer.turn = true;
  }

  assignTurnPlayer() {
    if (this.players[0].turn) {
      this.turnPlayer = this.players[0];
      this.nonTurnPlayer = this.players[1];
    } else {
      this.turnPlayer = this.players[1];
      this.nonTurnPlayer = this.players[0];
    }
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
    console.log(board);
    
    if (board.first !== '' && board.first === board.fourth && board.first === board.seventh) {
      this.decideWinner(board.first);
    } else if (board.second !== '' && board.second === board.fifth && board.second === board.eighth) {
      this.decideWinner(board.second);
    } else if (board.third !== '' && board.third === board.sixth && board.third === board.ninth) {
      this.decideWinner(board.third);
    }
  }

  checkForHorizontalWin() {
    if (board.first !== '' && board.first === board.second && board.first === board.third) {
      this.decideWinner(board.first);
    } else if (board.fourth !== '' && board.fourth === board.fifth && board.fourth === board.sixth) {
      this.decideWinner(board.fourth);
    } else if (board.seventh !== '' && board.seventh === board.eighth && board.seventh === board.ninth) {
      this.decideWinner(board.seventh);
    }
  }

  checkForDiagonalWin() {    
    if (board.first !== '' && board.first === board.fifth && board.first === board.ninth) {
      this.decideWinner(board.first);
    } else if (board.third !== '' && board.third === board.fifth && board.third === board.seventh) {
      this.decideWinner(board.third);
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

  fillSquare(boardSlot, turnPlayer, nonTurnPlayer) {
    this.gameBoard.boardSlot = this.turnPlayer.token;
    this.checkForGameEnd();
    this.alternateTurns();
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