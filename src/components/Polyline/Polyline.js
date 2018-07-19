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
      path,
      strokeColor,
      lineType
    } = this.props
    const {
      icons,
      strokeWeight,
      strokeOpacity
    } = lineType

    const google = window.google // ????
    if (!google) {
      return null
    }

    console.log('===== map ===== : ', map)

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
  path: PropTypes.array,
  strokeColor: PropTypes.string,
  strokeOpacity: PropTypes.number,
  strokeWeight: PropTypes.number
}

Polyline.defaultProps = {
  name: 'Polyline'
}

export default Polyline
