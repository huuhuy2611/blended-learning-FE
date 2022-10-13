import { redirect } from "@/common/lib/router";
import { SessionData } from "@/feat/auth/type";
import Router, { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../hooks/use-local-storage";
import { useVerifyToken } from "../hooks/use-login";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [token] = useLocalStorage("token", "");

  const [data, setData] = useState<SessionData>();

  const handleVerifyToken = async (token: string) => {
    const user = await useVerifyToken(token);

    if (!user) {
      redirect("/login");
    }

    setData(user);
  };

  useEffect(() => {
    if (!token) {
      Router.push({
        pathname: "/login",
        query: { continue: router.asPath },
      });
      return;
    }

    handleVerifyToken(token);
  }, [token]);

  return <>{data ? <>{children}</> : <pre>Loading...</pre>}</>;
}
