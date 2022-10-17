import { z } from "zod";

export const ZPostItem = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  id: z.string(),
  title: z.string(),
  content: z.string(),
  numUpVote: z.number(),
  numDownVote: z.number(),
});
export type PostItem = z.infer<typeof ZPostItem>;
