import { useMemo, useState } from "react";
import { axiCreate } from "../lib/axios-clean-trace";
import { redirect } from "../lib/router";
import useLocalStorage from "./use-local-storage";

export const blendedApi = axiCreate({
  baseURL: process.env.NEXT_PUBLIC_BLENDED_BACKEND_API,
  timeout: 30 * 1000,
  headers: {},
});

export default function useApiAuth() {
  const [token] = useState(() => {
    const saved = localStorage.getItem("useLocalStorage::token") as string;
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const apiAuth = useMemo(() => {
    return axiCreate({
      baseURL: process.env.NEXT_PUBLIC_BLENDED_BACKEND_API,
      timeout: 30 * 1000,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [token]);

  return apiAuth;
}
