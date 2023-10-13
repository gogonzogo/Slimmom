import { createTheme } from '@mui/material/styles';

const customTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      //light mode is default
      ...(mode === 'light'
        ? {
            primary: {
              light: '#e0e0e0',
              main: '#fc842d',
              contrastText: '#212121',
            },
            background: {
              default: '#ffffff',
              paper: '#9B9FAA',
              secondary: '#9B9FAA',
            },
            // text: {
            //   main: '#9b9faa',
            //   secondary: '#9b9faa',
            //   // hint: '#271a3fe3',
            // },
          }
        : // else use dark mode
          {
            primary: {
              main: '#fc842d',
              contrastText: '#e0e0e0',
              primary: '#e0e0e0',
            },
            background: {
              default: '#271a3fe3',
              paper: '#2a1d45bb',
            },
            // text: {
            //   main: '#9b9faa',
            //   primary: '#e0e0e0',
            //   secondary: '#e0e0e0',
            //   contrastText: '#e0e0e0',
            // },
          }),
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          style: {
            cursor: 'pointer',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            background: 'unset',
          },
        },
      },
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#2a1d45f5' : '#ffffff',
            color: mode === 'dark' ? '#ffffff' : '#000000',
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: mode === 'dark' ? '##ffffff' : '#000000',
          }
        }
      }
    },
  });
};

export default customTheme;

//#7B6C96 purple image
// #271a3fe3 purple background
// #494949 grey background
// #3A3A3A grey side bar
//#2a1d45bb purple side bar