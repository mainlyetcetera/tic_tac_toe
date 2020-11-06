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
    } // maybe these should all be arrays, or maybe it should be one array
    
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
  }

  checkForHorizontalWin() {
  
  }

  checkForDiagonalWin() {
  
  }

  checkForDraw() {
    // if all 9 spots are filled AND neither player has won
    // set this.result = draw
  }

  fillSquare(turnPlayer) {
    // fill clicked square with player's token, player being turn player
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