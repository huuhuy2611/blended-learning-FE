import { z } from "zod";
import { ZUserItem } from "./user.type";

export const ZPostItem = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  id: z.string(),
  title: z.string(),
  content: z.string(),
  isUpVote: z.boolean().optional(),
  isDownVote: z.boolean().optional(),
  numUpVote: z.number().optional(),
  numDownVote: z.number().optional(),
  user: ZUserItem,
});
export type PostItem = z.infer<typeof ZPostItem>;

export const ZPostItemWithoutUser = ZPostItem.omit({
  user: true,
});
export type PostItemWithoutUser = z.infer<typeof ZPostItemWithoutUser>;

export const ZAddPostPayload = z.object({
  title: z.string(),
  content: z.string(),
  classroomId: z.string(),
});
export type AddPostPayload = z.infer<typeof ZAddPostPayload>;

export const ZUpdatePostPayload = ZAddPostPayload.extend({
  postId: z.string(),
});
export type UpdatePostPayload = z.infer<typeof ZUpdatePostPayload>;

export const ZVotePayload = z.object({
  isUpVote: z.boolean().optional(),
  isDownVote: z.boolean().optional(),
});
export type VotePayload = z.infer<typeof ZVotePayload>;

export const ZVotePostPayload = ZVotePayload.extend({
  postId: z.string(),
});
export type VotePostPayload = z.infer<typeof ZVotePostPayload>;
