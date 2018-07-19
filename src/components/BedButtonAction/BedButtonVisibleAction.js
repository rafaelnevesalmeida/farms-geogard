import React from 'react'

import { Button, Label } from '../../elements'

class TaskButtonAction extends React.Component {
  onClick () {
    const { id, mutate } = this.props

    mutate({
      variables: { id: id }
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
