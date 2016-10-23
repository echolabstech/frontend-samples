(function() {	
	let scripts = document.getElementsByTagName('script');
	let lastScript = scripts[scripts.length-1];
	let scriptName = (lastScript.src).split('/').slice(-1).toString();
	console.log('loading '+scriptName);

	let menuButton = document.getElementById('menu');
	menuButton.addEventListener('click', function(event) {
		event.preventDefault();

		let message = {
			'page': scriptName.split('.')[0],
			'action': 'unload',
		}
		window.parent.postMessage(message,'*');
	}, false);
})();