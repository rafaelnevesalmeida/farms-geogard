import React from 'react'
import { FormattedMessage } from 'react-intl'

import PolylineButton from '../../blocks/PolylineButton'
import { ButtonDel } from './'
// import { ButtonAdd, ButtonVisible } from '../BedButtonAction'

class Coordinate extends React.Component {
  render () {
    const {
      lineTypeId,
      polylinesWaypoints
    } = this.props

    const { Container, LabelInfo } = PolylineButton

    return ( // TODO change the visual props to modifier
      <Container flexDirection='column' >
        <LabelInfo>
          <FormattedMessage id='component.coordinates' />:
        </LabelInfo>
        { polylinesWaypoints.map((polylinesWaypoints, i) =>
          <Container key={i}>
            <LabelInfo>{polylinesWaypoints.waypoint.lat}</LabelInfo>
            <LabelInfo>{polylinesWaypoints.waypoint.lng}</LabelInfo>
            <ButtonDel
              lineTypeId={lineTypeId}
              polylineId={polylinesWaypoints.PolylineId}
              polylinesWaypointsId={polylinesWaypoints.id} />
          </Container>
        )}
      </Container>
    )
  }
}

export default Coordinate
