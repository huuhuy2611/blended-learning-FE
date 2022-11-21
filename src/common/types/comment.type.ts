import { z } from "zod";
import { ZPostItem, ZVotePayload } from "./post.type";

export const ZCommentItem = ZPostItem.omit({ title: true }).extend({
  postId: z.string(),
});
export type CommentItem = z.infer<typeof ZCommentItem>;

export const ZCommentItemWithoutUser = ZCommentItem.omit({
  user: true,
});
export type CommentItemWithoutUser = z.infer<typeof ZCommentItemWithoutUser>;

export const ZAddCommentPayload = z.object({
  content: z.string(),
  postId: z.string(),
  classroomId: z.string(),
  parentId: z.string().optional(),
});
export type AddCommentPayload = z.infer<typeof ZAddCommentPayload>;

export const ZUpdateCommentPayload = ZAddCommentPayload.omit({
  postId: true,
  classroomId: true,
}).extend({
  commentId: z.string(),
});
export type UpdateCommentPayload = z.infer<typeof ZUpdateCommentPayload>;

export const ZVoteCommentPayload = ZVotePayload.extend({
  commentId: z.string(),
});
export type VoteCommentPayload = z.infer<typeof ZVoteCommentPayload>;
