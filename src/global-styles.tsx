import { Global, css } from "@emotion/react";

export default function GlobalStyles() {
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
          font-family: "Be Vietnam";
          font-weight: 700;
          src: url("/fonts/BeVietnamPro-Bold.ttf") format("truetype");
        }
        @font-face {
          font-family: "Be Vietnam";
          font-weight: 600;
          src: url("/fonts/BeVietnamPro-SemiBold.ttf") format("truetype");
        }
        @font-face {
          font-family: "Be Vietnam";
          font-weight: 500;
          src: url("/fonts/BeVietnamPro-Medium.ttf") format("truetype");
        }
        @font-face {
          font-family: "Be Vietnam";
          font-weight: 400;
          src: url("/fonts/BeVietnamPro-Regular.ttf") format("truetype");
        }
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
