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
});
export type AddClassroomPayload = z.infer<typeof ZAddClassroomPayload>;

export const ZUpdateClassroomPayload = ZAddClassroomPayload.partial().extend({
  classroomId: z.string(),
});
export type UpdateClassroomPayload = z.infer<typeof ZUpdateClassroomPayload>;
