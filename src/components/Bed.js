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
    return (
      <ButtonContainer>
        <Buttons>
          <Button grow='1'>
            <Label>{this.props.polyline.name} </Label>
            <ButtonColor backgroundColor={this.props.polyline.strokeColor} />
          </Button>
          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: this.state.infoDisplay === 'none' ? 'flex' : 'none'
          })}>
            <Label>+</Label>
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
            { this.props.polyline.path.map((coord, i) =>
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
              {...this.props.polyline}
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
