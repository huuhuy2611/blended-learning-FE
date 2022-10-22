import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import GlobalStyles from "@/global-styles";
import { UnsavedChangeProvider } from "@/common/hooks/use-unsaved-change";
import { CollapseDrawerProvider } from "@/minimals.cc/contexts/CollapseDrawerContext";
import MotionLazyContainer from "@/minimals.cc/components/animate/MotionLazyContainer";
import MinimalsThemeProvider from "@/minimals.cc/theme";
import ProgressBar from "@/minimals.cc/components/ProgressBar";
import { QClientProvider } from "@/common/lib/react-query";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MinimalsProviders = ({ children }: { children: ReactNode }) => (
  <CollapseDrawerProvider>
    <MotionLazyContainer>
      <MinimalsThemeProvider>
        <ProgressBar />
        {children}
      </MinimalsThemeProvider>
    </MotionLazyContainer>
  </CollapseDrawerProvider>
);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QClientProvider>
        <MinimalsProviders>
          <UnsavedChangeProvider>
            <GlobalStyles />
            {getLayout(<Component {...pageProps} />)}
          </UnsavedChangeProvider>
        </MinimalsProviders>
      </QClientProvider>
    </>
  );
}

export default MyApp;
