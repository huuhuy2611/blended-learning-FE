import { z } from "zod";
import { ZPostItem } from "./post.type";

export const ZCommentItem = ZPostItem.omit({ title: true });
export type CommentItem = z.infer<typeof ZCommentItem>;

export const ZAddCommentPayload = z.object({
  content: z.string(),
  postId: z.string(),
  parentId: z.string().optional(),
});
export type AddCommentPayload = z.infer<typeof ZAddCommentPayload>;
