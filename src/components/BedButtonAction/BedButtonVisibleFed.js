// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import BedButtonVisibleAction from './BedButtonVisibleAction.js'
import { polylinesByType } from '../MapGroup/MapGroupFed.js'

const BedButtonVisible = (props) => {
  return (
    <BedButtonVisibleAction
      {...props}
      label={ props.visible ? '<' : '>' }
    />
  )
}

const bedMutation = gql`
  mutation visiblePolyline ($id: Int!) {
    visiblePolyline ( id: $id )
  }
`

export default graphql(bedMutation, {
  options: ({ lineTypeId }) => ({
    refetchQueries: [
      {
        query: polylinesByType,
        variables: { lineTypeId: lineTypeId }
      }
    ]
  })
})(BedButtonVisible)
