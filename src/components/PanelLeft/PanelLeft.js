import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Mark, Bed, Track } from '../'
import ComponentMapGroup from '../../blocks/ComponentMapGroup'

const PanelLeft = ({ data: { loading, error, allPolylines, allTracks, allMarkers } }) => {
  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  const { Header } = ComponentMapGroup

  return (
    <React.Fragment>

      <ComponentMapGroup>
        <Header>
          <FormattedMessage id='beds.label' />
        </Header>
        {allPolylines.map((polyline, i) =>
          <Bed key={i} polyline={polyline} />
        )}
        {allPolylines.map((polyline, i) =>
          <Bed key={i} polyline={polyline} />
        )}
      </ComponentMapGroup>

      <ComponentMapGroup>
        <Header>
          <FormattedMessage id='tracks.label' />
        </Header>
        {allTracks.map((track, i) =>
          <Track key={i} track={track} />
        )}
      </ComponentMapGroup>

      <ComponentMapGroup>
        <Header>
          <FormattedMessage id='marks.label' />
        </Header>
        {allMarkers.map((marker, i) =>
          <Mark key={i} marker={marker} />
        )}
      </ComponentMapGroup>

    </React.Fragment>
  )
}

export default PanelLeft
