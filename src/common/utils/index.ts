import { useEffect, useLayoutEffect } from "react";

// https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
export const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const isProduction = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined)
    return process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
  return false;
};
export const isStaging = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined)
    return process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
  return false;
};
export const isDev = () => !isProduction() && !isStaging();
