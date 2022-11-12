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
  user: ZUserItem.optional().nullable(),
});
export type TagItem = z.infer<typeof ZTagItem>;

export const ZAddFreeTagPayload = z.object({
  tags: z.array(z.string()),
  classroomId: z.string(),
});
export type AddFreeTagPayload = z.infer<typeof ZAddFreeTagPayload>;

export const ZChapterItem = z.object({
  tag: z.string(),
  id: z.string(),
  parentId: z.string().nullable().optional(),
});
export type ChapterItem = z.infer<typeof ZChapterItem>;

export const ZChapterPayload = z.object({
  tag: z.string(),
  id: z.string(),
  children: z.array(ZChapterItem).nullable().optional(),
});
export type ChapterPayload = z.infer<typeof ZChapterPayload>;

export const ZAddSyllabusTagsPayload = z.object({
  tags: ZChapterPayload,
  classroomId: z.string(),
});
export type AddSyllabusTagsPayload = z.infer<typeof ZAddSyllabusTagsPayload>;
