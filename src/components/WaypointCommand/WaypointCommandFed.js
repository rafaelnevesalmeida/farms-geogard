import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import WaypointCommand from './WaypointCommand.js'

const WaypointCommandMutation = gql`
  mutation setCommandWaypoint($waypointId: Int!, $command: String!) {
    setCommandWaypoint (
      waypointId: $waypointId
      command: $command
    )
  }
`

export default graphql(WaypointCommandMutation)(WaypointCommand)
