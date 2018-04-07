import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, #root  {
    height: 100%;
    margin: 0;
  }
`

export const AppContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const Left = styled.div`
  height: 100%;
  width: 200px;
  padding: 10px;
`

export const Panel = styled.div`
  height: 400px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
`

export const Right = styled.div`
  height: 100%;
  width: 1px;
`

export const Header = styled.div`
  height: 30px;
  width: 100%;
`

export const Footer = styled.div`
  height: 30px;
  width: 100%;
`

export const MapContainer = styled.div`
  // margin-left: 0px;
  height: 100%;

  flex: 1;
  // display: flex;
  // display: inline;
`

export const Bed = styled.div`
  height: 25px;
  width: 80px;
  margin: 2px;
  background-color: #AA8844;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Label = styled.h1`                                                                                            
  border: 0px;
  margin: 0px;
  padding-top: 3px;
  padding-left: 2px;
  cursor: default;

  font-size: 11px;
  text-align: center;
  height: ${props => props.height || 'auto'};
  font-family: ${props => props.theme.fontFamily.default || null};
  font-size: ${props => props.theme.fontSize.medium || null};
`
