import React from 'react'
import { FormattedMessage } from 'react-intl'

import Polyline from '../Polyline'
import PolylineButton from '../../blocks/PolylineButton'
import Coordinate from '../Coordinate'
import { ButtonVisible } from '../BedButtonAction'

class BedComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      infoDisplay: 'none'
    }
  }

  render () {
    const { polyline, bedSelected, selectBed, lineTypeId } = this.props
    const { infoDisplay } = this.state
    const { Container, Button, Label, LabelInfo } = PolylineButton

    return ( // TODO change the visual props to modifier
      <PolylineButton>
        <Container>
          <Button grow='1'>
            <Label>{polyline.name} </Label>
            <Button
              backgroundColor={polyline.strokeColor}
              width='15px'
              height='15px'
            />
          </Button>

          <Button width='24px' marginLeft='1px' onClick={() => selectBed(polyline.id)}>
            <Label>{ bedSelected === polyline.id ? '#' : '=' }</Label>
          </Button>

          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: infoDisplay === 'none' ? 'flex' : 'none'
          })}>
            <Label>{ infoDisplay === 'none' ? 'v' : '^' }</Label>
          </Button>

          <ButtonVisible visible={polyline.visible} id={polyline.id} lineTypeId={polyline.lineTypeId} />

        </Container>
        <Container backgroundColor={'#886622' /* TODO get from theme */ }
          flexDirection='column'
          display={infoDisplay}
        >
          <LabelInfo>
            <FormattedMessage id='component.color' />: {polyline.strokeColor}
          </LabelInfo>
          <LabelInfo>
            <FormattedMessage id='component.strokeOpacity' />: {polyline.lineType.strokeOpacity}
          </LabelInfo>
          <LabelInfo>
            <FormattedMessage id='component.strokeWeight' />: {polyline.lineType.strokeWeight}
          </LabelInfo>
          <LabelInfo />

          <Coordinate lineTypeId={lineTypeId} polylinesWaypoints={polyline.polylinesWaypoints} />
        </Container>

        <Polyline
          {...polyline}
        />
      </PolylineButton>
    )
  }
}

export default BedComponent
