// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TaskButtonAction from './TaskButtonAction.js'

const TaskButtonVisible = (props) => {
  return (
    <TaskButtonAction
      {...props}
      label={ props.visible ? '<' : '>' }
    />
  )
}

const taskMutation = gql`
  mutation visibleTask ($value: Int!) {
    visibleTask ( id: $value )
  }
`

export default graphql(taskMutation)(TaskButtonVisible)
