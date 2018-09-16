import React from 'react'
import PropTypes from 'prop-types'

export class Polyline extends React.Component {
  componentDidMount () {
    this.renderPolyline()
  }

  componentDidUpdate (prevProps) {
    if (this.polyline) {
      this.polyline.setMap(null)
    }
    this.renderPolyline()
  }

  componentWillUnmount () {
    if (this.polyline) {
      this.polyline.setMap(null)
    }
  }

  renderPolyline () {
    const {
      visible,
      map,
      maps,
      waypoint,
      strokeColor,
      lineType
    } = this.props

    /* let path = []

    waypoint.map((coord, i) => {
         path.add
      }
    )
    polylinesWaypoints.map((polylineWaypoint, i) => {
      path[i] = polylineWaypoint.coord
    }) */

    const path = waypoint

    const {
      icons,
      strokeWeight,
      strokeOpacity
    } = lineType

    const google = window.google // ????
    if (!google) {
      return null
    }

    const params = {
      visible,
      maps,
      map,
      path,
      strokeWeight,
      strokeOpacity,
      strokeColor,
      icons
    }

    this.polyline = new google.maps.Polyline(params)
  }

  render () {
    return null
  }
}

Polyline.propTypes = {
  waypoint: PropTypes.array,
  strokeColor: PropTypes.string,
  strokeOpacity: PropTypes.number,
  strokeWeight: PropTypes.number
}

Polyline.defaultProps = {
  name: 'Polyline'
}

export default Polyline
