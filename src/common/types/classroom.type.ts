import { z } from "zod";
import { CLASSROOM_STATUS } from "../lib/enums";

export const ZClassroomItem = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  id: z.string(),
  title: z.string(),
  resources: z.string().nullable(),
  status: z.enum(CLASSROOM_STATUS),
});
export type ClassroomItem = z.infer<typeof ZClassroomItem>;

export const ZAddClassroomPayload = z.object({
  title: z.string(),
  resources: z.string(),
  status: z.enum(CLASSROOM_STATUS),
});
export type AddClassroomPayload = z.infer<typeof ZAddClassroomPayload>;

export const ZAddClassroomsByUserPayload = z.object({
  classroomIds: z.array(z.string()),
  userId: z.string(),
});
export type AddClassroomsByUserPayload = z.infer<
  typeof ZAddClassroomsByUserPayload
>;

export const ZUpdateClassroomPayload = ZAddClassroomPayload.partial().extend({
  classroomId: z.string(),
});
export type UpdateClassroomPayload = z.infer<typeof ZUpdateClassroomPayload>;

export const ZRemoveClassroomByUserPayload = z.object({
  classroomId: z.string(),
  userId: z.string(),
});
export type RemoveClassroomByUserPayload = z.infer<
  typeof ZRemoveClassroomByUserPayload
>;
