const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'mjtpwlkb',
  dataset: 'development'
});

// client.fetch(
//   '*[_type == $type]', // Query
//   {type: 'neighborhood'} // Params (optional)
// )
fetch('locations.json')
.then(res => {
  console.log('all neighborhoods: ', res);
  debugger;
})
.catch(err => {
  console.error('Oh no, error occured: ', err);
});