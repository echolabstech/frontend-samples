{
	var load_button = document.getElementsByTagName("button")[0];
	load_button.addEventListener("click", function(event) {
		var req = new XMLHttpRequest();
		req.addEventListener("load", function(event) {
			let body = document.getElementsByTagName("body")[0];
			let main = document.getElementsByTagName("main")[0];
			body.innerHTML = body.innerHTML + req.responseText;
		});
		req.open("GET", "http://localhost:8888/template.html");
		req.responseType = "text";
		req.send();
	});

	var file = new File("./tempalte.html");
	console.log(file);
}