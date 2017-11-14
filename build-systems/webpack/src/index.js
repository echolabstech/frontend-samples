import _ from 'lodash'
import './styles.css'
import HP from './hp.jpg'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // add image to our existing div
  let harryPotter = new Image();
  harryPotter.src = HP;

  element.appendChild(harryPotter);

  return element;
}

document.body.appendChild(component());

console.log('this was compiled with webpack!');
