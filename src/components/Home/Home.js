// eslint-disable-next-line
import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import messages from '../../messages'

import {
  Infos,
  SidePanel,
  PanelLeft,
  PanelRight,
  GoogleMap
} from '../../components'

import {
  Header,
  Center,
  Footer,
  Container
} from '../../elements'

addLocaleData(en)
addLocaleData(pt)

const Home = ({ lang }) => {
  return ( // TODO change the visual props to modifier and move IntlProvider to App.js
    <IntlProvider locale={lang} messages={messages[lang]} >
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
          <SidePanel width='190px'>
            <PanelRight />
          </SidePanel>
        </Container>
        <Footer />
      </Container>
    </IntlProvider>
  )
}

export default Home
