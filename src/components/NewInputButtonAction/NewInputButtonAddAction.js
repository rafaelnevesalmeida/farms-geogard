import React from 'react'

// import { polylinesByType } from '../MapGroup/MapGroupFed.js'
import { polylinesByType } from '../MapGroup/ComponentBedGroupFed.js'
import { Button, Label } from '../../elements'

class TaskButtonAction extends React.Component {
  onClick () {
    const { polylineId, waypointId, mutate } = this.props

    mutate({
      variables: { PolylineId: polylineId, WaypointId: waypointId },
      refetchQueries: [
        {
          query: polylinesByType,
          variables: { lineTypeId: '1' }
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
