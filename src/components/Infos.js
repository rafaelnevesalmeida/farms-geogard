// eslint-disable-next-line
import React from 'react'

import Context from '../Context'
import { InfoContainer, StatusLabel } from '../style'

const Infos = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <InfoContainer>

          <StatusLabel marginLeft='15px'>Zoom: { context.mapParams.zoom }</StatusLabel>

          <StatusLabel marginLeft='15px'>
            Center: { context.mapParams.center.lat }, { context.mapParams.center.lng }
          </StatusLabel>

        </InfoContainer>
      )}
    </Context.Consumer>
  )
}

export default Infos
