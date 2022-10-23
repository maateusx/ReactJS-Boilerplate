import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import MaterialTheme from './style/MaterialTheme';
import Theme from './style/Theme';

import Routes from './routes';
import Store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router>
        <MuiThemeProvider theme={MaterialTheme}>
          <ThemeProvider theme={Theme}>
            <ToastContainer />
            <Routes />
          </ThemeProvider>
        </MuiThemeProvider>
      </Router>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
