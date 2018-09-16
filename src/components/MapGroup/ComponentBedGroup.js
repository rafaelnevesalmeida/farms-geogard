import React from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentMapGroup from '../../blocks/ComponentMapGroup'
import { BedComponent } from '../Bed'

class ComponentBedGroup extends React.Component {
  render () {
    const {
      label,
      lineTypeId,
      data: { loading, error, polylinesByType }
    } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }
    if (error) {
      return <p>{error.message}</p>
    }

    const { Header } = ComponentMapGroup

    return (
      <ComponentMapGroup>
        <Header>
          <FormattedMessage id={label} />
        </Header>
        {polylinesByType.map((polyline, i) =>
          <BedComponent key={i} polyline={polyline} lineTypeId={lineTypeId} />
        )}
      </ComponentMapGroup>
    )
  }
}

export default ComponentBedGroup
