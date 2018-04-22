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
      infoLabel: '+',
      infoDisplay: 'none',
      visibleLabel: '>',
      visible: false
    }
  }

  componentDidMount () {
    this.setState({
      visible: this.props.marker.visible,
      visibleLabel: this.props.marker.visible === true ? '<' : '>'
    })
  }

  visibleClick () {
    this.setState({
      visible: !this.state.visible,
      visibleLabel: !this.state.visible === true ? '<' : '>'
    })
  }

  infoClick () {
    this.setState({
      infoLabel: this.state.infoLabel === '+' ? '-' : '+',
      infoDisplay: this.state.infoDisplay === 'none' ? 'flex' : 'none' })
  }

  render () {
    return (
      <ButtonContainer width='180px'>
        <Buttons>
          <Button grow='1'>
            <Label>{this.props.marker.name} </Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.infoClick()}>
            <Label>{ this.state.infoLabel }</Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.visibleClick()}>
            <Label>{ this.state.visibleLabel }</Label>
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
