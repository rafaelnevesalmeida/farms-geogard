import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import NewInputsGroup from './NewInputsGroupContexted.js'

export const allWaypoints = gql`
  query allWaypoints {
    allWaypoints {
      id
      lat
      lon
      visible
      hdgSrcId
      weedingPatternId
      command
    }
  }
`

export default graphql(allWaypoints)(NewInputsGroup)
