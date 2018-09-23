import React from 'react'

import ComponentMapGroup from '../../blocks/ComponentMapGroup'
import { ComponentBedGroup } from '../MapGroup'

class PanelComponents extends React.Component {
  constructor () {
    super()
    this.state = {
      bedName: '',
      trakName: ''
    }
  }

  render () {
    const { Container, Edit, NewInputButtonSave } = ComponentMapGroup
    const { lineTypeBed, lineTypeTrack } = this.props

    // TODO placeholder from i18n
    return (
      <React.Fragment>
        <ComponentMapGroup>

          <Container maxWidth='300px' >
            <Edit
              width='167px'
              grow='1'
              placeholder='New Bed name'
              value={this.state.bedName}
              onChange={(e) => this.setState({ bedName: e.target.value })}
            />
            <NewInputButtonSave name={this.state.bedName} lineTypeId={lineTypeBed} />
          </Container>

          <ComponentBedGroup lineTypeId={lineTypeBed} label='beds.label' />

        </ComponentMapGroup>

        <ComponentMapGroup>

          <Container maxWidth='300px' >
            <Edit
              width='167px'
              grow='1'
              placeholder='New Track name'
              value={this.state.trackName}
              onChange={(e) => this.setState({ trackName: e.target.value })}
            />
            <NewInputButtonSave name={this.state.trackName} lineTypeId={lineTypeTrack} />
          </Container>

          <ComponentBedGroup lineTypeId={lineTypeTrack} label='tracks.label' />

        </ComponentMapGroup>

      </React.Fragment>
    )
  }
}

export default PanelComponents
