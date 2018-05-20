import IoCube from 'react-icons/lib/io/cube'

export default {
  name: 'multiMediaContent',
  title: 'Multi Media Content',
  type: 'document',
  icon: IoCube,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      title: 'Textures or Static Images',
      name: 'textureImages',
      type: 'array',
      of: [
        { 
          type: 'image' 
        }
      ]
    },
    {
      name: 'arModel',
      title: '3D Model Asset',
      type: 'modelAsset'
    },
    {
      title: 'Experience Location',
      name: 'assetLocation',
      type: 'geopoint'
    },
    {
      title: 'Neighborhood',
      name: 'neighborhoodRef',
      type: 'reference',
      to: [{
        type: 'neighborhood'
      }]
    },
    {
      name: 'arTarget',
      title: 'Lens Target',
      type: 'image'
    }
  ]
}