var board = document.querySelector('.game-board');

board.addEventListener('click', stuff);

function stuff(event) {
  if (event.target.id === '1') {
    console.log('Clicked on 1!');
  } else if (event.target.id === '2') {
    console.log('Clicked on 2!');
  } else if (event.target.id === '3') {
    console.log('Clicked on 3!');
  } else if (event.target.id === '4') {
    console.log('Clicked on 4!');
  } else if (event.target.id === '5') {
    console.log('Clicked on 5!');
  } else if (event.target.id === '6') {
    console.log('Clicked on 6!');
  } else if (event.target.id === '7') {
    console.log('Clicked on 7!');
  } else if (event.target.id === '8') {
    console.log('Clicked on 8!');
  } else if (event.target.id === '9') {
    console.log('Clicked on 9!');
  }
}
