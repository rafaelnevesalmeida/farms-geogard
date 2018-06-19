// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TasksPolylinesButtonAction from './TasksPolylinesButtonAction.js'

const TasksPolylinesButtonUp = (props) => {
  return (<TasksPolylinesButtonAction {...props} label='^' />)
}

const taskMutation = gql`
  mutation upPolylineOnTask ($Id: Int!) {
    upPolylineOnTask ( id: $Id )
  }
`

export default graphql(taskMutation)(TasksPolylinesButtonUp)
