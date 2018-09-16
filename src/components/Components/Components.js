// eslint-disable-next-line
import React from 'react'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import messages from '../../messages'

import {
  Infos,
  SidePanel,
  PanelNewInputs,
  PanelComponents,
  GoogleMap
} from '../../components'

import {
  Header,
  Center,
  Footer,
  Container,
  Button,
  Label
} from '../../elements'

import { Link } from 'react-router-dom'

// TODO remove duplication
addLocaleData(en)
addLocaleData(pt)

const Home = ({ lang }) => {
  return ( // TODO change the visual props to modifier and move IntlProvider to App.js
    <IntlProvider locale={lang} messages={messages[lang]} >
      <Container flexWrap='null' flexDirection='column' backgroundColor='#448866'>
        <Header>
          <Label>
            <FormattedMessage id='app.label' />
          </Label>
          <Button marginLeft='64px' width='115px'>
            <Label>
              <nav>
                <Link to="/">
                  <FormattedMessage id='tab.home.label' />
                </Link>
              </nav>
            </Label>
          </Button>
          <Button marginLeft='1px' width='115px'>
            <Label>
              <FormattedMessage id='tab.components.label' />
            </Label>
          </Button>
        </Header>
        <Container justifyContent='space-between'>
          <SidePanel label='panel.newInputs.label' side='left' width='190px'>
            <PanelNewInputs />
          </SidePanel>
          <Center>
            <GoogleMap />
            <Infos />
          </Center>
          <SidePanel label='panel.components.label' width='190px'>
            <PanelComponents />
          </SidePanel>
        </Container>
        <Footer />
      </Container>
    </IntlProvider>
  )
}

export default Home
