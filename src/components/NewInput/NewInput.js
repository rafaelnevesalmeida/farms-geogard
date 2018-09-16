import React from 'react'
import { FormattedMessage } from 'react-intl'

import HdgSrc from '../HdgSrc'
import WeedingPattern from '../WeedingPatern'
import WaypointCommand from '../WaypointCommand'
import Circle from '../Circle'
import PolylineButton from '../../blocks/PolylineButton'
import { ButtonAdd, ButtonVisible } from '../NewInputButtonAction'

class Bed extends React.Component {
  constructor () {
    super()
    this.state = {
      infoDisplay: 'none'
    }
  }

  render () {
    const { newInput, bedSelected } = this.props
    const { infoDisplay } = this.state
    const { Container, Button, Label, LabelInfo } = PolylineButton

    return ( // TODO change the visual props to modifier
      <PolylineButton>
        <Container>
          <Button grow='1'>
            <Label>{newInput.id} </Label>
            <Button
              backgroundColor={newInput.strokeColor}
              width='15px'
              height='15px'
            />
          </Button>

          <ButtonAdd polylineId={bedSelected} waypointId={newInput.id} />

          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: infoDisplay === 'none' ? 'flex' : 'none'
          })}>
            <Label>{ infoDisplay === 'none' ? 'v' : '^' }</Label>
          </Button>

          <ButtonVisible visible={newInput.visible} id={newInput.id} lineTypeId={newInput.lineTypeId} />

        </Container>
        <Container marginTop='1px' backgroundColor={'#886622' /* TODO get from theme */ }
          flexDirection='column'
          display={infoDisplay}
        >
          <HdgSrc waypointId={newInput.id} hdgSrcId={newInput.hdgSrcId}/>

          <WeedingPattern waypointId={newInput.id} weedingPatternId={newInput.weedingPatternId}/>

          <WaypointCommand waypointId={newInput.id} command={newInput.command}/>

          <LabelInfo>
            <FormattedMessage id='component.coordinates' />: {newInput.lat}, {newInput.lon}
          </LabelInfo>
        </Container>

        <Circle
          {...newInput}
          visible={newInput.visible}
        />
      </PolylineButton>
    )
  }
}

export default Bed
