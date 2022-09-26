import { redirect } from "@/common/lib/router";
import {
  useOnSessionError,
  useOnSessionUpdate,
  useSession,
} from "@/feat/auth/context";
import Router from "next/router";
import { ReactNode } from "react";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { data: sessionData } = useSession();

  useOnSessionUpdate((data) => {
    if (Router.pathname === "/login") return;
    if (data.isUserLoggedIn) return;
    Router.push({
      pathname: "/login",
      query: { continue: Router.asPath },
    });
  });
  useOnSessionError(() => redirect("/login"));

  if (sessionData?.isUserLoggedIn) {
    return <>{children}</>;
  }
  return <pre>Loading...</pre>;
}
