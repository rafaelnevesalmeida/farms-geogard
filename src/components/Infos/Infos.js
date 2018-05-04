// eslint-disable-next-line
import React from 'react'

import { Container, LabelStatus } from '../../elements'

const Infos = (props) => {
  return ( // TODO change the visual props to modifier
    <Container height='auto'>

      <LabelStatus marginLeft='15px'>
        Zoom: { props.mapParams.zoom }
      </LabelStatus>

      <LabelStatus marginLeft='15px'>
            Center: { props.mapParams.center.lat }, { props.mapParams.center.lng }
      </LabelStatus>

    </Container>
  )
}

export default Infos
