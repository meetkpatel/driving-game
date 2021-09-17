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
    if (carStart === false) {
      $car.setAttribute('class', 'car rotate-east');
    } else {
      $car.setAttribute('class', 'car rotate-east-no-transition');
    }
    coordination.direction = 'east';
  } else if (event.key === 'ArrowDown') {
    if (carStart === false) {
      $car.setAttribute('class', 'car rotate-south');
    } else {
      $car.setAttribute('class', 'car rotate-south-no-transition');
    }
    coordination.direction = 'south';
  } else if (event.key === 'ArrowLeft') {
    if (carStart === false) {
      $car.setAttribute('class', 'car rotate-west');
    } else {
      $car.setAttribute('class', 'car rotate-west-no-transition');
    }
    coordination.direction = 'west';
  } else if (event.key === 'ArrowUp') {
    if (carStart === false) {
      $car.setAttribute('class', 'car rotate-north');
    } else {
      $car.setAttribute('class', 'car rotate-north-no-transition');
    }
    coordination.direction = 'north';
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
  if (coordination.direction === 'east') {
    coordination.x += 10;
    $car.style.left = coordination.x + 'px';
  } else if (coordination.direction === 'west') {
    coordination.x -= 10;
    $car.style.left = coordination.x + 'px';
  } else if (coordination.direction === 'south') {
    coordination.y += 10;
    $car.style.top = coordination.y + 'px';
  } else if (coordination.direction === 'north') {
    coordination.y -= 10;
    $car.style.top = coordination.y + 'px';
  }
}
