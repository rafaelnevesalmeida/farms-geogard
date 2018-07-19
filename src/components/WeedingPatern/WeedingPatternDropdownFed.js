import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import WeedingPatternDropdown from './WeedingPatternDropdown.js'

export const allWeedingPattern = gql`
  query allWeedingPattern {
    allWeedingPattern {
      id
      name
    }
  }
`

export default graphql(allWeedingPattern)(WeedingPatternDropdown)
