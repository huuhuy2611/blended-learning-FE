import { UseQueryResult } from "@tanstack/react-query";
import React, { EffectCallback } from "react";
import { SessionData } from "./interface";

export const SessionContext = React.createContext(
  null as unknown as UseQueryResult<SessionData>
);

export const useSession = () => React.useContext(SessionContext);
export const useOnSessionUpdate = (
  effect: (data: SessionData) => ReturnType<EffectCallback>
) => {
  const { data, isFetched } = useSession();
  React.useEffect(() => {
    if (!isFetched || !data) return;
    return effect(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFetched]);
};
export const useOnSessionError = (
  effect: (
    error: unknown,
    data: SessionData | undefined
  ) => ReturnType<EffectCallback> | any
) => {
  const { error, data } = useSession();
  React.useEffect(() => {
    if (error) return effect(error, data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
};
