const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'mjtpwlkb',
  dataset: 'development',
  useCdn: true,
  token: 'skpSgBjz0MwmOn1yXHjnKnOTZji5wLio1jmXYhB4AbQJ0MR2ZVWiAU2ypKtbuCS8hwQsb4UIBxfZH4MKXxmqHP75ZTtNMlSynczsIYpfKkJezCwANBL5cLSIDj2eOqGdXavyNR2c5i52fY83DNv5mspfjEE3o8XNsHX0G2tQAHgVos5fnahj'
});

export function fetchMovie(_id) {
	client.fetch(_id)
	.then(res => {
	  console.log('movie to delete: ', res);
	  deleteMovie(_id);
	})
	.catch(err => {
	  console.error('Oh no, error occured: ', err);
	});
}

function deleteMovie(_id) {
	client.delete(_id)
	.then(res => {
	  console.log('deleted movie: ', res);
	})
	.catch(err => {
	  console.error('Oh no, error occured: ', err);
	});
}
