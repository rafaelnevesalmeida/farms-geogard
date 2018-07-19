import React from 'react'
import { FormattedMessage } from 'react-intl'

import {
  Button,
  Header,
  Container
} from '../../elements'

class SidePanel extends React.Component {
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
    const { side, width, label } = this.props
    const { opened } = this.state

    return ( // TODO change the visual props to modifier
      <Container overFlow='hidden' width={ opened ? width : '11px' } height={ opened ? '100%' : '16px' } >
        <Header height='16px' justifyContent={side === 'left' ? 'flex-end' : 'flex-start'} >
          { side === 'left' ? <FormattedMessage id={label} /> : '' }
          <Button width='15px' onClick={() => this.setState({ opened: !opened })} >
            { opened ? (side === 'left' ? '<' : '>') : (side === 'left' ? '>' : '<') }
          </Button>
          { side === 'left' ? '' : <FormattedMessage id={label} /> }
        </Header>
        {this.props.children}
      </Container>
    )
  }
}

export default SidePanel
