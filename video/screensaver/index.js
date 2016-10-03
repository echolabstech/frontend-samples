{
	let redirectButton = document.getElementsByClassName("redirect-screensaver")[0];
	redirectButton.addEventListener("click", redirectToScreenSaver);

	let startappButton = document.getElementsByClassName("startapp")[0];
	startappButton.addEventListener("click", startScreenSaverWorker);

	var last_time_of_interaction = getCurrentTime();

	window.addEventListener("click", updateLastInteractionTime);

	function redirectToScreenSaver() {
		window.location.assign("screensaver.html");
	}

	function startScreenSaverWorker() {
		console.log('start worker thread');
	}

	function getCurrentTime() {
		let time = Date.now();

		if (!time) {
			return Date.getTime();
		} else {
			return time;
		}
	}

	function updateLastInteractionTime() {
		console.log('previous time of interaction:'+last_time_of_interaction);
		last_time_of_interaction = getCurrentTime();
		console.log('current time of interaction:'+last_time_of_interaction);
	}
}