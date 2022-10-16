import { z } from "zod";
import { CLASSROOM_STATUS } from "../lib/enums";

export const ZClassroomItem = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  id: z.string(),
  title: z.string(),
  resources: z.string(),
  status: z.enum(CLASSROOM_STATUS),
});
export type ClassroomItem = z.infer<typeof ZClassroomItem>;
