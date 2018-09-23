import React from 'react'

import Context from './Context'

export class ContextProvider extends React.Component {
  constructor () {
    super()
    this.state = {
      map: null,
      mapParams: {
        zoom: 19,
        mapTypeId: 'satellite',
        center: { lat: 53.16180499999999, lng: -4.196003000000019 }
      },
      lang: 'en',
      taskSelected: null,
      bedSelected: null,
      lineTypeBed: '1',
      lineTypeTrack: '2'
    }
  }

  setGoogleMap = map =>
    this.setState({ map: map })

  setMapZoom (zoom) {
    let mapParams = this.state.mapParams
    mapParams.zoom = zoom
    this.setState({ mapParams: mapParams })
  }

  setMapTypeId (mapTypeId) {
    let mapParams = this.state.mapParams
    mapParams.mapTypeId = mapTypeId
    this.setState({ mapParams: mapParams })
  }

  setMapCenter (center) {
    let mapParams = this.state.mapParams
    mapParams.center = center
    this.setState({ mapParams: mapParams })
  }

  /* loadTasks (allTasks) {
    console.log('======= loadTasks -> allTasks =======: ', allTasks)

    let tasks = [...allTasks]
    this.setState({ tasks })

    console.log('======= loadTasks -> tasks =======: ', this.state.tasks)
  } */

  selectTask (id) {
    this.setState({
      taskSelected: id === this.state.taskSelected ? null : id
    })
  }

  selectBed (polyline) {
    this.setState({
      bedSelected: polyline === this.state.bedSelected ? null : polyline
    })
  }

  render () {
    return (
      <Context.Provider value={{
        ...this.state,
        setGoogleMap: this.setGoogleMap.bind(this),
        setMapZoom: this.setMapZoom.bind(this),
        setMapTypeId: this.setMapTypeId.bind(this),
        setMapCenter: this.setMapCenter.bind(this),
        selectTask: this.selectTask.bind(this),
        selectBed: this.selectBed.bind(this)
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ContextProvider
