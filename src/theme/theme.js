import { createTheme } from '@mui/material/styles';

const customTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      //light mode is default
      ...(mode === 'light'
        ? {
            primary: {
              light: '#9b9faa',
              main: '#fc842d',
              dark: '#FC842D',
              contrastText: '#9b9faa',
            },
            background: {
              default: '#ffffff',
              paper: '#e0e0e0',
              secondary: '#9B9FAA',
              menu: '#264061',
            },
            text: {
              secondary: '#9b9faa',
              hint: '#264061',
            },
          }
        : // else use dark mode
          {
            primary: {
              main: '#516680',
              contrastText: '#ffffff',
            },
          background: {
            default: '#264061',
              paper: '#212121',
            },
            text: {
              primary: '#e0e0e0',
              secondary: '#9B9FAA',
            },
          }),
    },
  });
};

export default customTheme;
