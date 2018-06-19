import React from 'react'

import Button from '../../blocks/TasksPolylinesButtonAction'
import { tasksPolylinesByTaskQuery } from '../Task/TaskFed.js'

class Task extends React.Component {
  onClick (id) {
    const { mutate, taskId } = this.props

    mutate({
      variables: { Id: id },
      refetchQueries: [
        {
          query: tasksPolylinesByTaskQuery,
          variables: { taskId: taskId }
        }
      ]
    })
  }

  render () {
    return (
      <Button onClick={() => this.onClick(this.props.taskPolylineId)}>
        <Button.Label>{this.props.label}</Button.Label>
      </Button>
    )
  }
}

export default Task
