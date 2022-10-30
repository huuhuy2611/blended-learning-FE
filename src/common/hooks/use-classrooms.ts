import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { z } from "zod";
import {
  ClassroomItem,
  UpdateClassroomPayload,
  ZClassroomItem,
  ZUpdateClassroomPayload,
} from "../types/classroom.type";
import useApiAuth from "./use-api";

export function useClassroomsByUser(args?: {
  userId: string;
  config?: UseQueryOptions<ClassroomItem[], Error, ClassroomItem[], Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchClassrooms = useMemo(
    () =>
      z
        .function()
        .args(z.string())
        .implement(async (userId: string) => {
          const { data } = await apiAuth.get(
            `/classrooms/classrooms-by-user/${userId}`
          );
          return data.map((item: unknown) => ZClassroomItem.parse(item));
        }),
    []
  );

  const getClassroomsByUserQuery = useQuery(
    ["get-classrooms-by-user-query", args?.userId],
    () => fetchClassrooms(args?.userId || ""),
    args?.config
  );

  return getClassroomsByUserQuery;
}

export function useClassroom(args?: {
  classroomId: string;
  config?: UseQueryOptions<ClassroomItem, Error, ClassroomItem, Array<any>>;
}) {
  const apiAuth = useApiAuth();

  const fetchClassroom = useMemo(
    () =>
      z
        .function()
        .args(z.string())
        .implement(async (classroomId: string) => {
          const { data } = await apiAuth.get(`/classrooms/${classroomId}`);
          return ZClassroomItem.parse(data);
        }),
    []
  );

  const getClassroomQuery = useQuery(
    ["get-classroom-query", args?.classroomId],
    () => fetchClassroom(args?.classroomId || ""),
    args?.config
  );

  return getClassroomQuery;
}

export function useUpdateClassroom(args?: {
  config?: UseMutationOptions<
    ClassroomItem,
    Error,
    UpdateClassroomPayload,
    Array<any>
  >;
}) {
  const apiAuth = useApiAuth();

  const updateClassroomMutation = useMutation(
    z
      .function()
      .args(ZUpdateClassroomPayload)
      .implement(async (payload: UpdateClassroomPayload) => {
        const { classroomId, ...rest } = payload;
        const { data } = await apiAuth.put(`/classrooms/${classroomId}`, {
          ...rest,
        });
        return ZClassroomItem.parse(data);
      }),
    args?.config
  );

  return updateClassroomMutation;
}
