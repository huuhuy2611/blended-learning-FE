import { Global, css } from "@emotion/react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html,
        body {
          font-family: Be Vietnam, system;
          background-color: #f4f6f8;
        }

        .div-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    />
  );
}
