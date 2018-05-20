import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummaries from './plotSummaries'
import modelAsset from './modelAsset'
import multiMediaAsset from './multiMediaContent'
import neighborhood from './neighborhood'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    castMember,
    crewMember,
    movie,
    person,
    screening,
    plotSummaries,
    modelAsset,
    multiMediaAsset,
    neighborhood
  ])
})
