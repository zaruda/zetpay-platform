import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#30CCCD',
    },
    secondary: {
      main: '#0C6E46',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      secondary: '#B2BFC8'
    }
  },
  typography: {
    h1: {
      fontSize: 30,
      lineHeight: '38px'
    },
    h3: {
      fontSize: 18,
      lineHeight: '24px'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      containedPrimary: {
        color: '#ffffff'
      },
    }
  }
});

export default theme;