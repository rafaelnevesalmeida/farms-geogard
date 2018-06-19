// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TasksPolylinesButtonAction from './TasksPolylinesButtonAction.js'

const TasksPolylinesButtonDown = (props) => {
  return (<TasksPolylinesButtonAction {...props} label='v' />)
}

const taskMutation = gql`
  mutation downPolylineOnTask ($Id: Int!) {
    downPolylineOnTask ( id: $Id )
  }
`

export default graphql(taskMutation)(TasksPolylinesButtonDown)
