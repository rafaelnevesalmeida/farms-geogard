import React from 'react'
import { Route } from 'react-router'

import Home from './components/Home'
import Components from './components/Components'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route path='/' exact component={Home} />
        <Route path='/components' exact component={Components} />
      </React.Fragment>
    )
  }
}

export default App
