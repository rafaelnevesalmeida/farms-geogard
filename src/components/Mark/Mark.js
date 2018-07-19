import React from 'react'
import { FormattedMessage } from 'react-intl'

import Marker from '../Marker'
import PolylineButton from '../../blocks/PolylineButton'
import { MarkButtonVisible } from '../BedButtonAction'

class Mark extends React.Component {
  constructor () {
    super()
    this.state = {
      infoDisplay: 'none'
    }
  }

  render () {
    const { marker } = this.props
    const { infoDisplay } = this.state
    const { Container, Button, Label, LabelInfo } = PolylineButton

    return ( // TODO change the visual props to modifier
      <PolylineButton>
        <Container>
          <Button grow='1'>
            <Label>{marker.name} </Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: infoDisplay === 'none' ? 'flex' : 'none'
          })}>
            <Label>{ infoDisplay === 'none' ? 'v' : '^' }</Label>
          </Button>

          <MarkButtonVisible visible={marker.visible} id={marker.id} />

        </Container>
        <Container backgroundColor={'#AA8844' /* TODO get from theme */ }
          flexDirection='column'
          display={infoDisplay}
        >
          <LabelInfo />
          <LabelInfo>
            <FormattedMessage id='component.coordinates' />:
          </LabelInfo>
          <Container>
            <LabelInfo>{ marker.position.lat }</LabelInfo>
            <LabelInfo>{ marker.position.lng }</LabelInfo>
          </Container>
        </Container>

        <Marker
          {...marker}
          visible={marker.visible}
        />
      </PolylineButton>
    )
  }
}

export default Mark
