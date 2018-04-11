import React from 'react'

import Polyline from './components/Polyline'
import Marker from './components/Marker'
import Bed from './components/Bed'
import Path from './components/Path'
import Mark from './components/Mark'
import Context from './Context'
import {
  AppContainer,
  Header,
  Panel,
  Left,
  Right,
  MapContainer,
  Footer,
  LabelContainer,
  InfoLabel,
  Label,
  ButtonPanel
} from './style'

class AppComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      map: null,
      zoom: null,
      mapTypeId: null,
      center: null
    }
  }

  componentDidMount () {
    let map = new window.google.maps.Map(document.getElementById('map'), { ...this.props.context.mapParams })
    if (map) {
      this.setState({
        zoom: map.getZoom(),
        mapTypeId: map.getMapTypeId(),
        map: map,
        centerLat: map.getCenter().lat(),
        centerLng: map.getCenter().lng(),
      })
    }

    map.addListener('zoom_changed', () => {
      this.setState({
        zoom: map.getZoom()
      })
    })

    map.addListener('maptypeid_changed', () => {
      this.setState({
        mapTypeId: map.getMapTypeId()
      })
    })

    map.addListener('center_changed', () => {
      this.setState({
        centerLat: map.getCenter().lat(),
        centerLng: map.getCenter().lng(),
      })
    })
  }

  render () {
    return (
      <AppContainer>
        <Header />
        <Context.Consumer>
          {(context) => (
            <Panel>
              <Left>
                <Label>Beds</Label>
                {context.polylines.map((polyline, i) =>
                  <React.Fragment>
                    <Bed
                      index={i}
                      label={polyline.name}
                      onClick={context.showPolyline}
                      polyline={polyline}
                    />
                    <Polyline
                      key={i}
                      {...polyline}
                      google={window.google}
                      map={this.state.map}
                    />
                  </React.Fragment>
                )}
                <Label marginTop='20px'>Paths</Label>
                {context.paths.map((path, i) =>
                  <React.Fragment>
                    <Path
                      index={i}
                      label={path.name}
                      onClick={context.showPath}
                      path={path}
                    />
                    <Polyline
                      key={i}
                      {...path}
                      google={window.google}
                      map={this.state.map}
                    />
                  </React.Fragment>
                )}

                <Label marginTop='20px'>Marks</Label>
                {context.markers.map((marker, i) =>
                  <React.Fragment>
                    <Mark
                      index={i}
                      label={marker.name}
                      onClick={context.showMarker}
                      marker={marker}
                    />
                    <Marker
                      key={i}
                      {...marker}
                      google={window.google}
                      map={this.state.map}
                    />
                  </React.Fragment>
                )}

                <Label marginTop='20px'>Infos</Label>
                <Label />

                <ButtonPanel display='flex'>
                  <InfoLabel>
                    Zoom: {this.state.zoom}
                  </InfoLabel>
                  <InfoLabel>
                    MapTypeId: {this.state.mapTypeId}
                  </InfoLabel>
                  <InfoLabel>
                    Center: 
                  </InfoLabel>
                      
                  <LabelContainer paddingLeft='20px'>
                    <InfoLabel>{this.state.centerLat}</InfoLabel>
                    <InfoLabel>{this.state.centerLng}</InfoLabel>
                  </LabelContainer>
                </ButtonPanel>

              </Left>
              <MapContainer id='map' />
              <Right />
            </Panel>
          )}
        </Context.Consumer>
        <Footer />
      </AppContainer>
    )
  }
}

export default App => (
  <Context.Consumer>
    {context => <AppComponent context={context} />}
  </Context.Consumer>
)
