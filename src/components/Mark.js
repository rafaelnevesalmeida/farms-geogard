import React from 'react'

import Context from '../Context'
import Marker from './Marker'
import {
  Panels,
  Buttons,
  ButtonContainer,
  Button,
  Label,
  InfoLabel,
  ButtonPanel,
  LabelContainer
} from '../style'

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
      visible: this.props.marker.visible
    })
  }

  render () {
    return (
      <ButtonContainer>
        <Buttons>
          <Button grow='1'>
            <Label>{this.props.marker.name} </Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: this.state.infoDisplay === 'none' ? 'flex' : 'none'
          })}>
            <Label>{ this.state.infoDisplay === 'none' ? 'v' : '^' }</Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            visible: !this.state.visible
          })}>
            <Label>{ this.state.visible ? '<' : '>' }</Label>
          </Button>
        </Buttons>
        <Panels>
          <ButtonPanel display={this.state.infoDisplay}>
            <InfoLabel />
            <InfoLabel>
              Coordinates:
            </InfoLabel>
            <LabelContainer paddingLeft='20px'>
              <InfoLabel>{ this.props.marker.position.lat }</InfoLabel>
              <InfoLabel>{ this.props.marker.position.lng }</InfoLabel>
            </LabelContainer>
          </ButtonPanel>
        </Panels>

        <Context.Consumer>
          {(context) => (
            <Marker
              key={this.props.key}
              {...this.props.marker}
              visible={this.state.visible}
              google={window.google}
              map={context.map}
            />
          )}
        </Context.Consumer>
      </ButtonContainer>
    )
  }
}

export default Bed
