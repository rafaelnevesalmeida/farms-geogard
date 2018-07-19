import React from 'react'
import { FormattedMessage } from 'react-intl'

import HdgSrcDropdown from './HdgSrcDropdownFed.js'
import { LabelInfo } from '../../elements'

class HdgSrc extends React.Component {
  constructor () {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange (hdgSrcId) {
    const { waypointId, mutate } = this.props

    mutate({
      variables: { waypointId: waypointId, hdgSrcId: hdgSrcId }
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
        <FormattedMessage id='newInput.hdgSrc.label' />
        :
        <HdgSrcDropdown
          hdgSrcId={this.props.hdgSrcId}
          onChange={this.onChange}
        />
      </LabelInfo>
    )
  }
}

export default HdgSrc
