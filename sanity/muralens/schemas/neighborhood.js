export default {
  name: 'neighborhood',
  title: 'Neighborhood',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'locationId',
      title: 'Location ID',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'locationBorders',
      title: 'Location Borders',
      type: 'array',
      of: [{ type: 'geopoint' }]
    },
  ]
}