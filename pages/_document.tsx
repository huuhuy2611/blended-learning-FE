import Document, { Html, Head, Main, NextScript } from "next/document";
import palette from "@/minimals.cc/theme/palette";
import GlobalFonts from "@/global-font";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={palette.light.primary.main} />
          <GlobalFonts />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
