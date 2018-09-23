import React from 'react'

import { Button, Label } from '../../elements'
import { polylinesByType } from '../MapGroup/ComponentBedGroupFed.js'

class BedButtonAction extends React.Component {
  onClick () {
    const { polylineId, name, mutate, lineTypeId } = this.props

    mutate({
      variables: { id: polylineId, name: name },
      refetchQueries: [
        {
          query: polylinesByType,
          variables: { lineTypeId: lineTypeId }
        }
      ]
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

export default BedButtonAction
