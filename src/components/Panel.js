import React from 'react'

import Mark from './Mark'
import Bed from './Bed'
import Track from './Track'
import { Label } from '../style'

const PanelLeft = ({ data: { loading, error, allPolylines, allTracks, allMarkers } }) => {
  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <React.Fragment>
      <Label marginTop='20px'>Beds</Label>
      {allPolylines.map((polyline, i) =>
        <Bed
          key={i}
          polyline={polyline}
        />
      )}

      <Label marginTop='20px'>Tracks</Label>
      {allTracks.map((track, i) =>
        <Track
          key={i}
          track={track}
        />
      )}

      <Label marginTop='20px'>Markers</Label>
      {allMarkers.map((marker, i) =>
        <Mark
          key={i}
          marker={marker}
        />
      )}

    </React.Fragment>
  )
}

export default PanelLeft
