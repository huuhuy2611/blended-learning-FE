import { z } from "zod";
import { GENDER_TYPE, ROLE_TYPE } from "../lib/enums";

export const ZProfileUser = z.object({
  name: z.string(),
  gender: z.enum(GENDER_TYPE),
});
export type ProfileUser = z.infer<typeof ZProfileUser>;

export const ZUserItem = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  email: z.string(),
  id: z.string(),
  role: z.enum(ROLE_TYPE),
  profile: ZProfileUser.optional().nullable(),
});
export type UserItem = z.infer<typeof ZUserItem>;

export const ZAddUserPayload = z.object({
  email: z.string(),
  name: z.string(),
  gender: z.enum(GENDER_TYPE),
  role: z.enum(ROLE_TYPE),
});
export type AddUserPayload = z.infer<typeof ZAddUserPayload>;

export const ZUpdateUserPayload = ZAddUserPayload.extend({
  userId: z.string(),
});
export type UpdateUserPayload = z.infer<typeof ZUpdateUserPayload>;
