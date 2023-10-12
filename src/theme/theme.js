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
            components: {
              MuiButtonBase: {
                defaultProps: {
                  style: {
                    cursor: 'pointer',
                  },
                },
              },
            },
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
            background: 'unset'
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