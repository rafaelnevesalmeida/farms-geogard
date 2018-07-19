import React from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentMapGroup from '../../blocks/ComponentMapGroup'
import { Bed } from '../'

class MapGroup extends React.Component {
  render () {
    const {
      label,
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
          <Bed key={i} polyline={polyline} />
        )}
      </ComponentMapGroup>
    )
  }
}

export default MapGroup
