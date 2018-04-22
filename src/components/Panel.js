import React from 'react'

import Mark from './Mark'
import Bed from './Bed'
import Track from './Track'
import Context from '../Context'
import {
  LabelContainer,
  InfoLabel,
  Label,
  ButtonPanel
} from '../style'

const PanelLeft = ({ data: { loading, error, allPolylines, allTracks, allMarkers } }) => {
  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <React.Fragment>
      <Label>Beds</Label>
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

      <Label marginTop='20px'>Infos</Label>
      {allMarkers.map((marker, i) =>
        <Mark
          key={i}
          marker={marker}
        />
      )}

      <Label />

      <Context.Consumer>
        {(context) => (
          <ButtonPanel display='flex'>

            <InfoLabel>
              Zoom: { context.mapParams.zoom }
            </InfoLabel>

            <InfoLabel>
              MapTypeId: { context.mapParams.mapTypeId }
            </InfoLabel>

            <InfoLabel>
              Center:
            </InfoLabel>
            <LabelContainer paddingLeft='20px'>
              <InfoLabel>{ context.mapParams.center.lat }</InfoLabel>
              <InfoLabel>{ context.mapParams.center.lng }</InfoLabel>
            </LabelContainer>

          </ButtonPanel>
        )}
      </Context.Consumer>
    </React.Fragment>
  )
}

export default PanelLeft
