import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  secondary: {
    main: '#fc842d',
    dark: '#fc842d',
    contrastText: '#ffffff',
  },
  typography: {
    fontFamily: "'verdana', sans-serif",
    fontSize: 14,
    fontWeight: 700,
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
  breakpoints: {
    values: {
      mobile: 0,
      mobileL: 320,
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
      desktopLrg: 1500,
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'dark',
    primary: {
      main: '#516680',
    },
    text: {
      primary: '#9b9faa',
      secondary: '#e0e0e0',
    },
    background: {
      paper: '#212121',
      default: '#264061',
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'light',
    primary: {
      main: '#e0e0e0',
      light: '#9b9faa',
      dark: '#FC842D',
    },
    background: {
      default: '#e0e0e0',
      paper: '#e0e0e0',
      secondary: '#9B9FAA',
      menu: '#264061',
    },
    text: {
      secondary: '#9ca0aa',
      hint: '#264061',
    },
  },
});

export { darkTheme, lightTheme };
