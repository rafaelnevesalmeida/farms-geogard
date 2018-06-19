import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Task from './Task.js'

export const tasksPolylinesByTaskQuery = gql`
  query tasksPolylinesByTaskQuery ($taskId: Int) {
    tasksPolylinesByTask (taskId: $taskId) {
      id
      TaskId
      Sequence
      Inverse
      polyline {
        id
        name
        visible
        strokeColor
        strokeWeight
        strokeOpacity
        icons {
          id
          iconItemId
          offset
          repeat
          icon {
            id
            path
            scale
            strokeWeight
            strokeColor
            fillColor
          }
        }
        path {
          id
          lat
          lng
        }
      }
    }
  }
`

export default graphql(tasksPolylinesByTaskQuery, {
  options: ({ task }) => ({ variables: { taskId: task.id } })
})(Task)
