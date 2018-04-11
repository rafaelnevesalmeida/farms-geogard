import React from 'react'
import PropTypes from 'prop-types'

export class Marker extends React.Component {
  componentDidMount() {
    this.renderMarker();
  }

  componentDidUpdate(prevProps) {
    // if ((this.props.map !== prevProps.map) ||
    //  (this.props.position !== prevProps.position) ||
    //  (this.props.icon !== prevProps.icon)) {
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.renderMarker();
    // }
  }

  componentWillUnmount() {
    if (this.marker) {
      this.marker.setMap(null);
    }
  }

  renderMarker() {
    const {
      visible,
      map,
      google,
      position,
      mapCenter,
      icon,
      label,
      draggable,
      title,
    } = this.props;
    if (!google) {
      return null
    }

    let pos = position || mapCenter;
    if (!(pos instanceof google.maps.LatLng)) {
      pos = new google.maps.LatLng(pos.lat, pos.lng);
    }

    const pref = {
      visible,
      map,
      position: pos,
      icon,
      label,
      title,
      draggable,
    };
    this.marker = new google.maps.Marker(pref);

  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
}

Marker.defaultProps = {
  name: 'Marker'
}

export default Marker
