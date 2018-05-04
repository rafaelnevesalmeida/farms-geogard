import styled from 'styled-components'

import Label from './Label'

const LabelStatus = styled(Label)`
  margin: 1px; 
  padding-top: 3px;
  margin-left: ${props => props.marginLeft || null};
  font-size: 11px;
  text-align: left;
  font-size: ${props => props.theme.fontSize.verySmall || null};
`

export default LabelStatus
