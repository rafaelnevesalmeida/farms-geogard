import styled from 'styled-components'

const Dropdown = styled.select.attrs({
  name: 'countrychooser'
})`
  font-family: ${props => props.theme.fontFamily.default || null};
  font-size: ${props => props.theme.fontSize.medium || null};

  background-color: ${props => props.backgroundColor || props.theme.backgroundColor.button};
  border: 0px;
  margin: 0px;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};

  display: flex;
  flex-grow:  ${props => props.grow || 0};
`

export default Dropdown
