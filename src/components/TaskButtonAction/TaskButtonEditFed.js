// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TaskButtonAction from './TaskButtonEdit.js'

const TaskButtonEdit = (props) => {
  return (
    <TaskButtonAction {...props} />
  )
}

const taskMutation = gql`
  mutation editTaskName ($id: Int!, $name: String!) {
    editTaskName (
      id: $id
      name: $name
    )
  }
`

export default graphql(taskMutation)(TaskButtonEdit)
