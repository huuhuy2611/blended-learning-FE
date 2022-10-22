import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export const qClient = new QueryClient({
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

export const QClientProvider = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={qClient}>{children}</QueryClientProvider>
);
