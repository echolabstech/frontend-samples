{
	let video = document.getElementsByTagName("video")[0];

	video.addEventListener("click", function(event) {
		console.log("tell parent window you're done");
	}, false);
}