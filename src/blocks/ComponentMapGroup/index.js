import styled from 'styled-components'

import { Header } from '../../elements'

const ComponentMapGroup = styled.div`
  width: ${props => props.width || '100%'};
  // max-width: 300px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  // align-items: flex-start;
`

ComponentMapGroup.Header = Header

export default ComponentMapGroup
