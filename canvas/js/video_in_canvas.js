console.log('script loaded');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let video = document.getElementById('video');
video.addEventListener('play', function(event) {
	draw(context, this, 0, 0);
}, false);

function draw(context, video, dx, dy) {
	if(video.paused || video.ended) return false;
	context.drawImage(video, dx, dy);
	var image_matrix = context.getImageData(0, 0, canvas.width, canvas.height).data;
	var frame_image = canvas.toDataURL('image/png', 1);

	setTimeout(draw, 20, context, video, dx, dy);
}