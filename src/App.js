import React from 'react'

import PanelLeft from './components/PanelWithData'
import Infos from './components/Infos'

import Context from './Context'
import {
  Panel,
  Left,
  Right,
  MapContainer,
  Center,
  AppContainer,
  Header,
  Footer
} from './style'

class AppComponent extends React.Component {
  componentDidMount () {
    let map = new window.google.maps.Map(document.getElementById('map'), { ...this.props.context.mapParams })
    if (map) {
      this.props.context.setGoogleMap(map)
    }

    map.addListener('zoom_changed', () => {
      this.props.context.setMapZoom(map.getZoom())
    })

    map.addListener('maptypeid_changed', () => {
      this.props.context.setMapTypeId(map.getMapTypeId())
    })

    map.addListener('center_changed', () => {
      this.props.context.setMapCenter({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng()
      })
    })
  }

  render () {
    return (
      <AppContainer>
        <Header />
        <Panel>
          <Left>
            <PanelLeft />
          </Left>
          <Center>
            <MapContainer id='map' />
            <Infos />
          </Center>
          <Right />
        </Panel>
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
