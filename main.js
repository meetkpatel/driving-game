var coordination = {
  direction: 'east',
  x: 0,
  y: 0
};
var timerId = null;
var carStart = false;
document.addEventListener('keydown', spanElementsPress);
var $car = document.querySelector('.car');

var audio = new Audio('audio/carstart.mp3');

function spanElementsPress(event) {
  if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'car rotate-east');
    coordination.direction = 'east';
  } else if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'car rotate-south');
    coordination.direction = 'south';
  } else if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'car rotate-west');
    coordination.direction = 'west';
  } else if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'car rotate-north');
    coordination.direction = 'east';
  } else if (event.key === ' ') {
    if (carStart === false) {
      audio.play();
      setTimeout(carstarting, 2500);
      carStart = true;
    } else {
      clearInterval(timerId);
      carStart = false;
    }
  }
}
function carstarting() {
  timerId = setInterval(startCar, 16);
}

function startCar() {
  $car.style.left = coordination.x + 'px';
  coordination.x += 10;
}
