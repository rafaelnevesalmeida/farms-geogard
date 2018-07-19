import React from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentMapGroup from '../../blocks/ComponentMapGroup'
import { Mark } from '../'

class MapGroup extends React.Component {
  render () {
    const {
      label,
      data: { loading, error, allMarkers }
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
        {allMarkers.map((mark, i) =>
          <Mark key={i} marker={mark} />
        )}
      </ComponentMapGroup>
    )
  }
}

export default MapGroup
