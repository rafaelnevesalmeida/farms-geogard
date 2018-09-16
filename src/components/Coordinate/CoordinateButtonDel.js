import React from 'react'

// import { polylinesWaypointsByPolyline } from './CoordinateFed.js'
import { polylinesByType } from '../MapGroup/ComponentBedGroupFed.js'

import { Button, Label } from '../../elements'

class TaskButtonAction extends React.Component {
  onClick () {
    const { polylinesWaypointsId, lineTypeId, /* polylineId , */ mutate } = this.props

    mutate({
      variables: { id: polylinesWaypointsId },
      refetchQueries: [
        {
          query: polylinesByType,
          variables: { lineTypeId: lineTypeId }
        }
        /* {
          query: polylinesWaypointsByPolyline,
          variables: { polylineId: polylineId }
        } */
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
