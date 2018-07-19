import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import WaypointCommand from './WaypointCommand.js'

const WaypointCommandMutation = gql`
  mutation setCommandWayPoint($waypointId: Int!, $command: String!) {
    setCommandWayPoint (
      waypointId: $waypointId
      command: $command
    )
  }
`

export default graphql(WaypointCommandMutation)(WaypointCommand)
