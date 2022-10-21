import { z } from "zod";
import { ROLE_TYPE } from "../lib/enums";

export const ZUserItem = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  email: z.string(),
  id: z.string(),
  role: z.enum(ROLE_TYPE),
});
export type UserItem = z.infer<typeof ZUserItem>;
