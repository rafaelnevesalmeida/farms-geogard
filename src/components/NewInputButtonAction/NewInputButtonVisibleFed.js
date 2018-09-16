// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import NewInputButtonVisibleAction from './NewInputButtonVisibleAction.js'
// import { polylinesByType } from '../MapGroup/MapGroupFed.js'
import { allWaypoints } from '../MapGroup/NewInputsGroupFed.js'

const NewInputButtonVisible = (props) => {
  return (
    <NewInputButtonVisibleAction
      {...props}
      label={ props.visible ? '<' : '>' }
    />
  )
}

const newInputMutation = gql`
  mutation visibleWaypoint ($id: Int!) {
    visibleWaypoint ( id: $id )
  }
`

export default graphql(newInputMutation, {
  options: ({ lineTypeId }) => ({
    refetchQueries: [
      {
        query: allWaypoints
        // polylinesByType,
        // variables: { lineTypeId: lineTypeId }
      }
    ]
  })
})(NewInputButtonVisible)
