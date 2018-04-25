// eslint-disable-next-line
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import theme from './theme.js'
import Provider from './Provider.js'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
  uri: 'https://farms-geogard-api.herokuapp.com/api'
})

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
