window.onload = function() {

	var video = document.getElementById("video");
	video.addEventListener("click", touchListener);
	video.addEventListener("ended", playbackEndedListener);

	function touchListener(event) {
		if (this.paused || this.ended) {
			console.log("begin / continue video playback");
			this.play();
		} else {
			console.log("pausing video playback");
			this.pause();
		}
	}

	function playbackEndedListener(event) {
		console.log("video playback has eneded");
		this.load();
	}
}