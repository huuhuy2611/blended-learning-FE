import { Components, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function IconButton(
  theme: Theme
): Pick<Components<Theme>, 'MuiIconButton'> {
  return {
    MuiIconButton: {
      // styleOverrides: {
      //   root: {
      //     '&.MuiIconButton-sizeLarge': {
      //       fontSize: 32,
      //       padding: 12,
      //     },
      //     '&.MuiIconButton-sizeMedium': {
      //       fontSize: 28,
      //       padding: 10,
      //     },
      //     '&.MuiIconButton-sizeSmall': {
      //       fontSize: 24,
      //       padding: 8,
      //     },
      //   },
      // },
    },
  };
}
