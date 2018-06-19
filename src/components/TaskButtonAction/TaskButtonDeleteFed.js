// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TaskButtonAction from './TaskButtonAction.js'

const TaskButtonDelete = (props) => {
  return (<TaskButtonAction {...props} label='-' />)
}

const taskMutation = gql`
  mutation delTask ($value: Int!) {
    delTask ( id: $value )
  }
`

export default graphql(taskMutation)(TaskButtonDelete)
