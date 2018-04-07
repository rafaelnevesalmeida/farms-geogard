import React from 'react'

import Context from './Context'

export class Provider extends React.Component {
  constructor () {
    super()
    this.state = {
      mapParams: {
        zoom: 19,
        mapTypeId: 'satellite',
        center: { lat: 53.16180499999999, lng: -4.196003000000019 }
      },
      place_formatted: '',
      place_id: '',
      place_location: '',
      // map: null,
      polylines: [
        {
          name: 'onion1',
          visible: false,
          path: [
            { lat: 53.161901, lng: -4.196397 },
            { lat: 53.161750, lng: -4.196501 }
          ],
          strokeColor: '#00FF00'
        },
        {
          name: 'onion2',
          visible: false,
          path: [
            { lat: 53.161926, lng: -4.196497 },
            { lat: 53.161775, lng: -4.196601 }
          ],
          strokeColor: '#FF0000'
        },
        {
          name: 'onion3',
          visible: false,
          path: [
            { lat: 53.161951, lng: -4.196597 },
            { lat: 53.161800, lng: -4.196701 }
          ],
          strokeColor: '#0000FF'
        }
      ]
    }
    this.showPolyline = this.showPolyline.bind(this)
  }

  showPolyline (index) {
    let polylines = this.state.polylines
    polylines[index].visible = !polylines[index].visible
    this.setState({ polylines: polylines })
  }

  render () {
    return (
      <Context.Provider value={{ ...this.state, showPolyline: this.showPolyline }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider
