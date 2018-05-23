const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'mjtpwlkb',
  dataset: 'development',
  token: 'skpSgBjz0MwmOn1yXHjnKnOTZji5wLio1jmXYhB4AbQJ0MR2ZVWiAU2ypKtbuCS8hwQsb4UIBxfZH4MKXxmqHP75ZTtNMlSynczsIYpfKkJezCwANBL5cLSIDj2eOqGdXavyNR2c5i52fY83DNv5mspfjEE3o8XNsHX0G2tQAHgVos5fnahj'
});

const newNeighborhood = {
  _type: 'neighborhood',
  name: 'Eastern Market',
}

client.create(newNeighborhood).then(res => {
  console.log(`New neighborhood "${res.name}" was created, document ID is ${res._id}`);
})
.catch((error) => {
	console.log(error);
});