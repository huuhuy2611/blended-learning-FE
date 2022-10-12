export const ROLE_TYPE = ["ADMIN", "TEACHER", "STUDENT"] as const;
export type RoleType = typeof ROLE_TYPE[number];
