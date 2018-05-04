import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import messages from './messages'
import contextualize from './hoc/contextualize'

import {
  Infos,
  SidePanel,
  PanelLeft,
  GoogleMap
} from './components'

import {
  Header,
  Center,
  Footer,
  Container
} from './elements'

addLocaleData(en)
addLocaleData(pt)

class App extends React.Component {
  render () {
    return ( // TODO change the visual props to modifier
      <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]} >
        <Container flexWrap='null' flexDirection='column' backgroundColor='#448866'>
          <Header />
          <Container justifyContent='space-between'>
            <SidePanel side='left' width='190px'>
              <PanelLeft />
            </SidePanel>
            <Center>
              <GoogleMap />
              <Infos />
            </Center>
            <SidePanel width='150px' opened={false} />
          </Container>
          <Footer />
        </Container>
      </IntlProvider>
    )
  }
}

export default contextualize(App)
