import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, amber } from '@material-ui/core/colors'

console.log(red)

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
