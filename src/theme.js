import { injectGlobal } from 'styled-components'

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

const theme = {
  fontSize: {
    medium: '1.0rem',
    small: '0.8rem',
    verySmall: '0.6rem'
  },
  fontFamily: {
    default: 'Arial'
  },
  backgroundColor: {
    button: '#AA8844'
  }
}

export default theme
