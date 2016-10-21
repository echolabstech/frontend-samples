var timeOfLastInteraction = {
	time: getCurrentTime(),
	screensave_is_playing: false
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
	console.log('activity detected');
	timeOfLastInteraction['time'] = getCurrentTime();
}

window.setInterval(function(getCurrentTime, timeOfLastInteraction) {
	let timeElapsed = getCurrentTime() - timeOfLastInteraction['time'];

	if (timeElapsed > 5000) {
		if (!timeOfLastInteraction['screensave_is_playing']) {
			timeOfLastInteraction['screensave_is_playing'] = true;
			playScreenSaver();
		}
	} else {
		timeOfLastInteraction['time'] = getCurrentTime();
	}
}, 5000, getCurrentTime, timeOfLastInteraction);

function playScreenSaver() {
	let iframe = document.getElementsByClassName("screen-saver")[0];
	iframe.setAttribute("src", "screensaver.html");
}

window.onload = function() {
	window.addEventListener("click", updateLastInteractionTime);
}
