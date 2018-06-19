import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Bed from './BedContexted.js'

// TODO separate file ?
const bedMutation = gql`
  mutation addTasksPolylines($TaskId: Int!, $PolylineId: Int!) {
    addTasksPolylines (
      TaskId: $TaskId
      PolylineId: $PolylineId
    )
    {
      id
      TaskId
      PolylineId
    }
  }
`

export default graphql(bedMutation)(Bed)
