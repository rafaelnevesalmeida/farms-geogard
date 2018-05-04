import styled from 'styled-components'

import {
  Container,
  Button,
  Label,
  LabelInfo
} from '../../elements'

const PolylineButton = styled.div`
  width: ${props => props.width || 'auto'};
  max-width: 300px;
  margin: 2px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`

PolylineButton.Container = Container
PolylineButton.Button = Button
PolylineButton.Label = Label
PolylineButton.LabelInfo = LabelInfo

export default PolylineButton
