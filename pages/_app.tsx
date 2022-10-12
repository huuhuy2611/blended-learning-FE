import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => console.error(err),
    },
    queries: {
      onError: (err) => console.error(err),
      // refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        <MinimalsProviders>
          <UnsavedChangeProvider>
            <GlobalStyles />
            {getLayout(<Component {...pageProps} />)}
          </UnsavedChangeProvider>
        </MinimalsProviders>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
