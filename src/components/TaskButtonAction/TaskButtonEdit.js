import React from 'react'

import { Button, Label } from '../../elements'

class TaskButtonAction extends React.Component {
  onClick () {
    const { taskId, name, mutate } = this.props

    mutate({
      variables: { id: taskId, name: name },
      refetchQueries: [ 'allTasksQuery' ]
    })

    this.props.showEdit()
  }

  render () {
    return (
      <Button
        width='24px'
        marginLeft='1px'
        onClick={() => this.onClick()}
      >
        <Label>s</Label>
      </Button>
    )
  }
}

export default TaskButtonAction
