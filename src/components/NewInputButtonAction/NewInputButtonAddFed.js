// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import NewInputButtonAddAction from './NewInputButtonAddAction.js'

const NewInputButtonAdd = (props) => {
  return (<NewInputButtonAddAction {...props} label='+' />)
}

const newInputMutation = gql`
  mutation addPolylinesWaypoints ($PolylineId: Int!, $WaypointId: Int!) {
    addPolylinesWaypoints (
      WaypointId: $WaypointId
      PolylineId: $PolylineId
    )
    {
      id
      WaypointId
      PolylineId
    }
  }
`

export default graphql(newInputMutation)(NewInputButtonAdd)
