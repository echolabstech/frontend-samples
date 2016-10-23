(function() {	
	let scripts = document.getElementsByTagName('script');
	let lastScript = scripts[scripts.length-1];
	let scriptName = (lastScript.src).split('/').slice(-1).toString();
	console.log('loading '+scriptName);

	let menuItems = document.getElementsByTagName('a');
	for (let i=0;i<menuItems.length;i++) {
		menuItems[i].addEventListener('click', function(event) {
			event.preventDefault();

			let message = {
				'page': scriptName.split('.')[0],
				'action': 'load',
				'target': this.getAttribute('href'),
			}
			window.parent.postMessage(message,'*');
		}, false);
	}
})();
