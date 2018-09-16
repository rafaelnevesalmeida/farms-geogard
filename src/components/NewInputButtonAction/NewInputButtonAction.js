import React from 'react'

import { Button, Label } from '../../elements'
import { polylinesByType } from '../MapGroup/MapGroupFed.js'

class NewInputButtonAction extends React.Component {
  onClick () {
    const { value, mutate } = this.props

    mutate({
      variables: { value: value },
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

export default NewInputButtonAction
