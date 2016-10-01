{
	let callbacks = {
		'top-reasons': function(event) {
			let display_img = document.getElementsByClassName("display-img")[0];
			display_img.setAttribute("src", "Quicken Loans - Rent v Buy.jpg");
		},
		'products': function(event) {
			let display_img = document.getElementsByClassName("display-img")[0];
			display_img.setAttribute("src", "Quicken Loans - Products.jpg");
		}
	}

	let flyers = document.getElementsByTagName("img");
	for (let i=0; i < flyers.length; i++) {
		
		console.log(flyers[i].className);
		flyers[i].addEventListener("click", callbacks[flyers[i].className]);
	}
}