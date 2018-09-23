// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import BedButtonAction from './BedButtonEdit.js'

const BedButtonEdit = (props) => {
  return (
    <BedButtonAction {...props} />
  )
}

const bedMutation = gql`
  mutation editPolylineName ($id: Int!, $name: String!) {
    editPolylineName (
      id: $id
      name: $name
    )
  }
`

export default graphql(bedMutation)(BedButtonEdit)
