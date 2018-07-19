import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import HdgSrcDropdown from './HdgSrcDropdown.js'

export const allHdgSrc = gql`
  query allHdgSrc {
    allHdgSrc {
      id
      name
    }
  }
`

export default graphql(allHdgSrc)(HdgSrcDropdown)
