import styled, { injectGlobal } from 'styled-components'

// eslint-disable-next-line
injectGlobal`
  html {
    height: 100%;
    margin: 0;
    background-color: black;
  }
  body {
    height: 100%;
    margin: 0;
    background-color: grey;
  }
  #root {
    height: 100%;
    margin: 0;
    background-color: silver;
  }
`

export const AppContainer = styled.div`
  height: 100%;
  background-color: #448866;

  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  height: 30px;
  width: 100%;
`

export const Footer = styled.div`
  height: 1px;
`

export const Panel = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start; // end;
  align-items: flex-start;
  flex-grow: 1;
  flex-shrink: 2;

  flex-wrap: wrap; // -reverse;
`

export const Left = styled.div`
  height: 100%;
  width: 190px;
  padding: 0 10px 0 0;
  flex-grow: 1;
  // overflow-y: auto;
  // overflow-x: hidden;
`

export const Center = styled.div`
  height: 100%;
  width: 300px;
  flex-grow: 128;
`

export const Right = styled.div`
  // height: 100%;
  width: 1px;
  flex-grow: 1;
`

export const MapContainer = styled.div`
  height: 100%;
  height: -webkit-calc(100% - 20px);
  height: -moz-calc(100% - 20px);
  height: calc(100% - 20px);
  
  min-height: 200px;
  min-width: 200px;
  max-width: 100%
`

export const ButtonContainer = styled.div`
  width: ${props => props.width || 'auto'};
  max-width: 300px;
  margin: 2px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`

export const Buttons = styled.div`
  width: ${props => props.width || '100%'};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
`

export const Button = styled.div`
  height: 100%;
  width: ${props => props.width || null};
  margin-left: ${props => props.marginLeft || null};
  background-color: #AA8844;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow:  ${props => props.grow || 0};
`

export const ButtonColor = styled.div`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  background-color ${props => props.backgroundColor || '#FFFFFF'};
`

export const Panels = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`

export const ButtonPanel = styled.div`
  width: ${props => props.width || '100%'};
  background-color: #AA8844;
  margin-top: 1px;

  flex-direction: column;
  justify-content: flex-start;
  display: ${props => props.display || 'flex'};
  flex-wrap: wrap;
  flex-grow: 1;
`

export const Label = styled.h1`
  border: 0px;
  margin: 0px;
  margin-left: 5px;
  margin-top: ${props => props.marginTop || null};
  padding-top: 3px;
  padding-left: 2px;
  cursor: default;

  font-size: 11px;
  text-align: center;
  height: ${props => props.height || 'auto'};
  font-family: ${props => props.theme.fontFamily.default || null};
  font-size: ${props => props.theme.fontSize.medium || null};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
`

export const InfoContainer = styled.div`
  width: ${props => props.width || 'auto'};
  // max-width: 300px;
  // margin: 2px;
  background-color: #448866;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`

export const InfoLabel = styled.h1`
  border: 0px;
  margin: 1px; 
  padding-top: 3px;
  margin-left: ${props => props.marginLeft || null};
  cursor: default;
  width: auto;

  font-size: 11px;
  text-align: left;
  height: ${props => props.height || 'auto'};
  font-family: ${props => props.theme.fontFamily.default || null};
  font-size: ${props => props.theme.fontSize.small || null};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
`

export const StatusLabel = styled.h1`
  border: 0px;
  margin: 1px; 
  padding-top: 3px;
  margin-left: ${props => props.marginLeft || null};
  cursor: default;
  width: auto;

  font-size: 11px;
  text-align: left;
  height: ${props => props.height || 'auto'};
  font-family: ${props => props.theme.fontFamily.default || null};
  font-size: ${props => props.theme.fontSize.verySmall || null};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
`

export const LabelContainer = styled.div`
  width: 100%;
  padding-left: ${props => props.paddingLeft || null};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
`
