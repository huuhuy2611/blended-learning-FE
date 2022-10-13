import {
  LoginResponse,
  ParamsLogin,
  SessionData,
  ZLoginResponse,
  ZParamsLogin,
} from "@/feat/auth/type";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { z } from "zod";
import { blendedApi } from "../utils/api.util";

export function useLogin(args?: {
  config?: UseMutationOptions<LoginResponse, Error, ParamsLogin, Array<any>>;
}) {
  const loginMutation = useMutation(
    z
      .function()
      .args(ZParamsLogin)
      .implement(async (payload: ParamsLogin) => {
        const { data } = await blendedApi.post("/auth/login", payload);
        return ZLoginResponse.parse(data);
      }),
    args?.config
  );

  return loginMutation;
}

export const useVerifyToken = z
  .function()
  .args(z.string())
  .implement(async (token) => {
    const { data } = await blendedApi.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return SessionData.parse(data);
  });
