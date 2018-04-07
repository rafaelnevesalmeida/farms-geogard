import React from 'react'

import Polyline from './components/Polyline'
import Context from './Context'
import {
  AppContainer,
  Header,
  Panel,
  Left,
  Right,
  MapContainer,
  Footer,
  Bed,
  Label
} from './style'

class AppComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      map: null
    }
  }

  componentDidMount () {
    let map = new window.google.maps.Map(document.getElementById('map'), { ...this.props.context.mapParams })

    this.setState({map: map})
  }

  render () {
    return (
      <AppContainer>
        <Header />
        <Context.Consumer>
          {(context) => (
            <Panel>
              <Left>
                {context.polylines.map((polyline, i) =>
                  <React.Fragment>
                    <Bed onClick={() => context.showPolyline(i)}>
                      <Label>{polyline.name}</Label>
                    </Bed>
                    <Polyline
                      key={i}
                      {...polyline}
                      google={window.google}
                      map={this.state.map}
                    />
                  </React.Fragment>
                )}
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
