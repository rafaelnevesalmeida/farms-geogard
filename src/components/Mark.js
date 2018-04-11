import React from 'react'

import {
  Panels,
  InfoLabel,
  Buttons,
  ButtonPanel,
  ButtonContainer,
  Button,
  LabelContainer,
  Label
} from '../style'
  
class Mark extends React.Component {
  constructor () {
    super()
    this.state = {
      infoLabel: '+',
      infoDisplay: 'none'
    }
  }

  visibleClick (index) {
    this.props.onClick(index)
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
            <Label>{this.props.label} </Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.infoClick()}>
            <Label>{this.state.infoLabel}</Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.visibleClick(this.props.index)}>
            <Label>{ this.props.marker.visible ? '<' : '>' }</Label>
          </Button>
        </Buttons>
        <Panels>
          <ButtonPanel display={this.state.infoDisplay}>
            <InfoLabel>
              Coordinates:
            </InfoLabel>
              <LabelContainer paddingLeft='20px'>
                <InfoLabel>{this.props.marker.position.lat}</InfoLabel>
                <InfoLabel>{this.props.marker.position.lng}</InfoLabel>
              </LabelContainer>
          </ButtonPanel>
        </Panels>
      </ButtonContainer>
    )
  }
} 

export default Mark
