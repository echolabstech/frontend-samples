const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'mjtpwlkb',
  dataset: 'development',
  token: 'skI6dx1UzDRXX80orrc3inefx3FycYbBA6aR4veed3ydbK1VsN6epel5xmvUAtL8eDRLREcc80LHSesWgGnHcsb5rDXHMB1ScuHjDVCe6IaEzXBt7Z2LrCWB88HKOjAhjRgNJk8zPUDwndVjY7jUB4QlGBqw5VxvxUfHCdvoEbEoJFcj8Kku'
});

const newNeighborhood = {
  _type: 'neighborhood',
  name: 'Eastern Market'
}

client.create(newNeighborhood).then(res => {
  console.log(`New neighborhood "${res.name}" was created, document ID is ${res._id}`);
})
.catch((error) => {
	console.log(error);
});