import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import HdgSrc from './HdgSrc.js'

const hdgSrcMutation = gql`
  mutation setHdgSrcWaypoint($waypointId: Int!, $hdgSrcId: Int!) {
    setHdgSrcWaypoint (
      waypointId: $waypointId
      hdgSrcId: $hdgSrcId
    )
  }
`

export default graphql(hdgSrcMutation)(HdgSrc)
