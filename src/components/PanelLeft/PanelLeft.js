import React from 'react'

import { MapGroup, MarkGroup } from '../MapGroup'

const PanelLeft = (props) => {
  const { lineTypeBed, lineTypeTrack } = props
  return (
    <React.Fragment>
      {// TODO get this info from DB
      }
      <MapGroup lineTypeId={lineTypeBed} label='beds.label' />

      <MapGroup lineTypeId={lineTypeTrack} label='tracks.label' />

      <MarkGroup label='marks.label' />

    </React.Fragment>
  )
}

export default PanelLeft
