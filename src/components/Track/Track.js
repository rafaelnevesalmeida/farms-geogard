import React from 'react'
import { FormattedMessage } from 'react-intl'

import Polyline from '../Polyline'
import PolylineButton from '../../blocks/PolylineButton'

class Track extends React.Component {
  constructor () {
    super()
    this.state = {
      infoDisplay: 'none',
      visible: false
    }
  }

  componentDidMount () {
    this.setState({
      visible: this.props.track.visible
    })
  }

  render () {
    const { addPolyline, track } = this.props
    const { infoDisplay, visible } = this.state
    const { Container, Button, Label, LabelInfo } = PolylineButton

    return ( // TODO change the visual props to modifier
      <PolylineButton>
        <Container>
          <Button grow='1'>
            <Label>{track.name} </Label>
            <Button
              backgroundColor={track.strokeColor}
              width='15px'
              height='15px'
            />
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => addPolyline(track)}>
            <Label>+</Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: infoDisplay === 'none' ? 'flex' : 'none'
          })}>
            <Label>{ infoDisplay === 'none' ? 'v' : '^' }</Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            visible: !visible
          })}>
            <Label>{ visible ? '<' : '>' }</Label>
          </Button>
        </Container>
        <Container backgroundColor={'#AA8844' /* TODO get from theme */ }
          flexDirection='column'
          display={infoDisplay}
        >
          <LabelInfo>
            <FormattedMessage id='component.color' />: {track.strokeColor}
          </LabelInfo>
          <LabelInfo>
            <FormattedMessage id='component.strokeOpacity' />: {track.strokeOpacity}
          </LabelInfo>
          <LabelInfo>
            <FormattedMessage id='component.strokeWeight' />: {track.strokeWeight}
          </LabelInfo>
          <LabelInfo />
          <LabelInfo>
            <FormattedMessage id='component.coordinates' />:
          </LabelInfo>
          { track.path.map((coord, i) =>
            <Container key={i}>
              <LabelInfo>{coord.lat}</LabelInfo>
              <LabelInfo>{coord.lng}</LabelInfo>
            </Container>
          )}
        </Container>

        <Polyline
          {...track}
          visible={visible}
        />
      </PolylineButton>
    )
  }
}

export default Track
