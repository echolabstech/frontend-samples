const FuzzySearch = require('fuzzy-search');
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'mjtpwlkb',
  dataset: 'development',
  useCdn: true,
  token: 'skpSgBjz0MwmOn1yXHjnKnOTZji5wLio1jmXYhB4AbQJ0MR2ZVWiAU2ypKtbuCS8hwQsb4UIBxfZH4MKXxmqHP75ZTtNMlSynczsIYpfKkJezCwANBL5cLSIDj2eOqGdXavyNR2c5i52fY83DNv5mspfjEE3o8XNsHX0G2tQAHgVos5fnahj'
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
	.then(locations => {
		console.log('all neighborhoods: ', locations);
		fuzzySearch('detroit', locations);
	})
	.catch(error => {
		console.error('Oh no, error occured: ', error);
	});
}

function fuzzySearch(needle, haystack) {
	const searcher = new FuzzySearch(haystack, ['name'], {caseSensitive: false});
	const result = searcher.search(needle);
	console.log(result);
}

fetchFromLocal();

