export const ROLE_TYPE = ["ADMIN", "TEACHER", "STUDENT"] as const;
export type RoleType = typeof ROLE_TYPE[number];

export const CLASSROOM_STATUS = ["ACTIVE", "INACTIVE", "DONE"] as const;
export type ClassroomStatus = typeof CLASSROOM_STATUS[number];
