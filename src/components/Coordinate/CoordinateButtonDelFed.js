// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import CoordinateButtonDel from './CoordinateButtonDel.js'
// import { polylinesWaypointsByPolyline } from './CoordinateFed.js'

const coordinateButtonDel = (props) => {
  return (<CoordinateButtonDel {...props} label='-' />)
}

const coordinateMutation = gql`
  mutation delPolylinesWaypoints ($id: Int!) {
    delPolylinesWaypoints (
      id: $id
    )
  }
`

export default graphql(coordinateMutation /* , {
  options: ({ polylineId }) => ({
    refetchQueries: [
      {
        query: polylinesWaypointsByPolyline,
        variables: { polylineId: polylineId }
      }
    ]
  })
} */)(coordinateButtonDel)
