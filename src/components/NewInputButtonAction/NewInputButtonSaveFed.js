// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import NewInputButtonAction from './NewInputButtonSave.js'
// import { polylinesByType } from '../MapGroup/MapGroupFed.js'

const NewInputButtonSave = (props) => {
  return (<NewInputButtonAction {...props} label='+' />)
}

const newInputMutation = gql`
  mutation addPolyline ($name: String!, $lineTypeId: Int!) {
    addPolyline (
      name: $name,
      lineTypeId: $lineTypeId
      visible: true,
      strokeColor: "#00FF00"
    )
    {
      id
    }
  }
`

export default graphql(newInputMutation)(NewInputButtonSave)
/*
export default graphql(newInputMutation, {
  options: ({ lineTypeId }) => ({
    refetchQueries: [
      {
        query: polylinesByType,
        variables: { lineTypeId: lineTypeId }
      }
    ]
  })
}(NewInputButtonSave)) */
