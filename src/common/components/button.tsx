import { css } from "@emotion/react";
import { ButtonProps, Button, useTheme } from "@mui/material";
import React, { ForwardedRef } from "react";

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
      color="inherit"
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
