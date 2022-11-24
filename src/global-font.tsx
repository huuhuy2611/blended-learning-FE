// All font should be loaded inside this component.
// It would be loaded into NextJS _document.tsx for optimization
// See: https://nextjs.org/docs/basic-features/font-optimization

import { Global, css } from "@emotion/react";

export default function GlobalFonts() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: system;
          src: local(-apple-system), local(BlinkMacSystemFont),
            local("Segoe UI"), local(Roboto), local(Oxygen), local(Ubuntu),
            local(Cantarell), local("Fira Sans"), local("Droid Sans"),
            local("Helvetica Neue"), local(sans-serif);
        }
        @font-face {
          font-family: "Roboto";
          font-weight: 700;
          src: url("/fonts/Roboto/Roboto-Bold.ttf") format("truetype");
        }
        @font-face {
          font-family: "Roboto";
          font-weight: 600;
          src: url("/fonts/Roboto/Roboto-Medium.ttf") format("truetype");
        }
        @font-face {
          font-family: "Roboto";
          font-weight: 500;
          src: url("/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
        }
        @font-face {
          font-family: "Roboto";
          font-weight: 400;
          src: url("/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
        }
      `}
    />
  );
}
