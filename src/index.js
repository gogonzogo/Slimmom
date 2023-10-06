import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
import { Provider } from 'react-redux';
// import { ThemeProvider } from '@emotion/react';
//import { lightTheme } from '../src/theme/theme';
import { StyledEngineProvider } from '@mui/material/styles';

import ThemeWrapper from 'components/ThemeWrapper/ThemeWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter basename='Final-Team-Project'>
        <Provider store={store}>
          <ThemeWrapper >
            <App />
          </ThemeWrapper>
        </Provider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
