import { Components, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function SvgIcon(
  theme: Theme
): Pick<Components<Theme>, 'MuiSvgIcon'> {
  return {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'inherit',
      },
      styleOverrides: {
        fontSizeSmall: {
          width: 20,
          height: 20,
          fontSize: 'inherit',
        },
        fontSizeLarge: {
          width: 32,
          height: 32,
          fontSize: 'inherit',
        },
      },
    },
  };
}
