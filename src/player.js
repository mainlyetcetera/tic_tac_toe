class Player {
  constructor(number, token, id) {
    this.id = id || Date.now();
    this.playerNumber = number;
    this.token = token;
    this.wins = [];
    this.winCount = 0;
    this.turn = false;
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }
}
