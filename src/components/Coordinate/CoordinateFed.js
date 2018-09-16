import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Coordinate from './CoordinateContexted.js'

// TODO separate file ?
export const polylinesWaypointsByPolyline = gql`
  query polylinesWaypointsByPolyline ($polylineId: Int!) {
    polylinesWaypointsByPolyline (polylineId: $polylineId) {
      id
      PolylineId
      WaypointId
      waypoint {
        id
        lat
        lng: lon
      }
    }
  }
`

export default graphql(polylinesWaypointsByPolyline, {
  options: ({ polylineId }) => ({ variables: { polylineId: polylineId } })
})(Coordinate)
