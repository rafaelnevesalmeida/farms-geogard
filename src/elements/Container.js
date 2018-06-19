import styled from 'styled-components'

const Container = styled.div`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || 'auto'};
  height: ${props => props.height || '100%'};

  background-color: ${props => props.backgroundColor || null};
  overflow: ${props => props.overFlow || null};

  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  flex-shrink: 2;
  flex-wrap: ${props => props.flexWrap || 'wrap'}; // -reverse;
`

export default Container

// margin-top: 1px;
// justify-content: space-between;
