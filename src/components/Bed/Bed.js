import React from 'react'
import { FormattedMessage } from 'react-intl'

import Polyline from '../Polyline'
import PolylineButton from '../../blocks/PolylineButton'

class Bed extends React.Component {
  constructor () {
    super()
    this.state = {
      infoDisplay: 'none',
      visible: false
    }
  }

  componentDidMount () {
    this.setState({
      visible: this.props.polyline.visible
    })
  }

  render () {
    const { polyline } = this.props
    const { infoDisplay, visible } = this.state
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
          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: infoDisplay === 'none' ? 'flex' : 'none'
          })}>
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
            <FormattedMessage id='component.color' />: {polyline.strokeColor}
          </LabelInfo>
          <LabelInfo>
            <FormattedMessage id='component.strokeOpacity' />: {polyline.strokeOpacity}
          </LabelInfo>
          <LabelInfo>
            <FormattedMessage id='component.strokeWeight' />: {polyline.strokeWeight}
          </LabelInfo>
          <LabelInfo />
          <LabelInfo>
            <FormattedMessage id='component.coordinates' />:
          </LabelInfo>
          { polyline.path.map((coord, i) =>
            <Container key={i}>
              <LabelInfo>{coord.lat}</LabelInfo>
              <LabelInfo>{coord.lng}</LabelInfo>
            </Container>
          )}
        </Container>

        <Polyline
          {...polyline}
          visible={visible}
        />
      </PolylineButton>
    )
  }
}

export default Bed
