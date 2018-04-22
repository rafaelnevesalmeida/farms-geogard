import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import PanelLeft from './Panel.js'

const polylinesListQuery = gql`
  query PolylinesListQuery {
    allPolylines {
      name
      visible
      strokeColor
      strokeOpacity
      strokeWeight
      icons {
        iconItemId
        offset
        repeat
        icon {
          path
          scale
          strokeWeight
          strokeColor
          fillColor
        }
      }
      path {
        lat
        lng
      }
    }

    allTracks {
      name
      visible
      strokeColor
      strokeOpacity
      strokeWeight
      icons {
        iconItemId
        offset
        repeat
        icon {
          path
          scale
          strokeWeight
          strokeColor
          fillColor
        }
      }
      path {
        lat
        lng
      }
    }

    allMarkers 
    {
      name
      visible
      PathId
      position {
        lat
        lng
      }
    }
  }
`

export default graphql(polylinesListQuery)(PanelLeft)
