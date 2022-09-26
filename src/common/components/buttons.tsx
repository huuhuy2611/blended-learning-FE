import { css } from '@emotion/react';
import {
  ButtonProps,
  ToggleButtonProps,
  Typography,
  useTheme,
} from '@mui/material';
import { Button, ToggleButton } from '@mui/material';
import React, { ForwardedRef } from 'react';

export const PrimaryButton = React.forwardRef(function PrimaryButton(
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return <Button ref={ref} variant="contained" color="primary" {...props} />;
});

export const SecondaryButton = React.forwardRef(function SecondaryButton(
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const theme = useTheme();
  return (
    <Button
      ref={ref}
      variant="outlined"
      css={css`
        color: ${theme.palette.text.primary};
        border: 1px solid rgba(145, 158, 171, 0.32);
        &:hover {
          border: 1px solid rgba(145, 158, 171, 0.32);
        }
      `}
      {...props}
    />
  );
});

export type ComplexButtonProps = {
  value?: string;
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  secondaryWarn?: boolean;
  topRightIcon?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
};
export const ComplexButton = React.forwardRef(function ComplexButton(
  {
    primary,
    secondary,
    secondaryWarn,
    topRightIcon,
    selected,
    value,
    disabled,
    ...props
  }: ComplexButtonProps & Omit<ToggleButtonProps, keyof ComplexButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <ToggleButton
      ref={ref}
      selected={selected}
      value={value || ''}
      color={selected ? 'primary' : undefined}
      disabled={disabled}
      css={css`
        flex-direction: column;
        min-height: 64px;
        min-width: 100px;
        position: relative;
        padding: 8px;
        &.Mui-disabled {
          border-color: #f4f6f8;
          background-color: #f4f6f8;
        }
      `}
      {...props}
    >
      {!!primary && (
        <Typography
          variant="subtitle1"
          sx={{
            px: topRightIcon ? 2 : undefined,
            color: 'text.primary',
            '.Mui-disabled &': { color: 'inherit' },
          }}
        >
          {primary}
        </Typography>
      )}
      {!!secondary && (
        <Typography
          variant="caption"
          sx={{
            pt: 0.5,
            color: secondaryWarn ? 'warning.dark' : undefined,
            '.Mui-disabled &': { color: 'inherit' },
          }}
          css={css`
            & > .MuiSvgIcon-fontSizeInherit {
              font-size: 16px;
              margin: -3px 0;
            }
          `}
        >
          {secondary}
        </Typography>
      )}
      {!!topRightIcon && (
        <span
          css={css`
            & > .MuiSvgIcon-root {
              position: absolute;
              top: 0;
              right: 0;
              font-size: 16px;
              margin: 4px;
              opacity: 0.8;
            }
          `}
        >
          {topRightIcon}
        </span>
      )}
    </ToggleButton>
  );
});
