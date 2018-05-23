function fetchFromAPI() {
	client.fetch(
	  '*[_type == $type]', // Query
	  {type: 'neighborhood'} // Params (optional)
	)
	.then(res => {
	  console.log('all neighborhoods: ', res);
	})
	.catch(err => {
	  console.error('Oh no, error occured: ', err);
	});
}

function fetchFromLocal() {
	fetch('locations.json')
	.then((response) => {
		return response.json();
	})
	.then(locations => {
		console.log('all neighborhoods: ', locations);
	})
	.catch(error => {
		console.error('Oh no, error occured: ', error);
	});
}
