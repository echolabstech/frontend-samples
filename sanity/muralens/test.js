const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'mjtpwlkb',
  dataset: 'development'
});

client.fetch(
  '*[_type == $type][0...5]', // Query
  {type: 'multiMediaContent'} // Params (optional)
)
.then(res => {
  console.log('5 multimedia assets: ', res);
})
.catch(err => {
  console.error('Oh no, error occured: ', err);
});