const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'mjtpwlkb',
  dataset: 'development',
  useCdn: true
});

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
	.then(response => {
		console.log('all neighborhoods: ', response);
	})
	.catch(error => {
		console.error('Oh no, error occured: ', error);
	});
}

fetchFromLocal();
