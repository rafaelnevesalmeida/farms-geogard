import React from 'react'
import PropTypes from 'prop-types'

export class Circle extends React.Component {
  componentDidMount () {
    this.renderCircle()
  }

  componentDidUpdate (prevProps) {
    if (this.circle) {
      this.circle.setMap(null)
    }
    this.renderCircle()
  }

  componentWillUnmount () {
    if (this.circle) {
      this.circle.setMap(null)
    }
  }

  renderCircle () {
    const {
      visible,
      lat,
      lon,
      map
    } = this.props

    const google = window.google // ????
    if (!google) {
      return null
    }

    let pos = {lat: lat, lng: lon}

    // TODO move it to the right place
    let strokeColor = '#00FF00'
    let strokeOpacity = 1
    let strokeWeight = 4
    let fillColor = '#00FF00'
    let fillOpacity = 1
    let radius = 0.5

    const pref = {
      strokeColor,
      strokeOpacity,
      strokeWeight,
      fillColor,
      fillOpacity,
      radius,
      visible,
      map,
      center: pos
      // icon,
      // label,
      // title,
      // draggable
    }

    this.circle = new google.maps.Circle(pref)
  }

  render () {
    return null
  }
}

Circle.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
}

Circle.defaultProps = {
  name: 'Circle'
}

export default Circle
