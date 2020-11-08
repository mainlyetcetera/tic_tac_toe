var board = document.querySelector('.game-board');

board.addEventListener('click', stuff);

function stuff(event) {
  displayID(event.target.id);
}

function displayID(id) {
  if (event.target.id && event.target.id === id) {
    console.log(event.target.id);
  }
}
