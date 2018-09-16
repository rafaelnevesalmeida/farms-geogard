import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import BedComponent from './BedComponentContexted.js'

// TODO separate file ?

// Chageit to visible function
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

export default graphql(bedMutation)(BedComponent)
