import React from 'react'

import ComponentMapGroup from '../../blocks/ComponentMapGroup'
import { NewInput } from '../'

class MapGroup extends React.Component {
  render () {
    const {
      data: { loading, error, allWaypoints }
    } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }
    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <ComponentMapGroup>
        { // TODO order by date?
          allWaypoints.map((newInput, i) =>
            <NewInput key={i} newInput={newInput} />
          )}
      </ComponentMapGroup>
    )
  }
}

export default MapGroup
