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
          visible: true,
          strokeColor: '#00FF00',
          strokeOpacity: 0.4,
          strokeWeight: 20,
          icons: [
            {
              icon: {
                path: 2,
                scale: 3,
                strokeWeight: 2,
                strokeColor: '#111111',
                fillColor: '#333333',
              },
              offset: '15%',
              repeat: '1',
            },
            {
              icon: {
                path: 0,
                scale: 0,
                strokeWeight: 6,
                strokeColor: '#333333',
                fillColor: '#333333',
              },
              offset: '50%',
              repeat: '1',
            }
          ],
    
          path: [
            // { lat: 53.161901, lng: -4.196393 },
            { lat: 53.161892, lng: -4.196399 },
            { lat: 53.161884, lng: -4.196405 },
            { lat: 53.161876, lng: -4.196411 },
            { lat: 53.161868, lng: -4.196417 },
            { lat: 53.161859, lng: -4.196423 },
            { lat: 53.161850, lng: -4.196428 },
            { lat: 53.161842, lng: -4.196433 },
            { lat: 53.161835, lng: -4.196439 },
            { lat: 53.161827, lng: -4.196447 },
            { lat: 53.161819, lng: -4.196451 },
            { lat: 53.161812, lng: -4.196456 },
            { lat: 53.161803, lng: -4.196460 },
            { lat: 53.161795, lng: -4.196466 },
            { lat: 53.161783, lng: -4.196470 },
            { lat: 53.161779, lng: -4.196474 },
            { lat: 53.161774, lng: -4.196478 },
            { lat: 53.161769, lng: -4.196481 },
            { lat: 53.161765, lng: -4.196484 },
            { lat: 53.161760, lng: -4.196487 },
            { lat: 53.161756, lng: -4.196490 },
            { lat: 53.161751, lng: -4.196493 },
            // { lat: 53.161746, lng: -4.196496 },
            // { lat: 53.161741, lng: -4.196499 }
          ]
        },
        {
          name: 'onion2',
          visible: false,
          strokeColor: '#FF0000',
          strokeOpacity: 0.4,
          strokeWeight: 20,
          icons: [
            {
              icon: {
                path: 2,
                scale: 3,
                strokeWeight: 2,
                strokeColor: '#111111',
                fillColor: '#333333',
              },
              offset: '15%',
              repeat: '1',
            },
            {
              icon: {
                path: 0,
                scale: 0,
                strokeWeight: 6,
                strokeColor: '#333333',
                fillColor: '#333333',
              },
              offset: '50%',
              repeat: '1',
            }
          ],
 
          path: [
            { lat: 53.161926, lng: -4.196497 },
            { lat: 53.161775, lng: -4.196601 }
          ],
        },
        {
          name: 'onion3',
          visible: false,
          strokeColor: '#0000FF',
          strokeOpacity: 0.4,
          strokeWeight: 20,
          icons: [
            {
              icon: {
                path: 2,
                scale: 3,
                strokeWeight: 2,
                strokeColor: '#111111',
                fillColor: '#333333',
              },
              offset: '15%',
              repeat: '1',
            },
            {
              icon: {
                path: 0,
                scale: 0,
                strokeWeight: 6,
                strokeColor: '#333333',
                fillColor: '#333333',
              },
              offset: '50%',
              repeat: '1',
            }
          ],
 
          path: [
            { lat: 53.161951, lng: -4.196597 },
            { lat: 53.161800, lng: -4.196701 }
          ],
        }
      ],
      paths: [
        {
          name: 'path 1',
          visible: false,
          strokeColor: '#0000FF',
          strokeOpacity: 1.0,
          strokeWeight: 2,
          icons: [
            {
              icon: {
                path: 2,
                scale: 2,
                strokeWeight: 2,
                strokeColor: '#333333',
                fillColor: '#333333',
              },
              // offset: '15%',
              repeat: '20%',
            },
          ],
    
          path: [
            { lat: 53.161805, lng: -4.196007 },
            { lat: 53.161780, lng: -4.196022 },
            { lat: 53.161758, lng: -4.196047 },
            { lat: 53.161739, lng: -4.196074 },
            { lat: 53.161726, lng: -4.196110 },
            { lat: 53.161710, lng: -4.196155 },
            { lat: 53.161693, lng: -4.196191 },
            { lat: 53.161679, lng: -4.196219 },
            { lat: 53.161668, lng: -4.196247 },
            { lat: 53.161655, lng: -4.196287 },
            { lat: 53.161645, lng: -4.196329 },
            { lat: 53.161641, lng: -4.196377 },
            { lat: 53.161656, lng: -4.196409 },
            { lat: 53.161687, lng: -4.196421 },
            { lat: 53.161717, lng: -4.196425 },
            { lat: 53.161745, lng: -4.196429 },
            { lat: 53.161772, lng: -4.196423 },
            { lat: 53.161797, lng: -4.196412 },
            { lat: 53.161817, lng: -4.196401 },
            { lat: 53.161837, lng: -4.196389 },
            { lat: 53.161858, lng: -4.196374 },
            { lat: 53.161879, lng: -4.196360 },
            { lat: 53.161895, lng: -4.196356 }
          ]
        }
      ],
      markers: [
        {
          name: 'tyddyn teg',
          visible: true,
          position: { lat: 53.16180499999999, lng: -4.196003000000019 }
        }
      ]

    }
    this.showPolyline = this.showPolyline.bind(this)
    this.showPath = this.showPath.bind(this)
    this.showMarker = this.showMarker.bind(this)
  }

  showPolyline (index) {
    let polylines = this.state.polylines
    polylines[index].visible = !polylines[index].visible
    this.setState({ polylines: polylines })
  }

  showPath (index) {
    let paths = this.state.paths
    paths[index].visible = !paths[index].visible
    this.setState({ paths: paths })
  }

  showMarker (index) {
    let markers = this.state.markers
    markers[index].visible = !markers[index].visible
    this.setState({ markers: markers })
  }

  render () {
    return (
      <Context.Provider value={{
        ...this.state,
        showPolyline: this.showPolyline,
        showPath: this.showPath,
        showMarker: this.showMarker
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider
