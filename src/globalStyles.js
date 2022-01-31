import { GlobalStyles } from '@mui/material';

export const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'borderBox',
        scrollBehavior: 'smooth',
        transition: 'height 0.5s ease',
      },

      a: {
        textDecoration: 'none',
      },
    }}
  />
);
