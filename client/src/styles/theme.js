import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#B7B7B7 transparent',
          '&::-webkit-scrollbar': {
            width: 6,
            height: 6,
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 6,
            backgroundColor: '#B7B7B7',
            minHeight: 24,
            minWidth: 24,
          },
          '&::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#adadad',
          },
          '&::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#adadad',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#adadad',
          },
          '&::-webkit-scrollbar-corner': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#454545",
      backgroundColor: '#A6A6A6'
    },
    // secondary: {
    //   main: "#454545",
    // }
  }
});