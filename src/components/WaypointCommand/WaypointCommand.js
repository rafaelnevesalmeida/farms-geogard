import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Edit, LabelInfo } from '../../elements'

class HdgSrc extends React.Component {
  constructor () {
    super()
    this.state = {
      infoDisplay: 'none',
      command: ''
    }
    this.onExit = this.onExit.bind(this)
  }

  componentDidMount () {
    this.setState({ command: this.props.command ? this.props.command : '' })
  }

  onExit () {
    const { waypointId, mutate } = this.props
    mutate({
      variables: { waypointId: waypointId, command: this.state.command }
      /* refetchQueries: [
        {
          query: setHdgSrcWaypoint,
          variables: { taskId: taskId }
        }
      ] */
    })
  }

  // TODO change this line: placeholder='New command' , to use FormatteMessage
  render () {
    return (
      <LabelInfo>
        <FormattedMessage id='newInput.command.label' />: <Edit
          width='120px'
          grow='1'
          placeholder='New command'
          value={this.state.command}
          onChange={(e) => this.setState({ command: e.target.value })}
          onBlur={this.onExit}
        />
      </LabelInfo>
    )
  }
}

export default HdgSrc
