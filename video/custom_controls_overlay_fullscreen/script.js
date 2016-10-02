{
	let wrapper = $('.wrapper');
	wrapper.on("click", clickListener);

	let video = $('.video');
	video.on("ended", playbackEndedListener);

	function clickListener(event) {
		this.webkitRequestFullscreen();			
		
		let video = $('.video').get(0);
		let playpause = $('.playpause');

		if (video.paused || video.ended) {
			if (String(event.target.className) === String(playpause.get(0).className)) {
				console.log('return to menu');
				playbackEndedListener(event);
			} else {
				console.log("begin / continue video playback");
				video.play();
			}
        	playpause.fadeOut();	
		} else {
			console.log("pausing video playback");
			video.pause();
			playpause.fadeIn();
		}
	}

	function playbackEndedListener(event) {
		console.log("video playback has eneded");
		document.webkitExitFullscreen();
		video.get(0).load();
	}
}