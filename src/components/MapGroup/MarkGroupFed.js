import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// TODO replace to Mark

import MarkGroup from './MarkGroupContexted.js'

export const allMarkers = gql`
  query allMarkers {
    allMarkers {
      id
      name
      visible
      waypointId
      position {
        id
        lat
        lon
      }
    }
  }
`

export default graphql(allMarkers)(MarkGroup)
