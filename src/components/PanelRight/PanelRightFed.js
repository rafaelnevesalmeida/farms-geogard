import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import PanelRight from './PanelRight.js'

export const allTasksQuery = gql`
  query allTasksQuery {
    allTasks {
      id
      name
      visible
    }
  }
`

export default graphql(allTasksQuery, {
  // options: { pollInterval: 10000 }
})(PanelRight)
