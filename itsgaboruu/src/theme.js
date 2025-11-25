import { Gradient } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5c45a5',
    },
    background: {
      // default: '#05010f',
      default: "#000000",
      paper: '#1e1e1e',
      header: '#000000',
      // gradient: "radial-gradient(circle,rgba(0, 0, 0, 1) 0%, rgba(5, 2, 23, 1) 100%)",
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
      disabled: '#777777',
    },
  },
});

export default theme;
