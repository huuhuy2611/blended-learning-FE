import { z } from "zod";

export const GetClassroomsByUserParams = z.object({ userId: z.string() });
export type GetClassroomsByUserParams = z.infer<
  typeof GetClassroomsByUserParams
>;
