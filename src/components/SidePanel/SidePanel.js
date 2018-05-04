import React from 'react'

import {
  Button,
  Header,
  Container
} from '../../elements'

class LeftPanel extends React.Component {
  constructor () {
    super()
    this.state = {
      opened: true
    }
  }

  componentDidMount () {
    this.setState({
      opened: this.props.opened === false ? this.props.opened : true
    })
  }

  render () {
    const { side, width } = this.props
    const { opened } = this.state

    return ( // TODO change the visual props to modifier
      <Container overFlow='hidden' width={ opened ? width : '11px' } height={ opened ? '100%' : '16px' } >
        <Header height='16px' justifyContent={side === 'left' ? 'flex-end' : 'flex-start'} >
          <Button width='15px' onClick={() => this.setState({ opened: !opened })} >
            { opened ? (side === 'left' ? '<' : '>') : (side === 'left' ? '>' : '<') }
          </Button>
        </Header>
        {this.props.children}
      </Container>
    )
  }
}

export default LeftPanel
