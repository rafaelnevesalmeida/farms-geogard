import React from 'react'

import { MapGroup, MarkGroup } from '../MapGroup'

const PanelLeft = () => {
  return (
    <React.Fragment>

      {// TODO get this info from DB
      }
      <MapGroup lineTypeId='1' label='beds.label' />

      <MapGroup lineTypeId='2' label='tracks.label' />

      <MarkGroup label='marks.label' />

    </React.Fragment>
  )
}

export default PanelLeft
