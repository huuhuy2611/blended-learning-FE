import { Components, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function TextField(
  theme: Theme
): Pick<Components<Theme>, 'MuiTextField'> {
  return {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '.MuiInputAdornment-root': {
            fontSize: 24,
          },
          '.MuiInputBase-root.Mui-disabled': {
            backgroundColor: '#F4F6F8',
          },
        },
      },
    },
  };
}
