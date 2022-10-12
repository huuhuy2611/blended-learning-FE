import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

interface GradientsPaletteOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    main_8: string;
    main_12: string;
    main_16: string;
    main_24: string;
    main_32: string;
    main_48: string;
    main_56: string;
    main_80: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#AFA7E3',
  light: '#938CDA',
  main: '#3D0099',
  dark: '#22006E',
  darker: '#1A1243',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
};
const INFO = {
  lighter: '#CBEAFB',
  light: '#64ADEA',
  main: '#095ABC',
  dark: '#043387',
  darker: '#01195A',
};
const SUCCESS = {
  lighter: '#EAFACE',
  light: '#A9E66B',
  main: '#4EAD13',
  dark: '#277C09',
  darker: '#0E5303',
};
const WARNING = {
  lighter: '#FFF2CC',
  light: '#FFCC67',
  main: '#FF9502',
  dark: '#B75B01',
  darker: '#7A3200',
};
const ERROR = {
  lighter: '#FDE1D3',
  light: '#F4907B',
  main: '#D2100B',
  dark: '#9D132B',
  darker: '#690729',
};

export const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const makeAlphas = (main: string) => ({
  main_8: alpha(main, 0.08),
  main_12: alpha(main, 0.12),
  main_16: alpha(main, 0.16),
  main_24: alpha(main, 0.24),
  main_32: alpha(main, 0.32),
  main_48: alpha(main, 0.48),
  main_56: alpha(main, 0.56),
  main_80: alpha(main, 0.8),
});

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...makeAlphas(PRIMARY.main), ...PRIMARY, contrastText: '#fff' },
  secondary: {
    ...makeAlphas(SECONDARY.main),
    ...SECONDARY,
    contrastText: '#fff',
  },
  info: { ...makeAlphas(INFO.main), ...INFO, contrastText: '#fff' },
  success: { ...makeAlphas(SUCCESS.main), ...SUCCESS, contrastText: GREY[800] },
  warning: { ...makeAlphas(WARNING.main), ...WARNING, contrastText: GREY[800] },
  error: { ...makeAlphas(ERROR.main), ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
} as const;

export default palette;
