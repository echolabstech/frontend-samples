{
	let video = document.getElementsByTagName("video")[0];
	video.webkitRequestFullscreen();

	console.log('this runs before timeout');
	window.setTimeout(doStuff, 5000);
	console.log('this is the line after the timeout statement');

	function doStuff() {
		console.log('this runs after 5 seconds elapses');
	}
}