import React from 'react'

import Context from '../Context'
import Polyline from './Polyline'
import {
  Panels,
  Buttons,
  ButtonContainer,
  Button,
  Label,
  ButtonColor,
  InfoLabel,
  ButtonPanel,
  LabelContainer
} from '../style'

class Track extends React.Component {
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
      visible: this.props.track.visible,
      visibleLabel: this.props.track.visible === true ? '<' : '>'
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
            <Label>{this.props.track.name} </Label>
            <ButtonColor backgroundColor={this.props.track.strokeColor} />
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
            <InfoLabel>
              Color: {this.props.track.strokeColor}
            </InfoLabel>
            <InfoLabel>
              StrokeOpacity: {this.props.track.strokeOpacity}
            </InfoLabel>
            <InfoLabel>
              StrokeWeight: {this.props.track.strokeWeight}
            </InfoLabel>
            <InfoLabel />
            <InfoLabel>
              Coordinates:
            </InfoLabel>
            { this.props.track.path.map((coord, i) =>
              <LabelContainer key={i} paddingLeft='20px'>
                <InfoLabel>{coord.lat}</InfoLabel>
                <InfoLabel> {coord.lng}</InfoLabel>
              </LabelContainer>
            )}
          </ButtonPanel>
        </Panels>

        <Context.Consumer>
          {(context) => (
            <Polyline
              key={this.props.key}
              {...this.props.track}
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

export default Track