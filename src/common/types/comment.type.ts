import { z } from "zod";
import { ZPostItem } from "./post.type";

export const ZCommentItem = ZPostItem.omit({ title: true });
export type CommentItem = z.infer<typeof ZCommentItem>;

export const ZCommentItemWithoutUser = ZCommentItem.omit({
  user: true,
});
export type CommentItemWithoutUser = z.infer<typeof ZCommentItemWithoutUser>;

export const ZAddCommentPayload = z.object({
  content: z.string(),
  postId: z.string(),
  parentId: z.string().optional(),
});
export type AddCommentPayload = z.infer<typeof ZAddCommentPayload>;

export const ZUpdateCommentPayload = ZAddCommentPayload.omit({
  postId: true,
}).extend({
  commentId: z.string(),
});
export type UpdateCommentPayload = z.infer<typeof ZUpdateCommentPayload>;
