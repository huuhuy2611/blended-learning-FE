export const ROLE_TYPE = ["ADMIN", "TEACHER", "STUDENT"] as const;
export type RoleType = typeof ROLE_TYPE[number];

export const CLASSROOM_STATUS = ["ACTIVE", "INACTIVE", "DONE"] as const;
export type ClassroomStatus = typeof CLASSROOM_STATUS[number];

export const TAG_TYPE = ["FREE", "SYLLABUS"] as const;
export type TagType = typeof TAG_TYPE[number];

export const GENDER_TYPE = ["MALE", "FEMALE"] as const;
export type GenderType = typeof GENDER_TYPE[number];
