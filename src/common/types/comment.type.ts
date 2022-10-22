import { z } from "zod";
import { ZPostItem } from "./post.type";

export const ZCommentItem = ZPostItem.omit({ title: true });
export type CommentItem = z.infer<typeof ZCommentItem>;
