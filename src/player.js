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
    localStorage.setItem(`player${this.playerNumber}WinCount`, this.winCount);
  }

  retrieveWinsFromStorage() {
    const parsedWinCount = JSON.parse(localStorage.getItem(`player${this.playerNumber}WinCount`));
    parsedWinCount ? this.winCount = parsedWinCount : parsedWinCount;
  }

  takeTurn() {
    this.turn = !this.turn;
  }
}
