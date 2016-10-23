(function() {
	let scripts = document.getElementsByTagName('script');
	let lastScript = scripts[scripts.length-1];
	let scriptName = (lastScript.src).split('/').slice(-1);
	let gallery = document.getElementById('gallery');

	window.onmessage = function(event) {
		console.log('message from page '+event.data['page']);

		switch (event.data['action']) {
			case 'load':
				console.log('load into gallery: '+event.data['target']);

				load(gallery, event.data);

				break;
			case 'unload':
				console.log('unload from gallery: '+event.data['page']);

				unload(gallery, event.data);

				break;
			default:
				// statements_def
				break;
		}
	}

	window.onload = function() {
		console.log('loading '+scriptName);
	}

	function load(element, context) {
		element.setAttribute('src', context['target']);
		swipeIn(element);
	}

	function unload(element, context) {
		swipeOut(element);
		element.removeAttribute('src', context['target']);
	}

	function swipeIn(element) {
		let classes = element.className.split(' ');
		classes.push('swipeIn', 'in-yo-face');
		element.className = classes.join(' ');
		console.log(element.id+' classes: '+element.className);
	}

	function swipeOut(element) {
		let classes = element.className.split(' ');
		classes.pop();
		classes.pop();
		element.className = classes.join(' ');
		console.log(element.id+' classes: '+element.className);
	}
})();
