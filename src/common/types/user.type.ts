import { z } from "zod";
import { GENDER_TYPE, ROLE_TYPE } from "../lib/enums";

export const ZUserItem = z.object({
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  email: z.string(),
  id: z.string(),
  role: z.enum(ROLE_TYPE),
  name: z.string(),
  gender: z.enum(GENDER_TYPE),
});
export type UserItem = z.infer<typeof ZUserItem>;

export const ZAddUserPayload = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
  gender: z.enum(GENDER_TYPE),
  role: z.enum(ROLE_TYPE),
});
export type AddUserPayload = z.infer<typeof ZAddUserPayload>;

export const ZAddUsersToClassroomPayload = z.object({
  userIds: z.array(z.string()),
  classroomId: z.string(),
});
export type AddUsersToClassroomPayload = z.infer<
  typeof ZAddUsersToClassroomPayload
>;

export const ZUpdateUserPayload = ZAddUserPayload.partial().extend({
  userId: z.string(),
});
export type UpdateUserPayload = z.infer<typeof ZUpdateUserPayload>;

export const ZRemoveUsersToClassroomPayload = z.object({
  userId: z.string(),
  classroomId: z.string(),
});
export type RemoveUsersToClassroomPayload = z.infer<
  typeof ZRemoveUsersToClassroomPayload
>;
