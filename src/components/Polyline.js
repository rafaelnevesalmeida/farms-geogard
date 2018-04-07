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
      google,
      path,
      strokeColor
    } = this.props

    if (!google) {
      return null
    }

    const params = {
      visible,
      map,
      path,
      strokeColor
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
