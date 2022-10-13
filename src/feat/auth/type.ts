import { ROLE_TYPE } from "@/common/lib/enums";
import { z } from "zod";

export const ZParamsLogin = z.object({
  email: z.string(),
  password: z.string(),
});
export type ParamsLogin = z.infer<typeof ZParamsLogin>;

export const ZLoginResponse = z.object({
  user: z.object({
    createdAt: z.string(),
    updatedAt: z.string(),
    role: z.enum(ROLE_TYPE),
    email: z.string(),
  }),
  token: z.object({
    expiresIn: z.number(),
    accessToken: z.string(),
  }),
});
export type LoginResponse = z.infer<typeof ZLoginResponse>;

export const ZVerifyResponse = ZLoginResponse.pick({ user: true });
export type VerifyResponse = z.infer<typeof ZVerifyResponse>;

export const SessionData = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  email: z.string(),
  role: z.enum(ROLE_TYPE),
});
export type SessionData = z.infer<typeof SessionData>;
