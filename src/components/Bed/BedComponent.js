import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Edit } from '../../elements'
import Polyline from '../Polyline'
import PolylineButton from '../../blocks/PolylineButton'
import Coordinate from '../Coordinate'
import ButtonEdit from '../BedButtonAction/BedButtonEditFed.js'
import { ButtonVisible } from '../BedButtonAction'

class BedComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      infoDisplay: 'none',
      editDisplay: false,
      polylineName: this.props.polyline.name
    }
    this.showEdit = this.showEdit.bind(this)
  }

  showEdit () {
    this.setState({ editDisplay: !this.state.editDisplay })
  }

  nameContainer () {
    const { polyline } = this.props
    const { Button, Label } = PolylineButton
    return (
      <Button grow='1' width='189px' >
        <Label>{polyline.name}</Label>
      </Button>
    )
  }

  editContainer () {
    const { polyline, lineTypeId } = this.props
    const { Container } = PolylineButton
    return (
      <Container maxWidth='300px' >
        <Edit
          width='165px'
          grow='1'
          value={this.state.polylineName}
          onChange={(e) => this.setState({ polylineName: e.target.value })}
        />
        <ButtonEdit
          polylineId={polyline.id}
          name={this.state.polylineName}
          showEdit={this.showEdit}
          lineTypeId={lineTypeId}
        />

      </Container>
    )
  }

  render () {
    const { polyline, bedSelected, selectBed, lineTypeId } = this.props
    const { infoDisplay } = this.state
    const { Container, Button, Label, LabelInfo } = PolylineButton
    const bedSelectedId = bedSelected === null ? null : bedSelected.id

    return ( // TODO change the visual props to modifier
      <PolylineButton>
        <Container>
          { this.state.editDisplay ? this.editContainer() : this.nameContainer() }

          <Button
            backgroundColor={polyline.strokeColor}
            width='15px'
            height='21px'
          />

          <Button width='24px' marginLeft='1px' onClick={() => selectBed(polyline)}>
            <Label>{ bedSelectedId === polyline.id ? '#' : '=' }</Label>
          </Button>

          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: infoDisplay === 'none' ? 'flex' : 'none'
          })}>
            <Label>{ infoDisplay === 'none' ? 'v' : '^' }</Label>
          </Button>

          <Button width='24px' marginLeft='1px' onClick={() => this.showEdit()}>
            <Label>/</Label>
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
