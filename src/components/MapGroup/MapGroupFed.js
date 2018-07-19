import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import MapGroup from './MapGroupContexted.js'

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
      path {
        id
        lat
        lng
      }
    }
  }
`

export default graphql(polylinesByType, {
  options: ({ lineTypeId }) => ({ variables: { lineTypeId: lineTypeId } })
})(MapGroup)
