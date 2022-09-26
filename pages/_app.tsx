import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import GlobalStyles from "@/global-styles";
import { UnsavedChangeProvider } from "@/common/hooks/use-unsaved-change";

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

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <UnsavedChangeProvider>
          <GlobalStyles />
          {getLayout(<Component {...pageProps} />)}
        </UnsavedChangeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
