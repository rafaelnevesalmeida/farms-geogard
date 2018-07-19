import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import WeedingPattern from './WeedingPattern.js'

const WeedingPatternMutation = gql`
  mutation setWeedingPatternWaypoint($waypointId: Int!, $weedingPatternId: Int!) {
    setWeedingPatternWaypoint (
      waypointId: $waypointId
      weedingPatternId: $weedingPatternId
    )
  }
`

export default graphql(WeedingPatternMutation)(WeedingPattern)
