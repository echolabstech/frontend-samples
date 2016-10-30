let redBox = document.getElementsByClassName('box red')[0];
redBox.className = redBox.className + ' hidden';
let redBox_classes = redBox.className.split(' ');

let blueBox = document.getElementsByClassName('box blue')[0];

window.setTimeout(function() {
	redBox.className = redBox_classes.slice(0,2).join(' ') + ' visible';
}, 1000);

window.setTimeout(function() {
	blueBox.className = blueBox.className + ' hidden';
}, 1000);
