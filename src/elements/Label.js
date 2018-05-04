import styled from 'styled-components'

const Label = styled.h1`
  border: 0px;
  margin: 0px;
  margin-left: 5px;
  margin-top: ${props => props.marginTop || null};
  padding-top: 3px;
  padding-left: 2px;
  cursor: default;

  text-align: center;
  height: ${props => props.height || 'auto'};
  font-family: ${props => props.theme.fontFamily.default || null};
  font-size: ${props => props.theme.fontSize.medium || null};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
`

export default Label
