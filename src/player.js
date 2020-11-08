class Player {
  constructor(number, token, id) {
    this.id = id || Date.now();
    this.turn = false;
    this.playerNumber = number;
    this.token = token;
    this.wins = [];
    this.winCount = 0;    
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }

  takeTurn() {
    this.turn = !this.turn;
  }
}
