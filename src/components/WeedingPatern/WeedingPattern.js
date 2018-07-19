import React from 'react'
import { FormattedMessage } from 'react-intl'

import WeedingPatternDropdown from './WeedingPatternDropdownFed.js'
import { LabelInfo } from '../../elements'

class WeedingPattern extends React.Component {
  constructor () {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange (weedingPatternId) {
    const { waypointId, mutate } = this.props

    mutate({
      variables: { waypointId: waypointId, weedingPatternId: weedingPatternId }
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
        <FormattedMessage id='newInput.weedingPattern.label' />
        :
        <WeedingPatternDropdown
          weedingPatternId={this.props.weedingPatternId}
          onChange={this.onChange}
        />
      </LabelInfo>
    )
  }
}

export default WeedingPattern
