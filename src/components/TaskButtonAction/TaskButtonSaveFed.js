// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TaskButtonAction from './TaskButtonAction.js'

const TaskButtonSave = (props) => {
  return (<TaskButtonAction {...props} label='+' />)
}

const taskMutation = gql`
  mutation addTask ($value: String!) {
    addTask ( name: $value )
    {
      id
    }
  }
`

export default graphql(taskMutation)(TaskButtonSave)
