import _ from 'lodash'
import './styles.css'
import HP from './hp.jpg'
import Data from './data.xml'
import printMe from './print.js'

function component() {
    let element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // add image to our existing div
    let harryPotter = new Image();
    harryPotter.src = HP;
    element.appendChild(harryPotter);

    // show asset we loaded
    console.log(Data);

    // use function we imported
    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

console.log('this was compiled with webpack!');
