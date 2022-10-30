import { z } from "zod";
import { TAG_TYPE } from "../lib/enums";
import { ZUserItem } from "./user.type";

export const ZTagItem = z.object({
  tag: z.string(),
  type: z.enum(TAG_TYPE),
  parentId: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  id: z.string(),
  user: ZUserItem,
});
export type TagItem = z.infer<typeof ZTagItem>;

export const ZAddSyllabusTagsPayload = z.object({
  tags: z.array(z.string()),
  classroomId: z.string(),
});
export type AddSyllabusTagsPayload = z.infer<typeof ZAddSyllabusTagsPayload>;
