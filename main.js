var coordination = {
  direction: 'east'
};

document.addEventListener('keydown', spanElementsPress);
var $car = document.querySelector('.car');

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
  }
}
