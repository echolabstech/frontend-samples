console.log('loading comp-a');
const thingWeCareAbout = document.querySelector('#comp-a');

(function(thingWeCareAbout) {
	fetch('/comp-a.html')
	.then((res) => {
		console.log(res);
		return res.text();
	})
	.then((html) => {
		thingWeCareAbout.insertAdjacentHTML('beforeend', html);
	})
	.catch((err) => {
		console.error(err);
	})
}(thingWeCareAbout));
