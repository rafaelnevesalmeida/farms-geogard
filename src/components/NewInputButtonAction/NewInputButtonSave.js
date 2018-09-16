import React from 'react'

import { Button, Label } from '../../elements'
// import { polylinesByType } from '../MapGroup/MapGroupFed.js'
import { polylinesByType } from '../MapGroup/ComponentBedGroupFed.js'

class NewInputButtonSave extends React.Component {
  onClick () {
    const { name, lineTypeId, mutate } = this.props

    mutate({
      variables: { name: name, lineTypeId: lineTypeId },
      refetchQueries: [
        {
          query: polylinesByType,
          variables: { lineTypeId: lineTypeId }
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

export default NewInputButtonSave
