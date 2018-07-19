import React from 'react'

import { tasksPolylinesByTaskQuery } from '../Task/TaskFed.js'
import { Button, Label } from '../../elements'

class TaskButtonAction extends React.Component {
  onClick () {
    const { polylineId, taskId, mutate } = this.props

    mutate({
      variables: { PolylineId: polylineId, TaskId: taskId },
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
      <Button
        width='24px'
        marginLeft='1px'
        onClick={() => this.onClick()}
      >
        <Label>{this.props.label}</Label>
      </Button>
    )
  }
}

export default TaskButtonAction
