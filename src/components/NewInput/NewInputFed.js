import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import NewInput from './NewInputContexted.js'

const newInputMutation = gql`
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

export default graphql(newInputMutation)(NewInput)
