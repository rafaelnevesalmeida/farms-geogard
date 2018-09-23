import React from 'react'

// import { polylinesByType } from '../MapGroup/MapGroupFed.js'
import { polylinesByType } from '../MapGroup/ComponentBedGroupFed.js'
import { Button, Label } from '../../elements'

class TaskButtonAction extends React.Component {
  onClick () {
    const { polyline, waypointId, mutate } = this.props

    mutate({
      variables: { PolylineId: polyline.id, WaypointId: waypointId },
      refetchQueries: [
        {
          query: polylinesByType,
          variables: { lineTypeId: polyline.lineTypeId }
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
