// eslint-disable-next-line
import React from 'react'

import { Container, LabelStatus } from '../../elements'

const Infos = ({mapParams}) => {
  return ( // TODO change the visual props to modifier
    <Container height='auto'>

      <LabelStatus marginLeft='15px'>
        Zoom: { mapParams.zoom }
      </LabelStatus>

      <LabelStatus marginLeft='15px'>
            Center: { mapParams.center.lat }, { mapParams.center.lng }
      </LabelStatus>

    </Container>
  )
}

export default Infos
