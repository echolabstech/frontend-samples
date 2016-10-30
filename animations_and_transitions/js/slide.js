(function() {
	let scripts = document.getElementsByTagName('script');
	let lastScript = scripts[scripts.length-1];
	let scriptName = (lastScript.src).split('/').slice(-1);
	console.log('loading '+scriptName);

	let box = document.getElementsByClassName('box')[0];

	let big = document.getElementById('big');
	big.addEventListener('click', function(event) {
		console.log('click '+this.id);
		box.className = 'box change';
	}, false);
	let small = document.getElementById('small');
	small.addEventListener('click', function(event) {
		console.log('click '+this.id);
		box.className = 'box';
	}, false);
})();