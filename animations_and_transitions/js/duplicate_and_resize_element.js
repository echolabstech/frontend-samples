(function() {
	let scripts = document.getElementsByTagName('script');
	let lastScript = scripts[scripts.length-1];
	let scriptName = (lastScript.src).split('/').slice(-1).toString();
	console.log('loading '+scriptName);

	let images = document.getElementsByTagName('img');
	$(images).each(function() {
		this.addEventListener('click', function(event) {
			console.log('top:'+$(this).offset().top+' left:'+$(this).offset().left);
			console.log('height:'+$(this).height()+' width:'+$(this).width());
			console.log('screen height:'+$(window).height()+' width:'+$(window).width());
			$(this).height($(document).height());
			$(this).width($(document).width());
		}, false);
	});
})();