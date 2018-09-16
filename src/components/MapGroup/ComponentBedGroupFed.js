import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import ComponentBedGroup from './ComponentBedGroupContexted.js'

export const polylinesByType = gql`
  query polylinesByType ($lineTypeId: Int) {
    polylinesByType (lineTypeId: $lineTypeId) {
      id
      name
      visible
      strokeColor
      lineTypeId
      lineType {
        id
        label
        strokeOpacity
        strokeWeight
        icons {
          id
          iconItemId
          offset
          repeat
          icon {
            id
            path
            scale
            strokeWeight
            strokeColor
            fillColor
          }
        }
      }
      waypoint {
        id
        lat
        lng: lon
      }
      polylinesWaypoints {
        id
        waypoint {
          id
          lat
          lng: lon
        }
      }
    }
  }
`

export default graphql(polylinesByType, {
  options: ({ lineTypeId }) => ({ variables: { lineTypeId: lineTypeId } })
})(ComponentBedGroup)
