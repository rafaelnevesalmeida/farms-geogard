import React from 'react'

import {
  ButtonColor,
  Panels,
  InfoLabel,
  Buttons,
  ButtonPanel,
  ButtonContainer,
  Button,
  LabelContainer,
  Label
} from '../style'
  
class Bed extends React.Component {
  constructor () {
    super()
    this.state = {
      infoLabel: '+',
      infoDisplay: 'none'
    }
  }

  visibleClick (index) {
    this.setState({ visibleLabel: this.state.visibleLabel === '>' ? '<' : '>' })
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
            <ButtonColor backgroundColor={this.props.polyline.strokeColor} />
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.infoClick()}>
            <Label>{this.state.infoLabel}</Label>
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.visibleClick(this.props.index)}>
            <Label>{ this.props.polyline.visible ? '<' : '>' }</Label>
          </Button>
        </Buttons>
        <Panels>
          <ButtonPanel display={this.state.infoDisplay}>
            <InfoLabel>
              Color: {this.props.polyline.strokeColor}
            </InfoLabel>
            <InfoLabel>
              StrokeOpacity: {this.props.polyline.strokeOpacity}
            </InfoLabel>
            <InfoLabel>
              StrokeWeight: {this.props.polyline.strokeWeight}
            </InfoLabel>
            <InfoLabel />
            <InfoLabel>
              Coordinates:
            </InfoLabel>
            { this.props.polyline.path.map((coord) =>
              <LabelContainer paddingLeft='20px'>
                <InfoLabel>{coord.lat}</InfoLabel> 
                <InfoLabel> {coord.lng}</InfoLabel>
              </LabelContainer>
            )}
          </ButtonPanel>
        </Panels>
      </ButtonContainer>
    )
  }
} 

export default Bed
