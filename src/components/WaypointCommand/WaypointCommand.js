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
    console.log('=== command didMount === : ', this.props.command)
    this.setState({ command: this.props.command ? this.props.command : '' })
  }

  onExit () {
    const { waypointId, mutate } = this.props

    console.log('=== command onExit === : ', this.state.command)

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

  render () {
    return (
      <LabelInfo>
        <FormattedMessage id='newInput.command.label' />: <Edit
          width='120px'
          grow='1'
          placeholder='New task name'
          value={this.state.command}
          onChange={(e) => this.setState({ command: e.target.value })}
          onBlur={this.onExit}
        />
      </LabelInfo>
    )
  }
}

export default HdgSrc
