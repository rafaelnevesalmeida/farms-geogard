// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TasksPolylinesButtonAction from './TasksPolylinesButtonAction.js'

const TasksPolylinesButtonDelete = (props) => {
  return (<TasksPolylinesButtonAction {...props} label='-' />)
}

const taskMutation = gql`
  mutation delTasksPolylines ($Id: Int!) {
    delTasksPolylines ( id: $Id )
  }
`

export default graphql(taskMutation)(TasksPolylinesButtonDelete)
