// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import BedButtonAddAction from './BedButtonAddAction.js'

const BedButtonAdd = (props) => {
  return (<BedButtonAddAction {...props} label='+' />)
}

const bedMutation = gql`
  mutation addTasksPolylines ($PolylineId: Int!, $TaskId: Int!) {
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

export default graphql(bedMutation)(BedButtonAdd)
